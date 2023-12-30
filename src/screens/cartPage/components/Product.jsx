import React from "react";

const Product = ({ product, onIncrement, onDecrement, onRemove }) => {
  const { id, title, price, quantity, image } = product;

  return (
    <div className="flex items-center border-b border-gray-500 py-4 text-black cursor-pointer">
      <img
        src={image}
        alt={title}
        className="sm:w-24 sm:h-24 w-16 h-16 rounded-lg object-cover mr-4"
      />
      <div className="flex-1">
        <h3 className="sm:text-lg text-sm font-semibold ">{title}</h3>
        <p className="text-gray-600 sm:text-md text-xs">Price: ${price.toFixed(2)}</p>
        <div className="flex items-center mt-2">
          <button
            onClick={() => onDecrement(id)}
            className="bg-blue-500 rounded-md sm:rounded-lg  sm:px-1.5 px-1 py-1 sm:py-1.5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15"
              />
            </svg>
          </button>
          <span className="mx-2 text-xs">{quantity}</span>
          <button
            onClick={() => onIncrement(id)}
            className="bg-blue-500 rounded-md sm:rounded-lg  sm:px-1.5 px-1 py-1 sm:py-1.5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="text-right">
        <p className="text-lg font-semibold">
          ${(price * quantity).toFixed(2)}
        </p>
        <button
          onClick={() => onRemove(id)}
          className="text-red-500 font-semibold mt-2 hover:underline"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Product;
