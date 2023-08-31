import StarPurple500Icon from "@mui/icons-material/StarPurple500";
function ProductCategori(propse) {
  console.log(propse.dataProduct.name);
  return (
    <div className="w-1/6 p-1 border-l-2 border-b-2 border-slate-300">
      <div className="pt-1">
        <div className="flex justify-center">
          <img
            src="https://hamkala.com/wp-content/uploads/Blender-Kenwood-SB32732c3cd.jpeg"
            alt=""
            className="w-[150px] h-[150px]"
          />
        </div>
        <div className="w-full flex justify-start">
          <p className="text-sm font-medium mt-1">{propse.dataProduct.name}</p>
        </div>
      </div>
      <div className="flex items-center justify-end mt-5 mb-5">
        <div className="h-2/6 flex items-end">
          <bdi className="_font-bold">
            ۷۲۷,۰۰۰&nbsp;
            <span className="_font-fat">تومان</span>
          </bdi>
        </div>
      </div>
      <hr />
      <div className="flex items-center justify-end mt-1">
        <div className="w-3/6 flex items-center">
          <span className="text-xs">0.0</span>
          <StarPurple500Icon sx={{ color: "#FC0", width: "25px" }} />
          <soan className="text-xs text-slate-300">از0 رای</soan>
        </div>
        <div className="w-3/6 flex justify-end">
          <div className="bg-yellow-500 w-10 flex justify-center items-center rounded-md text-2xl text-white">
            +
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCategori;
