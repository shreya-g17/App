import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const FeedbackSection = ({ orderId, userId }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async () => {
    if (!rating) {
      alert("Please provide a rating before submitting.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ orderId, userId, rating, feedback }),
      });

      if (response.ok) {
        alert("Thank you for your feedback!");
        setRating(0);
        setFeedback("");
      } else {
        alert("Failed to submit feedback. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h3 className="text-xl font-semibold text-gray-800 mb-2 font-poppins">Rate Your Experience</h3>
      <div className="flex items-center mb-4 justify-center">
        {[...Array(5)].map((_, index) => {
          const currentRating = index + 1;
          return (
            <FaStar
              key={index}
              className={`cursor-pointer text-3xl transition-all ${currentRating <= (hover || rating) ? "text-yellow-400" : "text-gray-300"
                }`}
              onClick={() => setRating(currentRating)}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(rating)}
            />
          );
        })}
      </div>
      <textarea
        className="w-3/6 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        rows="3"
        placeholder="Write your feedback here..."
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)} />
      <div className="space-x-10">
        <button className="mt-3  text-white bg-[#6A5ACD] hover:bg-indigo-700 px-4 py-2 rounded-lg" onClick={handleSubmit}>
          Submit Feedback
        </button>
        <a href="/home">
          <button className="text-white bg-[#6A5ACD] hover:bg-indigo-700 px-4 py-2 rounded-lg">Continue Shopping</button>
        </a>
      </div>
    </div>
  );
};

export default FeedbackSection;
