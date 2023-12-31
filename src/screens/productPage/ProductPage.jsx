import React from 'react'
import Navbar from "../../CommonComponets/NavBar"
import AddReviewCard from './components/AddReviewCard'
import ProductCard from './components/ProductCard'
import ReviewCard from './components/ReviewCard'

function ProductPage() {
    const product = {
        "shop_id": 1,
        "product_name": "Spider Man T-Shirt",
        "product_description": "A marvel fan should buy this cozy spider man t shirt ",
        "product_images": [
            "url1",
        "url2",
        "url3"
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
                <ReviewCard />
                <AddReviewCard />
            </div>
        </>
    )
}

export default ProductPage