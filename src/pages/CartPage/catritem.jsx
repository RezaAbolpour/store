import CancelIcon from "@mui/icons-material/Cancel";
import { GetProductId } from "../../utils/api/getProductId";
import { useEffect, useState } from "react";
import ModalRemove from "./ModalRemove";
import ModalInfo from "./ModolaInfo";
import { editOrder } from "../../utils/api/editOrder";
import Cookies from "js-cookie";
function Catritem({ data, load }) {
  console.log(data, load);
  const [showModal, setShowModal] = useState(false);
  const [showModalInfo, setShowModalInfo] = useState(false);
  const [show, setshow] = useState(false);
  const [id, setId] = useState(false);
  const [product, setProduct] = useState([]);
  const [countProduct, setcountProduct] = useState(0);
  const [countProductOrderUser, setcountProductOrderUser] = useState(
    data.products[0].count
  );
  useEffect(() => {
    GetProductId(data.products[0].product).then((res) => {
      setProduct(res.data.data.product);
      setcountProduct(product.quantity);
      setshow(true);
    });
  }, []);
  function removeOrder(id) {
    // removeOrderById(id)
    setShowModal(true);
    setId(id);
  }
  function InfoProduct(id) {
    setShowModalInfo(true);
    setId(id);
  }
  function closeModal() {
    setShowModal(false);
  }
  function closeModalInfo() {
    setShowModalInfo(false);
  }
  async function pluse(idOrder, idProduct) {
    try {
      if (countProductOrderUser > countProduct) {
        return
      }
      const body = {
        user: Cookies.get("id"),
        products: [
          {
            product: idProduct,
            count: countProductOrderUser + 1,
          },
        ],
      };
      await editOrder(idOrder, body).then((res)=>{
        setcountProductOrderUser(countProductOrderUser + 1)
      });
    } catch (error) {
      console.log(5);
    }
    load();
  }
  async function miness(idOrder, idProduct) {
    try {
      if (countProductOrderUser == 1) {
        return
      }
      const body = {
        user: Cookies.get("id"),
        products: [
          {
            product: idProduct,
            count: countProductOrderUser - 1,
          },
        ],
      };
      console.log(countProductOrderUser);
      await editOrder(idOrder, body).then((res)=>{
        setcountProductOrderUser(countProductOrderUser - 1);
      });
    } catch (error) {
      console.log(5);
    }
    load();
  }
  return (
    <>
      {show && (
        <div>
          <div className="flex h-[165px] ">
            <div
              className="w-[5%] flex justify-center items-center cursor-pointer"
              onClick={() => removeOrder(data._id)}
            >
              <CancelIcon
                sx={{ color: "#000", width: "35px", height: "35px" }}
              />
            </div>
            <div
              className="w-[20%] flex justify-center items-center cursor-pointer"
              onClick={() => InfoProduct(data.products[0].product)}
            >
              <img
                src={`http://localhost:8000/images/products/images/${product.images[0]}`}
                alt=""
                className="w-[135px] h-[135px]"
              />
            </div>
            <div className="w-[55%]">
              <div className="_font-bold text-lg pt-5">{product.name}</div>
              <div className="w-[117px] h-[56px] border-2 rounded-md flex  items-center justify-around mt-2">
                <div
                  className="text-xl text-slate-400 cursor-pointer"
                  onClick={() => pluse(data._id, product._id)}
                >
                  +
                </div>
                <div className="text-black text-xl _font-bold">
                  {countProductOrderUser}
                </div>
                <div
                  className="text-xl  text-slate-400 cursor-pointer"
                  onClick={() => miness(data._id, product._id)}
                >
                  -
                </div>
              </div>
            </div>
            <div className="w-[20%] pt-[25px] _font-bold">
              <bdi>
                {data.totalPrice}&nbsp;<span>تومان</span>
              </bdi>
            </div>
          </div>
          <hr className="mt-1" />
          {showModal && (
            <ModalRemove onCloce={closeModal} idProduct={id} onload={load} />
          )}
          {showModalInfo && (
            <ModalInfo
              onCloce={closeModalInfo}
              idProduct={id}
              count={data.products[0].count}
            />
          )}
        </div>
      )}
    </>
  );
}

export default Catritem;
