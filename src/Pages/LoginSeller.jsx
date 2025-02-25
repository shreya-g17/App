import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { POST } from "../Helpers/Api";
import { AppContext } from "../Helpers/MyContext";
import Logo from "../assets/logo2.png";
import { FaRegUser } from "react-icons/fa";

export default function LoginSeller() {
  const navigate = useNavigate();
  const { setUser } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [form, setFormData] = useState({ email: "", password: "" });
  const [showContactText, setShowContactText] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    POST("user/loginSeller", form)
      .then((data) => {
        localStorage.setItem("token", data.token);
        setUser(data.token);
        navigate("/homeSeller");
        alert("Login Successful!");
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

      <div className="relative z-10 flex flex-col items-center  rounded-2xl justify-center w-[30vw] h-[65vh] p-8 bg-[#bfd2e1]  border border-[#4b0082] shadow-sm shadow-gray-200">
        <form
          className="w-full max-w-sm flex flex-col items-center space-y-3"
          onSubmit={handleSubmit}
        >
          <h3 className=" text-3xl font-extrabold font-poppins text-[#4b0082] text-center flex flex-col justify-center items-center">
            Seller Login Portal
            <div className=" text-2xl font-extrabold  flex flex-row justify-center items-center">
              FRESH{" "}
              <img
                src={Logo}
                alt="logo"
                className="size-16 justify-center items-center"
              />{" "}
              ROOTS
            </div>
          </h3>

          <div className="w-full">
            <label
              htmlFor="email"
              className="block mb-2 text-lg font-bold font-montserrat text-[#800080]"
            >
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-blue-600  text-sm rounded-lg focus:ring-[#800080] focus:border-[#800080] block w-full p-2.5"
              placeholder="name@company.com"
              required
            />
          </div>

          <div className="w-full">
            <label
              htmlFor="password"
              className="block mb-2 text-lg  font-bold font-montserrat text-[#800080]"
            >
              Your Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-blue-800 text-sm rounded-lg focus:ring-[#800080] focus:border-[#800080] block w-full p-2.5"
              required
            />
          </div>

          <div className="flex items-center justify-between w-full">
            <label className="flex items-center text-sm font-medium text-white">
              <input
                id="remember"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-[#4b0082]"
              />
              <span className="ml-2 text-[#800080]">Remember me</span>
            </label>
            <a href="#" className="text-sm text-[#00008B] hover:underline">
              Reset Password?
            </a>
          </div>

          <div className="w-full text-white font-medium text-sm px-2 py-0.5 text-center flex justify-center items-center gap-1">
            {loading ? <BeatLoader color="white" size={10} /> : ""}
          </div>

          <button
            type="submit"
            className="w-full font-montserrat font-bold text-white bg-[#835ca0] hover:bg-[#4b0082] focus:ring-2 focus:outline-none focus:ring-white rounded-lg text-sm px-5 py-2.5 text-center flex justify-center items-center gap-2"
          >
            LOGIN
          </button>
        </form>
      </div>

      {/* User Icon */}
      <div className="absolute bottom-6 right-5">
        <FaRegUser
          className="hover:text-[#835ca0] text-4xl cursor-pointer text-[#4b0082]"
          onClick={() => setShowContactText(!showContactText)}
        />
        {showContactText && (
          <div className="absolute bottom-16 right-5 bg-white italic text-black p-3 w-40 rounded shadow">
            <a href="/contact" className="text-black-500 hover:text-[#00008B]">
              Contact Us
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
