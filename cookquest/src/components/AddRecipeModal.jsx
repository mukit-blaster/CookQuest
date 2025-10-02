import React from "react";

const AddRecipeModal = ({ onClose }) => {
  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40" onClick={onClose}></div>

      {/* Modal */}
      <div className="add-recipe-window fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        w-full max-w-lg bg-[#26130d]/95 rounded-2xl shadow-2xl border border-[#ff914d]/30 p-8 z-50">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-3xl text-gray-400 hover:text-[#ff914d] transition"
        >
          &times;
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-[#ff914d] mb-6 tracking-wide">
          Upload Your Recipe (Local Only)
        </h2>

        {/* Form */}
        <form className="grid md:grid-cols-2 gap-6 text-[#fef9f6]">
          <div>
            <h3 className="font-semibold mb-3 text-[#facc15]">Recipe Data</h3>
            <input className="w-full border border-[#ff914d]/40 bg-[#1a0e0a] p-2 rounded mb-2 focus:ring-2 focus:ring-[#ff914d] outline-none transition" placeholder="Title" />
            <input className="w-full border border-[#ff914d]/40 bg-[#1a0e0a] p-2 rounded mb-2 focus:ring-2 focus:ring-[#ff914d] outline-none transition" placeholder="Image URL" />
            <input className="w-full border border-[#ff914d]/40 bg-[#1a0e0a] p-2 rounded mb-2 focus:ring-2 focus:ring-[#ff914d] outline-none transition" placeholder="Publisher" />
            <input className="w-full border border-[#ff914d]/40 bg-[#1a0e0a] p-2 rounded mb-2 focus:ring-2 focus:ring-[#22c55e] outline-none transition" type="number" placeholder="Prep Time (mins)" />
            <input className="w-full border border-[#ff914d]/40 bg-[#1a0e0a] p-2 rounded mb-2 focus:ring-2 focus:ring-[#22c55e] outline-none transition" type="number" placeholder="Servings" />
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-[#facc15]">Ingredients</h3>
            {[...Array(6)].map((_, i) => (
              <input 
                key={i} 
                className="w-full border border-[#ff914d]/40 bg-[#1a0e0a] p-2 rounded mb-2 focus:ring-2 focus:ring-[#8b5cf6] outline-none transition" 
                placeholder={`Ingredient ${i + 1}`} 
              />
            ))}
          </div>

          <button type="button" className="col-span-2 mt-4 bg-gradient-to-r from-[#ff914d] via-[#ff4d4d] to-[#facc15] 
            text-[#1a0e0a] font-bold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform">
            🚀 Upload Recipe
          </button>
        </form>
      </div>
    </>
  );
};

export default AddRecipeModal;
