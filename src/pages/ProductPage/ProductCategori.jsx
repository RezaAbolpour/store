import { Link } from "react-router-dom";

function ProductCategori(propse) {
  console.log(propse.dataProduct.name);
  console.log(propse.dataProduct._id);
  let id = propse.dataProduct._id;
  let link = `/product-subCategori/${id}`;
  return (
    <div className="w-1/6 p-1 border-l-2 border-2 border-slate-300 h-[80px] flex justify-center items-center rounded-md hover:bg-slate-400 hover:h-[95px] hover:shadow-2xl hover:text-white">
      <Link to={link}>
        <p className="text-sm _font-bold mt-1">{propse.dataProduct.name}</p>
      </Link>
    </div>
  );
}

export default ProductCategori;
