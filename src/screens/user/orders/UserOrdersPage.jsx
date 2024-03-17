import React from "react";
import NavBar from "../../../CommonComponets/NavBar";
import UserOrderCard from "./components/UserOrderCard";

const orderData = [
  {
    status: "Dispatched",
    arrivingOn: "12 March 2024",
    date: "10 March 2024",
    imgUrl:
      "https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productName: "Spider Man",
    shopName: "Marvel Inc",
    orderPrice: "450",
  },
  {
    status: "Delivered",
    arrivingOn: "08 March 2024",
    date: "05 March 2024",
    imgUrl:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productName: "Gaming Keyboard",
    shopName: "Tech Gear",
    orderPrice: "1200",
  },
  {
    status: "Canceled",
    arrivingOn: null,
    date: "02 March 2024",
    imgUrl:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productName: "Wireless Headphones",
    shopName: "Audio World",
    orderPrice: "3499",
  },
  {
    status: "Pending",
    arrivingOn: null,
    date: "15 March 2024",
    imgUrl:
      "https://images.unsplash.com/photo-1543354628-4a7537642fbf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productName: "Smartwatch",
    shopName: "Wearable Tech",
    orderPrice: "2799",
  },
  {
    status: "Delivered",
    arrivingOn: "20 March 2024",
    date: "18 March 2024",
    imgUrl:
      "https://images.unsplash.com/photo-1585298723682-7115561c51b7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productName: "Fitness Tracker",
    shopName: "Healthy Living",
    orderPrice: "1499",
  },
];

const UserOrdersPage = () => {
  return (
    <section className="min-h-screen bg-blue-50 flex flex-col items-center">
      <NavBar isSearchVisible={true} />
      <div className="h-full px-8 py-20 w-full lg:max-w-4xl">
        <h1 className="font-semibold text-2xl mt-5">Your Orders</h1>
        <div className="mt-5 flex flex-col items-center">
          {
            orderData.map((data) => (<UserOrderCard orderData={data}/>))
          }
        </div>
      </div>
    </section>
  );
};

export default UserOrdersPage;
