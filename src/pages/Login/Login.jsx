import loginStyle from "./login.module.css";
import logoLogin from "../../assets/Images/logoAmazon.jpg";
import LogoheaderMobile from "../../assets/Images/headrerMobileWave.png";
import { useMediaQuery } from "react-responsive";
import { useFormik } from "formik";
import * as Yup from "yup";
import publicAxios from "../../utils/instances/publicAxios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
function LoginDesktop() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("فیلد نام کاربری را پرکنید"),
      password: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("فیلد پسورد را پر کنید"),
    }),
    onSubmit: (values) => {
      publicAxios.post("/auth/login", values).then((response) => {
        Cookies.set("accessToken", response.data.token.accessToken);
        Cookies.set("refreshToken", response.data.token.refreshToken);
        navigate("/dashboard");
      });
    },
  });
  return (
    <div
      className={`${loginStyle.backgroundLogin} flex justify-center items-center _font-bold`}
    >
      <div className="bg-white w-5/6 h-4/6 rounded-3xl">
        <div className="flex h-10">
          <div className="w-5/6 pl-10 pt-2 flex items-center">
            <img src={logoLogin} alt="logo" className="w-60 h-10" />
          </div>
          <div className="w-1/6 flex justify-around items-center">
            <p className="text-blue-700 font-medium">قوانین</p>
            <p className="text-blue-700 font-medium">حریم خصوصی</p>
            <p className="text-blue-700 font-medium">کمک</p>
          </div>
        </div>
        <div className="flex pl-10 h-full">
          <div className="w-3/6">
            <p className="p-10">
              وب‌سایت ما با برخوردهای دست اول و تجربه‌ای منحصربه‌فرد، اجناس با
              کیفیت بالا و متنوعی را به شما ارائه می‌دهد. ما به افتخار ارایه
              دهنده محصولاتی هستیم که با دقت و استانداردهای بالا انتخاب می‌شوند
              و تضمین می‌کنیم که شما تنها بهترین را از ما دریافت خواهید کرد.
            </p>
            <div className="pl-10 h-2/6 w-4/6">
              <div className="rounded-md mt-20 h-full w-full bg-slate-100">
                <div className="flex flex-col  h-full">
                  <div className="flex-grow pl-5 flex items-center" dir="rtl">
                    حساب ندارید؟
                  </div>
                  <div className="flex-grow  flex items-center pl-5">
                    <button className="bg-blue-300 p-2 rounded text-black font-medium border-solid border-2 border-sky-500 w-5/6">
                      ساخت حساب رایگان آمازون
                    </button>
                  </div>
                  <div className="flex-grow pl-5 flex items-center">
                    هرچیزی که بخواهید در اینجا است انواع کتاب ها را نیز میتوانید تهیه کنید
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-3/6 flex justify-center p-5 items-center">
            <form onSubmit={formik.handleSubmit}>
              <div className="bg-slate-100 rounded-md h-5/6 w-full">
                <div className="text-2xl font-medium flex justify-center items-center h-1/6">
                  وارد حساب خودتان بشوید
                </div>
                <div className="p-2 w-4/6 h-1/6">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    onBlur={formik.handleBlur}
                    placeholder="نام کاربری"
                    className="w-full rounded-md h-full pl-2"
                  />
                  {formik.touched.username && formik.errors.username ? (
                    <div className="text-red-500 _font-medium">
                      {formik.errors.username}
                    </div>
                  ) : null}
                </div>
                <div className="p-2 w-4/6 h-1/6">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                    placeholder="رمز عبور"
                    className="w-full rounded-md h-full pl-2"
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className="text-red-500 _font-medium">
                      {formik.errors.password}
                    </div>
                  ) : null}
                </div>
                <div className="flex mt-10 gap-5 h-1/6 pl-2">
                  <div className="flex items-center justify-center w-2/6">
                    <button
                      className={`w-full h-full rounded-md font-medium bg-[#EEE0C9]`}
                      type="submit"
                    >
                      ورود
                    </button>
                  </div>
                  <p className="w-2/6 flex justify-center items-center">
                    زمانی که وارد میشوید یعنی تمامی قوانین حفظ حریم خصوصی را
                    قبول کردید
                  </p>
                </div>
                <div className="pl-2 mt-5 text-blue-600">
                  آیا رمز خودتان را فراموش کردید؟
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
function LoginMobile() {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("فیلد نام کاربری را پرکنید"),
      password: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("فیلد پسورد را پر کنید"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <img src={LogoheaderMobile} alt="headerMobile" />
      <div className="flex justify-center font-bold text-2xl text-orange-400">
        وارد شدن به حساب
      </div>
      <form onSubmit={formik.handleSubmit} className="_font-bold">
        <div className="pl-5 pr-5 mt-10">
          <p className="text-sm font-medium text-orange-400">ایمیل</p>
          <div className="border-b-orange-400 border-b _font-regular">
            <input
              id="username"
              name="username"
              onChange={formik.handleChange}
              value={formik.values.username}
              onBlur={formik.handleBlur}
              type="text"
              placeholder="ایمیل خودتان را وارد کنید"
              className="border-none outline-none"
            />
          </div>
          {formik.touched.username && formik.errors.username ? (
            <div className="text-red-500 _font-medium">
              {formik.errors.username}
            </div>
          ) : null}
        </div>
        <div className="pl-5 pr-5 mt-10">
          <p className="text-sm font-medium text-orange-400">رمز عبور</p>
          <div className="border-b-orange-400 border-b _font-regular">
            <input
              type="password"
              id="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
              placeholder="رمز عبور خودتان را وارد کنید"
              className="border-none outline-none"
            />
          </div>
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500 _font-medium">
              {formik.errors.password}
            </div>
          ) : null}
        </div>
        <div className="mt-2 flex justify-end pr-5">
          <p className="text-sky-500 font-medium">رمز خود را فراموش کردید؟</p>
        </div>
        <div className="flex justify-center mt-5 h-14">
          <button
            className="bg-orange-400 w-5/6 h-4/6 rounded-md"
            type="submit"
          >
            ورود
          </button>
        </div>
      </form>
    </>
  );
}
function Login() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  console.log(isDesktop);
  return <>{isDesktop ? <LoginDesktop /> : <LoginMobile />}</>;
}

export default Login;
