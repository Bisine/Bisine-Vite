import { configureStore } from "@reduxjs/toolkit";
import user from "./features/user";
import shop from "./features/shop";
import shopError from "./features/shopError";

export const store = configureStore({
    reducer: {
        user: user,
        shop: shop,
        shopError: shopError
    }
})