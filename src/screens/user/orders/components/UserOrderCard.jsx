import React from "react";

const UserOrderCard = ({orderData}) => {
  
  return (
    <div className="rounded-lg w-full  lg:max-w-4xl overflow-hidden bg-white shadow-md pb-5 my-2">
      <div className="px-4 py-2 bg-blue-200 flex justify-between">
        <p className="font-semibold">Order Received</p>
        <p className="font-semibold">{orderData.date}</p>
      </div>
      <div className="flex justify-between flex-wrap">
        <div className="flex p-4 gap-2 sm:gap-5 w-72 ">
          <div className="">
            <img
              src={orderData.imgUrl}
              className="h-32 w-32 object-fill rounded-md"
            />
          </div>
          <div>
            <p className="font-semibold text-lg">{orderData.productName}</p>
            <p className="text-sm">{orderData.shopName}</p>
            <p className="flex items-center">
              <span className="text-xl">&#8377;</span>
              <span className="font-bold">{orderData.orderPrice}</span>
            </p>
          </div>
        </div>
        <div className="p-4 w-96">
          {orderData.arrivingOn && (
            <p className="text-xl font-semibold text-green-500">
              Arriving On {orderData.arrivingOn}
            </p>
          )}
          <p className="text-lg text-green-500 font-medium">
            {orderData.status}
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center px-10" >
            <button className="bg-blue-500 text-white font-semibold text-lg rounded w-full py-2 px-5">View</button>
        </div>
      </div>
    </div>
  );
};

export default UserOrderCard;
