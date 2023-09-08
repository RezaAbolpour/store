import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
function ModalMessageHome({ onCloce }) {
  return (
    <div
      id="popup-modal"
      tabIndex="-1"
      className="fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full border-2"
    >
      <div className="relative w-full max-w-md max-h-full top-[250px] left-[500px]">
        <div className="relative bg-white rounded-lg shadow">
          <button
            onClick={onCloce}
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="popup-modal"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-6 text-center">
            <CheckCircleOutlineIcon
              sx={{ color: "#6CD206", width: "100px", height: "100px" }}
            />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400 _font-bold">
              محصول مورد نظر به سبد خرید اضافه شد
            </h3>
            <button
              data-modal-hide="popup-modal"
              type="button"
              className="text-gray-500 _font-bold bg-[#F1A207] focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 focus:z-10"
            >
              سبد خرید
            </button>
            <button
              onClick={onCloce}
              data-modal-hide="popup-modal"
              type="button"
              className="text-white bg-[#5C677D] _font-bold  focus:ring-4 focus:outline-none focus:ring-red-300  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
            >
              ادامه خرید
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalMessageHome;
