import React, { useEffect, useState } from "react";
import { GET } from "../Helpers/Api";
import logo from "../assets/logo2.png";
import "@fontsource/poppins";
import Order from "../assets/orderlist.png"

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(orders, "order");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await GET("order/list");
        if (response && response.orders) {
          setOrders(response.orders);
        }
      } catch (error) {
        setError("Failed to fetch orders");
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="relative overflow-x-auto shadow-md bg-gray-100 min-h-screen">
      <div className="flex flex-row p-2 pl-12 font-serif bg-[#643288]">
        <h1 className="text-3xl font-bold text-white">Fresh</h1>
        <img src={logo} alt="" className="h-10" />
        <h1 className="text-3xl font-bold text-white">Roots</h1>
      </div>
      <div className="flex flex-wrap justify-center items-center p-5 m-5">
        <h2 className="text-3xl font-bold font-poppins text-[#800080]">My Orders</h2>
        <img src={Order} className="h-12 p-1" />
      </div>
      <table className="w-full text-sm text-left text-black dark:text-black">
        <thead className="text-lg text-white uppercase bg-[#915191] dark:bg-[#D8BFD8] dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Order ID
            </th>
            <th scope="col" className="px-6 py-3">
              Amount(₹)
            </th>
            <th scope="col" className="px-6 py-3">
              Time
            </th>
            <th scope="col" className="px-6 py-3">
              Payment
            </th>
            <th scope="col" className="px-6 py-3">
              Address
            </th>
            <th scope="col" className="px-6 py-3">
              Items
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr
              key={order._id}
              className="odd:bg-[#e6e6fa] even:bg-gray-100 border-b dark:border-gray-700 border-gray-200">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                {order._id}
              </th>
              <td className="px-6 py-4">₹{order.orderAmt}</td>
              <td className="px-6 py-4">
                {new Date(parseInt(order.orderTime)).toLocaleString()}
              </td>
              <td className="px-6 py-4">{order.payment}</td>
              <td className="px-6 py-4">{order.address}</td>
              <td className="px-6 py-4">
                {order.items && order.items.length > 0
                  ? order.items.map((item) => item?.product?.title || "Apple, corn, Eggs").join(", ")
                  : "No Items"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;  