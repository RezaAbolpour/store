import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
const filter = createFilterOptions();

export default function FreeSoloCreateOption() {
  const [valueCategori, setValueCategori] = React.useState(null);
  const [valueSubCategori, setValueSubCategori] = React.useState(null);
  const [valueNameProduct, setValueNameProduct] = React.useState(null);
  const [valuePrice, setValuePrice] = React.useState(null);
  const [valueBrand, setValueBrand] = React.useState(null);
  const [valueCount, setValueCount] = React.useState(null);
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [selectedFilePictur, setSelectedFilePictur] = React.useState(null);
  function handleFileChangePriviewPicture(event) {
    setSelectedFile(event.target.files[0]);
  }
  function handleFileChangePicture(event) {
    setSelectedFilePictur(event.target.files[0]);
  }
  console.log(selectedFile, selectedFilePictur);
  
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex justify-around">
        <Autocomplete
          value={valueCategori}
          onChange={(event, newValue) => {
            if (typeof newValue === "string") {
              setValueCategori({
                title: newValue,
              });
            } else if (newValue && newValue.inputValue) {
              // Create a new value from the user input
              setValueCategori({
                title: newValue.inputValue,
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
              (option) => inputValue === option.title
            );
            if (inputValue !== "" && !isExisting) {
              filtered.push({
                inputValue,
                title: `Add "${inputValue}"`,
              });
            }

            return filtered;
          }}
          selectOnFocus
          clearOnBlur
          handleHomeEndKeys
          id="free-solo-with-text-demo"
          options={top100Films}
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
            return option.title;
          }}
          renderOption={(props, option) => <li {...props}>{option.title}</li>}
          sx={{ width: 300 }}
          freeSolo
          renderInput={(params) => (
            <div className="_font-bold">
              <TextField {...params} label="گروه" />
            </div>
          )}
        />
        <Autocomplete
          value={valueSubCategori}
          onChange={(event, newValue) => {
            if (typeof newValue === "string") {
              setValueSubCategori({
                title: newValue,
              });
            } else if (newValue && newValue.inputValue) {
              // Create a new value from the user input
              setValueSubCategori({
                title: newValue.inputValue,
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
              (option) => inputValue === option.title
            );
            if (inputValue !== "" && !isExisting) {
              filtered.push({
                inputValue,
                title: `Add "${inputValue}"`,
              });
            }

            return filtered;
          }}
          selectOnFocus
          clearOnBlur
          handleHomeEndKeys
          id="free-solo-with-text-demo"
          options={top1002Films}
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
            return option.title;
          }}
          renderOption={(props, option) => <li {...props}>{option.title}</li>}
          sx={{ width: 300 }}
          freeSolo
          renderInput={(params) => (
            <div className="_font-bold">
              <TextField {...params} label="دسته بندی" />
            </div>
          )}
        />
      </div>

      <div className="flex justify-around">
        <Autocomplete
          value={valuePrice}
          onChange={(event, newValue) => {
            if (typeof newValue === "string") {
              setValuePrice({
                title: newValue,
              });
            } else if (newValue && newValue.inputValue) {
              // Create a new value from the user input
              setValuePrice({
                title: newValue.inputValue,
              });
            } else {
              setValuePrice(newValue);
            }
          }}
          filterOptions={(options, params) => {
            const filtered = filter(options, params);

            const { inputValue } = params;
            // Suggest the creation of a new value
            const isExisting = options.some(
              (option) => inputValue === option.title
            );
            if (inputValue !== "" && !isExisting) {
              filtered.push({
                inputValue,
                title: `Add "${inputValue}"`,
              });
            }

            return filtered;
          }}
          selectOnFocus
          clearOnBlur
          handleHomeEndKeys
          id="free-solo-with-text-demo"
          options={top100Films}
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
            return option.title;
          }}
          renderOption={(props, option) => <li {...props}>{option.title}</li>}
          sx={{ width: 300 }}
          freeSolo
          renderInput={(params) => (
            <div className="_font-bold">
              <TextField {...params} label="قیمت" />
            </div>
          )}
        />
        <Autocomplete
          value={valueNameProduct}
          onChange={(event, newValue) => {
            if (typeof newValue === "string") {
              setValueNameProduct({
                title: newValue,
              });
            } else if (newValue && newValue.inputValue) {
              // Create a new value from the user input
              setValueNameProduct({
                title: newValue.inputValue,
              });
            } else {
              setValueNameProduct(newValue);
            }
          }}
          filterOptions={(options, params) => {
            const filtered = filter(options, params);

            const { inputValue } = params;
            // Suggest the creation of a new value
            const isExisting = options.some(
              (option) => inputValue === option.title
            );
            if (inputValue !== "" && !isExisting) {
              filtered.push({
                inputValue,
                title: `Add "${inputValue}"`,
              });
            }

            return filtered;
          }}
          selectOnFocus
          clearOnBlur
          handleHomeEndKeys
          id="free-solo-with-text-demo"
          options={top1002Films}
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
            return option.title;
          }}
          renderOption={(props, option) => <li {...props}>{option.title}</li>}
          sx={{ width: 300 }}
          freeSolo
          renderInput={(params) => (
            <div className="_font-bold">
              <TextField {...params} label="نام کالا" />
            </div>
          )}
        />
      </div>

      <div className="flex justify-around">
        <Autocomplete
          value={valueCount}
          onChange={(event, newValue) => {
            if (typeof newValue === "string") {
              setValueCount({
                title: newValue,
              });
            } else if (newValue && newValue.inputValue) {
              // Create a new value from the user input
              setValueCount({
                title: newValue.inputValue,
              });
            } else {
              setValueCount(newValue);
            }
          }}
          filterOptions={(options, params) => {
            const filtered = filter(options, params);

            const { inputValue } = params;
            // Suggest the creation of a new value
            const isExisting = options.some(
              (option) => inputValue === option.title
            );
            if (inputValue !== "" && !isExisting) {
              filtered.push({
                inputValue,
                title: `Add "${inputValue}"`,
              });
            }

            return filtered;
          }}
          selectOnFocus
          clearOnBlur
          handleHomeEndKeys
          id="free-solo-with-text-demo"
          options={top100Films}
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
            return option.title;
          }}
          renderOption={(props, option) => <li {...props}>{option.title}</li>}
          sx={{ width: 300 }}
          freeSolo
          renderInput={(params) => (
            <div className="_font-bold">
              <TextField {...params} label="تعداد" />
            </div>
          )}
        />
        <Autocomplete
          value={valueBrand}
          onChange={(event, newValue) => {
            if (typeof newValue === "string") {
              setValueBrand({
                title: newValue,
              });
            } else if (newValue && newValue.inputValue) {
              // Create a new value from the user input
              setValueBrand({
                title: newValue.inputValue,
              });
            } else {
              setValueBrand(newValue);
            }
          }}
          filterOptions={(options, params) => {
            const filtered = filter(options, params);

            const { inputValue } = params;
            // Suggest the creation of a new value
            const isExisting = options.some(
              (option) => inputValue === option.title
            );
            if (inputValue !== "" && !isExisting) {
              filtered.push({
                inputValue,
                title: `Add "${inputValue}"`,
              });
            }

            return filtered;
          }}
          selectOnFocus
          clearOnBlur
          handleHomeEndKeys
          id="free-solo-with-text-demo"
          options={top1002Films}
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
            return option.title;
          }}
          renderOption={(props, option) => <li {...props}>{option.title}</li>}
          sx={{ width: 300 }}
          freeSolo
          renderInput={(params) => (
            <div className="_font-bold">
              <TextField {...params} label="برند" />
            </div>
          )}
        />
      </div>

      <div className="flex justify-around pl-[48px] pr-[48px] gap-[30px]">
        <div
          className="flex items-center border-solid border-2 border-sky-50"
          dir="rtl"
        >
          <span className="text-sm w-2/6 text-center">انتخاب تصویر</span>
          <div className="w-4/6">
            <input
              name="upload-photo"
              type="file"
              multiple
              onChange={handleFileChangePriviewPicture}
            />
          </div>
        </div>
        <div
          className="flex items-center border-solid border-2 border-sky-50 ml-[60px]"
          dir="rtl"
        >
          <span className="text-sm w-2/6 text-center">پیش نمایش</span>
          <div className="w-4/6">
            <input
              name="upload-photo"
              type="file"
              onChange={handleFileChangePicture}
            />
          </div>
        </div>
      </div>
      <div className="pl-[48px] pr-[48px] h-[155px] flex">
        <div className="flex flex-col h-full justify-center gap-5">
          <Button variant="contained" color="success">
            Success
          </Button>
          <Button variant="outlined" color="error">
            Error
          </Button>
        </div>
        <div className="h-full w-full ml-2">
          <textarea name="" id="" cols="70" rows="7" className="border-solid border-3 border-red-500"></textarea>
        </div>
      </div>
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [{ title: "کیفش" }];
const top1002Films = [{ title: "موبایل" }];
