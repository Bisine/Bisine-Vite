import React from 'react'
import userDefault from "../assests/userIcon.png"

function ReviewCard({userImage}) {
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
                        <h3 className="font-bold text-lg">John Doe</h3>
                        <span className="text-gray-500">January 1, 2023</span>
                    </div>
                </div>
                <p className="text-gray-500">
                This product is amazing! I've been using it for a month now and it has
                exceeded my expectations.
                </p>
            </div>
        </div>
    )
}

export default ReviewCard