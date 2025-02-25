import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import { POST } from "../Helpers/Api";
import { AppContext } from "../Helpers/MyContext";

function Login() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [form, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    POST("user/login", form)
      .then((data) => {
        localStorage.setItem("token", data.token);
        setUser(data.token);
        navigate("/home");
      })
      .catch((error) => {
        alert(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="relative flex items-center justify-center h-screen">
      <div className="relative z-10 flex flex-col items-center justify-center w-[55vw] h-[80vh] bg-white shadow-lg rounded-lg">
        <div className="flex w-full h-full p-3">
          <div className="grid grid-rows-3 flex-1 bg-[#733b73] mr-2 rounded-lg shadow-md p-4">
            <div className="flex items-center justify-center flex-grow">
              <span className="font-serif italic text-[#FFF0F5] text-center">
                <h1 className="text-5xl">Welcome back!</h1>
                <p className="text-xl">We are glad to see you again...</p>
              </span>
            </div>
            <div className="flex items-center justify-center flex-grow">
              <h2 className="text-center text-lg font-medium text-white">
                " A revolutionary network of farmers and buyers working together
                for a better marketplace. "
              </h2>
            </div>
            <div className="flex flex-col items-center justify-center flex-grow px-10 py-5 text-xl">
              <p className="mb-2 text-sm font-medium text-[#e6e6fa]">
                Don't have an account? Let's get you started!
              </p>
              <Link
                to="/register"
                className="text-[#FFF0F5] bg-gradient-to-r from-[#5b1d63] via-[#45084e] to-[#430643] hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-[#e6e6fa] shadow-lg font-medium rounded-lg text-lg px-7 py-3.5 text-center"
              >
                REGISTER
              </Link>
            </div>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center p-8 bg-white border border-gray-300 rounded-lg shadow-sm">
            <form
              className="w-full max-w-sm flex flex-col items-center text-[#301934] space-y-4"
              onSubmit={handleSubmit}
            >
              <h4 className="text-xl font-medium text-gray-900 text-center">
                Login to{" "}
                <span className="text-[#301934] font-extrabold font-montserrat">
                  FRESH ROOTS
                </span>
              </h4>
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium "
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium "
                >
                  Your password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>
              <div className="flex items-center justify-between w-full">
                <label className="flex items-center text-sm font-medium text-[#800080]">
                  <input
                    id="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-[#800080] rounded-sm bg-gray-50 focus:ring-3 focus:ring-[#800080]"
                  />
                  <span className="ml-2">Remember me</span>
                </label>
                <a href="#" className="text-sm text-[#301934] hover:underline">
                  Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-[#4a2351] hover:bg-[#301934] focus:ring-4 focus:outline-none font-medium   focus:ring-[#e6e6fa] rounded-lg text-sm px-5 py-2.5 text-center flex justify-center items-center gap-2"
              >
                {loading ? (
                  <MoonLoader color="white" size={15} />
                ) : (
                  <div className="flex flex-row justify-center font-montserrat items-center gap-2">
                    LOGIN INTO YOUR ACCOUNT
                  </div>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
