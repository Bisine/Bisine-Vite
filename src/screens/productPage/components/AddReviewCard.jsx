import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';
import { useId } from 'react';

function AddReviewCard({addNewReview}) {
    
    const id = useId();
    
    const [rating, setRating] = useState(0);
    const [name, setName] = useState('');
    const [review, setReview] = useState('');
    const [selectedOption, setSelectedOption] = useState('Option 1');
    
    const changeRating = (newRating) => {
        setRating(newRating);
    };
    
    const createReviewCard = (e) => {
        e.preventDefault();
        if (name && review && rating && selectedOption) {
            const newReview = {
                id: id,
                name: name,
                rating: rating,
                description: review,
                option: selectedOption,
                date: getCurrentDateFormatted(),
            };
            addNewReview(newReview);
            setName('');
            setReview('');
            setRating(0);
            setSelectedOption('Option 1');
        }
    };

    function getCurrentDateFormatted() {
            const months = [
            'January', 'February', 'March', 'April', 'May', 'June', 'July',
            'August', 'September', 'October', 'November', 'December'
            ];
        
            const currentDate = new Date();
            const day = currentDate.getDate();
            const month = months[currentDate.getMonth()];
            const year = currentDate.getFullYear();
        
            const daySuffix = getDaySuffix(day);
        
            return `${month} ${day}${daySuffix}, ${year}`;
        }
        
        function getDaySuffix(day) {
            if (day >= 11 && day <= 13) {
                return 'th';
            }
                switch (day % 10) {
                case 1:
                    return 'st';
                case 2:
                    return 'nd';
                case 3:
                    return 'rd';
                default:
                    return 'th';
            }
    }

    return (
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
            <div className="p-4 flex flex-col gap-4">
                <h2 className="font-bold text-2xl md:text-3xl mb-6">Add Your Review</h2>
                <div className="flex flex-col gap-4">
                    <input
                        aria-label="Your Name"
                        className="p-2 border rounded"
                        placeholder="Your Name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <textarea
                        aria-label="Your Review"
                        className="p-2 border rounded"
                        placeholder="Your Review"
                        rows={5}
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                    />
                    <div className="relative inline-flex w-[8rem]">
                        <select
                            className="block appearance-none bg-white border border-gray-300 rounded-md py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-blue-500 cursor-pointer"
                            value={selectedOption}
                            onChange={(e) => setSelectedOption(e.target.value)}
                        >
                            <option className='bg-gray-200 hover:bg-gray-300'>Option 1</option>
                            <option className='px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white'>Option 2</option>
                            <option className='px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white'>Option 3</option>
                            <option className='px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white'>Option 4</option>
                            <option className='px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white'>Option 5</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <StarRatings
                            rating={rating}
                            starRatedColor="#ffa534"
                            changeRating={changeRating}
                            numberOfStars={5}
                            starSelectingHoverColor="#ffe234"
                            name='rating'
                            starDimension="30px"
                        />
                    </div>
                    <button
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-blue-500 text-white"
                        onClick={createReviewCard}
                    >
                        Submit Review
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddReviewCard;
