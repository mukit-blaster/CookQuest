import React from "react";

const RecipeView = () => {
  return (
    <section className="mt-14 bg-[#26130d]/90 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden">
      <figure className="relative">
        <img src="src/img/test-1.jpg" alt="Recipe Example" className="w-full h-80 object-cover" />
        <h1 className="absolute bottom-5 left-5 text-3xl font-bold text-white bg-black/60 px-4 py-2 rounded-lg shadow-lg">
          Pasta with Tomato Cream Sauce
        </h1>
      </figure>
      <div className="p-6">
        <p className="text-gray-300 text-lg mb-4">
          This recipe was carefully designed and tested by{" "}
          <span className="font-semibold text-[#ff914d]">The Pioneer Woman</span>.
        </p>
        <a
          href="#"
          target="_blank"
          className="inline-block bg-gradient-to-r from-[#ff914d] via-[#ff4d4d] to-[#facc15] text-[#1a0e0a] font-bold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          🍳 View Cooking Directions
        </a>
      </div>
    </section>
  );
};

export default RecipeView;
