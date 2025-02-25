import { useState, useEffect } from "react";
import transport from "../assets/t2.jpeg"

const TransportPage = () => {
  const [transportList, setTransportList] = useState([]);
  const [message, setMessage] = useState("");

  // Fetch transport data from backend
  useEffect(() => {
    fetch("http://localhost:3000/transport")
      .then((res) => res.json())
      .then((data) => setTransportList(data))
      .catch((err) => console.error("Error fetching transport data:", err));
  }, []);

  // Function to handle booking a transport option
  const handleBooking = async (id) => {
    const response = await fetch(`http://localhost:3000/transport/book/${id}`, {
      method: "POST",
    });

    const result = await response.json();

    if (response.ok) {
      setMessage(result.message);
      // Update transport availability in UI
      setTransportList((prev) =>
        prev.map((item) =>
          item._id === id ? { ...item, availability: "Booked" } : item
        )
      );
    } else {
      setMessage(result.error);
    }
  };

  return (
    <div className="p-6">
      <div>
        <img
          src={transport}
          alt="Background GIF"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        {/* Styled Header */}
        <div className="z-10 relative">
        <div className="pl-96 max-w-fit">
          <h1 className="text-5xl font-bold text-white mb-6 pb-2 text-center font-serif backdrop-blur-md p-3">
            Available Transport Services🚛
          </h1>
          </div>

          {/* Success/Error Message */}
          {message && <p className="text-lg text-green-700 bg-green-200 p-3 rounded-md shadow-md">{message}</p>}

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 p-5">
            {transportList.map((item) => (
              <li key={item._id} className="p-4 bg-white border-l-4 border-r-4 border-[#643288] h-64 rounded-lg shadow-lg flex justify-between items-center">
                <div className="text-lg text-gray-800 pb-20 pl-2">
                  <p><strong>🚚 Vehicle:</strong> {item.vehicleNumber}</p>
                  <p><strong>👤 Provider:</strong> {item.providerName}</p>
                  <p><strong>📞 Contact:</strong> {item.contactNumber}</p>
                  <p className="flex items-center">
                    <strong>📌 Status:</strong>
                    {item.availability === "true"
                      ? <span className="text-green-600 ml-2 font-bold">🟢 Available</span>
                      : <span className="text-red-600 ml-2 font-bold">🔴 Booked</span>}
                  </p>
                </div>

                {/* Book Now Button */}
                <div className="flex justify-end pr-6 pt-36">
                {item.availability === "true" && (
                  <button
                    className="bg-[#643288] text-white px-6 py-2 text-lg font-semibold rounded-lg shadow-md transform transition-all hover:scale-105 hover:shadow-xl"
                    onClick={() => handleBooking(item._id)}
                  >
                    BOOK NOW
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

export default TransportPage;
