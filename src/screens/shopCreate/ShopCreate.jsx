import { useEffect, useState } from "react";
import NavBar from "../../CommonComponets/NavBar";
import HelpTitle from "./components/HelpTitle";
import ProgressBar from "./components/ProgressBar";
import BasicDetails from "./components/BasicDetails";
import LocationDetails from "./components/LocationDetails";
import InfoGraphics from "./components/InfoGraphics";
import ContactInfo from "./components/ContactInfo";
import { useDispatch, useSelector } from "react-redux";
import {
  setAreaError,
  setCityError,
  setContactNumberError,
  setEmailIDError,
  setFlatError,
  setPinCodeError,
  setShopDescriptionError,
  setShopNameError,
  setShopTagsError,
  setStateError,
} from "../../redux/features/shopError";
import axiosInstance from "../../axios";

const ShopCreate = () => {
  const shopName = useSelector((e) => e.shop.shopName);
  const shopDescription = useSelector((e) => e.shop.shopDescription);
  const shopTags = useSelector((e) => e.shop.shopTags);
  const pincode = useSelector((e) => e.shop.pincode);
  const flat = useSelector((e) => e.shop.flat);
  const area = useSelector((e) => e.shop.area);
  const landmark = useSelector((e) => e.shop.landmark);
  const city = useSelector((e) => e.shop.city);
  const state = useSelector((e) => e.shop.state);
  const contactNumber = useSelector((e) => e.shop.contactNumber);
  const emailID = useSelector((e) => e.shop.emailID);
  const socialMediaLink = useSelector((e) => e.shop.socialMediaLink);
  const logo = useSelector((e) => e.shop.logo);
  const banner = useSelector((e) => e.shop.banner);

  const dispatch = useDispatch();
  const [part, setPart] = useState(1);

  const incrementPart = () => {
    setPart((a) => a + 1);
  };

  const decrementPart = () => {
    setPart((a) => a - 1);
  };

  function isValidPhoneNumber(phoneNumber) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  }

  function isValidEmail(email) {
    const emailRegex = /^[A-Za-z0-9+_.-]+@(.+)$/;
    return emailRegex.test(email);
  }

  const nextPart = () => {
    if (part == 1) {
      if (shopName == "") {
        dispatch(setShopNameError("Kindly enter the shop name"));
      } else if (shopDescription == "") {
        dispatch(setShopDescriptionError("Kindly enter the shop description"));
      } else if (shopTags.length == 0) {
        dispatch(setShopTagsError("Kindle enter the shop tags"));
      } else {
        incrementPart();
      }
    } else if (part == 2) {
      if (pincode == "") {
        dispatch(setPinCodeError("Kindly, enter your 6 digit pincode"));
      } else if (flat == "") {
        dispatch(setFlatError("Kindly enter your flat or house number"));
      } else if (area == "") {
        dispatch(setAreaError("Kindly enter your area or street name"));
      } else if (city == "") {
        dispatch(setCityError("Kindly enter the city or town name"));
      } else if (state == "") {
        dispatch(setStateError("Kindly select your state"));
      } else {
        incrementPart();
      }
    } else if (part == 3) {
      incrementPart(shopName);
    }
  };

  const createShop = () => {
    if (contactNumber == "" || !isValidPhoneNumber(contactNumber)) {
      dispatch(
        setContactNumberError("Kindly enter your 10 digit contact number")
      );
    } else if (emailID == "" || !isValidEmail(emailID)) {
      dispatch(setEmailIDError("Kindly enter your business email correctly"));
    } else {
      //Create shop
      const location = [pincode, flat, area, landmark];
      let form_data = new FormData();
      form_data.append("name", shopName);
      form_data.append("description", shopDescription);
      form_data.append("tags", shopTags.join(","));
      form_data.append("location", location.join(";"));
      form_data.append("city", city);
      form_data.append("state", state);
      form_data.append("logo", logo);
      form_data.append("contact_number", "+91" + contactNumber);
      form_data.append("email_id", emailID);
      form_data.append("social_link", socialMediaLink);
      form_data.append("banner", banner);
      axiosInstance.post("shop/create/", form_data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then((res) => {
        console.log(res)
      }).catch((err) => {
        console.log(err)
      });
    }
  };

  useEffect(() => {
    dispatch(setShopNameError(""));
    dispatch(setShopDescriptionError(""));
    dispatch(setShopTagsError(""));
    dispatch(setPinCodeError(""));
    dispatch(setFlatError(""));
    dispatch(setAreaError(""));
    dispatch(setCityError(""));
    dispatch(setStateError(""));
    dispatch(setContactNumberError(""));
    dispatch(setEmailIDError(""));
  }, [
    shopName,
    shopDescription,
    shopTags,
    pincode,
    flat,
    area,
    city,
    state,
    contactNumber,
    emailID,
  ]);

  return (
    <>
      <section className="min-h-screen flex flex-col bg-blue-50 items-center">
        <NavBar />
        <div className="flex-1 flex flex-col w-fit pt-20 px-6 md:px-8 py-10 md:py-20 items-center">
          <div className="flex-1"></div>
          <HelpTitle partNo={part} />
          <ProgressBar partNo={part} />
          <BasicDetails partNo={part} />
          <LocationDetails partNo={part} />
          <InfoGraphics partNo={part} />
          <ContactInfo partNo={part} />
          <div className="flex w-60  md:w-72 mt-5 text-sm lg:w-96  justify-between">
            <button
              onClick={() => decrementPart()}
              disabled={part == 1}
              className="bg-blue-700 px-4  py-2 h-fit rounded-xl disabled:bg-gray-400"
            >
              Previous
            </button>
            <button
              onClick={() => nextPart()}
              hidden={part == 4}
              className={`bg-blue-700 px-4 py-2 h-fit rounded-xl disabled:bg-gray-400`}
            >
              Next
            </button>
            <button
              onClick={() => createShop()}
              disabled={part <= 3}
              hidden={part <= 3}
              className="bg-blue-700 px-4  py-2 h-fit rounded-xl disabled:bg-gray-400"
            >
              Create Shop
            </button>
          </div>
          <div className="flex-1"></div>
          <div className="flex-1"></div>
        </div>
      </section>
    </>
  );
};

export default ShopCreate;
