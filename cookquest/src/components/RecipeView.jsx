import React from "react";

const RecipeView = ({ recipe, onBack }) => {
  if (!recipe) return null;

  // Collect ingredients + measures
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient) {
      ingredients.push({ ingredient, measure });
    }
  }

  return (
    <section className="mt-14 bg-[#26130d]/95 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-[#ff914d]/20">
      {/* Header Image */}
      <figure className="relative">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <h1 className="absolute bottom-6 left-6 text-4xl font-bold text-white drop-shadow-xl">
          {recipe.strMeal}
        </h1>
      </figure>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-8 p-8">
        {/* Left: Info + Ingredients */}
        <div>
          <p className="text-gray-300 mb-4">
            Category:{" "}
            <span className="font-semibold text-[#ff914d]">
              {recipe.strCategory}
            </span>{" "}
            | Area:{" "}
            <span className="font-semibold text-[#22c55e]">
              {recipe.strArea}
            </span>
          </p>

          <h3 className="text-xl font-semibold text-[#facc15] mb-3">
            🥗 Ingredients
          </h3>
          <ul className="space-y-2">
            {ingredients.map((ing, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 text-gray-200 bg-[#1a0e0a]/60 px-3 py-2 rounded-lg"
              >
                <span className="text-[#ff914d] font-semibold">
                  {ing.measure}
                </span>
                <span>{ing.ingredient}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Instructions + Actions */}
        <div>
          <h3 className="text-xl font-semibold text-[#facc15] mb-3">
            🍴 Instructions
          </h3>
          <p className="text-gray-300 whitespace-pre-line leading-relaxed mb-6">
            {recipe.strInstructions}
          </p>

          <div className="flex flex-wrap gap-4">
            {recipe.strYoutube && (
              <a
                href={recipe.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#ff914d] via-[#ff4d4d] to-[#facc15] text-[#1a0e0a] font-bold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
              >
                🎬 Watch Tutorial
              </a>
            )}
            <button
              onClick={onBack}
              className="px-6 py-3 rounded-full bg-[#1a0e0a] text-gray-200 hover:bg-[#3d1f14] transition"
            >
              ⬅ Back
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipeView;
