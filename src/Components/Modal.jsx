import React from "react";
import { FaGooglePay } from "react-icons/fa";
import { SiPaytm } from "react-icons/si";
import { FaAmazonPay } from "react-icons/fa";
import { GiPayMoney } from "react-icons/gi";
import { SiAfterpay } from "react-icons/si";
import { PiBankFill } from "react-icons/pi";
import "@fontsource/poppins";

function Modal({ isOpen, onClose, onPlaceOrder, address, setAddress }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ">
      <div className="bg-white p-6 rounded-lg w-96 border-black shadow-sm hover:bg-gray-100 ">
        <h2 className="text-xl font-bold mb-4 text-[#643288] font-serif">Enter Your Details</h2>

        <label className="block mb-2 font-serif">Address:</label>
        <textarea
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)} />

        <label className="block mb-2 font-poppins font-semibold text-[#643288]">Payment Mode:</label>
        <div className="flex flex-wrap font-serif">
          <SiAfterpay size={20} className="p-1" />
          <a href="#blog" class="block py-2 px-3 md:p-0 text-black rounded-sm hover:text-[#800080] md:hover:bg-transparent md:dark:hover:text-[#800080] dark:text-white dark:border-gray-700">Pay Now : Choose your payement option</a>
        </div>
        <button className="text-white bg-[#6A5ACD] hover:bg-[#393072] font-medium rounded-lg text-sm px-4 py-2 text-center">
          <FaGooglePay size={30} />
        </button>
        <button className="text-white m-4 bg-[#6A5ACD] hover:bg-[#393072]  font-medium rounded-lg text-sm px-4 py-2 text-center">
          <SiPaytm size={30} />
        </button>
        <button className="text-white bg-[#6A5ACD] m-2 hover:bg-[#393072]  font-medium rounded-lg text-sm px-4 py-2 text-center">
          <FaAmazonPay size={30} />
        </button>
        <button className="text-white bg-[#6A5ACD] m-2 hover:bg-[#393072]  font-medium rounded-lg text-sm px-4 py-2 text-center">
          <PiBankFill size={30} />
        </button>

        <div className=" flex flex-wrap">
          <GiPayMoney size={25} className="p-1" />
          <a href="#" class="block py-2 px-3 md:p-0 text-black rounded-sm hover:text-[#800080] hover:bg-[#800080] md:hover:bg-transparent md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Cash On Delivery</a>
        </div>


        <div className="flex justify-between gap-3 pt-5">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={onPlaceOrder}
            className="bg-[#803daf] text-white px-4 py-2 rounded hover:bg-[#643288]"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
