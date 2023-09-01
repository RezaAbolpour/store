import Header from "../../components/common/Header/Header";
import iconShop from "../../assets/Images/imagePanelAdmin/icons8-shop-50.png";
import iconOrder from "../../assets/Images/imagePanelAdmin/icons8-order-80.png";
import iconCustomer from "../../assets/Images/imagePanelAdmin/icons8-customer-50.png";
import iconReport from "../../assets/Images/imagePanelAdmin/icons8-report-50.png";
import iconSetting from "../../assets/Images/imagePanelAdmin/icons8-setting-50.png";
import iconUsers from "../../assets/Images/imagePanelAdmin/icons8-users-30.png";
import iconInfo from "../../assets/Images/imagePanelAdmin/icons8-information-50.png";
import iconSupport from "../../assets/Images/imagePanelAdmin/icons8-support-50.png";
import PageProduct from "./ProductManger";
import { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditNoteIcon from "@mui/icons-material/EditNote";
import SettingsIcon from "@mui/icons-material/Settings";
import StorefrontIcon from "@mui/icons-material/Storefront";
import DiscountIcon from "@mui/icons-material/Discount";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import SendTimeExtensionIcon from "@mui/icons-material/SendTimeExtension";
import FolderDeleteIcon from "@mui/icons-material/FolderDelete";
import AddchartIcon from "@mui/icons-material/Addchart";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import CableIcon from "@mui/icons-material/Cable";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import DiamondIcon from "@mui/icons-material/Diamond";
import AssessmentIcon from "@mui/icons-material/Assessment";
import Invent from "./Inventory";
import OrderPag from "./OrderPage";
import AddProduct from "./AddProduct";
import EditDeletProduct from "./EditDeletProduct";
function Dashboard() {
  let action;
  const [showMenu1, setShowMenu1] = useState(false);
  const [showMenu2, setShowMenu2] = useState(false);
  const [showMenu3, setShowMenu3] = useState(false);
  const [showMenu4, setShowMenu4] = useState(false);
  const [showMenu5, setShowMenu5] = useState(false);
  const [showMenu6, setShowMenu6] = useState(false);
  const [showMenu7, setShowMenu7] = useState(false);
  const [item, setitem] = useState(0);
  const ProductManger = () => {
    setitem(1);
  };
  const getInvetory = () => {
    setitem(2);
  };
  const getOrders = () => {
    setitem(3);
  };
  const addProduct = () => {
    setitem(4);
  };
  const editDeletProduct=()=>{
    setitem(5);
  }
  const toggleMenu1 = () => {
    setShowMenu1(!showMenu1);
  };
  const toggleMenu2 = () => {
    setShowMenu2(!showMenu2);
  };
  const toggleMenu3 = () => {
    setShowMenu3(!showMenu3);
  };
  const toggleMenu4 = () => {
    setShowMenu4(!showMenu4);
  };
  const toggleMenu5 = () => {
    setShowMenu5(!showMenu5);
  };
  const toggleMenu6 = () => {
    setShowMenu6(!showMenu6);
  };
  const toggleMenu7 = () => {
    setShowMenu7(!showMenu7);
  };
  if (item == 1) {
    action = <PageProduct />;
  } else if (item == 2) {
    action = <Invent />;
  } else if (item == 3) {
    action = <OrderPag />;
  } else if (item == 4) {
    action = <AddProduct />;
  }else if (item == 5) {
    action = <EditDeletProduct />;
  }
  return (
    <>
      <Header />
      <div className="h-screen flex _font-heavy">
        <div className="bg-[#E3FDFD] w-5/6">{action}</div>
        <div
          className="bg-[#33BBC5] w-1/6 shadow-2xl overflow-y-scroll scroll-container"
          dir="rtl"
        >
          <div
            className="mt-5 hover:bg-[#A6E3E9] cursor-pointer"
            onClick={toggleMenu1}
          >
            <div className="flex items-center gap-2 pr-2">
              <img src={iconShop} alt="iconShop" className="h-8" />
              <p className="text-white">مدیریت محصولات</p>
            </div>
            {showMenu1 && (
              <div>
                <div
                  className="flex items-center _font-medium mt-1 mr-3 hover:bg-[#fff] ml-3 rounded-sm mb-3 p-2"
                  onClick={ProductManger}
                >
                  <AddCircleIcon color="success" />
                  <div className="text-sm">نمایش کل محصولات</div>
                </div>
                <div className="flex items-center _font-medium mt-1 mr-3 hover:bg-[#fff] ml-3 rounded-sm mb-3 p-2" onClick={editDeletProduct}>
                  <EditNoteIcon color="success" />
                  <div className="text-sm">ویرایش و حذف محصولات</div>
                </div>
                <div
                  className="flex items-center _font-medium mt-1 mr-3 hover:bg-[#fff] ml-3 rounded-sm mb-3 p-2"
                  onClick={addProduct}
                >
                  <SettingsIcon color="success" />
                  <div className="text-sm">افزودن مجصول</div>
                </div>
                <div
                  className="flex items-center _font-medium mt-1 mr-3 hover:bg-[#fff] ml-3 rounded-sm mb-3 p-2"
                  onClick={getInvetory}
                >
                  <StorefrontIcon color="success" />
                  <div className="text-sm">موجودی</div>
                </div>
                <div className="flex items-center _font-medium mt-1 mr-3 hover:bg-[#fff] ml-3 rounded-sm mb-3 p-2">
                  <DiscountIcon color="success" />
                  <div className="text-sm">تخفیف ها</div>
                </div>
              </div>
            )}
          </div>
          <div
            className="mt-5 hover:bg-[#A6E3E9] cursor-pointer"
            onClick={toggleMenu2}
          >
            <div className="flex items-center gap-2 pr-2">
              <img src={iconOrder} alt="iconShop" className="h-8" />
              <p className="text-white">مدیریا سفارشات</p>
            </div>
            {showMenu2 && (
              <div>
                <div
                  className="flex items-center _font-medium mt-1 mr-3 hover:bg-[#fff] ml-3 rounded-sm mb-3 p-2"
                  onClick={getOrders}
                >
                  <RemoveRedEyeIcon color="success" />
                  <div className="text-sm">مشاهده و پیگیری سفارشات</div>
                </div>
                <div className="flex items-center _font-medium mt-1 mr-3 hover:bg-[#fff] ml-3 rounded-sm mb-3 p-2">
                  <ConfirmationNumberIcon color="success" />
                  <div className="text-sm">تایید ارسال و لغو سفارشات</div>
                </div>
                <div className="flex items-center _font-medium mt-1 mr-3 hover:bg-[#fff] ml-3 rounded-sm mb-3 p-2">
                  <AirplanemodeActiveIcon color="success" />
                  <div className="text-sm">تنظیم وضعیت های سفارش</div>
                </div>
              </div>
            )}
          </div>
          <div
            className="mt-5 hover:bg-[#A6E3E9] cursor-pointer"
            onClick={toggleMenu3}
          >
            <div className="flex items-center gap-2 pr-2">
              <img src={iconCustomer} alt="iconShop" className="h-8" />
              <p className="text-white">مدیرت مشتریان</p>
            </div>
            {showMenu3 && (
              <div>
                <div className="flex items-center _font-medium mt-1 mr-3 hover:bg-[#fff] ml-3 rounded-sm mb-3 p-2">
                  <RemoveRedEyeIcon color="success" />
                  <div className="text-sm">مشاهده و ویرایش اطلاعات مشتری</div>
                </div>
                <div className="flex items-center _font-medium mt-1 mr-3 hover:bg-[#fff] ml-3 rounded-sm mb-3 p-2">
                  <FolderDeleteIcon color="success" />
                  <div className="text-sm">تاریخچه سفارشات مشتری</div>
                </div>
                <div className="flex items-center _font-medium mt-1 mr-3 hover:bg-[#fff] ml-3 rounded-sm mb-3 p-2">
                  <SendTimeExtensionIcon color="success" />
                  <div className="text-sm">ارسال اطلاعیه ها به مشتریان</div>
                </div>
              </div>
            )}
          </div>
          <div
            className="mt-5 hover:bg-[#A6E3E9] cursor-pointer"
            onClick={toggleMenu4}
          >
            <div className="flex items-center gap-2 pr-2">
              <img src={iconReport} alt="iconShop" className="h-8" />
              <p className="text-white">گزارش گیری و آمار</p>
            </div>
            {showMenu4 && (
              <div>
                <div className="flex items-center _font-medium mt-1 mr-3 hover:bg-[#fff] ml-3 rounded-sm mb-3 p-2">
                  <AddchartIcon color="success" />
                  <div className="text-sm">نمایش آمار فروش</div>
                </div>
                <div className="flex items-center _font-medium mt-1 mr-3 hover:bg-[#fff] ml-3 rounded-sm mb-3 p-2">
                  <PointOfSaleIcon color="success" />
                  <div className="text-sm">درامد و ترکنش ها</div>
                </div>
                <div className="flex items-center _font-medium mt-1 mr-3 hover:bg-[#fff] ml-3 rounded-sm mb-3 p-2">
                  <SendTimeExtensionIcon color="success" />
                  <div className="text-sm">گزارش های موجودی</div>
                </div>
              </div>
            )}
          </div>
          <div
            className="mt-5 hover:bg-[#A6E3E9] cursor-pointer"
            onClick={toggleMenu5}
          >
            <div className="flex items-center gap-2 pr-2">
              <img src={iconSetting} alt="iconShop" className="h-8" />
              <p className="text-white">تنظیمات فروشگاه</p>
            </div>
            {showMenu5 && (
              <div>
                <div className="flex items-center _font-medium mt-1 mr-3 hover:bg-[#fff] ml-3 rounded-sm mb-3 p-2">
                  <PermPhoneMsgIcon color="success" />
                  <div className="text-sm">تغییر تنظیمات اصلی فروشگاه</div>
                </div>
                <div className="flex items-center _font-medium mt-1 mr-3 hover:bg-[#fff] ml-3 rounded-sm mb-3 p-2">
                  <CableIcon color="success" />
                  <div className="text-sm">تنظیمات ارتباطی و اطلاعات تماس</div>
                </div>
              </div>
            )}
          </div>
          <div
            className="mt-5 hover:bg-[#A6E3E9] cursor-pointer"
            onClick={toggleMenu6}
          >
            <div className="flex items-center gap-2 pr-2">
              <img src={iconUsers} alt="iconShop" className="h-8" />
              <p className="text-white">مدیرت کاربران</p>
            </div>
            {showMenu6 && (
              <div>
                <div className="flex items-center _font-medium mt-1 mr-3 hover:bg-[#fff] ml-3 rounded-sm mb-3 p-2">
                  <AccessibilityIcon color="success" />
                  <div className="text-sm">تعین سطح دسترسی کاربران</div>
                </div>
                <div className="flex items-center _font-medium mt-1 mr-3 hover:bg-[#fff] ml-3 rounded-sm mb-3 p-2">
                  <ManageAccountsIcon color="success" />
                  <div className="text-sm">مدیرت حساب های کاربری</div>
                </div>
              </div>
            )}
          </div>
          <div
            className="mt-5 hover:bg-[#A6E3E9] cursor-pointer"
            onClick={toggleMenu7}
          >
            <div className="flex items-center gap-2 pr-2">
              <img src={iconInfo} alt="iconShop" className="h-8" />
              <p className="text-white">اطلاعات مالی</p>
            </div>
            {showMenu7 && (
              <div>
                <div className="flex items-center _font-medium mt-1 mr-3 hover:bg-[#fff] ml-3 rounded-sm mb-3 p-2">
                  <AssessmentIcon color="success" />
                  <div className="text-sm">گزارش های مالی</div>
                </div>
                <div className="flex items-center _font-medium mt-1 mr-3 hover:bg-[#fff] ml-3 rounded-sm mb-3 p-2">
                  <DiamondIcon color="success" />
                  <div className="text-sm">دارمد فروشگاه</div>
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center mt-5 hover:bg-[#A6E3E9] cursor-pointer gap-2 pr-2">
            <img src={iconSupport} alt="iconShop" className="h-8" />
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
