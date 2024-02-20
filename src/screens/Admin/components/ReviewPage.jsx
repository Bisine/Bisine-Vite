import React from 'react'

function ReviewPage({reviews}) {
  return (
    <section className="mt-8">
              <h2 className="text-xl font-bold">Reviews Of your videos</h2>
              <p className="text-sm text-gray-500">Last 90 days</p>
              <div className="mt-4 flex flex-col gap-4">
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
              </div>
                {reviews.length ==0 && <p className="items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none text-center disabled:opacity-50 hover:bg-accent text-2xl hover:text-accent-foreground h-10 px-4 py-2 mt-4">
                    No Reviews Currently Available
                </p>}
            </section>
  )
}

export default ReviewPage