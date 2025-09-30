import React from "react";
import { FaBookmark, FaPlus } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="w-full bg-gradient-to-r from-[#1a0e0a] via-[#26130d] to-[#3d1f14] shadow-lg fixed top-0 left-0 z-50 border-b border-[#ff914d]/30">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center cursor-pointer pl-20">
          <img 
            src="/logo.png" 
            alt="CookQuest Logo" 
            className="h-14 w-auto object-contain drop-shadow-lg"
          />
        </div>

        {/* Search */}
        <div className="flex-1 mx-8 hidden md:block">
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search recipes..."
              className="w-full py-2 pl-5 pr-24 rounded-full bg-[#1a0e0a] border border-[#ff914d]/40 text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-[#ff914d] focus:outline-none shadow-inner"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[#ff914d] to-[#ff4d4d] text-[#1a0e0a] font-semibold px-4 py-1.5 rounded-full shadow hover:scale-105 transition text-sm">
              Search
            </button>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <button className="flex items-center gap-2 bg-[#1a0e0a] text-[#ff914d] font-semibold px-4 py-2 rounded-full shadow hover:bg-[#26130d] hover:scale-105 transition">
            <FaPlus />
            <span>Add Recipe</span>
          </button>
          <button className="flex items-center gap-2 bg-[#1a0e0a] text-[#22c55e] font-semibold px-4 py-2 rounded-full shadow hover:bg-[#26130d] hover:scale-105 transition">
            <FaBookmark />
            <span>Bookmarks</span>
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
