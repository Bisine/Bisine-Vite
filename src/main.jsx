import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./screens/login/page.jsx";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import ProfileCreatePage from "./screens/profileCreate/page.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profileCreate" element={<ProfileCreatePage/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
