import { configureStore } from "@reduxjs/toolkit";
import user from "./features/user";
import shop from "./features/shop";
import shopError from "./features/shopError";
import cart from "./features/cart";
import product from "./features/product";

export const store = configureStore({
    reducer: {
        user: user,
        shop: shop,
        shopError: shopError,
        cart: cart,
        product : product
    }
})