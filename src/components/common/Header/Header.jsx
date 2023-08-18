import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div
        className="bg-[#71C9CE] h-16 flex items-center p-5 _font-bold text-xl justify-between shadow-inner shadow-black"
        dir="rtl"
      >
        <p className="text-white">پنل ادمین</p>
        <div>
          <Link to="/">
            <HomeIcon sx={{ fontSize: 40 }} />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
