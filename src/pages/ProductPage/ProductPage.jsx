import Footer from "../Home/Footer";
import Header from "../Home/Header";
import ProductCategori from "./ProductCategori";
import { useLocation } from "react-router-dom";
import { fetchAllCategori, fetchSubCategori } from "../../data/dataslice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import CategoryList from "./MenuCategoryCard";

function ProductPage() {
  let nameCategori = "";
  let dataSubCategori = [];
  const [loading, setloading] = useState(false);
  const idCatergoti = useLocation().pathname.split("/")[2];
  console.log(idCatergoti);
  const dispach = useDispatch();
  useEffect(() => {
    console.log("ok");
    dispach(fetchAllCategori());
    dispach(fetchSubCategori()).then(() => {
      setloading(true);
    });
  }, [dispach]);
  // dispach(fetchAllCategori());
  //   dispach(fetchSubCategori());
  const dataComplet = useSelector((state) => state.data);
  const Dat = dataComplet.Categori;
  const DatSub = dataComplet.subCategori;
  console.log(Dat);
  if (loading) {
    Dat.forEach((item) => {
      if (item._id == idCatergoti) {
        nameCategori = item.name;
      }
    });
    let datsub = [];
    DatSub.forEach((item) => {
      if (item.category == idCatergoti) {
        datsub.push(item);
      }
    });
    dataSubCategori = datsub;
    return (
      <div>
        <Header />
        <div className="h-[78px] pr-5 pl-5 flex items-center" dir="rtl">
          <span className="_font-bold">{nameCategori}</span>
        </div>
        <div className="flex  pl-10 pr-10" dir="rtl">
          <div className="flex justify-start rounded-md border-solid border-2 border-gray-200 shadow-2xl h-[500px] overflow-y-scroll">
            <CategoryList/>
          </div>
          <div
            className="h-auto flex-grow-[2] rounded-md border-solid border-2 border-gray-200 shadow-2xl flex flex-wrap items-center justify-center gap-1"
            dir="rtl"
          >
            {dataSubCategori.map((item) => (
              <>
                <ProductCategori dataProduct={item} />
              </>
            ))}
          </div>
        </div>

        <div className="h-[93px] border-solid border-2 border-gray-200 shadow-2xl rounded-md ml-10 mr-10 flex items-center justify-end pr-10 _font-bold mt-5">
          {nameCategori}
        </div>
        <Footer />
      </div>
    );
  }
}

export default ProductPage;
