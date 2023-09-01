import Footer from "../Home/Footer";
import Header from "../Home/Header";
import { useLocation } from "react-router-dom";
import { fetchAllProduct, fetchSubCategori } from "../../data/dataslice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ProductSubCategori from "./ProductSubCategori";
let nameSubCategori = "";
let dataProduct = [];
function ProductPageCategori() {
  const idSubCatergoti = useLocation().pathname.split("/")[2];
  console.log(idSubCatergoti);
  const dispach = useDispatch();
  useEffect(() => {
    dispach(fetchSubCategori());
    dispach(fetchAllProduct());
  }, []);
  // dispach(fetchSubCategori());
  // dispach(fetchAllProduct());
  let DatAllProduct = useSelector((state) => state.data.data);
  dataProduct = DatAllProduct;
  let Dat = useSelector((state) => state.data.subCategori);
  console.log(Dat);
  Dat.forEach((item) => {
    if (item._id == idSubCatergoti) {
      nameSubCategori = item.name;
    }
  });
  return (
    <div>
      <Header />
      <div className="h-[78px] pr-5 pl-5 flex items-center" dir="rtl">
        <span className="_font-bold">{nameSubCategori}</span>
      </div>
      <div
        className="bg-white h-auto mr-10 ml-10 rounded-md border-solid border-2 border-gray-200 hadow-2xl flex flex-wrap"
        dir="rtl"
      >
        {console.log(dataProduct)}
        {dataProduct.map((item) => (
          <>
            <ProductSubCategori dataProduct={item} />
          </>
        ))}
      </div>
      <div className="h-[93px] border-solid border-2 border-gray-200 shadow-2xl rounded-md ml-10 mr-10 flex items-center justify-end pr-10 _font-bold mt-5">
        {nameSubCategori}
      </div>
      <Footer />
    </div>
  );
}

export default ProductPageCategori;
