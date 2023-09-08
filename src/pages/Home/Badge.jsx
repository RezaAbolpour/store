import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Badge() {
  const order = useSelector((state) => state.data.order);
  console.log(order);
  return (
    <Link to="/cart">
      <div>
        <button
          type="button"
          className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
        >
          <LocalGroceryStoreIcon />
          <span className="sr-only">Notifications</span>
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
            {order.length}
          </div>
        </button>
      </div>
    </Link>
  );
}

export default Badge;
