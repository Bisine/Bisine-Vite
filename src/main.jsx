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
import { GoogleOAuthProvider } from "@react-oauth/google";
import ShopScreen from "./screens/shop/ShopScreen.jsx";
import UserOrdersPage from "./screens/user/orders/UserOrdersPage.jsx";
import { Toaster } from "react-hot-toast";
import CheckoutPage from "./screens/checkout/CheckoutPage.jsx";
import { NextUIProvider } from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <NextUIProvider>
    <GoogleOAuthProvider clientId="774961232823-b6fmrl6p9tcbhgk19fuv7a6ftbbegcm6.apps.googleusercontent.com">
      <React.StrictMode>
        <Provider store={store}>
          <Toaster position="top-right" />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/user/login" element={<LoginPage />} />
              <Route path="/user/register" element={<ProfileCreatePage />} />
              <Route path="/user/orders" element={<UserOrdersPage />} />
              <Route path="/shop/create" element={<ShopCreate />} />
              <Route path="/product/add" element={<ProductAdditionScreen />} />
              <Route path="/user/cart" element={<CartPage/>}/>
          
{/* <Route path="/" element={<h1>hi</h1>}/> */}
              <Route path="/:shop_id" element={<ShopScreen />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/product/:product_id" element={<ProductPage />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </React.StrictMode>
    </GoogleOAuthProvider>
  </NextUIProvider>
);
