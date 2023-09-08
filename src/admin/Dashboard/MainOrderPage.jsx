// import OrderPage from "./OrderPage";
import { useState } from "react";
import OrderPage from "./OrderPage";
import ReciveOrder from "./ReciveOrder";
function MainOrderPage() {
  const [recive, setRecive] = useState(2);
  function checkone() {
    setRecive(1)
  }
  function checktwo() {
    setRecive(2)
  }
  return (
    <div>
      <div
        className="flex bg-blue-500 justify-around pl-[20px] pr-[20px] pt-[20px]  items-center"
        dir="rtl"
      >
        <div className="_font-bold text-xl ">مدیرت سفارش ها</div>
        <div className="w-[40%] flex items-center justify-center">
          <div className="flex items-center justify-start">
            <input
              id="default-radio-1"
              type="radio"
              onClick={checkone}
              value=""
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-radio-1"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              سفارش های تحویل داده شده
            </label>
          </div>
          <div className="flex items-center">
            <input
              onClick={checktwo}
              id="default-radio-2"
              type="radio"
              value=""
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-radio-2"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              سفارش های در حال انتظار
            </label>
          </div>
        </div>
      </div>
      <div className="_font-bold">
        {recive==2?(<OrderPage />):<ReciveOrder/>}
      </div>
      
    </div>
  );
}

export default MainOrderPage;
