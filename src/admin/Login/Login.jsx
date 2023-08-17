import AdminLoginIcon from "../../assets/Images/adminlogin.jpg";
import { useFormik } from "formik";
import * as Yup from "yup";
import publicAxios from "../../utils/instances/publicAxios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const AdminLogin = () => {
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
    onSubmit: (values, { resetForm }) => {
      publicAxios.post("/auth/login", values).then((response) => {
        Cookies.set("accessToken", response.data.token.accessToken);
        Cookies.set("refreshToken", response.data.token.refreshToken);
        navigate("/dashboard");
        resetForm();
      });
    },
  });
  return (
    <div className="border bg-[#0C356A] h-screen flex justify-center items-center shadow-2xl">
      <div className="w-3/6 h-auto bg-[#40F8FF] rounded-md shadow-lg shadow-[#000]">
        <form
          className="_font-bold p-3"
          dir="rtl"
          onSubmit={formik.handleSubmit}
        >
          <div className="flex justify-center items-center p-3">
            <img
              src={AdminLoginIcon}
              alt="adminicon"
              className="h-20 w-20 rounded-full"
            />
          </div>
          <p className="flex justify-center text-xl">ورود ادمین</p>
          <div className="flex flex-col justify-center items-center gap-3 mt-2">
            <input
              type="text"
              id="username"
              name="username"
              onChange={formik.handleChange}
              value={formik.values.username}
              onBlur={formik.handleBlur}
              className="w-3/6 rounded-md p-2"
              placeholder="نام کاربری"
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="text-red-500 _font-medium">
                {formik.errors.username}
              </div>
            ) : null}
            <input
              type="password"
              id="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
              className="w-3/6 rounded-md p-2"
              placeholder="رمز عبور"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 _font-medium">
                {formik.errors.password}
              </div>
            ) : null}
            <button
              type="submit"
              className="bg-[#D5FFD0] w-3/6 mb-2 rounded-md p-2"
            >
              ورود
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
