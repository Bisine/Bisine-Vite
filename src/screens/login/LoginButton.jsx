import React from "react";
import Google from "./google.png";
//import { GoogleLogin , GoogleLogout} from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setProfileUrl } from "../../redux/features/user";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axios";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { googleLogout } from "@react-oauth/google";
import axios from "axios";

const clientId =
  "774961232823-b6fmrl6p9tcbhgk19fuv7a6ftbbegcm6.apps.googleusercontent.com";

const LoginButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useSelector((e) => e.user.email);

  const onSuccess = (re) => {
    console.log("Imaghe", re.picture);
    console.log("Login Success", re.email);
    localStorage.setItem("email", re.email);
    localStorage.setItem('profileUrl',re.picture);
    dispatch(setEmail(re.email));
    dispatch(setProfileUrl(re.picture));
    axios
      .post("http://localhost:3000/api/user/auth", { email: re.email})
      .then((res) => {
        if (res.status == 200) {
          const { user, access_token } = res.data;
          console.log("User:", user);
          console.log("Access Token:", access_token);
          // You can handle the response accordingly, such as storing user details or token in local storage
          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("access_token", access_token);
          navigate("/");
        } 
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          // Handle 404 error (user not found)
          console.log(error.response);
          navigate("/user/register"); // Navigate to signup page or another page
        } else {
          // Handle other errors
          console.error("Error:", error);
          // Handle error response from backend
        }
        // Handle error response from backend
      });
    // axiosInstance.post('user/check/',{
    //   email: re.email
    // }).then(
    //  (res) =>{
    //   console.log(res.data.check)
    //     if (res.data.check == "True"){
    //       //If user is already created account
    //       axiosInstance.post(
    //         'user/token/',{
    //           email:  re.email
    //         }
    //       ).then(res => {
    //         if (res.status == 200){
    //           localStorage.setItem('refresh', res.data.refresh);
    //         localStorage.setItem('access', res.data.access)
    //         navigate('/')
    //         }
    //       })
    //     } else {
    //       //New User
    //       navigate('/profileCreate')
    //     }
    //  })

    //route.push('/profileCreate')
  };

  const onLogOut = () => {
    console.log("Log Out Successful");
  };

  const onFailure = (res) => {
    console.log("Login Failed", res);
  };

  const login = useGoogleLogin({
    onSuccess: (r) => console.log(r),
    onError: onFailure,
  });

  return (
    <div id="signInButton" className="text-black">
      {/* <button onClick={() => login()} className="flex px-10 py-3 gap-2 bg-gray-300 rounded-lg text-black font-medium items-center transition ease-in-out duration-300 hover:bg-sky-500">
            <div>
              <img src={Google} height={25} 
              width={25}className="object-contain"/>
            </div>
            <p>Continue with Google</p>
          </button> */}
      <GoogleLogin
        onSuccess={(r) => onSuccess(jwtDecode(r.credential))}
        theme="filled_blue"
      />
      <button onClick={() => googleLogout()}>Logout</button>
      {/* <p>{email}</p>
      <GoogleLogout
                clientId={clientId}
                buttonText="LogOut"
                onLogoutSuccess={onLogOut}/> */}
    </div>
  );
};

export default LoginButton;
