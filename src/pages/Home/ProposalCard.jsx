function ProposalCard() {
  return (
    <div className="w-1/6">
      <div className="pl-10 pt-5">
        <img
          src="https://hamkala.com/wp-content/uploads/Blender-Kenwood-SB32732c3cd.jpeg"
          alt=""
          className="w-[150px] h-[150px]"
        />
        <p className="text-sm _font-medium mt-1">مخلوط کن کنوود مدل SB327</p>
      </div>
      <div className="flex justify-between pl-3 pr-3 items-center">
        <bdi className="_font-bold">
          ۷۲۷,۰۰۰&nbsp;
          <span className="_font-fat">تومان</span>
        </bdi>
        <div>
          <div className="bg-yellow-500 w-10 flex justify-center items-center rounded-md text-2xl text-white">
            +
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProposalCard;
