import FreeSoloCreateOption from "./AutoCompletInput";
function AddProduct() {
  return (
    <div className="h-screen flex justify-center items-center p-60">
      <div className="bg-white w-screen h-[34rem] rounded-md">
        <div className="flex justify-center mt-4 text-lg _font-fat">
          افزودن کالا
        </div>
        <div className="flex">
            <FreeSoloCreateOption/>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
