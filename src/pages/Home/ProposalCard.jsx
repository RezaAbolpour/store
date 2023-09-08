import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setorder } from "../../data/dataslice";
import ModalMessageHome from "./ModalMessageHome";

function ProposalCard({ data }) {
  let link = `/product/${data._id}`;
  const [showModal, setShowModal] = useState(false);
  const dispach = useDispatch();
  function addbox(idProduct) {
    setShowModal(true);
    dispach(setorder({id:idProduct,count:1}));
  }
  function closeModal() {
    setShowModal(false);
  }
  return (
    <div className="w-1/6">
      <Link to={link}>
        <div className="pl-10 pt-5">
          <img
            src={`http://localhost:8000/images/products/images/${data.images[0]}`}
            alt=""
            className="w-[150px] h-[150px]"
          />
          <p className="text-sm _font-medium mt-1">{data.name}</p>
        </div>
      </Link>
      <div className="flex justify-between pl-3 pr-3 items-center">
        <bdi className="_font-bold">
          {data.price}&nbsp;
          <span className="_font-fat">تومان</span>
        </bdi>

        <div>
          <div
            className="bg-yellow-500 w-10 flex justify-center items-center rounded-md text-2xl text-white"
            onClick={() => addbox(data._id)}
          >
            +
          </div>
        </div>
      </div>
      {showModal && <ModalMessageHome onCloce={closeModal} />}
    </div>
  );
}

export default ProposalCard;
