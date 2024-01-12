import React, { useEffect } from 'react'
import Navbar from "../../CommonComponets/NavBar"
import AddReviewCard from './components/AddReviewCard'
import ProductCard from './components/ProductCard'
import { useSelector, useDispatch } from 'react-redux';
import { addReview } from '../../redux/features/review';
import ReviewCard from './components/ReviewCard'
import cloth1 from "../productPage/assests/URBANMONKEY06_11_231642.webp"
import cloth2 from "../productPage/assests/URBANMONKEY06_11_231679.webp"
import cloth3 from "../productPage/assests/URBANMONKEY07_11_231899.webp"

function ProductPage() {
    const dispatch = useDispatch();
    const reviews = useSelector((state) => state.review.reviews || []);

    const product = {
        "shop_id": 1,
        "product_name": "Spider Man T-Shirt",
        "product_description": "A marvel fan should buy this cozy spider man t shirt ",
        "product_images": [
            cloth1,
            cloth2,
            cloth3,
        ],
        "product_tags": [
            "Fashion",
            "Menswear",
            "Marvel",
            "Spiderman"
        ],
        "product_variants": [
            {
                "name": "Small",
                "price": "250",
            },
            {
                "name": "Medium",
                "price": "300",
            },
            {
                "name": "Large",
                "price": "500",
            }
        ],   
        
    }

    return (
        <>
            <Navbar />  
            <ProductCard product={product}/>
            <div className="max-w-6xl px-4 mx-auto py-6">
                <h2 className="font-bold text-2xl md:text-3xl mb-6">Customer Reviews</h2>
                {reviews.map((review) => (
                    <ReviewCard
                        key={review.id}
                        id={review.id}
                        userImage={review.userImage}
                        name={review.name}
                        date={review.date}
                        description={review.description}
                        rating={review.rating}
                        option={review.option}
                    />
                ))}
                <AddReviewCard addNewReview={(newReview) => dispatch(addReview(newReview))} />
            </div>
        </>
    )
}

export default ProductPage