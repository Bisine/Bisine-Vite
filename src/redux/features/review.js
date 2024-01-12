import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    reviews: [],
    total: 0,
};

const review = createSlice({
    name: 'review',
    initialState,
    reducers: {
        addReview: (state, action) => {
            const newReview = action.payload; 
            const existingReview = state.reviews.find(review => review.id === newReview.id);

            if (existingReview) {
                state.reviews = state.reviews.map(review =>
                    review.id === newReview.id ? { ...review, ...newReview } : review
                );
            } else {
                state.reviews.push(newReview);
            }

            state.total += 1; 
        }
    }
});

export const { addReview } = review.actions; 
export default review.reducer;
