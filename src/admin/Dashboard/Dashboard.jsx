import Header from "../../components/common/Header/Header";
import iconShop from "../../assets/Images/imagePanelAdmin/icons8-shop-50.png";
import iconOrder from "../../assets/Images/imagePanelAdmin/icons8-order-80.png";
import iconCustomer from "../../assets/Images/imagePanelAdmin/icons8-customer-50.png";
import iconReport from "../../assets/Images/imagePanelAdmin/icons8-report-50.png";
import iconSetting from "../../assets/Images/imagePanelAdmin/icons8-setting-50.png";
import iconUsers from "../../assets/Images/imagePanelAdmin/icons8-users-30.png";
import iconInfo from "../../assets/Images/imagePanelAdmin/icons8-information-50.png";
import iconSupport from "../../assets/Images/imagePanelAdmin/icons8-support-50.png";
function Dashboard() {
  return (
    <>
      <Header />
      <div className="h-screen flex _font-heavy">
        <div className="bg-[#C8FFE0] w-5/6">2</div>
        <div className="bg-[#33BBC5] w-1/6 shadow-2xl" dir="rtl">
          <div className="flex items-center mt-5 hover:bg-[#84A7A1] cursor-pointer">
            <img src={iconShop} alt="iconShop" className="h-13"/>
            <p className="text-white">مدیریت محصولات</p>
          </div>
          <div className="flex items-center mt-5 hover:bg-[#84A7A1] cursor-pointer">
            <img src={iconOrder} alt="iconShop" className="h-12"/>
            <p className="text-white">مدیریا سفارشات</p>
          </div>
          <div className="flex items-center mt-5 hover:bg-[#84A7A1] cursor-pointer">
            <img src={iconCustomer} alt="iconShop" className="h-13"/>
            <p className="text-white">مدیرت مشتریان</p>
          </div>
          <div className="flex items-center mt-5 hover:bg-[#84A7A1] cursor-pointer">
            <img src={iconReport} alt="iconShop" className="h-13"/>
            <p className="text-white">گزارش گیری و آمار</p>
          </div>
          <div className="flex items-center mt-5 hover:bg-[#84A7A1] cursor-pointer">
            <img src={iconSetting} alt="iconShop" className="h-13"/>
            <p className="text-white">تنظیمات فروشگاه</p>
          </div>
          <div className="flex items-center mt-5 hover:bg-[#84A7A1] cursor-pointer">
            <img src={iconUsers} alt="iconShop" className="h-14 w-14"/>
            <p className="text-white">مدیرت کاربران</p>
          </div>
          <div className="flex items-center mt-5 hover:bg-[#84A7A1] cursor-pointer">
            <img src={iconInfo} alt="iconShop" className="h-13"/>
            <p className="text-white">اطلاعات مالی</p>
          </div>
          <div className="flex items-center mt-5 hover:bg-[#84A7A1] cursor-pointer">
            <img src={iconSupport} alt="iconShop" className="h-13"/>
            <p className="text-white">پشتیبانی و ارتباط با مشتریان</p>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
