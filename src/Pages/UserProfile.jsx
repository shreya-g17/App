import React, { useState, useEffect } from "react";
import { GET } from "../Helpers/Api";
import LoadingOverlay from "react-loading-overlay";
import { useNavigate } from "react-router-dom";
import { RiCoupon3Fill } from "react-icons/ri";
import { MdOutlinePayment, MdAccountCircle } from "react-icons/md";

function UserProfile() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [activeIcon, setActiveIcon] = useState(null);

  const getUser = async () => {
    try {
      setLoading(true);
      const data = await GET("user/userProfile");
      setUser(data.user);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    getUser();
  }, []);

  return (

    <div className="relative min-h-screen bg-white">
      <div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-r from-[#9d91eb] to-[#6A5ACD]"></div>
      <RiCoupon3Fill
        className="absolute top-5 right-5 text-white text-4xl cursor-pointer z-50 pointer-events-auto"
        onClick={() => setActiveIcon(prev => (prev === 'coupon' ? null : 'coupon'))}/>
      {activeIcon === 'coupon' && (
        <div className="absolute top-16 right-5 bg-white text-black p-3 rounded shadow z-50">
          <h1>Coupon Availabe: APPLY-FRD25 for flat 25% discount</h1>
        </div>
      )}
      <MdOutlinePayment
        className="absolute top-5 right-20 text-white text-4xl cursor-pointer z-50 pointer-events-auto"
        onClick={() => setActiveIcon(prev => (prev === 'payment' ? null : 'payment'))}/>
      {activeIcon === 'payment' && (
        <div className="absolute top-16 right-20 bg-white text-black p-3 rounded shadow z-50">
          Sorry, We couldn't find any payment message for you.
        </div>
      )}
      <MdAccountCircle
        className="absolute top-5 right-36 text-white text-4xl cursor-pointer z-50 pointer-events-auto"
        onClick={() => setActiveIcon(prev => (prev === 'account' ? null : 'account'))}/>
      {activeIcon === 'account' && (
        <div className="absolute top-16 right-36 bg-white text-black p-3 rounded shadow z-50">
          ⚠ Delete my account
        </div>
      )}

      <div>
        <div className="relative z-10 flex items-center justify-center min-h-screen p-10 pt-48">
          <div className="bg-white shadow-2xl shadow-gray-300 rounded-2xl p-12 w-[40%] min-h-[66vh] flex flex-col items-center text-center border border-gray-900 relative">
            <div className="absolute top-[-20%] left-1/2 transform -translate-x-1/2">
              <img
                src={user?.image}
                className="rounded-full w-40 h-40 border-4 border-white shadow-lg"
                alt="user-image" />
            </div>
            <div className="text-[#800080] absolute top-1 right-4">Joined in February, 2025</div>
            <div className="mt-14 ">
              <h2 className="mt-6 text-3xl font-semibold font-serif italic text-[#800080]">
                {user?.name}
              </h2>
              <h1 className="mt-1 text-xl font-semibold font-serif text-[#643288]">
                Buyer from, 🇮🇳 India
              </h1>
              <div className="text-xl font-semibold text-black place-items-start mt-10 font-poppins">
                <p>Email I'd : {user?.email}</p>
                <p>Phone No. : {user?.phone}</p>
              </div>
            </div>
            <div className="pt-6">
              <button
                type="button"
                onClick={handleLogout}
                className="mt-8 text-white  bg-[#9d91eb] hover:bg-[#6A5ACD] focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xl px-10 py-2">
                LOGOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserProfile;
