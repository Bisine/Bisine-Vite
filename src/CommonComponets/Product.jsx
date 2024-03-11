import React from "react";
import { useNavigate } from "react-router-dom";
const imagUrl =
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1999&q=80";

const Product = ({ product, shopName, shopLogo, shopId }) => {
  const navigate = useNavigate();

  const navigateToShop = (shop_id) => {
    navigate(`/${shopId}`);
  };
  return (
    <div className="max-w-xs overflow-hidden mx-auto rounded-lg bg-blue-100 shadow-lg">
      <div className="relative ">
        <img
          src={product.product_image_urls[0]}
          alt={product.product_name}
          className="w-full h-auto "
        />
        <p className="absolute bottom-2 text-white right-2 bg-gray-700 text-sm px-1 py-0.5 rounded-md">
          ₹ {product.variants[0].price}
        </p>
      </div>
      <div className="px-2 pt-2 pb-1 flex items-center">
        <img
          onClick={() => navigateToShop()}
          src={shopLogo}
          alt={shopName}
          className="w-8 h-8 rounded-full mr-2"
        />
        <div>
          <p className="block  text-md font-semibold text-gray-900  cursor-pointer ">
            {product.product_name}
          </p>
          <p
            onClick={() => navigateToShop()}
            className="text-sm font-medium text-gray-700 cursor-pointer"
          >
            {shopName}
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
