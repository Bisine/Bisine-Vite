import { useState } from "react";
import NavBar from "../../CommonComponets/NavBar";
import Product from "../../CommonComponets/Product";

function HomePage() {
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);

  const availableCategories = [
    { id: 1, category: "All" },
    { id: 2, category: "Cosmetics" },
    { id: 3, category: "Clothing" },
    { id: 4, category: "Electronics" },
  ];
  return (
    <>
      <section className="min-h-screen bg-blue-50">
        <NavBar />
        <div className="h-full px-8 py-20">
          <h1 className="font-semibold text-black text-2xl">Recommendations</h1>
          <div className="py-2 text-black overflow-x-auto whitespace-nowrap">
            {availableCategories.map(c => 
              <button onClick={() => setSelectedCategoryId(c.id)} className={`px-2 py-1 transition duration-300 ease-in-out my-1 mx-1  border rounded-lg ${selectedCategoryId == c.id ? 'bg-blue-500 border-blue-500 text-white':'bg-transparent border-black'}`}  id={c.id}>{c.category}</button>
            )}
          </div>
          <div className="mt-2 z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
