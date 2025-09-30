import React from "react";

const SearchResults = () => {
  const dummyResults = [
    { id: 1, title: "Creamy Pasta", publisher: "The Pioneer Woman", img: "src/img/test-1.jpg" },
    { id: 2, title: "Avocado Toast", publisher: "Healthy Eats", img: "src/img/test-2.jpg" },
    { id: 3, title: "Grilled Chicken", publisher: "FoodieHub", img: "src/img/test-3.jpg" },
  ];

  return (
    <section className="mt-30">
      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {dummyResults.map(recipe => (
          <li key={recipe.id} className="group">
            <a
              href={`#${recipe.id}`}
              className="block rounded-2xl overflow-hidden bg-[#26130d]/90 backdrop-blur-md shadow-lg hover:shadow-[#ff914d]/40 transition-all duration-300"
            >
              <figure className="overflow-hidden">
                <img
                  src={recipe.img}
                  alt={recipe.title}
                  className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </figure>
              <div className="p-4">
                <h4 className="text-lg font-semibold text-[#fef9f6] group-hover:text-[#ff914d]">
                  {recipe.title}
                </h4>
                <p className="text-sm text-gray-400">{recipe.publisher}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>

      <div className="flex justify-center mt-10 gap-4">
        <button className="px-5 py-2 rounded-full bg-[#1a0e0a] text-gray-200 hover:bg-[#3d1f14] hover:scale-105 transition">
          ⬅ Prev
        </button>
        <button className="px-5 py-2 rounded-full bg-gradient-to-r from-[#ff914d] via-[#ff4d4d] to-[#facc15] text-[#1a0e0a] font-bold hover:scale-105 transition">
          Next ➡
        </button>
      </div>
    </section>
  );
};

export default SearchResults;
