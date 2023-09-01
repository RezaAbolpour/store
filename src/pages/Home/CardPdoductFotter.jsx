function CardPdoductFotter() {
  return (
    <div className="bg-white rounded-md h-[325px] w-[210px]">
      <div className="flex items-center justify-center">
        <img
          src="https://hamkala.com/wp-content/uploads/Kenwood-BL770-Blender-0cd1bc.jpeg"
          className="w-28 p-2"
        />
      </div>
      <div className="flex justify-center items-center _font-bold">
        مخلوط کن کنوود مدل BL770
      </div>
      <div className="h-2/6 flex items-end pl-4">
        <bdi className="_font-bold">
          ۷۲۷,۰۰۰&nbsp;
          <span className="_font-fat">تومان</span>
        </bdi>
      </div>
      <div className="h-1/6 flex justify-end items-end pr-4">
        <div className="bg-yellow-500 w-10 flex justify-center items-center rounded-md text-2xl text-white">
          +
        </div>
      </div>
    </div>
  );
}

export default CardPdoductFotter;
