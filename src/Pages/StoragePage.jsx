import { useState, useEffect } from "react";
import storage from "../assets/s2.jpeg"

const StoragePage = () => {
  const [storageList, setStorageList] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/storage")
      .then((res) => res.json())
      .then((data) => setStorageList(data))
      .catch((err) => console.error("Error fetching storage data:", err));
  }, []);

  const handleBooking = async (id) => {
    const response = await fetch(`http://localhost:3000/storage/book/${id}`, {
      method: "POST",
    });

    const result = await response.json();

    if (response.ok) {
      setMessage(result.message);
      setStorageList((prev) =>
        prev.map((item) =>
          item._id === id ? { ...item, availability: false } : item
        )
      );
    } else {
      setMessage(result.error);
    }
  };

  return (
    <div className="p-8 min-h-screen">
      <div>
              <img
                src={storage}
                alt="Background GIF"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
              <div className="z-10 relative">
                <div className="pl-96 max-w-fit">
      <h1 className="text-5xl font-extrabold text-white backdrop-blur-md p-3 justify-between flex items-center mb-8 text-center italic font-serif">
        Available Storage Facilities
      </h1>
      </div>

      {message && (
        <p className="text-green-700 text-center font-medium text-lg mb-6">
          {message}
        </p>
      )}

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {storageList.map((item) => (
          <li
            key={item._id}
            className="bg-white shadow-md rounded-xl p-6 flex flex-col justify-between border-l-4 border-[#643288] min-h-[230px] text-gray-800"
          >
            {/* Top: Storage Details */}
            <div className="text-left">
              <h2 className="text-xl font-bold text-[#800080] mb-2 font-poppins">
                🏚 {item.provider}
              </h2>
              <p className="text-gray-700 text-sm">
                📍 {item.location} | 🏷️ {item.type}
              </p>
              <p className="text-gray-900 text-xl font-semibold">
                💰 ₹{item.costPerDay}/day
              </p>
              <p className="text-gray-700 text-sm font-semibold">
                ⚖️ Quantity - 80 kg
              </p>
              <p
                className={`text-sm font-semibold ${
                  item.availability ? "text-green-600" : "text-red-500"
                }`}
              >
                {item.availability ? "✅ Available" : "❌ Not Available"}
              </p>
            </div>

            {/* Contact Number at Bottom */}
            <p className="text-blue-700 text-md mt-4 text-left italic font-medium">
              📞 Contact us at:{" "}
              <span className="font-bold">{item.contactNumber}</span>
            </p>

            {/* Bottom: Buttons + Contact */}
            <div className="flex justify-end items-center mt-4">
              {item.availability && (
                <button
                  className="bg-green-700 text-white text-lg px-5 py-2 rounded-lg hover:bg-green-800 transition font-medium"
                  onClick={() => handleBooking(item._id)}
                >
                🔰 Book Now
                </button>
              )}
            </div>

            
          </li>
        ))}
      </ul>
      </div>
      </div>
    </div>
  );
};

export default StoragePage;
