import React from 'react'
import userDefault from "../assests/userIcon.png"
import { Rating } from 'react-simple-star-rating'

function ReviewCard({userImage, name, date, description, rating, option}) {
    const userPhoto = userImage || userDefault

    return (
        <div
        className="rounded-lg border mb-4 bg-card text-card-foreground shadow-sm"
        data-v0-t="card"
        >
            <div className="p-4 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                    <img
                        className="relative flex shrink-0 overflow-hidden rounded-full w-12 h-12"
                        alt="User Avatar"
                        height={50}
                        width={50}
                        src={userPhoto}
                    />
                    <div>
                        <h3 className="font-bold text-lg">{name}</h3>
                        <span className="text-gray-500">{date}</span>
                        <span className='text-gray-500'>Option: {option}</span>
                    </div>
                </div>
                <div>
                    <Rating readonly showTooltip initialValue={rating} />
                </div>
                <p className="text-gray-500">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default ReviewCard