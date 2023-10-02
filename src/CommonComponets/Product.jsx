import React from "react";
const imagUrl =
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1999&q=80";

const product = {
  id: 1,
  productUrl: "https://www.example.com/product1",
  thumbnailUrl: imagUrl,
  shopUrl: "https://www.example.com/shop1",
  shopLogoUrl: imagUrl,
  shopName: "Apple",
  title: "Apple Smart Watch",
  price: 500,
};
const Product = () => {
  return (
    <div className="max-w-xs overflow-hidden mx-auto rounded-lg bg-blue-100 shadow-lg">
      <div className="relative ">
        <img
          src={product.thumbnailUrl}
          alt={product.title}
          className="w-full h-auto "
        />
        <p className="absolute bottom-2 right-2 bg-gray-700 text-sm px-1 py-0.5 rounded-md">₹ {product.price}</p>
      </div>
      <div className="px-2 pt-2 pb-1 flex items-center">
        <img
          src={product.shopLogoUrl}
          alt={product.shopName}
          className="w-8 h-8 rounded-full mr-2"
        />
        <p>{product.pr}</p>

        <div>
          <p className="block  text-md font-semibold text-gray-900 ">
            {product.title}
          </p>
          <p className="text-sm font-medium text-gray-700">
            {product.shopName}
          </p>
        </div>
      </div>
      <div className="flex w-full justify-end pb-2 pr-2">
        <button className="text-black font-semibold text-md rounded-lg px-4 py-1 bg-cyan-400">
          View
        </button>
      </div>
    </div>
  );
};

export default Product;
