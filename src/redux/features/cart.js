import { createSlice } from "@reduxjs/toolkit";

export const cart = createSlice({
    name:"cart",
    initialState: {
        productList:[
            {
              id: 1,
              title: 'Apple Smart Watch',
              price: 10.0,
              quantity: 1,
              image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
            },
            {
              id: 2,
              title: 'Samsung Smart Watch',
              price: 15.0,
              quantity: 2,
              image: 'https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2Ftc3VuZyUyMHdhdGNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
            },
            // Add more products as needed
          ],
    },
    reducers:{
        setProductList: (state, action) => {
            state.productList = action.payload
        }
    }
})

export const { setProductList} = cart.actions
export default cart.reducer