import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./screens/login/page.jsx";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import ProductPage from "./screens/productPage/ProductPage.jsx";
import ProfileCreatePage from "./screens/profileCreate/page.jsx";
import HomePage from "./screens/homePage/HomePage";
import ShopCreate from "./screens/shopCreate/ShopCreate";
import CartPage from "./screens/cartPage/CartPage";
import ProductAdditionScreen from "./screens/addProduct/AddProduct";
import { GoogleOAuthProvider } from '@react-oauth/google';
import ShopScreen from "./screens/shop/ShopScreen.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  < GoogleOAuthProvider clientId="774961232823-b6fmrl6p9tcbhgk19fuv7a6ftbbegcm6.apps.googleusercontent.com">
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profileCreate" element={<ProfileCreatePage/>}/>
          <Route path="/shopCreate" element={<ShopCreate/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/addProduct" element={<ProductAdditionScreen/>}/>
          <Route path="/*/*" element={<h1>hi</h1>}/>
          <Route path="/*" element={<ShopScreen/>}/>
          <Route path="/product" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
  </GoogleOAuthProvider>
);
