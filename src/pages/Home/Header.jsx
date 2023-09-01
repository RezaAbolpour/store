import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import SearchIcon from "@mui/icons-material/Search";
import KeyIcon from "@mui/icons-material/Key";
function Header() {
  return (
    <div className="h-[174px] bg-red-500">
      <div className="h-[55px] bg-[#EDEDED]"></div>
      <div className="h-[74px] bg-white pr-5 flex gap-10" dir="rtl">
        <div className="w-[83px] h-full flex items-center justify-center">
          <img src="https://hamkala.com/wp-content/uploads/lg3.png" alt="" />
        </div>
        <div className="w-3/6  flex items-center pr-[20px] pl-[20px]">
          <div className=" w-full h-[50px] rounded-md flex items-center border-solid border-2 border-gray-200 shadow-2xl">
            <SearchIcon />
            <input
              type="text"
              placeholder="جستجو برای محصول..."
              className="flex items-center h-full w-[80%] outline-none mr-5"
            />
          </div>
        </div>
        <div className="w-2/6 flex items-center justify-end">
          <div className="h-[50px] w-[150px] border-solid border-2 border-gray-200 shadow-2xl rounded-md flex items-center justify-center gap-3">
            <KeyIcon />
            <p className="_font-bold">ورود / ثبت نام </p>
          </div>
        </div>
      </div>
      <div className="h-[45px] bg-[#EDEDED] flex items-center justify-end gap-5 pr-5">
        <p className="_font-medium">تماس با ما</p>
        <PhoneEnabledIcon />
      </div>
    </div>
  );
}

export default Header;
