import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0,
  itemTotal: 0,
};

const checkout = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const productToAdd = action.payload.product;
      const existingProduct = state.items.find(
        (item) => item.id === productToAdd.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.items.push({ ...productToAdd, quantity: 1 });
      }

      state.itemTotal += 1;
      state.total += parseInt(productToAdd.price);
      localStorage.setItem("checkout", JSON.stringify(state));
    },
    removeItem: (state, action) => {
      const itemToRemove = action.payload;
      const existingProduct = state.items.find(
        (item) => item.id === itemToRemove.id
      );

      if (existingProduct) {
        if (existingProduct.quantity === 1) {
          state.total -= parseInt(existingProduct.price);
          state.items = state.items.filter(
            (item) => item.id !== itemToRemove.id
          );
          state.itemTotal -= 1;
        } else {
          existingProduct.quantity -= 1;
          state.total -= parseInt(existingProduct.price);
          state.itemTotal -= 1;
        }
      }
      localStorage.setItem("checkout", JSON.stringify(state));
    },
    clearcheckout: (state) => {
      state.items = [];
      state.total = 0;
      state.itemTotal = 0;
      localStorage.removeItem("checkout");
    },
    setcheckoutFromLocalStorage: (state, action) => {
      const checkout = action.payload;

      state.items = checkout.items || [];
      state.total = checkout.total || 0;
      state.itemTotal = checkout.itemTotal || 0;
    },
  },
});

export const {
  addItem,
  removeItem,
  setcheckoutFromLocalStorage,
  clearcheckout,
  increaseItemQuantity,
  decreaseItemQuantity,
} = checkout.actions;
export default checkout.reducer;
