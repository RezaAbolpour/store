import { Link } from "react-router-dom";
function NoPage() {
  return (
    <>
      <div className="_font-bold flex h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h1 className="text-4xl font-semibold mb-4">
            404 - صفحه مورد نظر پیدا نشد!
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            متأسفانه صفحه‌ای که به دنبال آن می‌گردید یافت نشد.
          </p>
          <Link to="/" className="text-blue-500 hover:underline _font-medium">
            بازگشت به صفحه اصلی
          </Link>
        </div>
      </div>
    </>
  );
}

export default NoPage;
