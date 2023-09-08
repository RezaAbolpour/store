import { useEffect, useState } from "react";
import { getAllUsers } from "../../utils/api/user";
import { getOredrById } from "../../utils/api/getOrderByUserId";
import ModalInfoAdmon from "./ModalInfoAdmon";

function calcuteOrder(obj) {
  let total = 0;
  obj.forEach((item) => {
    total += item.totalPrice;
  });
  return total;
}
function ReciveOrder() {
  const [showModal, setShowModal] = useState(false);
  const [datasShowModal, setDataShowModal] = useState(false);
  const [compineOrderUser, setCompineOrderUser] = useState([]);
  const [load, setLoad] = useState(false);
  function opneModal(item) {
    setShowModal(true);
    setDataShowModal(item);
  }
  function closeModal() {
    setShowModal(false);
  }
  useEffect(() => {
    let user = [];
    let orders = [];
    let combine = [];
    let counter = 0;
    getAllUsers().then((res) => {
      res.data.users.forEach((item) => {
        if (item.role != "ADMIN") {
          user.push(item);
        }
      });
      user.forEach(async (item) => {
        await getOredrById(item._id).then((res) => {
          if (res.data.data.orders.length != 0) {
            res.data.data.orders.forEach((item) => {
              console.log(item.deliveryStatus == true);
              if (item.deliveryStatus == true) {
                console.log(orders.push(res.data.data.orders));
              }
            });
          }
        });
        counter += 1;
        if (user.length == counter && orders.length>0) {
          console.log("ok");
          console.log(orders[0]);
          for (let index = 0; index < user.length; index++) {
            let userData = {
              user: user[index],
              orders: orders[index],
            };
            combine.push(userData);
          }
          setCompineOrderUser(combine);
          setLoad(true);
        }
      });
    });
  }, []);
  if (load) {
    {
      console.log(compineOrderUser);
    }
  }
  return (
    <>
      {load && compineOrderUser?(
        <div dir="rtl">
          <div className="relative overflow-x-auto shadow-md " dir="rtl">
            <table className="w-full text-sm text-left text-gray-500 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr className="text-right">
                  <th scope="col" className="px-6 py-3">
                    نام کاربر
                  </th>
                  <th scope="col" className="px-6 py-3">
                    مجموع مبلغ
                  </th>
                  <th scope="col" className="px-6 py-3">
                    زمان ثبت سفارش
                  </th>
                  <th scope="col" className="px-6 py-3">
                    عملیات
                  </th>
                </tr>
              </thead>
              <tbody>
                {compineOrderUser.map((item, index) => (
                  <tr
                    className="bg-white border-b hover:bg-gray-50 text-right"
                    key={index}
                  >
                    <td className="px-6 py-4">{item.user.firstname}</td>
                    <td className="px-6 py-4">{calcuteOrder(item.orders)}</td>
                    <td className="px-6 py-4">{item.orders[0].createdAt}</td>
                    <td className="px-6 py-4" onClick={() => opneModal(item)}>
                      برسی سفارش
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {showModal && (
            <ModalInfoAdmon onCloce={closeModal} dataProduct={datasShowModal} />
          )}
        </div>
      ):<div className="text-red-500 flex justify-center items-center mt-5">سفارشی در حالت تکمیل وجود ندارد</div>}
      
    </>
  );
}

export default ReciveOrder;
