import Footer from "../Home/Footer";
import Header from "../Home/Header";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import TelegramIcon from "@mui/icons-material/Telegram";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import TimelineIcon from "@mui/icons-material/Timeline";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ShieldIcon from "@mui/icons-material/Shield";
import InventoryIcon from "@mui/icons-material/Inventory";
import DescriptionIcon from "@mui/icons-material/Description";
import { fetchAllOrder, fetchProductId, setorder } from "../../data/dataslice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ModalImage from "./ModalImage";
import ModalMessageHome from "../Home/ModalMessageHome";
import { creatNewOrder } from "../../utils/api/addNewOrder";
import Cookies from "js-cookie";
import CustomizedSnackbars from "../../admin/Dashboard/ToastMessage";
function Product() {
  const [showmessage, setshowmessage] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const dispach = useDispatch();
  const [isModalOpne, setIsModalOpen] = useState(false);
  const [imageModal, setImageModal] = useState("");
  const [count, setcount] = useState(1);
  const idSubCatergoti = useLocation().pathname.split("/")[2];
  const [loading, setloading] = useState(false);
  const order = useSelector((state) => state.data.order);

  useEffect(() => {
    dispach(fetchProductId(idSubCatergoti)).then(() => {
      setloading(true);
    });
  }, [dispach]);
  async function addbox(idProduct) {
    try {
      if (!order.find((item) => item.products[0].product == idProduct)) {
        const body = {
          user: Cookies.get("id"),
          products: [
            {
              product: idProduct,
              count: count,
            },
          ],
          deliveryStatus: false,
        };
        await creatNewOrder(body);
        dispach(fetchAllOrder(Cookies.get("id"))).then((res) => {
          console.log(res);
        });
        setShowModal(true);
        return
      }
    } catch (error) {
      console.log(5);
    }
    setshowmessage(1);
    // dispach(setorder({ id: idProduct, count: count }));
  }
  function closeModalBox() {
    setShowModal(false);
  }
  let DatAllProduct = useSelector((state) => state.data.product);
  console.log(DatAllProduct);
  function openModal(event) {
    let addredd = event.target.getAttribute("data-id");
    setIsModalOpen(true);
    setImageModal(addredd);
  }
  function closeModal() {
    setIsModalOpen(false);
  }
  function pluse() {
    if (count < parseInt(DatAllProduct.quantity)) {
      setcount(count + 1);
    }
  }
  function mines() {
    if (count != 1) {
      setcount(count - 1);
    }
  }
  if (loading) {
    return (
      <div>
        <Header />
        <div className="h-[78px] pr-5 pl-5 flex items-center" dir="rtl">
          <span className="_font-medium">
            {DatAllProduct.category.name}\
            <span className="_font-bold">{DatAllProduct.name}</span>
          </span>
        </div>
        <div className="h-[350px] flex">
          <div className="w-[66%] flex gap-8" dir="rtl">
            <div className="w-[60%] h-[320px]">
              <h1 className="_font-bold">{DatAllProduct.name}</h1>
              <div className="mt-5 flex flex-col">
                <span className="_font-bold">
                  دسته بندی:
                  <span className="_font-medium text-[#F5AB07]">
                    {DatAllProduct.category.name}
                  </span>
                </span>
                <span className="_font-bold">
                  برند:
                  <span className="_font-medium text-[#F5AB07]">
                    {DatAllProduct.brand}
                  </span>
                </span>
              </div>
              <hr />
              <div className="h-[78px]  rounded-md mt-5 flex border-solid border-2 border-gray-200 hadow-2xl">
                <div className="flex items-center w-[20%] justify-center">
                  <p className="_font-bold">ارسال رایگان</p>
                </div>
                <div className="flex items-center justify-end  w-[80%]">
                  <img
                    src="https://hamkala.com/wp-content/themes/bakala/vendor/images/FreeShipping.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="bg-[#F7F7F7] h-[189px] w-[340px] rounded-md pr-2 pl-2">
              <div className="flex items-center gap-5 mt-1 pr-2">
                <ShieldIcon />
                <span>گارانتی ۱۸ ماهه ماکان سرویس </span>
              </div>
              <hr className="mt-2" />
              <div className="mt-3">
                <bdi className="text-[#F5AB07] text-xl">
                  {DatAllProduct.price}&nbsp;
                  <span className="_font-bold text-[#F5AB07] text-xl">
                    تومان
                  </span>
                </bdi>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <InventoryIcon />
                <span>
                  <span>{DatAllProduct.quantity}&nbsp;</span>عدد در انبار
                </span>
              </div>
              <div className="mt-2 flex h-[50px] items-center gap-5">
                <div className="w-[30%] rounded-md h-full flex items-center justify-between pl-2 pr-2 border-solid border-2 border-gray-200">
                  <div onClick={pluse} className="cursor-pointer">
                    +
                  </div>
                  <div>{count}</div>
                  <div onClick={mines} className="cursor-pointer">
                    -
                  </div>
                </div>
                <div
                  className="w-[70%] rounded-md h-full flex justify-center items-center text-white _font-bold bg-yellow-500"
                  onClick={() => addbox(DatAllProduct._id)}
                >
                  افزودن به سبد خرید
                </div>
              </div>
            </div>
          </div>
          <div className="w-[34%]  pt-5" dir="rtl">
            <div className="flex">
              <div className="flex flex-col gap-8">
                <FavoriteBorderIcon sx={{ color: "#9C9C9C", width: "50px" }} />
                <TelegramIcon sx={{ color: "#9C9C9C", width: "50px" }} />
                <NotificationsActiveIcon
                  sx={{ color: "#9C9C9C", width: "50px" }}
                />
                <CompareArrowsIcon sx={{ color: "#9C9C9C", width: "50px" }} />
                <TimelineIcon sx={{ color: "#9C9C9C", width: "50px" }} />
                <PlayArrowIcon sx={{ color: "#9C9C9C", width: "50px" }} />
              </div>
              <div className="w-[410px]">
                <img
                  src={`http://localhost:8000/images/products/images/${DatAllProduct.images[1]}`}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        {console.log(DatAllProduct.images)}
        <div
          className="bg-[#F7F7F7] rounded-md h-[250px] mt-5 mb-5 flex items-center mr-5 ml-5 gap-2"
          dir="rtl"
        >
          {DatAllProduct.images.map((image) => (
            <>
              <img
                className="h-[150px] max-w-lg transition-all duration-300 rounded-lg blur-sm hover:blur-none"
                src={`http://localhost:8000/images/products/images/${image}`}
                alt="image description"
                onClick={openModal}
                data-id={`http://localhost:8000/images/products/images/${image}`}
              />
            </>
          ))}
          {isModalOpne && (
            <ModalImage onClose={closeModal} imageUrl={imageModal} />
          )}
        </div>
        <div className="flex gap-2 flex-col pl-10 pr-10 " dir="rtl">
          <div className="flex items-center gap-2">
            <DescriptionIcon />
            <p className="_font-medium">مشخصات</p>
          </div>
          <div className="w-full">
            <hr className="text-blue-500" />
          </div>
          <div
            className="border-solid border-2 border-gray-200 rounded-md p-5 _font-medium"
            dir="rtl"
          >
            {DatAllProduct.description}
          </div>
        </div>
        <Footer />
        {showModal && <ModalMessageHome onCloce={closeModalBox} />}
        {showmessage ? (
          <CustomizedSnackbars
            open={true}
            type={"error"}
            message={"این محصول قبلا افزوده شده است"}
            fun={setshowmessage}
          />
        ) : (
          console.log("opps")
        )}
      </div>
    );
  }
}

export default Product;
