import { Link } from "react-router-dom";

function HeadreCart() {
  return (
    <div className="shadow-2xl border-2">
      <div className="h-[150px] flex justify-center items-center">
        <img
          src="https://hamkala.com/wp-content/uploads/lg3.png"
          alt=""
          className="w-[91px] h-[55px]"
        />
      </div>
      <div className="flex pl-[20%] pr-[20%] justify-around " dir="rtl">
        <div className="_font-bold text-lg text-[#F1A207] flex w-2/6">
          <div className="flex flex-col justify-center items-center">
            <p>سبد خرید</p>
            <span className="bg-[#F1A207] text-white w-[25px] h-[25px] flex justify-center items-center rounded-full">
              1
            </span>
          </div>
        </div>
        <div className="_font-bold text-lg text-[#F1A207] flex flex-col justify-center items-center w-2/6">
          <div className="_font-bold text-lg text-black flex">
            <div className="flex flex-col justify-center items-center w-2/6">
              <p>صورتحساب</p>

              <Link to="/checkout">
                <span className="bg-black text-white w-[25px] h-[25px] flex justify-center items-center rounded-full">
                  2
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="_font-bold text-lg text-black flex flex-col justify-center items-center w-2/6">
          <p>فاکتور</p>
          <span className="bg-black text-white w-[25px] h-[25px] flex justify-center items-center rounded-full">
            3
          </span>
        </div>
      </div>
    </div>
  );
}

export default HeadreCart;
