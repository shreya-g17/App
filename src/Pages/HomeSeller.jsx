import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"; // Import useNavigate
import logo from "../assets/logo2.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ImPieChart } from "react-icons/im";
import { PieChart, Pie, Cell, Tooltip, Legend, } from "recharts";
import { faBagShopping, faCartShopping, faCircleInfo, faHouse, faMoneyBill, faRightFromBracket, faTruck, faUser } from '@fortawesome/free-solid-svg-icons'
import Home2 from "../assets/home2.jpg"
import Home3 from "../assets/home5.jpg"
import Home4 from "../assets/home4.jpg"
import Home5 from "../assets/home6.jpg"
import Home6 from "../assets/home7.jpg"
import Home7 from "../assets/home8.jpg"
import Home8 from "../assets/home9.jpg"
import Home9 from "../assets/home10.jpg"
import Home10 from "../assets/home11.jpg"
import Home11 from "../assets/home12.jpg"
import Home12 from "../assets/home13.jpg"
import Home13 from "../assets/home3.jpg"
import Home14 from "../assets/home14.jpg"
import Home15 from "../assets/home15.jpg"
import Home16 from "../assets/home16.jpg"
import Home17 from "../assets/home17.jpg"
import Home18 from "../assets/home18.jpg"
import Home19 from "../assets/home19.jpg"
import Img7 from "../assets/img7.png";
import Img8 from "../assets/img8.png";
import ColdStorage from "../assets/ColdStorage.jpg";
import DryStorage from "../assets/DryStorage.jpg";
import GrainSilos from "../assets/GrainSilos.jpg";
import Order from "../assets/Order.gif";
import TransportImg from "../assets/TransportImg.jpg"
import Aos from 'aos'
import "@fontsource/poppins";

