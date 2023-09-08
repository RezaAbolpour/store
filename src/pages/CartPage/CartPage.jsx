import { useDispatch, useSelector } from "react-redux";
import Footer from "../Home/Footer";
import HeadreCart from "./HeadreCart";
import Catritem from "./catritem";
import { useEffect, useState } from "react";
import { fetchAllOrder } from "../../data/dataslice";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
function CartPage() {
  const [reload, setReload] = useState(0);
  let totalPriceAllOrder = 0;
  const dispach = useDispatch();
  useEffect(() => {
    dispach(fetchAllOrder(Cookies.get("id"))).then((res) => {
      console.log(res);
    });
  }, [dispach, reload]);
  const order = useSelector((state) => state.data.order);
  order.forEach((element) => {
    totalPriceAllOrder += element.totalPrice;
  });
  function setLoad() {
    setReload(reload + 1);
  }
  return (
    <>
      <HeadreCart />
      <div className="border-2 rounded-md mt-5 p-[50px] flex gap-5" dir="rtl">
        <div className="w-[80%] rounded-md p-[10px] border-2">
          <div>
            {order.map((item) => (
              <>
                <Catritem data={item} load={setLoad} />
              </>
            ))}
          </div>
        </div>
        <div className="h-[230px] w-[20%] rounded-md border-2 p-2">
          <div className="flex h-[69px] items-center">
            <div className="w-[60%]">قیمت کالاها({order.length} کالا)</div>
            <div className="w-[40%] _font-bold">
              <bdi>
                {totalPriceAllOrder}&nbsp;
                <span>تومان</span>
              </bdi>
            </div>
          </div>
          <hr />
          <div className="flex h-[69px] items-center">
            <div className="w-[60%]">مبلغ قابل پرداخت</div>
            <div className="w-[40%] _font-bold">
              <bdi>
                {totalPriceAllOrder}&nbsp;
                <span>تومان</span>
              </bdi>
            </div>
          </div>
          <Link to="/checkout">
            <div className="h-[50px] bg-[#F1A207] _font-bold flex items-center justify-center text-white text-2xl rounded-md cursor-pointer">
              ادامه جهت تسویه حساب
            </div>
          </Link>
          <hr />
        </div>
      </div>
      <Footer />
    </>
  );
}
export default CartPage;
