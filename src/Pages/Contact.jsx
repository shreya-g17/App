import React, { useState } from "react";
import Contactbg from "../assets/Contactbg.png"; 
import Logo from "../assets/logo2.png";
import { MdOutlineContactSupport } from "react-icons/md";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const mailtoLink = `mailto:www.freshroots@gmail.com?subject=Contact%20Form%20Submission&body=Name:%20${encodeURIComponent(form.name)}%0AEmail:%20${encodeURIComponent(form.email)}%0AMessage:%20${encodeURIComponent(form.message)}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="flex flex-row w-full bg-[#FBFFE4] text-black justify-between items-center shadow-lg">
        <h1 className="font-semibold flex flex-row text-2xl pt-3 ml-2">
          Fresh <img src={Logo} alt="logo" className="max-h-12 pb-3" /> Roots
        </h1>
        <a href="/contact" className="font-semibold flex flex-row text-2xl p-3 mr-3">
          Support & Inquiries
          <MdOutlineContactSupport className="pt-2 size-9" />
        </a>
      </nav>

      {/* Full-Screen Background with Overlay */}
      <div 
        className="relative w-full h-screen bg-cover bg-center flex flex-col items-center justify-center text-center px-4"
        style={{ backgroundImage: `url(${Contactbg})` }}>
      
        {/* Text Above Contact Form */}
        <h2 className="relative z-10 text-[#fbffe4] text-3xl font-bold max-w-2xl">
          Questions, bugs, feedback, feature requests - we are here for it all.
        </h2>

        {/* Contact Form */}
        <div className="relative z-10 bg-[#fbffe4]  border-[#4b0082] shadow-lg shadow-gray-600 border-2  rounded-lg p-6 w-full max-w-md mt-6">
          <h2 className="text-2xl font-bold text-black underline text-center mb-4">Contact Us</h2>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              placeholder="your name"
              value={form.name}
              onChange={handleChange}
              className="border-[#4b0082] p-2 rounded text-lg"
              required/>
            <input
              type="email"
              name="email"
              placeholder="your email"
              value={form.email}
              onChange={handleChange}
              className="border-[#4b0082] p-2 rounded text-lg"
              required/>
            <textarea
              name="message"
              placeholder="your message"
              value={form.message}
              onChange={handleChange}
              className="border-[#4b0082] p-2 rounded text-lg"
              required />
            <button
              type="submit"
              className="bg-[#4e1776] text-white font-semibold py-2 px-4 rounded hover:bg-[#4c0082] hover:ring-2 ring-[#fbffe4]" >
              SEND
            </button>
            <a href="" className="text-sm text-right italic text-blue-600 underline" >Privacy Policy</a>
          </form>
        </div>
      </div>
    </div>
  );
}
