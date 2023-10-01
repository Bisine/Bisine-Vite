import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFullName, setPhoneNumber } from "../../redux/features/user";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axios";

const ProfileCreation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useSelector(e => e.user.email)
  const phoneNumber = useSelector((event) => event.user.phoneNumber);
  const fullName = useSelector((event) => event.user.fullName);

  const onSubmit = (e) => {    
    e.preventDefault();
    axiosInstance.post('user/register/',{
      email: localStorage.getItem('email'),
      user_name: fullName,
      phone_number: "+91"+phoneNumber
    }).then(res => {
      if (res.status == 201){
        axiosInstance.post('user/token/',{
          email: email
        }).then(res => {
          if (res.status == 200){
            localStorage.setItem('refresh', res.data.refresh);
            localStorage.setItem('access', res.data.access)
            navigate('/')
          }
        })
      } 
    })
  }

  return (
    <div className="flex-1 flex flex-col justify-center items-center text-black gap-5">
      <h1 className="font-semibold text-2xl">Register your account</h1>
      <form onSubmit={(e) => onSubmit(e)} className="flex flex-col gap-4 mt-10">
        <div>
          <p className="font-semibold text-md">Full Name</p>
          <input
            value={fullName}
            onChange={(e) => dispatch(setFullName(e.target.value))}
            type="text"
            placeholder="Aswin Raaj"
            className="border-2 bg-blue-50 border-gray-500 rounded-md w-96 px-2 py-1 text-lg"
          />
        </div>
        <div>
          <p className="font-semibold text-md">Phone Number</p>
          <input
            value={phoneNumber}
            onChange={(e) => dispatch(setPhoneNumber(e.target.value))}
            type="text"
            placeholder="1234567890"
            className="border-2 bg-blue-50 border-gray-500 rounded-md w-96 px-2 py-1 text-lg"
          />
        </div>
        <div className="flex gap-5 items-center mt-16">
          <input type="checkbox" className="bg-blue-50"/>
          <label className="text-xs">
            By creating an account, you are agreeing to our{" "}
            <span className="underline text-blue-700">
              Terms and conditions
            </span>
          </label>
        </div>

        <button type="submit" className="rounded-lg bg-blue-500 py-2 mt-2">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default ProfileCreation;
