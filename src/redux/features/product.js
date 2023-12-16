import { createSlice } from "@reduxjs/toolkit";

export const product = createSlice({
    name : 'product',
    initialState: {
        name: "",
        description : "",
        productTags : [],
        images : [],
        variant :[{ name: "", price: "" }],
        weight:0,
        unit:"",
        quantity:null
    },
    reducers: {
        setName: (state,action) => {
            state.name = action.payload
        },
        setDescription : (state,action) =>{
            state.description = action.payload
        },
        setProductTags : (state,action) => {
            state.productTags = action.payload
        },
        setImages : (state,action) => {
            state.images = action.payload
        },
        setProductVariants : (state,action) => {
            state.variant = action.payload
        },
        setWeight : (state,action) => {
            state.weight = action.payload
        },
        setUnit : (state,action) => {
            state.unit = action.payload
        },
        setQuantity : (state,action) => {
            state.quantity = action.payload
        }
    }
})

export const { setProductTags, setName,setDescription,setImages, setProductVariants,setUnit,setWeight, setQuantity} = product.actions;

export default product.reducer