import { removeOrderById } from "../../utils/api/removeOrderById";

function ModalRemove({ onCloce ,idProduct,onload}) {
  function submitRemove(id) {
    console.log(id);
    removeOrderById(id)
    onCloce()
    onload()
  }
  return (
    <div className="bg-slate-300 h-[300px] w-[400px] absolute top-[20%] right-[50%] left-[40%] bottom-[50%] pr-[50px] pl-[50px] rounded-md">
      <div className="mt-[80px] h-[50px] flex items-center justify-center _font-bold text-lg">
        آیا مطمن هستید سفارش پاک بشود؟
      </div>
      <div className="mt-[80px] h-[50px] flex justify-around items-center gap-5">
        <div
          className="bg-green-500 w-[50%] h-[35px] rounded-md flex items-center justify-center cursor-pointer"
          onClick={()=>submitRemove(idProduct)}
        >
          بله
        </div>
        <div
          className="bg-red-500 w-[50%] h-[35px] rounded-md flex items-center justify-center cursor-pointer"
          onClick={onCloce}
        >
          خیر
        </div>
      </div>
    </div>
  );
}

export default ModalRemove;
