import React, { useState } from "react";
import { FaBookmark, FaPlus, FaTimes } from "react-icons/fa";

const Navbar = ({ onSearch, onOpenModal, bookmarks, onSelectRecipe, onRemoveBookmark }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showBookmarks, setShowBookmarks] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      onSearch(searchTerm);
    }
  };

  return (
    <nav className="w-full bg-gradient-to-r from-[#1a0e0a] via-[#26130d] to-[#3d1f14] shadow-lg fixed top-0 left-0 z-50 border-b border-[#ff914d]/30">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center cursor-pointer pl-20">
          <img src="/logo.png" alt="CookQuest Logo" className="h-14 w-auto object-contain drop-shadow-lg"/>
        </div>

        <form onSubmit={handleSubmit} className="flex-1 mx-8 hidden md:block">
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search recipes..."
              className="w-full py-2 pl-5 pr-24 rounded-full bg-[#1a0e0a] border border-[#ff914d]/40 text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-[#ff914d] focus:outline-none shadow-inner"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[#ff914d] to-[#ff4d4d] text-[#1a0e0a] font-semibold px-4 py-1.5 rounded-full shadow hover:scale-105 transition text-sm"
            >
              Search
            </button>
          </div>
        </form>

        <div className="flex items-center space-x-4 relative">
          <button
            onClick={onOpenModal}
            className="flex items-center gap-2 bg-[#1a0e0a] text-[#ff914d] font-semibold px-4 py-2 rounded-full shadow hover:bg-[#26130d] hover:scale-105 transition"
          >
            <FaPlus />
            <span>Add Recipe</span>
          </button>

          <div className="relative">
            <button
              onClick={() => setShowBookmarks((prev) => !prev)}
              className="flex items-center gap-2 bg-[#1a0e0a] text-[#22c55e] font-semibold px-4 py-2 rounded-full shadow hover:bg-[#26130d] hover:scale-105 transition"
            >
              <FaBookmark />
              <span>Bookmarks</span>
            </button>

            {showBookmarks && (
              <div className="absolute right-0 mt-2 w-80 bg-[#26130d]/95 border border-[#ff914d]/30 rounded-xl shadow-lg p-4 z-50">
                <h4 className="text-[#ff914d] font-bold mb-3">Saved Recipes</h4>
                {bookmarks.length === 0 ? (
                  <p className="text-gray-400 text-sm">No bookmarks yet.</p>
                ) : (
                  <ul className="space-y-3 max-h-80 overflow-y-auto">
                    {bookmarks.map((recipe) => (
                      <li
                        key={recipe.idMeal}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#1a0e0a] transition"
                      >
                        <img
                          src={recipe.strMealThumb}
                          alt={recipe.strMeal}
                          className="w-12 h-12 object-cover rounded-md cursor-pointer"
                          onClick={() => onSelectRecipe(recipe)}
                        />
                        <span
                          onClick={() => onSelectRecipe(recipe)}
                          className="text-sm text-gray-200 cursor-pointer flex-1"
                        >
                          {recipe.strMeal}
                        </span>
                        <button
                          onClick={() => onRemoveBookmark(recipe.idMeal)}
                          className="text-red-400 hover:text-red-600"
                        >
                          <FaTimes />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
