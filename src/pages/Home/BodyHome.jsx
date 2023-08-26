import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import CardProductHome from "./CardProductHome";
import Liner from "./Liner";
import CardCategori from "./CardCategori";
function BodyHome() {
  const [imageNum, setImageNum] = useState(1);
  const sliderImages = [
    {
      url: "https://hamkala.com/wp-content/uploads/d2.png",
    },
    {
      url: "https://hamkala.com/wp-content/uploads/d1.png",
    },
  ];
  return (
    <div className="rounded-lg">
      <SimpleImageSlider
        width={1519}
        height={700}
        images={sliderImages}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        onStartSlide={(index, length) => {
          setImageNum(index);
        }}
        autoPlayDelay={3}
      />
      <div className="bg-white-500 h-44 flex items-center justify-around">
        <div className="flex gap-7">
          <div className="flex flex-col gap-3">
            <div className="_font-bold text-lg">تضمین بهترین قیمت</div>
            <div className="_font-medium">قیمت‌های کاملاً منصفانه </div>
          </div>
          <div className="">
            <img
              src="https://hamkala.com/wp-content/uploads/bestprice.png"
              className="w-20 h-20 flex items-center"
            />
          </div>
        </div>
        <div className="flex gap-7">
          <div className="flex flex-col gap-3">
            <div className="_font-bold text-lg">سرویس پرداخت در محل</div>
            <div className="_font-medium">برای تمامی سفارشات</div>
          </div>
          <div className="">
            <img
              src="https://hamkala.com/wp-content/uploads/CODnew.png"
              className="w-20 h-20 flex items-center"
            />
          </div>
        </div>
        <div className="flex gap-7">
          <div className="flex flex-col gap-3">
            <div className="_font-bold text-lg">تعویض رایگان سفارش</div>
            <div className="_font-medium">ضمانت بازگشت 7 روزه کالا</div>
          </div>
          <div className="">
            <img
              src="https://hamkala.com/wp-content/uploads/free-return-1.png"
              className="w-20 h-20 flex items-center"
            />
          </div>
        </div>
        <div className="flex gap-7">
          <div className="flex flex-col gap-3">
            <div className="_font-bold text-lg">ارسال رایگان سفارش</div>
            <div className="_font-medium">حتی برای یک سفارش </div>
          </div>
          <div className="">
            <img
              src="https://hamkala.com/wp-content/uploads/free-delivery.png"
              className="w-20 h-20 flex items-center"
            />
          </div>
        </div>
      </div>
      <div className="bg-yellow-500 h-96 flex items-center  justify-around">
        <CardProductHome />
        <CardProductHome />
        <CardProductHome />
        <CardProductHome />
        <div className=" w-1/6">
          <img
            src="https://hamkala.com/wp-content/uploads/amazing-typo.png"
            className="w-40"
          />
        </div>
      </div>
      <Liner />
      <div className="h-56 flex items-center gap-4 justify-around">
        <CardCategori img={"https://hamkala.com/wp-content/uploads/a8-64x64.png"} name={"ظروف آشپزخانه"}/>
        <CardCategori img={"https://hamkala.com/wp-content/uploads/7a-64x64.png"} name={"سشوار، بابلیس و اتو مو"}/>
        <CardCategori img={"https://hamkala.com/wp-content/uploads/4a-64x64.png"} name={"پفیلا ساز، کیک پز و پیتزا پز"}/>
        <CardCategori img={"https://hamkala.com/wp-content/uploads/micro-64x64.png"} name={"پخت و پز"}/>
        <CardCategori img={"https://hamkala.com/wp-content/uploads/oto-64x64.png"} name={"اتو"}/>
        <CardCategori img={"https://hamkala.com/wp-content/uploads/chaisaz-64x64.png"} name={"ابزار آلات آشپزخانه"}/>
        <CardCategori img={"https://hamkala.com/wp-content/uploads/5a-64x64.png"} name={"آسیاب و خردکن و مخلوط کن"}/>
      </div>
      <Liner />
    </div>
  );
}

export default BodyHome;
