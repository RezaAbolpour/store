import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setorder } from "../../data/dataslice";
import ModalMessage from "../ProductPage/ModalMessage";
import ModalMessageHome from "./ModalMessageHome";

function CardProductHome({ data }) {
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
    <>
      <div className="bg-white h-72 w-1/6 rounded-md">
        <Link to={link}>
          <div className="flex items-center justify-center">
            <img
              src={`http://localhost:8000/images/products/images/${data.images[0]}`}
              className="w-28 p-2"
            />
          </div>
          <div className="flex justify-center items-center _font-bold">
            {data.name}
          </div>
          <div className="h-2/6 flex items-end pl-4">
            <bdi className="_font-bold">
              {data.price}&nbsp;
              <span className="_font-fat">تومان</span>
            </bdi>
          </div>
        </Link>
        <div className="h-1/6 flex justify-end items-end pr-4">
          <div
            className="bg-yellow-500 w-10 flex justify-center items-center rounded-md text-2xl text-white"
            onClick={() => addbox(data._id)}
          >
            +
          </div>
        </div>
      </div>
      {showModal && <ModalMessageHome onCloce={closeModal} />}
    </>
  );
}

export default CardProductHome;
