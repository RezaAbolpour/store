
import { useNavigate } from "react-router-dom";

function PaymentGateway() {
  const navigate = useNavigate();
  function payment() {
    navigate("/paymentok");
  }

  return (
    <div
      className="w-screen h-screen bg-[#F7F7FC] relative _font-bold"
      dir="rtl"
    >
      <div className="w-screen fixed z-40 h-20 bg-[#2F77EB]"></div>
      <div className="absolute w-screen flex h-screen justify-center">
        <div
          id="head"
          className="w-5/6 h-20 z-50 bg-white rounded-md fixed top-[6%] flex justify-between items-center pr-3 pl-3"
        >
          <img
            className="w-20 rounded-md"
            src="https://imgs.search.brave.com/2S1dxunR2fBeJebrwoRRFU1tKlZI4dfL59iAOBTjp2g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wYXlw/aW5nLmlyL2Jsb2cv/d3AtY29udGVudC91/cGxvYWRzLzIwMjMv/MDUvc2VwLXBzcC0x/NDAweDkwMC5qcGc"
            alt="image"
          />
          <h3>درگاه پرداخت اینترنتی سِپ</h3>
          <img
            className="w-14 rounded-md"
            src="https://imgs.search.brave.com/3pV1N1vOl2Qi6ZJBH_Xghl5ULgV7dwUYx239odikihc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/aGV5dmFsYXcuY29t/L3VwbG9hZC9hcnRp/Y2xlcy9iaWcvODIz/NDEyMjE5JUQ4JUIz/JUQ4JUE3JUQ5JTg1/JUQ4JUE3JUQ5JTg2/JUQ5JTg3JTIwJUQ4/JUI0JUQ4JUE3JUQ5/JUJFJUQ4JUIxJURB/JUE5JTIwc2hhcGFy/YWsuaXIuanBn"
            alt="image"
          />
        </div>
        <div className="bg-white w-5/6 rounded-md h-auto pb-5 mt-32 pr-3 pl-3">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col ">
              <label htmlFor="cartNumber">شماره کارت</label>
              <input
                type="number"
                className="p-2 w-2/6 border text-center rounded-md outline-none"
                placeholder="---- ---- ---- ----"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="cartNumber2">شماره شناسایی دوم(cvv2)</label>
              <input
                type="number"
                className="p-2 w-2/6 border text-center rounded-md outline-none"
                placeholder="cvv2"
              />
            </div>
            <div>
              <label htmlFor="">تاریخ انقضاء</label>
              <div className=" flex gap-3">
                <input
                  type="number"
                  placeholder="روز"
                  className="border w-1/6 p-2 rounded-md text-center"
                />
                <input
                  type="number"
                  placeholder="ماه"
                  className="border w-1/6 p-2 rounded-md text-center"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="cartNumber2">کد امنیتی</label>
              <div className="flex w-2/6 rounded-md justify-between">
                <input
                  type="number"
                  className="p-2 w-1/2 text-center border rounded-md outline-none"
                  placeholder="کد امنیتی"
                />
                <div className="w-1/3 p-2 bg-red-600 rounded-md text-white text-center">
                  1234
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="cartNumber2">رمز دوم</label>
              <div className="flex w-2/6 rounded-md justify-between">
                <input
                  type="number"
                  className="p-2 w-1/2 text-center border rounded-md outline-none"
                  placeholder="کد امنیتی"
                />
                <div className="w-1/3 p-2 bg-blue-600 rounded-md text-white text-center">
                  درخواست رمز پویا
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={payment}
                className="p-2 w-2/6 border text-center text-white rounded-md bg-green-500 active:bg-green-600"
              >
                پرداخت
              </button>
            </div>
            <div>
              <button className="p-2 w-2/6 border text-center text-red-500 rounded-md active:bg-slate-200 mb-5">
                انصراف
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentGateway;
