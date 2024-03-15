import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../Helper/axiosInstance"

const initialState = {
    reviews: [],
    total: 0
}

export const addReviewByApi = createAsyncThunk("/review/add", async (data) => {
    try {
        console.log(data);
        const res = axiosInstance.post(`review/add`, data);
    
        toast.promise(res, {
            loading: "Adding the Review...",
            success: "Review added successfully",
            error: "Failed to add Review",
        });
    
        const response = await res;
        return response.data;
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message);
        }
});

const review = createSlice({
    name: 'review',
    initialState,
    reducers: {
        addReview: (state, action) => {
            state.reviews.push(action.payload);
            state.total += action.payload.length
        }
    }
})

export const {addReview} = review.actions;
export default review.reducer;
