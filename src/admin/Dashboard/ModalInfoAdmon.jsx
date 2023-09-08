import { useEffect } from "react";
import { useState } from "react";
import { GetProductId } from "../../utils/api/getProductId";

function ModalInfoAdmon({ onCloce, dataProduct }) {
  const [product, setProduct] = useState([]);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    let productLocal = [];
    let count = 0;
    dataProduct.orders.forEach(async (item) => {
      console.log(item);
      await GetProductId(item.products[0].product).then((res) => {
        console.log(res.data.data.product);
        let dat = {
          count: item.products[0].count,
          infoProduct: res.data.data.product,
        };
        productLocal.push(dat);
      });
      count += 1;
      if (count == dataProduct.orders.length) {
        setProduct(productLocal);
        setLoad(true);
      }
    });
  }, []);
  return (
    <>
      {load && (
        <div>
          {/* {console.log(dataProduct)} */}
          <div
            className="bg-slate-300 h-[500px] w-[520px] absolute top-[5%] right-[50%] left-[30%] bottom-[50%] rounded-md cursor-pointer"
            onClick={onCloce}
          >
            {/* {console.log(product)} */}
            <div className="pr-[10px] pl-[10px]">
              <div className="flex gap-2 mt-2 items-center">
                <div className="_font-bold text-xl">نام مشتری:</div>
                <div className="_font-bold text-[15px]">
                  {dataProduct.user.firstname}
                </div>
              </div>
              <div className="flex gap-2 mt-2">
                <div className="_font-bold text-xl">آدرس:</div>
                <div className="_font-bold text-[15px]">
                  {dataProduct.user.address}
                </div>
              </div>
              <div className="flex gap-2 mt-2">
                <div className="_font-bold text-xl">تلفن:</div>
                <div className="_font-bold text-[15px]">
                  {dataProduct.user.phoneNumber}
                </div>
              </div>
              <div className="flex gap-2 mt-2">
                <div className="_font-bold text-xl">زمان تحویل:</div>
                <div className="_font-bold text-[15px]">
                  {dataProduct.orders[0].deliveryDate}
                </div>
              </div>
              <div className="mt-3 flex gap-2">
                <div className="_font-bold text-xl">زمان سفارش:</div>
                <div className="_font-bold text-[15px]">
                  {dataProduct.orders[0].createdAt}
                </div>
              </div>
            </div>
            <div
              className="relative overflow-x-auto shadow-md pr-[10px] pl-[10px] mt-5 h-[250px]"
              dir="rtl"
            >
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr className="text-right">
                    <th scope="col" className="px-6 py-3">
                      کالا
                    </th>
                    <th scope="col" className="px-6 py-3">
                      قیمت
                    </th>
                    <th scope="col" className="px-6 py-3">
                      تعداد
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {product.map((item, index) => (
                    <tr
                      className="bg-white border-b hover:bg-gray-50 text-right"
                      key={index}
                    >
                      <td className="px-6 py-4">{item.infoProduct.name}</td>
                      <td className="px-6 py-4">{item.infoProduct.price}</td>
                      <td className="px-6 py-4">{item.count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex  justify-center items-center">
              <div className="w-[100px] h-[30px] bg-green-500 flex justify-center items-center mt-2 text-sm _font-bold text-white rounded-md cursor-pointer hover:bg-green-700">تحویل داده شد</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalInfoAdmon;
