import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../Helpers/CartHelpers";
import { ToastContainer, toast } from "react-toastify";
import { Heart, ShoppingBag, ArrowLeft } from "lucide-react";
import logo from "../assets/logo2.png";
import { getWishlist, removeWishlistItem } from "../Helpers/WishlistHelper";
import { GET } from "../Helpers/Api";
import { IoCartSharp } from "react-icons/io5";
import Wish from "../assets/wish.png";
import "@fontsource/poppins";
import { RxCross2 } from "react-icons/rx";

function Wishlist() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const wishlistItems = getWishlist();

  useEffect(() => {
    const fetchProducts = async () => {
      const wishlistItems = getWishlist(); // Fetch latest wishlist
      const fetchedProducts = [];
      
      for (const id of wishlistItems) {
        try {
          const data = await GET("product/" + id);
          fetchedProducts.push(data.product);
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      }
      setProducts(fetchedProducts);
    };
  
    fetchProducts();
  }, [products]); // Trigger effect when `products` changes
  

  const handleRemoveFromWishlist = (id) => {
    if (!id) return;
  
    removeWishlistItem(id);
  
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product._id !== id)
    );
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    handleRemoveFromWishlist(product._id);
    toast.success("Moved to Bag");
  };


  return (
    <div>
      <nav className="bg-[#643288] font-serif dark:bg-gray-900 fixed w-full z-20 h-12.5 top-0 start-0 border-b border-gray-200 dark:border-gray-600 shadow-lg">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex flex-row p-2">
            <h1 className="text-3xl font-bold text-white">Fresh</h1>
            <img src={logo} alt="" className="h-10" />
            <h1 className="text-3xl font-bold text-white">Roots</h1>
          </div>

          <nav class="flex pr-16" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li class="inline-flex items-center">
                <a
                  href="#"
                  onClick={() => navigate("/home")}
                  class="inline-flex items-center text-sm font-medium text-tile-700 text-white hover:text-[#D8BFD8] dark:text-gray-400 dark:hover:text-white"
                >
                  <svg
                    class="w-3 h-3 me-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"

                  >
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                  </svg>
                  Home
                </a>
              </li>
              <li>
                <div class="flex items-center">
                  <svg
                    class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <a
                    href="#"
                    class="ms-1 text-sm font-medium text-tile-700 text-white hover:text-[#D8BFD8] md:ms-2 dark:text-gray-400 dark:hover:text-white"
                  >
                    Wishlist
                  </a>
                </div>
              </li>
            </ol>
          </nav>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              onClick={() => navigate("/cart")}
              className="text-[#643288] text-lg flex flex-wrap justify-between bg-white hover:bg-[#D8BFD8] font-bold rounded-lg px-3 py-2 text-center">
              <IoCartSharp size={22} /> Cart
            </button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto mt-20 p-4">
        <h2 className="text-3xl font-bold text-[#800080] font-poppins p-7 justify-center flex">
          <div className="flex flex-wrap">
            Your Wishlist
            <img src={Wish} alt="icon" className="h-12 p-1" />
          </div>
        </h2>

        {products.length === 0 ? (
          <p className="text-center text-xl text-gray-500">
            Your wishlist is empty.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
            {products.map((product) => (
              <div
                key={product._id}
                className="w-80 bg-white dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 hover:bg-gray-100 border border-gray-200 rounded-lg shadow-lg p-4 hover:cursor-pointer hover:scale-110">
                    <div className="flex justify-end p-1">
                  <button
                      onClick={() => handleRemoveFromWishlist(product._id)}
                      className="text-white bg-gray-300 hover:bg-gray-400 rounded-full p-1">
                      <RxCross2 size={15} />
                    </button>
                    </div>
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-full h-72 object-cover rounded-t-lg mb-4" />
                <h3 className="text-xl font-semibold">{product.title}</h3>
                <div className="flex justify-between items-center mt-1">
                  <div className="flex-col">
                    <p className="text-sm text-black">{product.quantity}</p>
                    <p className="text-lg font-bold">₹{product.price}</p>
                  </div>
                  <div className="flex pr-2">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="text-white bg-[#ad6fd9] hover:bg-[#4b0082] rounded-full p-3">
                      <IoCartSharp size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}

export default Wishlist; 