import React from "react";
import { FaBookmark } from "react-icons/fa";

const SearchResults = ({ results, onSelectRecipe, onBookmark, bookmarks }) => {
  if (!results.length) {
    return <p className="text-center text-gray-400 mt-20">No recipes found. Try searching!</p>;
  }

  return (
    <section className="mt-10">
      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((recipe) => {
          const isBookmarked = bookmarks.some((b) => b.idMeal === recipe.idMeal);

          return (
            <li
              key={recipe.idMeal}
              className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition duration-300"
            >
              <div onClick={() => onSelectRecipe(recipe)} className="block">
                <figure className="overflow-hidden relative">
                  <img
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                    className="h-56 w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <h4 className="absolute bottom-4 left-4 text-xl font-bold text-white drop-shadow-lg">
                    {recipe.strMeal}
                  </h4>
                </figure>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onBookmark(recipe);
                }}
                className={`absolute top-3 right-3 p-2 rounded-full shadow-lg transition 
                  ${isBookmarked ? "bg-[#ff914d] text-black" : "bg-black/60 text-white hover:bg-[#ff914d] hover:text-black"}`}
              >
                <FaBookmark />
              </button>

              <div className="p-4 bg-[#26130d]/90 backdrop-blur-sm">
                <p className="text-sm text-gray-300">
                  {recipe.strArea} | {recipe.strCategory}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default SearchResults;
