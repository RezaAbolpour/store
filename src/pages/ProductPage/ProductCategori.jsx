import { Link } from "react-router-dom";

function ProductCategori(propse) {
  console.log(propse.dataProduct.name);
  console.log(propse.dataProduct._id);
  let id = propse.dataProduct._id;
  let link = `/product-subCategori/${id}`;
  return (
    <div className="w-1/6 p-1 border-l-2 border-b-2 border-slate-300 h-[150px] flex justify-center items-center">
      <Link to={link}>
        <p className="text-2xl font-medium mt-1">{propse.dataProduct.name}</p>
      </Link>
    </div>
  );
}

export default ProductCategori;
