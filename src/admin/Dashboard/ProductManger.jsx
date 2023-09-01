import { useMemo, useState, useEffect } from "react";
import { MantineReactTable } from "mantine-react-table";
import { MRT_Localization_FA } from "mantine-react-table/locales/fa";
import { fetchAllProduct } from "../../data/dataslice";
import { useDispatch, useSelector } from "react-redux";
import { Text } from "@mantine/core";
import { editProductById } from "../../utils/api/editproduct";
let data;
const ProductAllManaer = () => {
  const [load, setload] = useState(false);
  const dispach = useDispatch();
  useEffect(() => {
    console.log("hhhh");
    dispach(fetchAllProduct()).then(() => {
      setload(true);
    });
  }, [dispach]);
  const Dat = useSelector((state) => state.data.data);
  data = Dat;
  console.log(Dat);
  const columns = useMemo(
    () => [
      {
        accessorKey: "brand", //access nested data with dot notation
        header: "برند",
        size: 150,
      },
      {
        accessorKey: "name",
        header: "اسم محصول",
        size: 150,
      },
      {
        accessorKey: "description", //normal accessorKey
        header: "توضیحات",
        size: 200,
      },
      {
        accessorKey: "price",
        header: "قیمت",
        size: 150,
      },
      {
        accessorKey: "quantity",
        header: "تعداد",
        size: 150,
      },
    ],
    []
  );

  const handleSaveCell = (cell, value) => {
    console.log(data);
    console.log(cell.id.split("_")[1]);
    console.log(cell.row.original._id);
    const formData = new FormData();
    formData.append(cell.id.split("_")[1], value);
    editProductById(cell.row.original._id,formData)
  };
  if (load) {
    return (
      <MantineReactTable
        columns={columns}
        data={data}
        editDisplayMode="cell"
        enableEditing
        mantineEditTextInputProps={({ cell }) => ({
          //onBlur is more efficient, but could use onChange instead
          onBlur: (event) => {
            handleSaveCell(cell, event.target.value);
          },
        })}
        renderBottomToolbarCustomActions={() => (
          <Text sx={{ fontStyle: "italic", padding: "0 16px" }}>
            با دبل کلیک هر سلول را ویرایش کنید
          </Text>
        )}
        localization={MRT_Localization_FA}
      />
    );
  }
};

export default ProductAllManaer;
