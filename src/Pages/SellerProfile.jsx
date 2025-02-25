import React from "react";
import Profile from "../assets/pic1.jpg";

function SellerProfile() {
  return (
    <div className="min-h-screen relative z-10 bg-gray-100 flex flex-col items-center">
      <div className="w-full z-10 relative  flex flex-col justify-center items-center h-60 shadow-md">
        <img src={Profile} alt="Profile" className="h-40 w-40 rounded-full relative border-4 border-white shadow-lg" />
        <h1 className=" p-3 text-4xl font-poppins font-bold text-white">Hello, Sunita</h1>
      </div>

      <div>
        <div className="container mx-auto p-6 pt-11 z-10 relative">
          <div className="grid md:grid-cols-3 gap-32">
            <div className="bg-lime-100 rounded-xl shadow-md p-6 border w-96 ">
              <h2 className="text-xl font-semibold text-black mb-4 font-poppins">Personal Details</h2>
              <table className="w-full text-gray-800 b">
                <tbody>
                  {[
                    ["Name", "Sunita Devi"],
                    ["Email", "sunita@gmail.com"],
                    ["Seller I'd", "S12345"],
                    ["Phone", "+91 9874561230"],
                    ["Address", "Village Road, Ludhiana, Punjab"],
                    ["Pincode", "141001"],
                    ["State", "Punjab"],
                    ["Country", "India"]
                  ].map(([key, value]) => (
                    <tr key={key} className="border-b">
                      <td className="py-2 font-medium">{key}</td>
                      <td className="py-2">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-lime-100 rounded-xl shadow-md p-6 border">
              <h2 className="text-xl font-semibold text-black mb-4 font-poppins">Bank Details</h2>
              <table className="w-full text-gray-700">
                <tbody>
                  {[
                    ["Account Holder", "Sunita Devi"],
                    ["Bank Name", "State Bank of India"],
                    ["Account No.", "123456789012"],
                    ["IFSC Code", "SBIN0001234"],
                    ["UPI ID", "sunitadevi@upi"],
                    ["Total Earning", "₹75,000"],
                    ["Pending Payment", "8000"],
                    ["Withdrawn Amount", "₹82,000"]
                  ].map(([key, value]) => (
                    <tr key={key} className="border-b">
                      <td className="py-2 font-medium">{key}</td>
                      <td className="py-2">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Farm Details Card */}
            <div className="bg-lime-100 rounded-xl shadow-md p-6 border">
              <h2 className="text-xl font-semibold text-black mb-4 font-poppins">Farm Details</h2>
              <table className="w-full text-gray-700">
                <tbody>
                  {[
                    ["Farming Type", "Organic"],
                    ["Farm Size", "10 Acres"],
                    ["Business Name", "Sharma Organic Farms"],
                    ["Experience", "8 Years"],
                    ["Soil Type", "Loamy"],
                    ["PH Level", "6.5"],
                    ["Account Status", "Active"],
                    ["Registration Date", "15-01-2024"]
                  ].map(([key, value]) => (
                    <tr key={key} className="border-b">
                      <td className="py-2 font-medium">{key}</td>
                      <td className="py-2">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellerProfile;
