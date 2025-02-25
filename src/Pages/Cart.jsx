import React, { useEffect, useState } from "react";
import { getCart, removeCartItem } from "../Helpers/CartHelpers";
import { GET, POST } from "../Helpers/Api";
import Modal from "../Components/Modal";
import { IoBagCheckOutline } from "react-icons/io5";
import { FcShipped } from "react-icons/fc";
import Bag from "../assets/bag.png";
import "@fontsource/poppins";
import FeedbackSection from "../Components/FeedbackSection";

function Cart() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [placingOrder, setPlacingOrder] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const cartItems = getCart();
      const fetchedProducts = [];

      for (const item of cartItems.items) {
        try {
          const data = await GET("product/" + item.id , item.title);
          fetchedProducts.push({ ...data.product, quantity: item.quantity});
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      }
      setItems(fetchedProducts);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  const handleRemove = (id) => {
    removeCartItem(id);
    setItems(items.filter((item) => item._id !== id));
  };

  const handleIncreaseQuantity = (id) => {
    const updatedCart = getCart().items.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );

    localStorage.setItem("cart", JSON.stringify({ items: updatedCart }));

    setItems((prevItems) =>
      prevItems.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (id) => {
    const updatedCart = getCart().items.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );

    localStorage.setItem("cart", JSON.stringify({ items: updatedCart }));

    setItems((prevItems) =>
      prevItems.map((item) =>
        item._id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handlePlaceOrder = async () => {
    if (!address.trim()) {
      alert("Please enter your address.");
      return;
    }
    setPlacingOrder(true);
    try {
      await POST("order/new", { address, items });
      alert("Your order has been placed successfully!");
      setModalOpen(false);
      setItems([]);
      localStorage.setItem("cart", JSON.stringify({ items: [] }));
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place the order. Please try again.");
    } finally {
      setPlacingOrder(false);
    }
  };

  const totalPrice = items.reduce((sum, item) => sum + item.mrp * item.quantity, 0);
  const deliveryCharge = 10;
  const overallCharge = 2;
  const finalPrice = totalPrice + deliveryCharge + overallCharge;

  return (
    <div>
      <div className="flex justify-items-center px-2 ml-80 py-5">
      <ol class="flex items-center w-full">
          <li class="flex w-full items-center text-[#6A5ACD] dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-[#6A5ACD] after:border-4 after:inline-block dark:after:border-blue-800">
            <span class="flex items-center justify-center w-10 h-10 bg-[#6A5ACD] rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
              <svg
                class="w-3.5 h-3.5 text-white lg:w-4 lg:h-4 dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5.917 5.724 10.5 15 1.5" />
              </svg>
            </span>
          </li>
          <li class="flex w-full items-center text-[#6A5ACD] after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-300 after:border-4 after:inline-block dark:after:border-gray-700">
            <span class="flex items-center justify-center w-10 h-10 bg-[#6A5ACD] rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
              <FcShipped className="size-8" />
            </span>
          </li>
          <li class="flex items-center w-full">
            <span class="flex items-center justify-center w-10 h-10 bg-gray-300 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
              <IoBagCheckOutline className="size-8" />
            </span>
          </li>
        </ol>
      </div>

      <div>
        <h1 className="text-3xl text-[#800080] font-bold p-5 pl-9 font-poppins">
          <div className="flex flex-wrap">
            My Shopping Bag
            <img src={Bag} alt="bag" className="h-12 p-1" />
          </div>
          ({items.length} Items)
        </h1>
      </div>
      <div className="p-4">
        {loading ? (
          <p className="text-gray-600 font-serif">Loading...</p>
        ) : items.length === 0 ? (
          <div className="text-center text-gray-600 font-serif">
            Your cart is empty.
            <br /><br />
            <FeedbackSection />
            <div className="w-full text-center bg-white text-[#36618a] py-2 mt-10 pt-16">
                <marquee className="behaviour-scroll direction-left">
                  <span className="font-semibold text-[#800080]"> Thank You! Visit Again</span>
                </marquee>
              </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white p-4 shadow-lg rounded-lg m-2">
              {items.map((item) => (
                <div key={item._id} className="flex items-center border-b py-4 hover:bg-gray-100">
                  <img src={item.images[0]} alt={item.title} className="w-24 h-24 object-cover rounded-lg p-3" />
                  <div className="ml-4 flex-1">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-lg font-bold">₹{item.mrp}</p>
                    <p className="text-gray-600 text-sm">Quantity: {item.quantity} kg</p>
                  </div>
                  <div className="pr-3 flex gap-4">
                    <div className="flex items-center space-x-2">
                      <button onClick={() => handleDecreaseQuantity(item._id)} className="bg-gray-300 px-3 py-1 rounded-full">-</button>
                      <span className="text-lg font-semibold">{item.quantity}</span>
                      <button onClick={() => handleIncreaseQuantity(item._id)} className="bg-[#6A5ACD] text-white px-3 py-1 rounded-full">+</button>
                    </div>
                    <button onClick={() => handleRemove(item._id)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg">Remove</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center items-center">
              <div className="bg-white p-6 shadow rounded-lg sticky top-20 h-fit font-serif w-80 ">
                <h3 className="text-lg font-semibold mb-4">Price Details</h3>
                <div className="space-y-2 text-gray-700">
                  <p className="flex justify-between">
                    <span>Total MRP</span> <span>₹{totalPrice}</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Delivery Charges</span> <span>₹{deliveryCharge}</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Platform Fee</span> <span>₹{overallCharge}</span>
                  </p>
                  <hr className="my-2" />
                  <p className="flex justify-between font-bold text-lg">
                    <span>Total</span> <span>₹{finalPrice}</span>
                  </p>
                </div>
                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full bg-[#6A5ACD] text-white py-3 mt-4 rounded-lg text-lg font-semibold hover:bg-[#393072]">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} onPlaceOrder={handlePlaceOrder} address={address} setAddress={setAddress} placingOrder={placingOrder} />
    </div>
  );
}

export default Cart;