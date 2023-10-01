import { createSlice } from "@reduxjs/toolkit";

export const user = createSlice({
    name: 'user',
    initialState: {
        email : '',
        profileUrl: '',
        fullName: '',
        phoneNumber: '',
        shippingAddress : '',
        googleMapLink: '',
    },
    reducers: {
        setEmail : (state, action) => {
            state.email = action.payload
        },
        setProfileUrl : (state, action) => {
            state.profileUrl = action.payload
        },
        setFullName : (state, action) =>{
            state.fullName = action.payload
        },
        setPhoneNumber : (state, action) => {
            state.phoneNumber = action.payload
        },
        setShippingAddress : (state, action) => {
            state.shippingAddress = action.payload
        },
        setGoogleMapLink :(state, action) => {
            state.googleMapLink = action.payload
        }
    }
})

export const {setEmail, setProfileUrl,setFullName, setPhoneNumber, setShippingAddress, setGoogleMapLink} = user.actions
export default user.reducer