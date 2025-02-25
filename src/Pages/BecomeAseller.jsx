import React from "react";
import "@fontsource/poppins";
import Img from "../assets/becomeaseller.png";
import Logo from "../assets/logo2.png";
import { useNavigate } from "react-router-dom";

function BecomeASeller() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <nav className="flex items-center justify-between p-2 bg-[#643288] w-full">
        <div className="flex flex-row p-2">
          <h1 className="text-3xl font-bold text-white">Fresh</h1>
          <img src={Logo} alt="" className="h-10" />
          <h1 className="text-3xl font-bold text-white">Roots</h1>
        </div>
        <div className="flex justify-end p-3 pr-10">
          <button
            onClick={() => navigate("/contact")}
            className="text-[#643288] text-lg flex flex-wrap justify-between bg-[#D8BFD8] hover:bg-white font-bold rounded-lg px-3 py-2 text-center">
            Start Selling
          </button>
          </div>
      </nav>

      <div className="text-center mt-7">
        <h1 className="text-4xl font-extrabold text-gray-700 font-poppins ">
          Want to Become a Seller at Fresh Roots? <br />
          Do these simple steps -
          <br />
          <p className=" text-4xl font-semibold text-[#4b0082] pt-4">
            " HURRY UP! "
          </p>
        </h1>
      </div>
      <div>
        <img src={Img} alt="process-img" className="w-full" />
      </div>
    </div>
  );
}

export default BecomeASeller;
