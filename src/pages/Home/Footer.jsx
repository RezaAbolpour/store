function Footer() {
  return (
    <div>
      <div className="h-[41px] bg-[#EEEEEE] flex items-center justify-end pr-10 mt-5">
        <p className="mr-10">
          بوشهر، خیابان امام خمینی (ره) جنب بانک ملت شعبه مرکزی
        </p>
        <p>0773</p>
        <div>: شماره تماس </div>
      </div>
      <div className="h-[150px] bg-[#F9F9F9]">
        <div className="flex justify-end pl-10 pr-10 gap-[190px]">
          <div dir="rtl" className="flex flex-col gap-2 mt-2">
            <p className="_font-bold">راهنما همکالا</p>
            <p className="text-xs _font-medium">سیاست های قیمت گذاری</p>
            <p className="text-xs _font-medium">سیاست های خریدار و فروشنده</p>
            <p className="text-xs _font-medium">سیاست های خریدار و فروشنده</p>
            <p className="text-xs _font-medium">گزارش تخلف</p>
          </div>
          <div dir="rtl" className="flex flex-col gap-2 mt-2">
            <p className="_font-bold">راهنمای مشتریان</p>
            <p className="text-xs _font-medium">رویه‌های بازگرداندن کالا</p>
            <p className="text-xs _font-medium">پیگیری سفارش</p>
            <p className="text-xs _font-medium">سوالات متداول</p>
          </div>
          <div dir="rtl" className="flex flex-col gap-2 mt-2">
            <p className="_font-bold">خدمات مشتریان</p>
            <p className="text-xs _font-medium">درباره همکالا</p>
            <p className="text-xs _font-medium">مجوزهای فروشگاه</p>
            <p className="text-xs _font-medium">تماس با ما</p>
          </div>
        </div>
        <hr className="m-5" />
        <div className="h-[73px] flex items-center pr-10 pl-10" dir="rtl">
          <div className="flex items-center w-2/6">
            <div className="text-[#81858B] _font-medium">
              همکالا <b className="text-red-500">©</b> ۱۴۰۲ – ۱۳۹۴{" "}
            </div>
            <div className="text-[#81858B] _font-medium mr-1">
              <b>
                <a className="text-[#F2A70F]">شرایط استفاده</a>
              </b>{" "}
              |{" "}
              <b>
                <a className="text-[#F2A70F]">سیاست‌های حریم خصوصی</a>
              </b>
            </div>
          </div>

          <div className="flex items-center w-4/6 justify-end gap-2">
            <img
              width="96"
              height="30"
              src="https://hamkala.com/wp-content/uploads/mellatbank.png"
            />
            <img
              width="96"
              height="30"
              src="https://hamkala.com/wp-content/uploads/mellibank.png"
            />
            <img
              width="96"
              height="30"
              src="https://hamkala.com/wp-content/uploads/ttbank.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
