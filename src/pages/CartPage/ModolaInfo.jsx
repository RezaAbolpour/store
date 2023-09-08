import { useEffect, useState } from "react";
import { GetProductId } from "../../utils/api/getProductId";

function ModalInfo({ onCloce, idProduct ,count}) {
  const [product, setProduct] = useState([]);
  const [show, setshow] = useState(false);
  useEffect(() => {
    GetProductId(idProduct).then((res) => {
      console.log(res.data.data.product);
      setProduct(res.data.data.product);
      setshow(true);
      //   console.log(product);
    });
  }, []);
  return (
    <>
      {show && (
        <div
          className="bg-slate-300 h-[430px] w-[350px] absolute top-[20%] right-[50%] left-[60%] bottom-[50%] rounded-md cursor-pointer"
          onClick={onCloce}
        >
          {console.log(product)}
          <div className="pr-[10px] pl-[10px] ">
            <div className="flex items-center justify-center mt-5">
              <img
                src={`http://localhost:8000/images/products/images/${product.images[0]}`}
                alt=""
                className="w-[130px] h-[130px] rounded-sm"
              />
            </div>
            <div className="flex gap-2 mt-2 items-center">
              <div className="_font-bold">اسم محصول:</div>
              <div className="_font-medium text-[15px]">{product.name}</div>
            </div>
            <div className="flex gap-2 mt-2">
              <div className="_font-bold">قیمت هر یک عدد محصول:</div>
              <div className="_font-medium text-[15px]">{product.price}</div>
            </div>
            <div className="flex gap-2 mt-2">
              <div className="_font-bold">تعداد سفارش:</div>
              <div className="_font-medium text-[15px]">{count}</div>
            </div>
            <div className="mt-3">
              <div className="_font-bold">توضیحات:</div>
              <div className="_font-medium text-[12px]">
                {product.description}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalInfo;
