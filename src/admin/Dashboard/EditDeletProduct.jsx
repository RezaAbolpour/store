import { useMemo, useState, useEffect } from "react";
import { MaterialReactTable } from "material-react-table";
import { Box, IconButton, Tooltip } from "@mui/material";
import Button from "@mui/material/Button";
import { Delete, Edit } from "@mui/icons-material";
import { MRT_Localization_FA } from "material-react-table/locales/fa";
import { fetchAllProduct } from "../../data/dataslice";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { editProductById } from "../../utils/api/editproduct";
let data = [];
let keyEditProduct = [
  "name",
  "price",
  "quantity",
  "brand",
  "description",
  "thumbnail",
];
function Modal(props) {
  const [valueNameProduct, setValueNameProduct] = React.useState(
    props.dataRow.name
  );
  const [valuePrice, setValuePrice] = React.useState(props.dataRow.price);
  const [valueCount, setValueCount] = React.useState(props.dataRow.quantity);
  const [valueBrand, setValueBrand] = React.useState(props.dataRow.brand);
  const [valueDiscription, setValueDiscription] = React.useState(
    props.dataRow.description
  );
  const [selectedFile, setSelectedFile] = React.useState(
    props.dataRow.thumbnail
  );
  const [selectedFilePictur, setSelectedFilePictur] = React.useState(
    props.dataRow.images
  );
  const SendData = () => {
    let dataform = [
      valueNameProduct,
      valuePrice,
      valueCount,
      valueBrand,
      valueDiscription,
      selectedFile,
    ];
    console.log(selectedFilePictur);
    const formData = new FormData();
    for (let index = 0; index < keyEditProduct.length; index++) {
      formData.append(keyEditProduct[index], dataform[index]);
    }
    for (let index = 0; index < selectedFilePictur.length - 2; index++) {
      formData.append("images", selectedFilePictur[index]);
    }
    editProductById(props.dataRow._id, formData);
  };
  function handlcount(event) {
    const value = event.target.value;
    console.log(value);
    setValueCount(value);
  }
  function handlprice(event) {
    const value = event.target.value;
    console.log(value);
    setValuePrice(value);
  }
  function handlnameproduct(event) {
    const value = event.target.value;
    console.log(value);
    setValueNameProduct(value);
  }
  function handleFileChangePriviewPicture(event) {
    setSelectedFile(event.target.files[0]);
    console.log(selectedFile);
  }
  function handleFileChangePicture(event) {
    let file = [];
    for (let key in event.target.files) {
      file.push(event.target.files[key]);
    }
    setSelectedFilePictur(file);
  }
  function handlediscription(event) {
    const discripton = event.target.value;
    setValueDiscription(discripton);
  }
  function handlbrand() {
    const value = event.target.value;
    setValueBrand(value);
  }
  function closemodal() {
    props.close(null);
  }
  console.log(valueCount);
  return (
    <div className="absolute inset-x-52 inset-y-5 bg-slate-300 w-[50rem] h-[38rem] z-50 rounded-md">
      <div className="flex flex-col">
        <div className="flex items-center justify-center mt-10 gap-2 ml-[50px] mr-[50px] ">
          <TextField
            id="outlined-basic"
            label="تعداد"
            variant="outlined"
            value={valueCount}
            onChange={handlcount}
          />
          <TextField
            id="outlined-basic"
            label="قیمت"
            variant="outlined"
            value={valuePrice}
            onChange={handlprice}
          />
          <TextField
            id="outlined-basic"
            label="نام کالا"
            variant="outlined"
            value={valueNameProduct}
            onChange={handlnameproduct}
          />
          <TextField
            id="outlined-basic"
            label="برند"
            variant="outlined"
            value={valueBrand}
            onChange={handlbrand}
          />
        </div>
        <div className="h-full w-full flex justify-center mt-5">
          <textarea
            name=""
            id=""
            dir="rtl"
            cols="83"
            rows="6"
            value={valueDiscription}
            onChange={handlediscription}
            className="outline outline-offset-2 outline-2 rounded-sm outline-cyan-500 p-1"
          ></textarea>
        </div>
        <div className="bg-white mt-2 h-[100px] ml-[48px] mr-[48px] rounded-md flex outline outline-offset-2 outline-2  outline-cyan-500">
          <div className="w-4/6 p-2 flex gap-2">
            {console.log(props.dataRow.thumbnail)}
            <img
            className="outline outline-offset-2 outline-2 rounded-sm outline-cyan-500"
              alt="avatar"
              src={`http://localhost:8000/images/products/images/${props.dataRow.thumbnail[0]}`}
              style={{ width: "20%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div dir="rtl" className="w-2/6 bg-white p-2 ">
            <span className="text-sm w-2/6 text-center">پیش نمایش</span>
            <div className="w-4/6">
              <input
                name="upload-photo"
                type="file"
                onChange={handleFileChangePriviewPicture}
              />
            </div>
          </div>
        </div>
        <div className="bg-white mt-2 h-[100px] ml-[48px] mr-[48px] rounded-md flex outline outline-offset-2 outline-2  outline-cyan-500">
          <div className="w-4/6 p-2 flex gap-2">
            {console.log(props.dataRow.images)}
            {props.dataRow.images.map((img) => (
              <>
                <img
                  className="outline outline-offset-2 outline-2 rounded-sm outline-cyan-500 "
                  alt="avatar"
                  src={`http://localhost:8000/images/products/images/${img}`}
                  style={{ width: "20%", height: "100%", objectFit: "cover" }}
                />
              </>
            ))}
          </div>
          <div dir="rtl" className="w-2/6 bg-white p-2">
            <span className="text-sm w-2/6 text-center">انتخاب تصویر</span>
            <div className="w-4/6">
              <input
                name="upload-photo"
                type="file"
                multiple
                onChange={handleFileChangePicture}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col h-full justify-center gap-1 mt-2 ml-[50px] mr-[50px]">
          <Button variant="contained" color="success" onClick={SendData}>
            تایید
          </Button>
          <Button variant="outlined" color="error" onClick={closemodal}>
            کنسل
          </Button>
        </div>
      </div>
    </div>
  );
}
const Example = () => {
  const [modal, setShowModal] = useState(null);
  const dispach = useDispatch();
  useEffect(() => {
    dispach(fetchAllProduct());
  }, []);
  const Dat = useSelector((state) => state.data.data);
  console.log(Dat);
  data = Dat;
  const handleEdit = (datarow) => {
    if (modal) {
      setShowModal(null);
    } else {
      setShowModal(datarow);
    }
    console.log(modal);
  };

  const handleDelete = (id) => {
    alert("حذف محصول با آیدی: " + id);
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "اسم محصول",
        size: 140,
      },
      {
        accessorKey: "brand",
        header: "برند",
        size: 120,
      },
      {
        accessorKey: "quantity",
        header: "تعداد",
        size: 100,
      },
      {
        accessorKey: "price",
        header: "قیمت",
        size: 100,
      },
      {
        accessorKey: "avatar",
        header: "عکس",
        size: 100,
        Cell: ({ row }) => (
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              overflow: "hidden",
            }}
            onClick={() => handleEdit(row.original._id)}
          >
            <img
              alt="avatar"
              src={`http://localhost:8000/images/products/images/${row.original.images[0]}`}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        ),
      },
    ],
    []
  );

  return (
    <div className="relative">
      {modal ? <Modal dataRow={modal} close={setShowModal} /> : console.log(0)}
      {/* <Modal dataRow={fakedat} /> */}
      <MaterialReactTable
        localization={MRT_Localization_FA}
        columns={columns}
        data={data}
        enableColumnOrdering
        enableEditing
        renderRowActions={({ row }) => (
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Tooltip arrow placement="left" title="ویرایش">
              <IconButton onClick={() => handleEdit(row.original)}>
                <Edit />
              </IconButton>
            </Tooltip>
            <Tooltip arrow placement="right" title="حذف">
              <IconButton
                color="error"
                onClick={() => handleDelete(row.original.name)}
              >
                <Delete />
              </IconButton>
            </Tooltip>
          </Box>
        )}
      />
    </div>
  );
};

export default Example;
