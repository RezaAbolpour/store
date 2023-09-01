import { useMemo, useEffect } from "react";
import { MaterialReactTable } from "material-react-table";
import { fetchAllProduct } from "../../data/dataslice";
import { useDispatch, useSelector } from "react-redux";
import { MRT_Localization_FA } from 'material-react-table/locales/fa';
//nested data is ok, see accessorKeys in ColumnDef below
let data;

const PageInatin = () => {
  //should be memoized or stable
  const dispach = useDispatch();
  useEffect(() => {
    dispach(fetchAllProduct());
  }, []);
  const Dat = useSelector((state) => state.data.data);
  data = Dat;
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

  return (
    <div className="_font-bold">
      <MaterialReactTable
        columns={columns}
        data={data}
        localization={MRT_Localization_FA}
      />
      ;
    </div>
  );
};

export default PageInatin;