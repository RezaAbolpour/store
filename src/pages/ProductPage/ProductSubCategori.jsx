import StarPurple500Icon from "@mui/icons-material/StarPurple500";
import { useState } from "react";
import { Link } from "react-router-dom";
import ModalMessage from "./ModalMessage";
import { useDispatch } from "react-redux";
import { setorder } from "../../data/dataslice";
function ProductSubCategori(propse) {
  const [showModal,setShowModal]=useState(false)
  let link = `/product/${propse.dataProduct._id}`;
  const dispach=useDispatch()
  function addbox(idProduct){
    setShowModal(true)
    dispach(setorder(idProduct))
  }
  function closeModal(){
    setShowModal(false)
  }
  return (
    <div className={`w-2/6 p-1 border-l-2 border-b-2 border-slate-300 }`}>
      <div className="pt-1">
        <Link to={link}>
          <div className="flex justify-center">
            <img
              src={`http://localhost:8000/images/products/images/${propse.dataProduct.images[0]}`}
              alt=""
              className="w-[220px] h-[220px]"
            />
          </div>
          <div className="w-full flex justify-start">
            <p className="text-sm font-medium mt-1">
              {propse.dataProduct.name}
            </p>
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-end mt-5 mb-5">
        <div className="h-2/6 flex items-end">
          <bdi className="_font-bold">
            <span className="_font-fat">
              {propse.dataProduct.price}&nbsp; تومان{" "}
            </span>
          </bdi>
        </div>
      </div>
      <hr />
      <div className="flex items-center justify-end mt-1">
        <div className="w-3/6 flex items-center">
          <span className="text-xs">0.0</span>
          <StarPurple500Icon sx={{ color: "#FC0", width: "25px" }} />
          <soan className="text-xs text-slate-300">از0 رای</soan>
        </div>
        <div className="w-3/6 flex justify-end cursor-pointer">
          <div className="bg-yellow-500 w-10 flex justify-center items-center rounded-md text-2xl text-white" onClick={()=>addbox(propse.dataProduct._id)}>
            +
          </div>
        </div>
      </div>
      {showModal &&(
        <ModalMessage onCloce={closeModal}/>
      )}
    </div>
  );
}

export default ProductSubCategori;
