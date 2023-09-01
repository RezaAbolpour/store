import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import { addProduct } from "../../utils/api/addproduct";
import { fetchAllCategori, fetchSubCategori } from "../../data/dataslice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import CustomizedSnackbars from "./ToastMessage";
const filter = createFilterOptions();

let data = [];
let dataSubCategori = [];
const keyAddProduct = [
  "category",
  "subcategory",
  "name",
  "price",
  "quantity",
  "brand",
  "description",
  "thumbnail",
];

export default function FreeSoloCreateOption() {
  const[showmessage,setshowmessage]=React.useState(0)
  const [valueCategori, setValueCategori] = React.useState(null);
  const [valueSubCategori, setValueSubCategori] = React.useState(null);
  const [valueNameProduct, setValueNameProduct] = React.useState(null);
  const [valuePrice, setValuePrice] = React.useState(null);
  const [valueBrand, setValueBrand] = React.useState(null);
  const [valueCount, setValueCount] = React.useState(null);
  const [valueDiscription, setValueDiscription] = React.useState(null);
  const [selectedFile, setSelectedFile] = React.useState("");
  const [selectedFilePictur, setSelectedFilePictur] = React.useState(null);
  console.log(valueCategori, valueSubCategori);
  console.log(selectedFilePictur);
  if (!valueCategori) {
    dataSubCategori = [];
  }
  const dispach = useDispatch();
  useEffect(() => {
    dispach(fetchAllCategori());
    dispach(fetchSubCategori());
  }, []);
  const Dat = useSelector((state) => state.data.Categori);
  if (Dat) {
    data = Dat;
  }
  const DatSub = useSelector((state) => state.data.subCategori);
  if (DatSub) {
    if (valueCategori) {
      let datsub = [];
      DatSub.forEach((item) => {
        console.log(
          item.category == valueCategori._id,
          item.category,
          valueCategori._id
        );
        if (item.category == valueCategori._id) {
          datsub.push(item);
        }
      });
      dataSubCategori = datsub;
    }
  }
  function handlbrand(event) {
    const value = event.target.value;
    console.log(value);
    setValueBrand(value);
  }
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
    // let file = [];
    // for (let key in event.target.files) {
    //   file.push(event.target.files[key]);
    // }
    setSelectedFilePictur(event.target.files);
    console.log(selectedFilePictur);
  }
  function handlediscription(event) {
    const discripton = event.target.value;
    setValueDiscription(discripton);
  }
  const SendData = (dataform) => {
    const formData = new FormData();
    for (let index = 0; index < keyAddProduct.length; index++) {
      formData.append(keyAddProduct[index], dataform[index]);
    }
    for (let index = 0; index < selectedFilePictur.length; index++) {
      formData.append("images", selectedFilePictur[index]);
    }
    // for (let index = 0; index < selectedFilePictur.length - 2; index++) {
    //   formData.append("images", selectedFilePictur[index]);
    // }
    addProduct(formData);
  };

  function handlsubmit() {
    if (
      valueCategori &&
      valueSubCategori &&
      valueNameProduct &&
      valuePrice &&
      valueBrand &&
      valueCount &&
      selectedFile &&
      selectedFilePictur &&
      valueDiscription
    ) {
      let valueForm = [
        valueCategori._id,
        valueSubCategori._id,
        valueNameProduct,
        valuePrice,
        valueCount,
        valueBrand,
        valueDiscription,
        selectedFile,
      ];
      SendData(valueForm);
      setValueCategori(null);
      setValueSubCategori(null);
      setValueBrand("");
      setValueNameProduct("");
      setValueCount("");
      setValueDiscription("");
      setValuePrice("");
      setSelectedFilePictur(null);
      setSelectedFilePictur(null);
      setshowmessage(1)
    } else {
      alert("no");
    }
  }
  function handeldelet() {
    setValueCategori(null);
    setValueSubCategori(null);
    setValueBrand("");
    setValueNameProduct("");
    setValueCount("");
    setValueDiscription("");
    setValuePrice("");
    setSelectedFilePictur(null);
    setSelectedFilePictur("");
  }
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex justify-around">
        <Autocomplete
          value={valueSubCategori}
          onChange={(event, newValue) => {
            if (typeof newValue === "string") {
              setValueSubCategori({
                name: newValue,
              });
            } else if (newValue && newValue.inputValue) {
              // Create a new value from the user input
              setValueSubCategori({
                name: newValue.inputValue,
              });
            } else {
              setValueSubCategori(newValue);
            }
          }}
          filterOptions={(options, params) => {
            const filtered = filter(options, params);

            const { inputValue } = params;
            // Suggest the creation of a new value
            const isExisting = options.some(
              (option) => inputValue === option.name
            );
            if (inputValue !== "" && !isExisting) {
              filtered.push({
                inputValue,
                name: `Add "${inputValue}"`,
              });
            }

            return filtered;
          }}
          selectOnFocus
          clearOnBlur
          handleHomeEndKeys
          id="free-solo-with-text-demo"
          options={dataSubCategori}
          getOptionLabel={(option) => {
            // Value selected with enter, right from the input
            if (typeof option === "string") {
              return option;
            }
            // Add "xxx" option created dynamically
            if (option.inputValue) {
              return option.inputValue;
            }
            // Regular option
            return option.name;
          }}
          renderOption={(props, option) => <li {...props}>{option.name}</li>}
          sx={{ width: 300 }}
          freeSolo
          renderInput={(params) => (
            <div className="_font-bold">
              <TextField {...params} label="گروه" />
            </div>
          )}
        />
        <Autocomplete
          value={valueCategori}
          onChange={(event, newValue) => {
            if (typeof newValue === "string") {
              setValueCategori({
                name: newValue,
              });
            } else if (newValue && newValue.inputValue) {
              // Create a new value from the user input
              setValueCategori({
                name: newValue.inputValue,
              });
            } else {
              setValueCategori(newValue);
            }
          }}
          filterOptions={(options, params) => {
            const filtered = filter(options, params);

            const { inputValue } = params;
            // Suggest the creation of a new value
            const isExisting = options.some(
              (option) => inputValue === option.name
            );
            if (inputValue !== "" && !isExisting) {
              filtered.push({
                inputValue,
                name: `Add "${inputValue}"`,
              });
            }

            return filtered;
          }}
          selectOnFocus
          clearOnBlur
          handleHomeEndKeys
          id="free-solo-with-text-demo"
          options={data}
          getOptionLabel={(option) => {
            // Value selected with enter, right from the input
            if (typeof option === "string") {
              return option;
            }
            // Add "xxx" option created dynamically
            if (option.inputValue) {
              return option.inputValue;
            }
            // Regular option
            return option.name;
          }}
          renderOption={(props, option) => <li {...props}>{option.name}</li>}
          sx={{ width: 300 }}
          freeSolo
          renderInput={(params) => (
            <div className="_font-bold">
              <TextField {...params} label="دسته" />
            </div>
          )}
        />
      </div>

      <div className="flex justify-around">
        <TextField
          id="outlined-uncontrolled"
          label="قیمت"
          onChange={handlprice}
          value={valuePrice}
          style={{ width: 300 }}
        />
        <TextField
          id="outlined-uncontrolled"
          label="نام کالا"
          onChange={handlnameproduct}
          value={valueNameProduct}
          style={{ width: 300 }}
        />
      </div>

      <div className="flex justify-around">
        <TextField
          id="outlined-uncontrolled"
          label="تعداد"
          onChange={handlcount}
          value={valueCount}
          style={{ width: 300 }}
        />
        <TextField
          id="outlined-uncontrolled"
          label="برند"
          onChange={handlbrand}
          value={valueBrand}
          style={{ width: 300 }}
        />
      </div>

      <div className="flex justify-around pl-[48px] pr-[48px] gap-[30px]">
        <div
          className="flex items-center border-solid border-2 border-sky-300 h-[50px] rounded-md"
          dir="rtl"
        >
          <span className="text-sm w-2/6 text-center">انتخاب تصویر</span>
          <div className="w-4/6">
            <input
              // value={selectedFilePictur}
              name="upload-photo"
              type="file"
              multiple
              onChange={handleFileChangePicture}
            />
          </div>
        </div>
        <div
          className="flex items-center border-solid border-2 border-sky-300 ml-[60px] h-[50px] rounded-md"
          dir="rtl"
        >
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
      <div className="pl-[48px] pr-[48px] h-[155px] flex">
        <div className="flex flex-col h-full justify-center gap-5">
          <Button variant="contained" color="success" onClick={handlsubmit}>
            تایید
          </Button>
          <Button variant="outlined" color="error" onClick={handeldelet}>
            حذف
          </Button>
        </div>
        <div className="h-full w-full ml-2">
          <textarea
            value={valueDiscription}
            onChange={handlediscription}
            name=""
            id=""
            cols="70"
            rows="7"
            className="outline outline-offset-2 outline-2 rounded-sm outline-cyan-500"
          ></textarea>
        </div>
      </div>
      {showmessage?(<CustomizedSnackbars open={true} type={"success"} message={"با موفقیت اضافه شد"} fun={setshowmessage} />):console.log("opps")}
    </div>
  );
}
