import logo from "../../assets/Images/logoHeadrer.png";
import ShareLocationIcon from "@mui/icons-material/ShareLocation";
import CategoriesSelect from "./selector";
import SearchIcon from "@mui/icons-material/Search";
import AccountMenue from "./AccountList";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
function Header() {
  return (
    <div className="bg-slate-950 h-28 pr-3 pl-3 flex _font-bold max-sm:flex-col max-sm:h-44" dir="rtl">
      <div className="w-1/6 flex items-center h-full max-sm:hidden">
        <img src={logo} alt="" className="h-16 mr-5" />
      </div>
      <div className="flex justify-center flex-col w-1/6 gap-2 max-sm:hidden">
        <div>
          <p className="text-white">آدرس تحویل</p>
        </div>
        <div className="flex gap-2">
          <ShareLocationIcon color="primary" />
          <p className="text-white">Holand</p>
        </div>
      </div>
      <div className="flex items-center w-2/6">
        <div className="flex justify-center bg-white rounded-md p-2" dir="ltr">
          <div>
            <CategoriesSelect />
          </div>
          <div className="border flex items-center">
            <input
              type="text"
              placeholder="جستجو در آمازون"
              dir="rtl"
              className="outline-none pr-2"
            />
          </div>
          <div className="bg-yellow-200 flex items-center p-4">
            <SearchIcon />
          </div>
        </div>
      </div>
      <div className="w-2/6 flex justify-end items-center  max-sm:w-full max-sm:justify-between">
        <div className=" flex p-2 flex-col justify-center max-sm:w-3/6">
          <div className="text-white">سلام وارد حساب بشوید</div>
          <div>
            <AccountMenue />
          </div>
        </div>
        <div className="max-sm:hidden">
          <ShoppingCartIcon color="primary" sx={{ fontSize: 70 }} />
        </div>
        
        <div className="flex justify-center flex-col max-sm:w-3/6 gap-2 sm:hidden  max-sm:items-end">
        <div>
          <p className="text-white">آدرس تحویل</p>
        </div>
        <div className="flex gap-2 max-sm:dire">
          <ShareLocationIcon color="primary" />
          <p className="text-white">Holand</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Header;
