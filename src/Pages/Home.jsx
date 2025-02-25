import React, { useEffect, useState } from "react";
import { GET } from "../Helpers/Api";
import { addToCart } from "../Helpers/CartHelpers";
import { addToWishlist, getWishlist } from "../Helpers/WishlistHelper";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import logo from "../assets/logo2.png";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import IMG1 from "../assets/img1.png";
import IMG2 from "../assets/img2.png";
import IMG3 from "../assets/img3.png";
import IMG4 from "../assets/img4.png";
import IMG5 from "../assets/img5.png";
import Home2 from "../assets/home2.jpg"
import Home10 from "../assets/home11.jpg"
import Home11 from "../assets/home12.jpg"
import Home12 from "../assets/home13.jpg"
import Home13 from "../assets/home3.jpg"
import Home6 from "../assets/home7.jpg"
import Home8 from "../assets/home9.jpg"
import Home9 from "../assets/home10.jpg"
import Home14 from "../assets/home14.jpg"
import Home15 from "../assets/home15.jpg"
import "@fontsource/poppins";
import { BsShopWindow } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [wishlist, setWishlist] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const navigate = useNavigate();

  useEffect(() => {
    const mappedWish = getWishlist().reduce((acc, item) => {
      acc[item] = true;
      return acc;
    }, {});
    setWishlist(mappedWish);
    getCategories();
    getProducts();
  }, []);

  const handleAddToCart = (item) => {
    addToCart(item);
    toast.success("Item Added to cart");
    //navigate("/cart");
  };

  const handleWishlistToggle = (item) => {
    setWishlist((prev) => ({
      ...prev,
      [item._id]: !prev[item._id],
    }));
    addToWishlist(item);
    toast.success(
      wishlist[item._id] ? "Removed from Wishlist" : "Added to Wishlist"
    );
  };

  const getCategories = async () => {
    try {
      const response = await GET("category/list");
      setCategories(response.categories);
    } catch (error) {
      alert(error);
    }
  };

  const getProducts = async () => {
    try {
      const response = await GET("product/list");
      setProducts(response.products);
      setFilteredProducts(response.products);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getProducts();
}, []);

  const [categoryRefs, setCategoryRefs] = useState({});

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory(null);
    setCurrentPage(1);
    if (category) {
      const filtered = products.filter((p) => p.category && p.category._id === category._id);
      setFilteredProducts(filtered);
      setTimeout(() => {
        if (categoryRefs[category._id]?.current) {
          categoryRefs[category._id].current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      setFilteredProducts(products);
    }
  };
  

  useEffect(() => {
    const refs = {};
    categories.forEach((category) => {
      refs[category._id] = React.createRef();
    });
    setCategoryRefs(refs);
  }, [categories]);


  const handleSubcategoryClick = (subcategoryId) => {
    setSelectedSubcategory(subcategoryId);
    setCurrentPage(1);
    console.log(subcategoryId);
  
    if (subcategoryId) {
      // Filter products of selected subcategory
      setFilteredProducts(
        products.filter(
          (p) => p.subCategory && p.subCategory._id === subcategoryId
        )
      );
    } else {
      // Show all products of selected category if no subcategory is selected
      setFilteredProducts(
        products.filter(
          (p) => p.category && p.category._id === selectedCategory?._id
        )
      );
    }
  };

  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() !== "") {
    }
  };


  const [activeUser, setActiveUser] = useState(null)
  useEffect(() => {
    const handleOutsideclick = (event) => {
      if (!event.target.closest("#dropdownUserLink") && !event.target.closest("#dropdownUser")) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideclick);
    return () => document.removeEventListener("click", handleOutsideclick);
  }, []);

  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".category-dropdown")) {
        setActiveCategory(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const carouselImages = [
    IMG1, IMG2, IMG3, IMG4, IMG5,

  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);



  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div className="flex flex-col font-sans overflow-x-hidden bg-white ">
      <nav className="flex items-center justify-between p-4 bg-[#643288] fixed z-10 w-full">

        <div className="flex flex-row p-2">
          <h1 className="text-3xl font-bold text-white">Fresh</h1>
          <img src={logo} alt="" className="h-10" />
          <h1 className="text-3xl font-bold text-white">Roots</h1>
        </div>

        <div className="relative flex items-center justify-center space-x-4 pr-8">
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-[#e6e6fa] w-96 text-green-800 rounded-lg flex items-center justify-start transition-all">
            <div className="p-1 pr-2 flex items-center text-gray-500">
              <FaSearch />
            </div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search here..."
              className="px-4 py-2 border border-gray-300 rounded-l-lg w-full rounded justify-start focus:outline-none focus:ring-2 focus:ring-[#643288] transition-all"
            />
          </button>
          <div className="flex flex-wrap space-x-1">
            <FaUserCircle className="h-14 text-white" />
            <a href="/login" className="flex items-center justify-between w-full py-2 px-3 text-white text-xl font-semibold rounded-sm md:hover:bg-transparent md:border-0 md:hover:text-[#e6e6fa] md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white">
              Login</a>
          </div>
          <div className="flex flex-wrap space-x-1 pr-4 pl-4">
            <BsShopWindow className="h-14 text-white" />
            <a href="/becomeaseller" className="flex items-center justify-between w-full py-2 px-3 text-white text-xl font-semibold rounded-sm md:hover:bg-transparent md:border-0 md:hover:text-[#e6e6fa] md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white">
              Become a Seller</a>
          </div>

          <FaHeart onClick={() => navigate("/wishlist")} size={25} className="cursor-pointer text-[#e6e6fa] hover:text-white" />
          <IoCartSharp onClick={() => navigate("/cart")} size={30} className="cursor-pointer text-[#e6e6fa] hover:text-white" />
          <button
            id="dropdownUserLink"
            onClick={() => setActiveUser(!activeUser)}
            className="flex font-semibold items-center justify-end w-full py-2 px-3 text-gray-900 rounded-sm hover:bg-[#AFE1AF] text-bold text-lg  md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white"
          >
            <FaUser size={25} className="cursor-pointer text-[#e6e6fa] hover:text-white" />

          </button>
          {activeUser && (
            <div id="dropdownUser" className="absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-md w-44 dark:bg-gray-700 dark:divide-gray-600 top-12 right-8 z-50">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <a href="/profile" className="block px-4 py-2 text-[#800080] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    My Profile
                  </a>
                </li>
                <li>
                  <a href="/orders" className="block px-4 py-2 text-[#800080] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    My Orders
                  </a>
                </li>
              </ul>
            </div>
          )}

        </div>
      </nav>

      <div className="flex justify-center items-center flex-wrap bg-[#643288] p-1 m-2 space-x-9 mt-28">
        {categories.map((category) => (
          <div
            key={category._id}
            className="relative category-dropdown"
            onMouseEnter={() => setActiveCategory(category._id)}>
            <div className="flex-wrap">
              <button
                onClick={() => handleCategoryClick(category)}
                className="flex items-center w-full font-semibold text-lg bg-[#643288] text-left p-2 rounded transition text-white hover:text-[#e6e6fa]">
                <span className="mr-2">{category.title}</span> 
                <RiArrowDropDownLine size={25}/>
              </button>
            </div>

            {activeCategory === category._id && category.subcategories?.length > 0 && (
              <div className="absolute top-12 left-0 mt-1 w-48 bg-white border border-gray-300 rounded shadow-lg z-10">
                {category.subcategories.map((sub) => (
                  <button
                    key={sub._id}
                    onClick={() => handleSubcategoryClick(sub._id, category._id)}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-200 hover:text-[#643288] hover:scale-100 transition"
                  >
                    {sub.title}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div> 

      <div className="relative m-3 h-[500px] overflow-hidden rounded-lg shadow-lg">
        {carouselImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
          />
        ))}
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-transparent text-white p-2 rounded-full"
          onClick={() => setCurrentIndex((currentIndex - 1 + carouselImages.length) % carouselImages.length)}
        >
          &#9665;
        </button>
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent text-white p-2 rounded-full"
          onClick={() => setCurrentIndex((currentIndex + 1) % carouselImages.length)}
        >
          &#9655;
        </button>
      </div>


      <div className='flex flex-col justify-center items-center p-8'>
        <h1 className='text-4xl text-green-800 font-bold font-poppins'>Best Of Farm Produce</h1>

        <div className='flex flex-wrap justify-center items-center gap-14 p-6'>
          {[
            { name: "Potato", img: Home2 },
            { name: "Carrot", img: Home10 },
            { name: "Avocado", img: Home11 },
            { name: "Honey", img: Home6 },
            { name: "Grapes", img: Home12 },
            { name: "Mushroom", img: Home9 },
            { name: "Banana", img: Home8 },
            { name: "Tomato", img: Home13 },
            { name: "Broccoli", img: Home14 },
            { name: "Garlic", img: Home15 },
          ].map((product, index) => (
            <a
              key={index}
              href="#"
              className=" w-56 h-60 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 p-4 flex flex-col justify-between">
              <h5 className="text-lg font-semibold flex justify-center items-center text-gray-900 dark:text-white">{product.name}</h5>
              <div className="h-40 w-full flex justify-center ">
                <img src={product.img} alt={product.name} className="h-full w-full object-cover rounded-lg" />
              </div>
            </a>
          ))}
        </div>
      </div>

      <div id='category' className="p-6">
        {categories.map((category) => {
          const categoryProducts = filteredProducts.filter(
            (product) => product.category && product.category._id === category._id
          );

          if (categoryProducts.length === 0) return null;

          return (
            <div key={category._id} ref={categoryRefs[category._id]} className="mb-8">
              <h2 className="flex justify-center items-center p-5 border-b text-4xl font-bold text-green-900 mb-4 font-poppins">
                {category.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 m-2">
                {categoryProducts.map((product) => (
                  <div key={product._id} className="bg-white flex flex-wrap border-gray-200 border rounded-lg shadow-lg overflow-hidden hover:cursor-pointer hover:scale-110 w-80">
                    <img className="w-full h-72 object-cover" src={product.images[0]} alt={product.title} />
                    <div className="p-4 w-1/2">
                      <h3 className="text-lg font-semibold">{product.title}</h3>
                      <div className="flex flex-wrap">
                      <FontAwesomeIcon icon={faStar} className="h-3 text-yellow-300" />
                      <FontAwesomeIcon icon={faStar} className="h-3 text-yellow-300" />
                      <FontAwesomeIcon icon={faStar} className="h-3 text-yellow-300" />
                      <FontAwesomeIcon icon={faStar} className="h-3 text-yellow-300" />
                      <FontAwesomeIcon icon={faStarHalfStroke} className="h-3 text-yellow-300" />
                      </div>
                      <p className="text-sm text-black">{product.quantity}</p>
                      <p className="text-lg font-bold text-green-700">₹{product.mrp}</p>
                    </div>
                    <div className="flex gap-5 pt-10 w-1/2 justify-end pr-3">
                      <button onClick={() => handleAddToCart(product)} className="bg-[#ad6fd9] rounded-full hover:bg-[#4b0082] text-white px-3 h-11 ">
                        <IoCartSharp size={22} />
                      </button>
                      <button onClick={() => handleWishlistToggle(product)} className="rounded-full px-3 bg-red-400 h-11 hover:bg-red-500">
                        <FaHeart size={22} className={wishlist[product._id] ? "text-red-600" : "text-white"} />
                      </button>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <footer>
        <div className="flex justify-center text-xl bg-[#643288] p-1 pb-2">
          <p className='text-white p-2'>©Fresh Roots 2025. All rights are reserved!</p>
        </div>
      </footer>

      <ToastContainer />
    </div>
  );
}

export default Home;
