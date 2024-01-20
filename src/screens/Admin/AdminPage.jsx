import React, {useState} from "react";
import { useSelector } from 'react-redux';
import Navbar from "../../CommonComponets/NavBar"
import ReviewCard from "../productPage/components/ReviewCard"

function AdminPage() {

    const reviews = useSelector((state) => state.review.reviews || []);
    const [activeNavItem, setActiveNavItem] = useState("Dashboard");

    const handleNavItemClick = (item) => {
      setActiveNavItem(item);
    };

  return (
    <div className="min-h-screen bg-white">
        <Navbar isSearchVisible={true} />
        <div className="p-2 flex flex-col lg:flex-row">
          <aside className="w-full h-screen left-0 lg:w-1/4 p-4 bg-gray-100 flex flex-col items-start">
            <div className="mb-4 justify-center w-full flex flex-col items-center space-y-2">
              <span className="relative flex h-28 w-28 shrink-0 overflow-hidden rounded-full">
                <img className="aspect-square h-full w-full" alt="Creator Insider" src="/placeholder.svg" />
              </span>
              <span className="font-semibold text-[18px]">Your channel</span>
            </div>
            <div className="space-y-2 flex flex-col w-full">
              <li  className={`inline-flex items-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 justify-start cursor-pointer text-base ${
              activeNavItem === "Dashboard" ? "text-red-600" : ""
            }`} onClick={() => handleNavItemClick("Dashboard")}>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <rect width={7} height={9} x={3} y={3} rx={1} />
                  <rect width={7} height={5} x={14} y={3} rx={1} />
                  <rect width={7} height={9} x={14} y={12} rx={1} />
                  <rect width={7} height={5} x={3} y={16} rx={1} />
                </svg>
                Dashboard
              </li>
              <li  className={`inline-flex items-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 justify-start cursor-pointer text-base ${
              activeNavItem === "Content" ? "text-red-600" : ""
            }`} onClick={() => handleNavItemClick("Content")}>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M17 6.1H3" />
                  <path d="M21 12.1H3" />
                  <path d="M15.1 18H3" />
                </svg>
                Content
              </li>
              <li  className={`inline-flex items-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 justify-start cursor-pointer text-base ${
              activeNavItem === "Playlists" ? "text-red-600" : ""
            }`} onClick={() => handleNavItemClick("Playlists")}>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M21 15V6" />
                  <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                  <path d="M12 12H3" />
                  <path d="M16 6H3" />
                  <path d="M12 18H3" />
                </svg>
                Playlists
              </li>
              <li  className={`inline-flex items-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 justify-start cursor-pointer text-base ${
              activeNavItem === "Analytics" ? "text-red-600" : ""
            }`} onClick={() => handleNavItemClick("Analytics")}>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                  <path d="M22 12A10 10 0 0 0 12 2v10z" />
                </svg>
                Analytics
              </li>
              <li  className={`inline-flex items-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 justify-start cursor-pointer text-base ${
              activeNavItem === "Comments" ? "text-red-600" : ""
            }`} onClick={() => handleNavItemClick("Comments")}>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <polyline points="9 17 4 12 9 7" />
                  <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
                </svg>
                Comments
              </li>
              <li  className={`inline-flex items-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 justify-start cursor-pointer text-base ${
              activeNavItem === "Subtitles" ? "text-red-600" : ""
            }`} onClick={() => handleNavItemClick("Subtitles")}>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M7 13h4" />
                  <path d="M15 13h2" />
                  <path d="M7 9h2" />
                  <path d="M13 9h4" />
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10Z" />
                </svg>
                Subtitles
              </li>
              <li  className={`inline-flex items-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 justify-start cursor-pointer text-base ${
              activeNavItem === "Copyright" ? "text-red-600" : ""
            }`} onClick={() => handleNavItemClick("Copyright")}>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <circle cx={12} cy={12} r={10} />
                  <path d="M15 9.354a4 4 0 1 0 0 5.292" />
                </svg>
                Copyright
              </li>
            </div>
          </aside>
          <main className="w-full lg:w-3/4 p-4">
            <div dir="ltr" data-orientation="horizontal">
              <li className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 cursor-pointer">
                Overview
              </li>
              <li className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 cursor-pointer">
                Reach
              </li>
              <li className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 cursor-pointer">
                Engagement
              </li>
              <li className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 cursor-pointer border-b-2 border-blue-600">
                Audience
              </li>
              <li className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 cursor-pointer">
                Revenue
              </li>
              <li className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 cursor-pointer">
                Research
              </li>
            </div>
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
          </main>
        </div>
      </div>
  );
}

export default AdminPage;
