import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import SearchResults from "./components/SearchResults";
import RecipeView from "./components/RecipeView";
import AddRecipeModal from "./components/AddRecipeModal";
import Footer from "./components/Footer";

export default function App() {
  const [recipes, setRecipes] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Load bookmarks from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("bookmarks");
    if (saved && saved !== "undefined") {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setBookmarks(parsed);
          setRecipes(parsed); 
        }
      } catch (e) {
        console.error("Error parsing bookmarks:", e);
      }
    }
  }, []);

  // Save bookmarks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    console.log("Bookmarks saved to localStorage:", bookmarks);
  }, [bookmarks]);

  // Fetch recipes by name or first letter
  const fetchRecipes = async (searchTerm) => {
    try {
      let url =
        searchTerm.length === 1
          ? `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchTerm}`
          : `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;

      const res = await fetch(url);
      const data = await res.json();
      setRecipes(data.meals || []);
      setSelectedRecipe(null);
    } catch (err) {
      console.error("Error fetching recipes:", err);
    }
  };

  // Toggle bookmarks
  const toggleBookmark = (recipe) => {
    setBookmarks((prev) => {
      const exists = prev.find((r) => r.idMeal === recipe.idMeal);
      if (exists) {
        return prev.filter((r) => r.idMeal !== recipe.idMeal); 
      } else {
        return [...prev, recipe]; 
      }
    });
  };

  // Remove bookmark from Navbar
  const removeBookmark = (idMeal) => {
    setBookmarks((prev) => prev.filter((r) => r.idMeal !== idMeal));
    setRecipes((prev) => prev.filter((r) => r.idMeal !== idMeal));
  };
  const handleSelectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <div className="min-h-screen bg-[#1a0e0a] text-gray-200 pt-24">
      <Navbar
        onSearch={fetchRecipes}
        onOpenModal={() => setShowModal(true)}
        bookmarks={bookmarks}
        onSelectRecipe={handleSelectRecipe}
        onRemoveBookmark={removeBookmark}
      />

      <main className="max-w-7xl mx-auto px-6">
        {selectedRecipe ? (
          <RecipeView
            recipe={selectedRecipe}
            onBack={() => setSelectedRecipe(null)}
          />
        ) : recipes.length > 0 ? (
          <SearchResults
            results={recipes}
            onSelectRecipe={handleSelectRecipe}
            onBookmark={toggleBookmark}
            bookmarks={bookmarks}
          />
        ) : (
          <SearchResults
            results={bookmarks} 
            onSelectRecipe={handleSelectRecipe}
            onBookmark={toggleBookmark}
            bookmarks={bookmarks}
          />
        )}
      </main>

      <Footer />

      {showModal && <AddRecipeModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
