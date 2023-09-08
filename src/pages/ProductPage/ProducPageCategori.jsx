import Footer from "../Home/Footer";
import Header from "../Home/Header";
import { useLocation } from "react-router-dom";
import { fetchAllProduct, fetchSubCategori } from "../../data/dataslice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ProductSubCategori from "./ProductSubCategori";
import { useState } from "react";
import CategoryList from "./MenuCategoryCard";
import { getProductSubCategory } from "../../utils/api/getProduct";
let nameSubCategori = "";
function ProductPageCategori() {
  const [page, setpage] = useState(1);
  const [limit, setlimit] = useState(6);
  const [numberPage, setNumberPage] = useState([0, 0]);
  const [dataProduct, setdataProduct] = useState([]);
  const [idSubCatergoti, setidSubCatergoti] = useState("");
  const [loading, setloading] = useState(false);
  const dispach = useDispatch();
  const location = useLocation();
  useEffect(() => {
    const idSubCatergoti = location.pathname.split("/")[2];
    setidSubCatergoti(idSubCatergoti);
    getProductSubCategory(idSubCatergoti, limit, page).then((res) => {
      console.log(res.data.data.products);
      setdataProduct(res.data.data.products);
      setNumberPage([res.data.total_pages, res.data.page]);
    });
    dispach(fetchSubCategori());
    dispach(fetchAllProduct()).then(() => {
      setloading(true);
    });
  }, [location, page]);
  // dispach(fetchSubCategori());
  // dispach(fetchAllProduct());
  const dataComplet = useSelector((state) => state.data);
  // let DatAllProduct = dataComplet.data;
  // dataProduct = DatAllProduct;
  let Dat = dataComplet.subCategori;
  console.log(Dat);
  // return <></>;
  function craetePageination() {
    let arry = [];
    for (let index = 0; index < numberPage[0]; index++) {
      arry.push(
        <li>
          <span
            onClick={() => {
              setpage(index + 1);
            }}
            className={`${
              index + 1 == numberPage[1]
                ? "flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
                : "flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            } `}
          >
            {index + 1}
          </span>
        </li>
      );
    }
    return arry;
  }
  if (loading) {
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
        <div className="flex  pl-10 pr-10" dir="rtl">
          <div>
            <CategoryList />
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
        </div>
        {numberPage[0] && (
          <div className="flex justify-center mt-1">
            <nav aria-label="Page navigation example">
              <ul className="inline-flex -space-x-px text-base h-10">
                <li>
                  <span
                    onClick={() => {
                      setpage((prev) => (prev > 1 ? prev - 1 : prev));
                    }}
                    className="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
                  >
                    قبلی
                  </span>
                </li>
                {craetePageination()}
                <li>
                  <span
                    onClick={() => {
                      setpage((prev) =>
                        prev < numberPage[0] ? prev + 1 : prev
                      );
                    }}
                    className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
                  >
                    بعدی
                  </span>
                </li>
              </ul>
            </nav>
          </div>
        )}

        <div className="h-[93px] border-solid border-2 border-gray-200 shadow-2xl rounded-md ml-10 mr-10 flex items-center justify-end pr-10 _font-bold mt-5">
          {nameSubCategori}
        </div>
        <Footer />
      </div>
    );
  }
}

export default ProductPageCategori;
