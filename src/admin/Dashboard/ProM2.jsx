import { useEffect, useState } from "react";
import { getProductLimit } from "../../utils/api/getProduct";
import { editProductById } from "../../utils/api/editproduct";
// const data=[{inputPrice:false,inputQuantity:false,id:1},{inputPrice:false,inputQuantity:false,id:2}]
function ProM2() {
  const [showModalSavedata, setShowModalSavedata] = useState("hidden");
  const [_page, _setPage] = useState(1);
  const [_limit, _setLimit] = useState(2);
  const [countPaginationNumber, setCountPaginationNumber] = useState(0); //تعداد پیج ها
  const [listItemsCountPage, setListItemsCountPage] = useState([]); //خود jsx pagination
  const [data, setData] = useState([]);
  const SetLimitHandler = (event) => {
    _setLimit(Number(event.target.value));
    _setPage(1);
  };
  useEffect(() => {
    getProductLimit(_page, _limit).then((res) => {
      const po = [];
      res.data.data.products.forEach((item, index) => {
        po.push({
          inputPrice: false,
          inputQuantity: false,
          id: item._id,
          name: item.name,
          brand: item.brand,
          price: item.price,
          priceOriginal: item.price,
          quantity: item.quantity,
          quantityOriginal: item.quantity,
        });
      });
      setData(po);
      const pages = [];
      for (let index = 0; index < Number(res.data.total_pages); index++) {
        pages.push(
          <li
            key={index}
            onClick={() => {
              console.log(index);
              _setPage(index + 1);
            }}
          >
            <span
              className={`flex hover:cursor-pointer items-center justify-center px-3 h-8 leading-tight ${
                Number(res.data.page) === index + 1
                  ? "text-white"
                  : "text-gray-300"
              }  ${
                Number(res.data.page) === index + 1
                  ? "bg-gray-700"
                  : "bg-gray-800"
              } border border-gray-700  hover:text-white hover:bg-gray-700`}
            >
              {index + 1}
            </span>
          </li>
        );
      }
      setListItemsCountPage(pages);
      setCountPaginationNumber(res.data.total_pages);
    });
  }, [_page, _limit]);

  function handleDoubleClickPrice(event, num) {
    const updatedData = data.map((item) => {
      console.log(item.id, num);
      if (item.id === num) {
        return { ...item, inputPrice: true };
      }
      return item;
    });
    setData(updatedData);
  }
  function handleDubleClickQuantity(event, num) {
    const updatedData = data.map((item) => {
      if (item.id === num) {
        return { ...item, inputQuantity: true };
      }
      return item;
    });
    setData(updatedData);
  }
  function handlePrice(event, num) {
    if (event.key === "Escape") {
      const updatedData = data.map((item) => {
        if (item.id === num) {
          return { ...item, inputPrice: false, price: item.priceOriginal };
        }
        return item;
      });
      setData(updatedData);
    }
  }
  function handleQuantity(event, num) {
    if (event.key === "Escape") {
      const updatedData = data.map((item) => {
        if (item.id === num) {
          return {
            ...item,
            inputQuantity: false,
            quantity: item.quantityOriginal,
          };
        }
        return item;
      });
      setData(updatedData);
    }
  }
  function handelInputPrice(event, num) {
    const updatedData = data.map((item) => {
      if (item.id === num) {
        return { ...item, price: event.target.value };
      }
      return item;
    });
    setData(updatedData);
  }

  function handelInputQuantity(event, num) {
    const updatedData = data.map((item) => {
      if (item.id === num) {
        return { ...item, quantity: event.target.value };
      }
      return item;
    });
    setData(updatedData);
  }

  function SendEditData() {
    const PromiseAll = [];
    data.map((item) => {
      const formData = new FormData();
      if (
        item.price !== item.priceOriginal ||
        item.quantity !== item.quantityOriginal
      ) {
        if (item.price !== item.priceOriginal)
          formData.append("price", item.price);
        if (item.quantity !== item.quantityOriginal)
          formData.append("quantity", item.quantity);
        PromiseAll.push(editProductById(item.id, formData));
      }
    });
    if (PromiseAll) {
      setShowModalSavedata("hidden");
      Promise.all(PromiseAll).then(() => {
        const updatedData = data.map((item) => {
            return { ...item, inputPrice: false,inputQuantity:false};
        });
        setData(updatedData);
      });
    }
  }
  function CheckChangePriceAndQuantity() {
    let check = false;
    data.map((item) => {
      if (
        item.price !== item.priceOriginal ||
        item.quantity !== item.quantityOriginal
      )
        check = true;
    });
    return check;
  }
  return (
    <>
      <div
        className="relative overflow-x-auto shadow-md  _font-bold"
        dir="rtl"
      >
        <table className="w-full text-sm text-right text-gray-500  table-rtl ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50   _font-fat">
            <tr>
              <th scope="col" className="p-4"></th>
              <th scope="col" className="px-6 py-3">
                اسم محصول
              </th>
              <th scope="col" className="px-6 py-3">
                برند
              </th>
              <th scope="col" className="px-6 py-3">
                قیمت
              </th>
              <th scope="col" className="px-6 py-3">
                تعداد
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                className="bg-white border-b   hover:bg-gray-50 text-gray-900"
                key={index}
              >
                <td className="w-4 p-4">
                  <div className="flex items-center"></div>
                </td>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {item.name}
                </td>
                <td className="px-6 py-4">{item.brand}</td>
                <td
                  className="px-6 py-4"
                  onDoubleClick={(event) => {
                    handleDoubleClickPrice(event, item.id);
                  }}
                  onKeyDown={(event) => {
                    handlePrice(event, item.id);
                  }}
                >
                  {item.inputPrice ? (
                    <input
                      value={item.price}
                      onChange={(event) => {
                        handelInputPrice(event, item.id);
                      }}
                      data-id={item.id}
                    ></input>
                  ) : (
                    <p>{item.price}</p>
                  )}
                </td>
                <td
                  className="px-6 py-4"
                  onDoubleClick={(event) => {
                    handleDubleClickQuantity(event, item.id);
                  }}
                  onKeyDown={(event) => {
                    handleQuantity(event, item.id);
                  }}
                >
                  {item.inputQuantity ? (
                    <input
                      value={item.quantity}
                      onChange={(event) => {
                        handelInputQuantity(event, item.id);
                      }}
                      data-id={item.id}
                    ></input>
                  ) : (
                    <p>{item.quantity}</p>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav
          className="flex items-center justify-start pt-4 gap-4"
          aria-label="Table navigation"
        >
          <ul className="inline-flex -space-x-px text-sm h-8" dir="ltr">
            <li
              className="hover:cursor-pointer"
              onClick={() => {
                _setPage((prev) => (prev > 1 ? prev - 1 : prev));
              }}
            >
              <span
                href="#"
                className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                قبلی
              </span>
            </li>
            {listItemsCountPage}
            <li
              className="hover:cursor-pointer"
              onClick={() => {
                _setPage((prev) =>
                  prev < countPaginationNumber ? prev + 1 : prev
                );
              }}
            >
              <span
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                بعدی
              </span>
            </li>
          </ul>
          <select
            id="countries"
            className="bg-gray-800 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-1 outline-none"
            onChange={SetLimitHandler}
          >
            <option selected disabled>
              ردیف
            </option>
            <option value="2">2</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
          <div
            className={`w-full flex justify-end items-center pl-4 ${
              data.find((item) => item.inputQuantity || item.inputPrice)
                ? ""
                : "hidden"
            }`}
          >
            <button
              onClick={() => {
                CheckChangePriceAndQuantity() ? setShowModalSavedata("") : null;
              }}
              type="button"
              className="text-white  border border-gray-300 active:outline-none hover:bg-gray-700 active:ring-4 active:ring-gray-200 font-medium rounded-lg text-sm px-5 py-1.5"
            >
              ذخیره
            </button>
          </div>
        </nav>
      </div>

      <div
        className={`fixed ${showModalSavedata} top-0 left-0 right-0 z-50 p-4 flex justify-center items-center  overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <div className="relative w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow ">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
              data-modal-hide="popup-modal"
              onClick={() => {
                setShowModalSavedata("hidden");
              }}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-6 text-center">
              <svg
                className="mx-auto mb-4 text-gray-400 w-12 h-12 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <h3 className="mb-5 text-xl font-normal text-gray-500 _font-bold">
                آیا از ذخیره اطلاعات اطمینان دارید؟
              </h3>
              <div className="flex gap-2 justify-center items-center">
                <button
                  onClick={SendEditData}
                  data-modal-hide="popup-modal"
                  type="button"
                  className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                >
                  ذخیره
                </button>
                <button
                  data-modal-hide="popup-modal"
                  type="button"
                  className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-6 py-2.5 hover:text-gray-900 focus:z-10"
                >
                  لغو
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProM2;
