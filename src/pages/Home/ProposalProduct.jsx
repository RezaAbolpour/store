import { Link } from "react-router-dom";

function ProposalProduct({ data }) {
  let link = `/product/${data._id}`;
  return (
    <div className="w-1/6">
      <Link to={link}>
        <div className="pl-14">
          <img
            src={`http://localhost:8000/images/products/images/${data.images[0]}`}
            alt=""
            className="w-[125px] h-[125px]"
          />
        </div>
        <p className="text-center text-sm _font-medium mt-1">{data.name}</p>
      </Link>
    </div>
  );
}

export default ProposalProduct;
