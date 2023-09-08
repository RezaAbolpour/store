import { useEffect, useState } from "react";
import Footer from "../Home/Footer";
import HeaderCheckOut from "./HeaderCheckOut";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllOrder } from "../../data/dataslice";
import Cookies from "js-cookie";
import { editUser } from "../../utils/api/editUser";
import { editOrder } from "../../utils/api/editOrder";
import { getOredrById } from "../../utils/api/getOrderByUserId";
import CustomizedSnackbars from "../../admin/Dashboard/ToastMessage";
import { useNavigate } from "react-router-dom";

function CheckOut() {
  const navigate = useNavigate()
  const[showmessage,setshowmessage]=useState(0)
  const [nameError, setNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [datReciveError, setDatReciveError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [addressError, setAddressError] = useState(false);

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [datRecive, setDatRecive] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  function nameinput(evevnt) {
    setName(evevnt.target.value);
  }
  function last(evevnt) {
    setLastName(evevnt.target.value);
  }
  function dat(evevnt) {
    setDatRecive(evevnt.target.value);
  }
  function phone(evevnt) {
    setPhoneNumber(evevnt.target.value);
  }
  function addressinput(evevnt) {
    setAddress(evevnt.target.value);
  }
  async function submit() {
    if (name == "") {
      setNameError(true);
    } else {
      setNameError(false);
    }
    if (lastName == "") {
      setLastNameError(true);
    } else {
      setLastNameError(false);
    }
    if (datRecive == "") {
      setDatReciveError(true);
    } else {
      setDatReciveError(false);
    }
    if (phoneNumber == "") {
      setPhoneNumberError(true);
    } else {
      setPhoneNumberError(false);
    }
    if (address == "") {
      setAddressError(true);
    } else {
      setAddressError(false);
    }
    if (name && lastName && datRecive && phoneNumber && address) {
      const body = {
        firstname: name,
        lastname: lastName,
        username: Cookies.get("username"),
        phoneNumber: phoneNumber,
        address: address,
        password: Cookies.get("paswd"),
      };
      const bodyOrder = {
        deliveryDate: datRecive,
      };
      editUser(Cookies.get("id"), body);
      getOredrById(Cookies.get("id")).then((res) => {
        res.data.data.orders.forEach((item) => {
          editOrder(item._id, bodyOrder);
        });
      });
      setshowmessage(1)
      navigate("/payment")
    }
  }
  let totalPriceAllOrder = 0;
  const dispach = useDispatch();
  useEffect(() => {
    dispach(fetchAllOrder(Cookies.get("id"))).then((res) => {
      console.log(res);
    });
  }, [dispach]);
  const order = useSelector((state) => state.data.order);
  order.forEach((element) => {
    totalPriceAllOrder += element.totalPrice;
  });
  return (
    <>
      <HeaderCheckOut />
      <div
        className="border-2 rounded-md mt-5 p-[50px] flex gap-5 _font-bold"
        dir="rtl"
      >
        <div className="w-[80%] rounded-md p-[10px] border-2">
          <div>
            <div className="flex gap-3">
              <div className="mb-6 w-[50%]">
                <label
                  htmlFor="success"
                  className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
                >
                  نام
                </label>
                <input
                  value={name}
                  onChange={nameinput}
                  type="text"
                  id="success"
                  className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
                />
                {nameError && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    <span className="font-medium">خطا</span>نام خود را وارد کنید
                  </p>
                )}
              </div>
              <div className="mb-6 w-[50%]">
                <label
                  htmlFor="success"
                  className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
                >
                  نام خانوادگی
                </label>
                <input
                  value={lastName}
                  onChange={last}
                  type="text"
                  id="success"
                  className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
                />
                {lastNameError && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    <span className="font-medium">خطا</span>نام خانوادگی خود را
                    وارد کنید
                  </p>
                )}
              </div>
            </div>
            <div className="flex gap-3">
              <div className="mb-6 w-[50%]">
                <label
                  htmlFor="success"
                  className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
                >
                  تاریخ تحویل
                </label>
                <input
                  value={datRecive}
                  onChange={dat}
                  type="date"
                  id="success"
                  className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
                />
                {datReciveError && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    <span className="font-medium">خطا</span>تاریخ تحویل خود را
                    وارد کنید
                  </p>
                )}
              </div>
              <div className="mb-6 w-[50%]">
                <label
                  htmlFor="success"
                  className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
                >
                  تلفن همراه
                </label>
                <input
                  value={phoneNumber}
                  onChange={phone}
                  type="number"
                  id="success"
                  className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
                />
                {phoneNumberError && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    <span className="font-medium">خطا</span>تلفن خود را وارد
                    کنید
                  </p>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="success"
                className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
              >
                آدرس
              </label>
              <textarea
                value={address}
                onChange={addressinput}
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="آدرس خود را وارد کنید..."
              ></textarea>
              {addressError && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                  <span className="font-medium">خطا</span>آدرس خود را وارد کنید
                </p>
              )}
            </div>

            <div className="flex justify-center items-center">
              <button
                onClick={submit}
                type="button"
                className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-2 w-[20%]"
              >
                پرداخت
              </button>
            </div>
          </div>
        </div>
        <div className="h-[230px] w-[20%] rounded-md border-2 p-2">
          <div className="flex h-[69px] items-center">
            <div className="w-[60%]">قیمت کالاها({order.length} کالا)</div>
            <div className="w-[40%] _font-bold">
              <bdi>
                {totalPriceAllOrder}&nbsp;
                <span>تومان</span>
              </bdi>
            </div>
          </div>
          <hr />
          <div className="flex h-[69px] items-center">
            <div className="w-[60%]">مبلغ قابل پرداخت</div>
            <div className="w-[40%] _font-bold">
              <bdi>
                {totalPriceAllOrder}&nbsp;
                <span>تومان</span>
              </bdi>
            </div>
          </div>

          {/* <div className="h-[50px] bg-[#F1A207] _font-bold flex items-center justify-center text-white text-2xl rounded-md cursor-pointer">
            ادامه جهت تسویه حساب
          </div> */}

          <hr />
        </div>
      </div>
      <Footer />
      {showmessage?(<CustomizedSnackbars open={true} type={"success"} message={"با موفقیت ثبت شد"} fun={setshowmessage} />):console.log("opps")}
    </>
  );
}

export default CheckOut;
