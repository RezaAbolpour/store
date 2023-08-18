import  { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";

//nested data is ok, see accessorKeys in ColumnDef below
const data = [
  {
    brand: "nike",
    name_product: "261 Erdman Ford",
    discription: "East Daphne",
    price: "2500",
  },
  {
    brand: "nike",
    name_product: "261 Erdman Ford",
    discription: "East Daphne",
    price: "2500",
  },
  {
    brand: "nike",
    name_product: "261 Erdman Ford",
    discription: "East Daphne",
    price: "2500",
  },
  {
    brand: "puma",
    name_product: "261 Erdman Ford",
    discription: "East Daphne",
    price: "2500",
  },
];

const PageInatin = () => {
  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: "brand", //access nested data with dot notation
        header: "برند",
        size: 150,
      },
      {
        accessorKey: "name_product",
        header: "اسم محصول",
        size: 150,
      },
      {
        accessorKey: "discription", //normal accessorKey
        header: "توضیحات",
        size: 200,
      },
      {
        accessorKey: "price",
        header: "قیمت",
        size: 150,
      },
    ],
    []
  );

  return (
    <div className="_font-bold">
      <MaterialReactTable columns={columns} data={data} />;
    </div>
  );
};

export default PageInatin;
