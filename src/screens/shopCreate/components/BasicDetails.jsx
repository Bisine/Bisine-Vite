import React from "react";
import TagInput from "./InputTag";
import { useDispatch, useSelector } from "react-redux";
import { setShopDescription, setShopName } from "../../../redux/features/shop";
import { setShopTags } from "../../../redux/features/shop";

const BasicDetails = ({ partNo }) => {
  const dispatch = useDispatch()
  const shopName = useSelector(e => e.shop.shopName)
  const shopDescription = useSelector(e => e.shop.shopDescription)

  const shopNameError = useSelector(e => e.shopError.shopNameError)
  const shopDescriptionError = useSelector(e=> e.shopError.shopDescriptionError)

  


  return (
    <div className={`${partNo == 1 ? "flex" : "hidden"} flex-col gap-4 text-black`}>
      <h1 className="font-semibold text-xl">Basic Details</h1>
      <div>
        <label className="text-md font-semibold block">Shop Name</label>
        <input
          value={shopName}
          onChange={(e) => dispatch(setShopName(e.target.value))}
          placeholder="Enter your shop name"
          className={`border-2 focus:outline-none focus:ring-0 bg-blue-50  rounded-md md:w-72 w-60 lg:w-96 px-2 py-1 text-md ${shopNameError!='' ? 'border-red-500' : 'border-gray-500'}`}
        />
        <p className="text-red-500 text-xs">{shopNameError}</p>
      </div>
      <div>
        <label className="text-md font-semibold block">Shop Description</label>
        <textarea
        maxLength={200} 
          value={shopDescription}
          onChange={(e) => dispatch(setShopDescription(e.target.value))}
          rows={4}
          placeholder="What is your shop about ?"
          className={`border-2 focus:outline-none focus:ring-0 bg-blue-50 rounded-md md:w-72 w-60 lg:w-96 px-2 py-1 text-md ${shopDescriptionError != '' ? 'border-red-500' : 'border-gray-500 '}`}
        />  
        <div className="w-full flex justify-end">
          <p className="text-xs text-blue-700 ">{shopDescription.length}/200</p>
        </div>
        <p className="text-red-500 text-xs">{shopDescriptionError}</p>
      </div>
      <div>
      <label className="text-md font-semibold block">Shop Tags</label>
        <TagInput setData={setShopTags}/>
      </div>
    </div>
  );
};

export default BasicDetails;
