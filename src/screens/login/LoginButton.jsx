
import React from "react";
import Google from "./google.png";
import { GoogleLogin , GoogleLogout} from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setProfileUrl } from "../../redux/features/user";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axios";

const clientId =
  "774961232823-b6fmrl6p9tcbhgk19fuv7a6ftbbegcm6.apps.googleusercontent.com";

const LoginButton = () => {
  const navigate = useNavigate()
    const dispatch = useDispatch();
    const email = useSelector(e => e.user.email);

  const onSuccess = (re) => {
    console.log("Login Success", re.profileObj.email);
    localStorage.setItem('email',re.profileObj.email);
    dispatch(setEmail(re.profileObj.email))
    dispatch(setProfileUrl(re.profileObj.imageUrl))
    axiosInstance.post('user/check/',{
      email: re.profileObj.email
    }).then(
     (res) =>{
      console.log(res.data.check)
        if (res.data.check == "True"){
          //If user is already created account
          axiosInstance.post(
            'user/token/',{
              email:  re.profileObj.email
            }
          ).then(res => {
            if (res.status == 200){
              localStorage.setItem('refresh', res.data.refresh);
            localStorage.setItem('access', res.data.access)
            navigate('/')
            }
          })
        } else {
          //New User
          navigate('/profileCreate')
        }
     })
    //route.push('/profileCreate')
  };

  const onLogOut =() => {
    console.log("Log Out Successful")
  }

  const onFailure = (res) => {
    console.log("Login Failed", res);
  };
  return (
    <div id="signInButton" className="text-black">
      <GoogleLogin
        render={(r) => 
          <button onClick={r.onClick} className="flex px-10 py-3 gap-2 bg-gray-300 rounded-lg text-black font-medium items-center transition ease-in-out duration-300 hover:bg-sky-500">
            <div>
              <img src={Google} height={25} 
              width={25}className="object-contain"/>
            </div>
            <p>Continue with Google</p>
          </button>
        }
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy="single_host_origin"
        isSignedIn={true}
      />
      {/* <p>{email}</p>
      <GoogleLogout
                clientId={clientId}
                buttonText="LogOut"
                onLogoutSuccess={onLogOut}/> */}
    </div>
  );
};

export default LoginButton;