function HomeSeller() {

    const navigate = useNavigate();

    useEffect(() => {
        Aos.init();
    }, []);

    const carouselImages = [
        Img7, Img8

    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const [form, setFromData] = useState({
        Quantity: ""
    })

    const handlecChange = (e) => {
        setFromData({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        document.getElementById("txtname").value.length == 0
        alert("Product Added Successfully!")
    }

    const data = [
        { name: "Total Earnings", value: 75000, color: "#AFE1AF" },
        { name: "Pending Payments", value: 8000, color: "#FFD54F" },
        { name: "Withdrawable", value: 42000, color: "#64B5F6" },
    ];

    const [showModal, setShowModal] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = () => {
            const staticOrders = [
                {
                    _id: "1",
                    orderId: "ORD001",
                    items: [{ name: "Tomato" }],
                    user: [{ name: "John Doe", email: "john@example.com", phone: "1234567890" }],
                    orderAmount: 500,
                    orderTime: "2025-02-06 10:15 AM",
                    status: "available",
                    address: "123 Main Street, Patna, Bihar"
                },
                {
                    _id: "2",
                    orderId: "ORD002",
                    items: [{ name: "Onion" }],
                    user: [{ name: "Jane Smith", email: "jane@example.com", phone: "0987654321" }],
                    orderAmount: 300,
                    orderTime: "2025-02-06 11:00 AM",
                    status: "confirmed",
                    address: "456 Another Street, Patna, Bihar"
                },
                {
                    _id: "3",
                    orderId: "ORD003",
                    items: [{ name: "Cabbage" }],
                    user: [{ name: "Sam Wilson", email: "sam@example.com", phone: "1122334455" }],
                    orderAmount: 200,
                    orderTime: "2025-02-06 12:30 PM",
                    status: "arriving",
                    address: "789 Third Street, Patna, Bihar"
                },
                {
                    _id: "4",
                    orderId: "ORD004",
                    items: [{ name: "Potato" }],
                    user: [{ name: "Rachel Green", email: "rachel@example.com", phone: "2233445566" }],
                    orderAmount: 350,
                    orderTime: "2025-02-06 01:00 PM",
                    status: "delievered",
                    address: "101 Fourth Street, Patna, Bihar"
                },
                {
                    _id: "5",
                    orderId: "ORD005",
                    items: [{ name: "Carrot" }],
                    user: [{ name: "Monica Geller", email: "monica@example.com", phone: "3344556677" }],
                    orderAmount: 450,
                    orderTime: "2025-02-06 01:30 PM",
                    status: "cancelled",
                    address: "202 Fifth Street, Patna, Bihar"
                },
                {
                    _id: "6",
                    orderId: "ORD006",
                    items: [{ name: "Spinach" }],
                    user: [{ name: "Chandler Bing", email: "chandler@example.com", phone: "4455667788" }],
                    orderAmount: 250,
                    orderTime: "2025-02-06 02:00 PM",
                    status: "available",
                    address: "303 Sixth Street, Patna, Bihar"
                },
                {
                    _id: "7",
                    orderId: "ORD007",
                    items: [{ name: "Broccoli" }],
                    user: [{ name: "Phoebe Buffay", email: "phoebe@example.com", phone: "5566778899" }],
                    orderAmount: 150,
                    orderTime: "2025-02-06 02:30 PM",
                    status: "confirmed",
                    address: "404 Seventh Street, Patna, Bihar"
                },
                {
                    _id: "8",
                    orderId: "ORD008",
                    items: [{ name: "Lettuce" }],
                    user: [{ name: "Ross Geller", email: "ross@example.com", phone: "6677889900" }],
                    orderAmount: 380,
                    orderTime: "2025-02-06 03:00 PM",
                    status: "arriving",
                    address: "505 Eighth Street, Patna, Bihar"
                },
                {
                    _id: "9",
                    orderId: "ORD009",
                    items: [{ name: "Garlic" }],
                    user: [{ name: "Joey Tribbiani", email: "joey@example.com", phone: "7788990011" }],
                    orderAmount: 290,
                    orderTime: "2025-02-06 03:30 PM",
                    status: "delievered",
                    address: "606 Ninth Street, Patna, Bihar"
                },
                {
                    _id: "10",
                    orderId: "ORD010",
                    items: [{ name: "Chili" }],
                    user: [{ name: "Janice Litman", email: "janice@example.com", phone: "8899001122" }],
                    orderAmount: 510,
                    orderTime: "2025-02-06 04:00 PM",
                    status: "cancelled",
                    address: "707 Tenth Street, Patna, Bihar"
                },
            ];
            setOrders(staticOrders); // Set the static orders
        };

        fetchOrders();
    }, []);

    const toggleModal = (order) => {
        setSelectedOrder(order);
        setShowModal(!showModal);
    };

    const handleStatusChange = async (orderId, status) => {
        try {
            const response = await axios.put('/api/orders/update-status', { orderId, status });
            // Update the status locally without re-fetching all orders
            setOrders(prevOrders =>
                prevOrders.map(order =>
                    order._id === orderId ? { ...order, status: response.data.order.status } : order
                )
            );
        } catch (error) {
            console.error("Error updating order status:", error);
        }

    };

    return (
        <div>
            <div className='bg-[#4b0082] fixed z-10 w-screen text-white font-poppins'>
                <marquee>
                    <span>Welcome To { }<b>Fresh Roots.</b>{ } A Journey Of Empowering Farmers, Connecting Consumers!{ } Thank You For Your warm Presence in E-green Revolution.</span>
                </marquee>
            </div>


            <div className='pt-7'>
                <div className='w-1/5 flex justify-center items-center fixed bg-[#bbbbe1]' data-aos="fade-right" data-aos-duration="2000">
                    <p>
                        <div className="flex flex-row p-4 font-poppins">
                            <h1 className="text-3xl font-bold text-[#800080]">Fresh</h1>
                            <img src={logo} alt="" className="h-10" />
                            <h1 className="text-3xl font-bold text-[#800080]">Roots</h1>
                        </div>

                        <h3 className='pt-8 text-lg pl-5 text-[#800080] font-semibold'>GENERAL</h3>
                        <ul>
                            <h3 className='text-lg pt-4 font-poppins'>
                                <li>
                                    <a href='#homeSeller' className="block px-4 py-2 text-black rounded hover:bg-white dark:hover:bg-gray-600 dark:hover:text-white">
                                        <FontAwesomeIcon icon={faHouse} className='pr-2' />Home<br />
                                    </a>
                                </li>
                                <li>
                                    <a href='#addProduct' className="block px-4 py-2 text-black rounded hover:bg-white dark:hover:bg-gray-600 dark:hover:text-white">
                                        <FontAwesomeIcon icon={faBagShopping} className='pr-2' />Add Product<br />
                                    </a>
                                </li>
                                <li>
                                    <a href='#order-container' className="block px-4 py-2 text-black rounded hover:bg-white dark:hover:bg-gray-600 dark:hover:text-white">
                                        <FontAwesomeIcon icon={faCartShopping} className='pr-2' />Orders<br />
                                    </a>
                                </li>
                                <li>
                                    <a href='#earning' className="block px-4 py-2 text-black rounded hover:bg-white dark:hover:bg-gray-600 dark:hover:text-white">
                                        <FontAwesomeIcon icon={faMoneyBill} className='pr-2' />Earnings<br />
                                    </a>
                                </li>
                                <li>
                                    <a href='#logistics' className="block px-4 py-2 text-black rounded hover:bg-white dark:hover:bg-gray-600 dark:hover:text-white">
                                        <FontAwesomeIcon icon={faTruck} className='pr-2' />Logistics<br />
                                    </a>
                                </li>
                                <li>
                                    <a href='#storage' className=" px-4 py-2 flex flex-wrap text-black rounded hover:bg-white dark:hover:bg-gray-600 dark:hover:text-white">
                                        <ImPieChart className='pr-2 size-6' />Storage<br />
                                    </a>
                                </li>
                            </h3>
                        </ul>

                        <h3 className='pt-10 text-lg pl-5 text-[#800080] font-semibold'>ACCOUNT</h3>
                        <ul>
                            <h3 className='text-lg pt-4 font-poppins'>
                                <li>
                                    <a href='/sellerProfile' className="block px-4 py-2 text-black rounded hover:bg-white dark:hover:bg-gray-600 dark:hover:text-white">
                                        <FontAwesomeIcon icon={faUser} className='pr-2' />My Profile<br />
                                    </a>
                                </li>
                                <li>
                                    <a href='/contact' className="block px-4 py-2 text-black rounded hover:bg-white dark:hover:bg-gray-600 dark:hover:text-white">
                                        <FontAwesomeIcon icon={faCircleInfo} className='pr-2' />Help<br />
                                    </a>
                                </li>
                            </h3>
                            <div className='text-lg pt-20 font-poppins'>
                                <li>
                                    <a href='/loginseller' className="block px-4 py-2 text-black rounded hover:bg-white dark:hover:bg-gray-600 dark:hover:text-white">
                                        <FontAwesomeIcon icon={faRightFromBracket} className='pr-2' />Logout
                                    </a>
                                </li>
                            </div>
                        </ul>
                    </p>
                </div>

                <div id="homeSeller" className='w-4/5 ml-[20%] flex flex-col justify-center items-center p-10 pt-10'>
                    <h1 className="text-4xl text-green-800 font-bold border-green-600 pb-3 font-poppins">Fresh Roots Seller Center</h1>
                    <h3 className="text-2xl text-[#800080] italic border-green-600 pb-3"> Track Sales, Manage Orders, and Grow Your Business.</h3>
                    <div className="relative w-full h-[600px] overflow-hidden rounded-lg shadow-lg pt-4">
                        {carouselImages.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className={`absolute w-full transition-opacity duration-700 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
                                    }`} />
                        ))}

                        {/* Navigation Arrows */}
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

                    <div className="flex flex-col justify-center items-center p-10 min-h-screen">
                        <h1 className="text-4xl text-green-800 font-bold mb-8 border-green-600 pb-3 font-poppins">
                            Your Products
                        </h1>

                        <div className="grid md:grid-cols-2 gap-8 justify-center items-center p-6 w-full">
                            {[
                                { name: "Potato", img: Home2, quantity: "40 kg" },
                                { name: "Carrot", img: Home10, quantity: "50 kg" },
                                { name: "Avocado", img: Home11, quantity: "30 kg" },
                                { name: "Honey", img: Home6, quantity: "50 kg" },
                                { name: "Grapes", img: Home12, quantity: "60 kg" },
                                { name: "Mushroom", img: Home9, quantity: "10 kg" },
                                { name: "Banana", img: Home8, quantity: "80 kg" },
                                { name: "Tomato", img: Home13, quantity: "60 kg" },
                            ].map((product, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="flex items-center justify-between bg-white border border-gray-300 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 p-6 w-full">
                                    <div className="flex items-center space-x-6 w-2/3">
                                        <img
                                            src={product.img}
                                            alt={product.name}
                                            className="h-40 w-40 object-cover rounded-xl border border-gray-300 shadow-md" />
                                        <h5 className="text-lg font-bold text-gray-900">{product.name}</h5>
                                    </div>
                                    <h3 className="text-lg  text-gray-700 w-1/3 text-right">
                                        Quantity: {product.quantity}
                                    </h3>
                                </a>
                            ))}
                        </div>
                    </div>


                    <div id="addProduct" className='flex flex-col justify-center items-center p-8 '>
                        <h1 className='text-4xl text-green-800 font-bold font-poppins'><b>Add Product</b></h1>
                        <div className='flex flex-wrap justify-center items-center gap-7 p-6 font-serif'>
                            {[
                                { name: "Orange", img: Home5 },
                                { name: "Corn", img: Home7 },
                                { name: "Broccoli", img: Home14 },
                                { name: "Garlic", img: Home15 },
                                { name: "Rice", img: Home16 },
                                { name: "Spinach", img: Home17 },
                                { name: "Strawberry", img: Home18 },
                                { name: "Capsicum", img: Home19 }
                            ].map((product, index) => (
                                <a
                                    key={index}
                                    href="#addProduct"
                                    className=" w-80 h-80 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 
                           dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 p-4 flex flex-col justify-between">
                                    <h5 className="text-2xl justify-center flex font-bold text-gray-900 dark:text-white">{product.name}</h5>
                                    <div className="h-40 w-full flex justify-center">
                                        <img src={product.img} alt={product.name} className="h-full w-full object-cover rounded-lg" />
                                    </div>
                                    <form className='flex flex-wrap gap-8' onSubmit={handleSubmit}>
                                        <label className='p-1 text-lg'>Quantity: <input type='text' id='txtname' onChange={handlecChange} className='w-20 h-6 rounded'></input></label>
                                        <button className='rounded-lg w-20 bg-[#a569cf] text-white hover:bg-[#643288]' onChange={handlecChange}>Add</button>
                                    </form>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center pb-4">
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSfQZUuvn7JIySl0Vchb5Yzen_bKp0ZSgH8HyCpMctmhLk9_ig/viewform?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 hover:bg-[#9656c4] text-white text-lg font-semibold rounded-lg shadow-md bg-[#643288] transition duration-300"
                        >
                            Click Here to Add Products
                        </a>
                    </div>


                    <div id="order-container">
                        <div className="flex items-center justify-center">
                            <h2 className="text-4xl text-green-800 font-bold pb-2 font-poppins">Your Orders</h2>
                            <span>
                                <img src={Order} alt="Orders Logo" className="w-24 h-24" />
                            </span>
                        </div>
                        <div className="mb-6">
                            <h3 className="text-3xl text-zinc-700 mb-2">Newly Arrived Orders</h3>
                            <div className="bg-[#D8BFD8]  p-4 rounded-lg">
                                <marquee className="behavior-scroll direction-left">
                                    <span className="text-xl">You have {orders.length} orders waiting to be processed.</span>
                                </marquee>
                            </div>
                        </div>

                        <table className="min-w-full border-collapse bg-white shadow-lg rounded-lg">
                            <thead className="bg-[#800080] text-xl text-white">
                                <tr>
                                    <th className="p-4 border-2 border-white text-center">Order ID</th>
                                    <th className="p-4 border-2 border-white text-center">Product</th>
                                    <th className="p-4 border-2 border-white text-center">Buyer Name</th>
                                    <th className="p-4 border-2 border-white text-center">Total Price</th>
                                    <th className="p-4 border-2 border-white text-center">Order Date</th>
                                    <th className="p-4 border-2 border-white text-center">Status</th>
                                    <th className="p-4 border-2 border-white text-center">Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {orders.map((order) => (
                                    <tr key={order._id}>
                                        <td className="border-2 px-4 py-2 text-center">{order.orderId}</td>
                                        <td className="border-2 px-4 py-2 text-center">{order.items[0]?.name || "Unknown Product"}</td>
                                        <td className="border-2 px-4 py-2 text-center">{order.user[0]?.name || "Unknown Buyer"}</td>
                                        <td className="border-2 px-4 py-2 text-center">{`₹${order.orderAmount}`}</td>
                                        <td className="border-2 px-4 py-2 text-center">{order.orderTime}</td>
                                        <td className="border-2 px-4 py-2 text-center">
                                            <select
                                                value={order.status}
                                                onChange={(e) => handleStatusChange(order._id, e.target.value)}
                                                className={`px-2 py-1 rounded-full text-black ${order.status === 'available' ? 'bg-pink-200' :
                                                    order.status === 'confirmed' ? 'bg-sky-200' :
                                                        order.status === 'arriving' ? 'bg-amber-200' :
                                                            order.status === 'delievered' ? 'bg-green-200' : 'bg-white'}`}>
                                                <option value="available">Available</option>
                                                <option value="confirmed">Confirmed</option>
                                                <option value="arriving">Arriving</option>
                                                <option value="delievered">Delivered</option>
                                                <option value="cancelled">Cancelled</option>
                                            </select>
                                        </td>
                                        <td className="border-2 px-4 py-2 text-center">
                                            <button className="text-slate-700 hover:text-black hover:underline" onClick={() => toggleModal(order)}>
                                                View Details
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Modal/Popup for Order Details */}
                        {showModal && selectedOrder && (
                            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                <div className="bg-white p-8 rounded-lg w-1/2">
                                    <h3 className="text-3xl mb-4">Order Details</h3>

                                    {/* Buyer Details */}
                                    <div className="mb-4">
                                        <h4 className="text-xl font-semibold">Buyer Details</h4>
                                        <p><strong>Name:</strong> {selectedOrder.user[0]?.name}</p>
                                        <p><strong>Email:</strong> {selectedOrder.user[0]?.email}</p>
                                        <p><strong>Phone:</strong> {selectedOrder.user[0]?.phone}</p>
                                        <p><strong>Address:</strong> {selectedOrder.address}</p>
                                    </div>

                                    {/* Order Details */}
                                    <div className="mb-4">
                                        <h4 className="text-xl font-semibold">Order Information</h4>
                                        <p><strong>Product:</strong> {selectedOrder.items[0]?.name}</p>
                                        <p><strong>Total Price:</strong> ₹{selectedOrder.orderAmount}</p>
                                        <p><strong>Order Date:</strong> {selectedOrder.orderTime}</p>
                                        <p><strong>Status:</strong> {selectedOrder.status}</p>
                                    </div>

                                    {/* Close Button */}
                                    <div className="mt-4">
                                        <button
                                            className="bg-blue-500 text-white py-2 px-4 rounded"
                                            onClick={toggleModal}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div id="earning" className='flex flex-col justify-center items-center font-serif'>
                        <h1 className='text-4xl text-green-800 font-bold pt-16 font-poppins'><b>Earnings</b></h1>
                        <div className=" bg-white shadow-md rounded-lg">
                            {/* Pie Chart */}
                            <div className="flex justify-center items-center">
                                <PieChart width={300} height={300} className="p-5 pb-4">
                                    <Pie data={data} cx={150} cy={150} outerRadius={100} fill="#8884d8" dataKey="value">
                                        {data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend />
                                </PieChart>
                            </div>
                            <div className="grid grid-cols-3 gap-60 mb-6">
                                {data.map((item, index) => (
                                    <div key={index} className="p-4 rounded-lg text-center" style={{ backgroundColor: item.color + "20" }}>
                                        <h3 className="text-lg font-semibold">{item.name}</h3>
                                        <p className="text-2xl font-bold" style={{ color: item.color }}>
                                            ₹{item.value.toLocaleString()}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <h3 className="text-xl font-semibold mb-3 flex justify-center items-center text-[#643288]">Transaction History</h3>
                            <div className="overflow-x-auto font-poppins">
                                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="p-2 border">Date</th>
                                            <th className="p-2 border">Order ID</th>
                                            <th className="p-2 border">Amount</th>
                                            <th className="p-2 border">View Details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { date: "Feb 5, 2025", id: "#12345", amount: "₹5,000" },
                                            { date: "Feb 3, 2025", id: "#12312", amount: "₹3,000" },
                                            { date: "Feb 1, 2025", id: "#12290", amount: "₹2,500" },
                                            { date: "Jan 28, 2025", id: "#12275", amount: "₹4,500" },
                                        ].map((item, index) => (
                                            <tr key={index} className="text-center">
                                                <td className="p-2 border">{item.date}</td>
                                                <td className="p-2 border">{item.id}</td>
                                                <td className="p-2 border">{item.amount}</td>
                                                <td className="p-2 border hover:text-blue-600 font-bold cursor-pointer">View Details</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div id="logistics" className="p-10 pt-20 bg-white shadow-md rounded-lg font-serif">
                        <h2 className="text-4xl text-green-800 font-bold justify-center items-center flex mb-4 font-poppins">Logistics Service</h2>
                        <div className="w-[66vw] h-[60vh] flex justify-center">
                            <div className="flex flex-col md:flex-row w-full h-auto bg-white border border-gray-400 rounded-lg shadow-sm  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <img
                                    className="w-full md:w-1/2 h-64 md:h-auto object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
                                    src={TransportImg}
                                    alt="LogisticsImg" />
                                <div className="flex flex-col justify-between md:w-1/2">
                                    <h5 className="text-2xl font-semibold tracking-tight flex justify-center items-center text-[#800080] p-2 dark:text-white">
                                        Fresh Roots Logistic Support
                                    </h5>
                                    <p className="mb-4 text-lg text-gray-700 dark:text-gray-400">
                                        " At Fresh Roots Logistics, we provide fast, secure, and cost-effective transportation services.
                                        Whether you're a farmer, retailer, or manufacturer, we ensure smooth pickups, safe handling, and on-time deliveries." <br /> <br />

                                        <p className="text-lg">
                                            🌀 End-to-End Transport – From pickup to final delivery. <br />
                                            🌀 Real-Time Tracking – Stay updated on your shipment. <br />
                                            🌀 Flexible & Affordable – Custom logistics to fit your needs. <br />
                                            🌀 Nationwide Coverage – Service across multiple regions. <br />
                                        </p>
                                    </p>
                                    <div className="p-3 justify-center flex items-center pb-10">
                                        <button
                                            className="px-6 py-2 bg-[#9c429c] text-white font-semibold rounded-lg hover:bg-[#800080] transition duration-200"
                                            onClick={() => navigate("/transport")} // Navigate to TransportPage on click
                                        >
                                            Book Your Delivery Today 📦
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold italic text-zinc-700 pt-16  ">Summary</h1>

                            <div className="my-5 p-6 bg-gray-100 rounded-lg">
                                <h3 className="text-lg font-semibold mb-3">Monthly Delivery Progress:</h3>
                                <div className="relative w-full bg-gray-300 h-4 rounded-full">
                                    <div className="bg-gradient-to-r from-[#aef1af] to-[#5b975c] h-4 rounded-full" style={{ width: "56%" }}></div>
                                </div>
                            </div>
                            <div className=" text-2xl font-lg flex flex-wrap gap-80 justify-start items-start italic">
                                <h1 className="flex items-center text-blue-700">
                                    <div className="w-2 h-2 bg-blue-700 rounded-full mr-2"></div>
                                    Active: 28
                                </h1>
                                <h1 className="flex items-center text-green-700">
                                    <div className="w-2 h-2 bg-green-700 rounded-full mr-2"></div>
                                    Completed: 50
                                </h1>
                            </div>
                        </div>
                        <h3 className="text-2xl text-zinc-700 font-bold italic mb-3 p-3 pt-10">Shipment Details </h3>
                        <div className="overflow-x-auto font-poppins">
                            <table className="w-full bg-white border border-gray-200 rounded-lg">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="p-2 border">Order ID</th>
                                        <th className="p-2 border">Customer</th>
                                        <th className="p-2 border">Status</th>
                                        <th className="p-2 border">Estimated Delivery</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="text-center">
                                        <td className="p-2 border">#56789</td>
                                        <td className="p-2 border">Ramesh Kumar</td>
                                        <td className="p-2 border text-blue-600 font-bold">In Transit</td>
                                        <td className="p-2 border">Feb 7, 2025</td>
                                    </tr>
                                    <tr className="text-center">
                                        <td className="p-2 border">#56808</td>
                                        <td className="p-2 border">Priya Sharma</td>
                                        <td className="p-2 border text-green-600 font-bold">Delivered</td>
                                        <td className="p-2 border">Feb 3, 2025</td>
                                    </tr>
                                    <tr className="text-center">
                                        <td className="p-2 border">#56810</td>
                                        <td className="p-2 border">Shreya Gupta</td>
                                        <td className="p-2 border text-blue-600 font-bold">In Transit</td>
                                        <td className="p-2 border">Feb 13, 2025</td>
                                    </tr>
                                    <tr className="text-center">
                                        <td className="p-2 border">#56815</td>
                                        <td className="p-2 border">Muskan Shekhar</td>
                                        <td className="p-2 border text-blue-600 font-bold">In Transit</td>
                                        <td className="p-2 border">Feb 14, 2025</td>
                                    </tr>
                                    <tr className="text-center">
                                        <td className="p-2 border">#56822</td>
                                        <td className="p-2 border">Mayank Shekhar</td>
                                        <td className="p-2 border text-blue-600 font-bold">In Transit</td>
                                        <td className="p-2 border">Feb 15, 2025</td>
                                    </tr>
                                    <tr className="text-center">
                                        <td className="p-2 border">#56825</td>
                                        <td className="p-2 border">Reeti Sona</td>
                                        <td className="p-2 border text-green-600 font-bold">Delivered</td>
                                        <td className="p-2 border">Feb 10, 2025</td>
                                    </tr>
                                    <tr className="text-center">
                                        <td className="p-2 border">#56820</td>
                                        <td className="p-2 border">Manohar Patel</td>
                                        <td className="p-2 border text-green-600 font-bold">Delivered</td>
                                        <td className="p-2 border">Feb 3, 2025</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div id="storage" className="flex flex-col justify-center items-center p-8 pt-28 font-serif">
                        <h1 className="text-4xl text-green-800 font-bold font-poppins">Storage</h1>

                        <div className="p-3">
                            {" "}
                            <h1 className="text-3xl text-zinc-700 p-6 italic flex justify-center items-center">
                                Need Storage? We've got you covered!
                            </h1>

                            <div className="flex flex-row gap-6">
                                <div class="max-w-sm bg-white border border-black rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                                    <a href="#">
                                        <img
                                            class="rounded-t-lg w-full h-[30vh]"
                                            src={ColdStorage}
                                            alt=" Cold Storage Image"
                                        />
                                    </a>
                                    <div class="p-5">
                                        <a href="#">
                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                Cold Storage
                                            </h5>
                                        </a>
                                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                            Store perishable goods like fruits, vegetables, and dairy at
                                            optimal temperatures to preserve freshness. Our cold storage
                                            ensures minimal spoilage and longer shelf life for your
                                            products.
                                        </p>
                                        <a
                                            href="#"
                                            class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-400"
                                        >
                                            READ MORE
                                            <svg
                                                class="w-4 h-4 ml-2 rtl:rotate-180"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 14 10"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div class="max-w-sm bg-white border border-black rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                                    <a href="#">
                                        <img
                                            class="rounded-t-lg  w-full h-[30vh]"
                                            src={DryStorage}
                                            alt="Dry Storage Image"
                                        />
                                    </a>
                                    <div class="p-5">
                                        <a href="#">
                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                Dry Storage
                                            </h5>
                                        </a>
                                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                            For grains, cereals, and packaged goods, use our dry storage to
                                            keep them safe from moisture and pests. Ensure the quality and
                                            longevity of your products with proper, moisture-free storage.
                                        </p>
                                        <a
                                            href="#"
                                            class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-400"
                                        >
                                            READ MORE
                                            <svg
                                                class="w-4 h-4 ml-2 rtl:rotate-180"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 14 10"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                                <div class="max-w-sm bg-white border border-black rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                                    <a href="#">
                                        <img
                                            class="rounded-t-lg  w-full h-[30vh]"
                                            src={GrainSilos}
                                            alt="Grain Silo Image" />
                                    </a>
                                    <div class="p-5">
                                        <a href="#">
                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                Grain Silos
                                            </h5>
                                        </a>
                                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                            Store bulk grains like wheat and corn in our secure silos to
                                            protect them from pests and weather. Maximize the quality and
                                            reduce losses by using our advanced storage solutions.
                                        </p>
                                        <a
                                            href="#"
                                            class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-yellow-600 rounded-lg hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:focus:ring-yellow-400"
                                        >
                                            READ MORE
                                            <svg
                                                class="w-4 h-4 ml-2 rtl:rotate-180"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 14 10"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 flex justify-center">
                            <button
                                className="px-6 py-2 bg-[#9c429c] text-white font-semibold rounded-lg hover:bg-[#800080] transition duration-200"
                                onClick={() => navigate("/storage")} // Navigates to Storage Page
                            >
                                BOOK STORAGE NOW 🏠
                            </button>
                        </div>

                        {/* Show section*/}
                        <div className=" mt-8 m-3 flex justify-center items-center flex-col">
                            <h1 className="text-4xl text-[#800080] font-bold font-sans mb-2 p-4">
                                Storage Overview
                            </h1>
                            <div>
                                <table className="w-[65vw] border border-zinc-400 text-xl text-black bg-white table-auto font-poppins">
                                    <thead className="bg-[#D8BFD8] font-semibold">
                                        <tr>
                                            <th className="px-6 py-3 text-left border border-zinc-300">
                                                Product
                                            </th>
                                            <th className="px-6 py-3 text-left border border-zinc-300">
                                                Quantity
                                            </th>
                                            <th className="px-6 py-3 text-left border border-zinc-300">
                                                Storage Details
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody className='text-lg'>
                                        <tr>
                                            <td className="px-6 py-4 border border-zinc-300">Apples</td>
                                            <td className="px-6 py-4 border border-zinc-300">500 KG</td>
                                            <td className="px-6 py-4 border border-zinc-300">Stored in Cold Storage at 4°C</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 border border-zinc-300">Rice</td>
                                            <td className="px-6 py-4 border border-zinc-300">1000 KG</td>
                                            <td className="px-6 py-4 border border-zinc-300">Stored in Dry Storage in moisture-free bags</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 border border-zinc-300">Corn</td>
                                            <td className="px-6 py-4 border border-zinc-300">2500 KG</td>
                                            <td className="px-6 py-4 border border-zinc-300">Stored in Grain Silos to prevent spoilage</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 border border-zinc-300">Wheat</td>
                                            <td className="px-6 py-4 border border-zinc-300">3000 KG</td>
                                            <td className="px-6 py-4 border border-zinc-300">Stored in Grain Silos under aeration</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 border border-zinc-300">Milk</td>
                                            <td className="px-6 py-4 border border-zinc-300">300 L</td>
                                            <td className="px-6 py-4 border border-zinc-300">Stored in Cold Storage at 2°C</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 border border-zinc-300">Broccoli</td>
                                            <td className="px-6 py-4 border border-zinc-300">250 KG</td>
                                            <td className="px-6 py-4 border border-zinc-300">Stored in Cold Storage at 0°C</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <footer>
                        <div className="flex justify-center text-xl ">
                            <p className='text-[#643288] font-bold p-2'>©Fresh Roots 2025. All rights are reserved!</p>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default HomeSeller