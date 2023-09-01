import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import CardProductHome from "./CardProductHome";
import Liner from "./Liner";
import CardCategori from "./CardCategori";
import ProposalCard from "./ProposalCard";
import ProposalProduct from "./ProposalProduct";
import CardPdoductFotter from "./CardPdoductFotter";
import Footer from "./Footer";
import { fetchAllCategori, fetchSubCategori } from "../../data/dataslice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
let data=[];
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
  const dispach = useDispatch();
  useEffect(() => {
    dispach(fetchAllCategori());
    dispach(fetchSubCategori());
  }, []);
  const Dat = useSelector((state) => state.data.Categori);
  if (Dat) {
    data = Dat;
  }
  console.log(data);
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
        {console.log(data)}
        {data.map((item) => (
          <>
            <CardCategori
              img={`http://localhost:8000/images/categories/icons/${item.icon}`}
              name={`${item.name}`}
              idCategor={`${item._id}`}
            />
          </>
        ))}
      </div>
      <Liner />
      <div className="mt-4 pl-10 h-72">
        <p className="_font-bold text-2xl">پیشنهاد لحظه ای</p>
        <div className="mt-5 flex justify-around">
          <ProposalCard />
          <ProposalCard />
          <ProposalCard />
          <ProposalCard />
        </div>
      </div>
      <Liner />
      <div className="mt-4 pl-10 h-72 flex items-center">
        <ProposalProduct />
        <ProposalProduct />
        <ProposalProduct />
        <ProposalProduct />
        <ProposalProduct />
        <ProposalProduct />
      </div>
      <Liner />
      <div className="mt-4 pl-10 h-96 flex items-center bg-red-500 justify-center gap-4">
        <CardPdoductFotter />
        <CardPdoductFotter />
        <CardPdoductFotter />
        <CardPdoductFotter />
      </div>
      <Liner />
      <div className="flex pl-10 gap-5">
        <div className="w-[254px] h-[224px] flex items-center justify-center ml-5 border-solid border-2 border-slate-200 rounded-sm">
          <img
            src="https://trustseal.enamad.ir/Content/Images/Star/star1.png?v=5.0.0.47"
            alt=""
          />
        </div>
        <div className="w-[254px] h-[224px] flex items-center justify-center ml-5 border-solid border-2 border-slate-200 rounded-sm">
          <img
            src="https://www.sefareshik.com/files/userfiles/97/Home%20Page/Footer/samandehi.png"
            alt=""
          />
        </div>
        <div className="w-[890px] h-[224px] flex items-center text-right _font-medium pr-10">
          فروشگاه اینترنتی همکالا دارای نماد اعتماد الکترونیک از مرکز توسعه
          تجارت الکترونیک وزارت صنعت، معدن و تجارت و نشان ملی ثبت رسانه های
          دیجیتال (نماد ساماندهی) می باشد. شما می توانید با اطمینان خاطر از
          همکالا خرید کنید.
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BodyHome;
