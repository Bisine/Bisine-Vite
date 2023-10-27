import React, { useState } from "react";
import NavBar from "../../CommonComponets/NavBar";
import TagInput from "../shopCreate/components/InputTag";
const ProductAdditionScreen = () => {
  const [showDescriptionTooltip, setDescriptionShowTooltip] = useState(false);
  const [showTagToolTip, setShowTagToolTip] = useState(false);
  // State for input values
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [images, setImages] = useState([]);
  const [price, setPrice] = useState("");
  const [variants, setVariants] = useState("");
  const [weight, setWeight] = useState("");
  const [weightUnit, setWeightUnit] = useState("kg");
  const [quantityInStock, setQuantityInStock] = useState("");

  // Function to handle image uploads
  const handleImageUpload = (e) => {
    const files = e.target.files;
    // Process uploaded images and update the state
    // You can implement image preview here
  };

  return (
    <div className="bg-blue-50 min-h-screen ">
      <NavBar />
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">
            Add a New Product
          </h1>
          <div className="md:flex gap-10">
            <div className="flex md:w-5/6 w-full flex-col">
              <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                {/* Title, Description, and Tags */}
                <div className="mb-2">
                  <label className="text-black font-medium">
                    Product Name :{" "}
                  </label>
                  <input
                    type="text"
                    placeholder="Product Title"
                    className="w-full border-2 text-black border-gray-500 bg-white rounded-md px-3 py-2 mb-3 focus:outline-none"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <div className="relative">
                    <label className="text-black font-medium flex gap-2 items-center">
                      Product Description :{" "}
                      <div
                        className="cursor-pointer"
                        onClick={() =>
                          setDescriptionShowTooltip((prev) => !prev)
                        }
                        onMouseEnter={() => setDescriptionShowTooltip(true)}
                        onMouseLeave={() => setDescriptionShowTooltip(false)}
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
                            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                          />
                        </svg>
                      </div>
                    </label>
                    {showDescriptionTooltip && (
                      <div className="absolute text-xs top-8 left-10 p-3 bg-blue-200 border text-black border-gray-300 rounded-lg shadow-md z-10">
                        <p>
                          This is your product description. You can provide
                          details about the product here. The details you
                          provide here wil be shown to the user when they visit
                          this product
                        </p>
                      </div>
                    )}
                  </div>
                  <textarea
                    rows={5}
                    placeholder="Product Description"
                    className="w-full border-2 text-black border-gray-500 bg-white rounded-md px-3 py-2 mb-3 focus:outline-none"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="text-black">
                  <div className="relative">
                    <label className="text-black font-medium flex gap-2 items-center ">
                      Product Tags
                      <div
                        className="cursor-pointer"
                        onClick={() => setShowTagToolTip((prev) => !prev)}
                        onMouseEnter={() => setShowTagToolTip(true)}
                        onMouseLeave={() => setShowTagToolTip(false)}
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
                            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                          />
                        </svg>
                      </div>
                    </label>
                    {showTagToolTip && (
                      <div className="absolute text-xs top-8 left-10 p-3 bg-blue-200 border text-black border-gray-300 rounded-lg shadow-md z-10">
                        <p>
                          When adding tags to your product, use relevant
                          keywords or phrases. Tags help users find your product
                          easily. For example, if you're selling a camera, tags
                          like 'photography,' 'digital,' and 'DSLR'...
                        </p>
                      </div>
                    )}
                  </div>
                  <TagInput bgWhite={true} />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex-1">
                <div className="relative mb-2">
                  <label className="text-black font-medium flex gap-2 items-center">
                    Product Images :{" "}
                  </label>
                </div>
                <div className="bg-red-500 h-32">

                  </div>
                <div className="">
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    className="hidden"
                    id="image-upload"
                    onChange={handleImageUpload}
                  />
                  <label
                    htmlFor="image-upload"
                    className="cursor-pointer bg-blue-500 text-white rounded-md px-4 py-2"
                  >
                    Upload Images
                  </label>
                  
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                {/* Price */}
                <input
                  type="number"
                  placeholder="Price"
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                {/* Variants */}
                <input
                  type="text"
                  placeholder="Variants (e.g., Small, Medium, Large)"
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  value={variants}
                  onChange={(e) => setVariants(e.target.value)}
                />
              </div>

              <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                {/* Weight and Quantity */}
                <div className="grid grid-cols-2 gap-6">
                  <input
                    type="number"
                    placeholder="Weight"
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                  <select
                    className="w-full border border-gray-300 rounded-md px-3 py-2 "
                    value={weightUnit}
                    onChange={(e) => setWeightUnit(e.target.value)}
                  >
                    <option value="kg">kg</option>
                    <option value="g">g</option>
                  </select>
                </div>
              </div>
              <div>
                <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                  <input
                    type="number"
                    placeholder="Quantity in Stock"
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    value={quantityInStock}
                    onChange={(e) => setQuantityInStock(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Submit Button */}
          <div className="mt-8">
            <button className="bg-blue-500 md:hidden text-white rounded-md px-4 py-2 hover:bg-blue-600 sm:w-auto w-full">
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAdditionScreen;
