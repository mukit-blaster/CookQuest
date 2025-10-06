import React from "react";
import { FaBookmark } from "react-icons/fa";

const SearchResults = ({ results, onSelectRecipe, onBookmark, bookmarks }) => {
  if (!results.length) {
    return (
      <p className="text-center text-gray-400 mt-20 text-sm sm:text-base">
        No recipes found. Try searching!
      </p>
    );
  }

  return (
    <section className="mt-10 px-4 sm:px-6 lg:px-8">
      <ul
        className="
          grid gap-6
          sm:grid-cols-2
          md:grid-cols-3
          xl:grid-cols-4
          justify-items-center
        "
      >
        {results.map((recipe) => {
          const isBookmarked = bookmarks.some((b) => b.idMeal === recipe.idMeal);

          return (
            <li
              key={recipe.idMeal}
              className="
                group relative rounded-2xl overflow-hidden shadow-lg 
                cursor-pointer transform hover:scale-[1.03] transition duration-300 
                w-full sm:w-[90%] md:w-full
              "
            >
              {/* Image and title */}
              <div onClick={() => onSelectRecipe(recipe)} className="block">
                <figure className="overflow-hidden relative">
                  <img
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                    className="
                      h-48 sm:h-56 md:h-60 w-full object-cover 
                      group-hover:scale-110 transition-transform duration-500
                    "
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <h4
                    className="
                      absolute bottom-3 left-3 
                      text-lg sm:text-xl font-bold text-white drop-shadow-lg 
                      leading-tight
                    "
                  >
                    {recipe.strMeal}
                  </h4>
                </figure>
              </div>

              {/* Bookmark button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onBookmark(recipe);
                }}
                className={`absolute top-3 right-3 p-2 rounded-full shadow-lg transition-all
                  ${
                    isBookmarked
                      ? "bg-[#ff914d] text-black"
                      : "bg-black/60 text-white hover:bg-[#ff914d] hover:text-black"
                  }`}
              >
                <FaBookmark className="text-base sm:text-lg" />
              </button>

              {/* Details */}
              <div
                className="
                  p-3 sm:p-4 
                  bg-[#26130d]/90 backdrop-blur-sm 
                  text-center sm:text-left
                "
              >
                <p className="text-xs sm:text-sm text-gray-300">
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
