import * as yup from "yup";

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";

function App() {
  const [enablePasswordField, setEnablePasswordField] = useState(false);

  const loginSchema = yup.object().shape({
    email: yup
      .string()
      .email("This value is not a valid email address.")
      .required("This field cannot be left blank."),
    password: yup.string().required("Please enter a password."),
  });

  const onSubmit = () => {
    console.log("Submitted");
  };

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit,
  });

  return (
    <>
      <div className="flex min-h-full flex-col justify-center items-center sm:w-full sm:max-w-sm sm:mx-auto mt-20 font-ciscosans">
        <div className="bg-[#FFFFFF] border border-[#DDDDDD] rounded-[2px] md:w-[400px]">
          <div className="flex flex-col">
            <div className="flex items-center gap-x-2 justify-end mr-[10px] mt-[10px]">
              <div>
                <img src="/world.png" className="w-[25px]" />
              </div>
              <div className="text-[14px] text-[#6c757d]">
                <p>US</p>
                <p>EN</p>
              </div>
            </div>
            <div className="px-[90px] py-[15px] flex justify-center border-[#DDDDDD] border-b">
              <img src="/fs0a411g73DFKaj7K5d7.png" className="w-[76px]" />
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="py-[60px] px-[37px] mt-[20px]"
          >
            <div className="flex justify-center flex-col items-center">
              <p className="text-[#5e5e5e] text-[24px] mt-[10px] mb-[15px]">
                Log in
              </p>
              <div className="flex flex-col w-full gap-y-[20px]">
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="email"
                    className="font-bold text-[14px] text-[#5e5e5e] mb-1"
                  >
                    Email
                  </label>
                  <input
                    value={values.email}
                    id="email"
                    onChange={handleChange}
                    className="border border-[#BBBBBB] rounded-[4px] text-[14px] px-[8px] py-[6px] text-[#5e5e5e] hover:border-[#888888] focus:outline-none focus:border-[#249bcd] focus:shadow-sm focus:shadow-[#8fdef4]"
                  />
                  {errors.email ? (
                    <span className="text-[14px] text-[#d93934] mt-2">
                      {errors.email}
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                {enablePasswordField && (
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="password"
                      className="font-bold text-[14px] text-[#5e5e5e] mb-1"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      value={values.password}
                      onChange={handleChange}
                      type="password"
                      className="border border-[#BBBBBB] rounded-[4px] text-[14px] px-[8px] py-[6px] text-[#5e5e5e] hover:border-[#888888] focus:outline-none focus:border-[#249bcd] focus:shadow-sm focus:shadow-[#8fdef4]"
                    />
                    {/* {errors.password ? 
                  <span className="text-[14px] text-[#d93934] mt-2">{errors.password}</span>  : ""
                } */}
                  </div>
                )}
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  if (!errors.email) {
                    setEnablePasswordField(true);
                  }
                }}
                className={`bg-[#0175A2] text-white w-full h-[50px] rounded-3xl mt-[30px] mb-[20px] ${
                  enablePasswordField && `hidden`
                }`}
              >
                Next
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  onSubmit()
                }}
                className={`bg-[#0175A2] text-white w-full h-[50px] rounded-3xl mt-[30px] mb-[20px] ${
                  !enablePasswordField && `hidden`
                }`}
              >
                Log in
              </button>
            </div>
            <div className="flex flex-col justify-start w-full gap-y-[15px] py-[20px]">
              <NavLink
                className="text-[14px] hover:underline hover:text-[#924471] text-[#0175a2]"
                to="https://id.cisco.com/signin/unlock"
              >
                Unlock account?
              </NavLink>
              <NavLink
                className="text-[14px] hover:underline hover:text-[#924471] text-[#0175a2]"
                to="https://id.cisco.com/ui/v1.0/forgot-email"
              >
                Forgot email address?
              </NavLink>
              <NavLink
                className="text-[14px] hover:underline hover:text-[#924471] text-[#0175a2]"
                to="https://www.cisco.com/c/en/us/about/help/login-account-help.html"
              >
                Help
              </NavLink>
            </div>
            <div className="flex gap-x-2 pt-[30px] border-t border-[#DDDDDD] mt-[5px]">
              <p className="text-[14px] text-[#5e5e5e]">
                Don't have an account?
              </p>
              <NavLink
                to="https://id.cisco.com/signin/register"
                className="text-[14px] hover:underline hover:text-[#924471] text-[#0175a2]"
              >
                Sign up
              </NavLink>
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-center items-center gap-x-[8px] font-ciscosans mt-2">
        <NavLink
          to="web-help@cisco.com"
          className="text-[13px] hover:underline  text-[#0175a2]"
        >
          Contact support
        </NavLink>
        <NavLink
          to="https://www.cisco.com/c/en/us/about/legal/privacy-full.html"
          className="text-[13px] hover:underline  text-[#0175a2]"
        >
          Privacy
        </NavLink>
        <NavLink
          to="https://www.cisco.com/c/en/us/about/legal/terms-conditions.html"
          className="text-[13px] hover:underline  text-[#0175a2]"
        >
          Terms & Conditions
        </NavLink>
        <NavLink
          to="https://www.cisco.com/c/en/us/about/legal/privacy-full.html#cookies"
          className="text-[13px] hover:underline  text-[#0175a2]"
        >
          Cookies
        </NavLink>
        <NavLink
          to="https://www.cisco.com/c/en/us/about/legal/trademarks.html"
          className="text-[13px] hover:underline  text-[#0175a2]"
        >
          Trademarks
        </NavLink>
      </div>
    </>
  );
}

export default App;
