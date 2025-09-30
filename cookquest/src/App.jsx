import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import SearchResults from "./components/SearchResults";
import RecipeView from "./components/RecipeView";
import AddRecipeModal from "./components/AddRecipeModal";
import Footer from "./components/Footer";


function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="font-['Nunito_Sans'] bg-gradient-to-br from-[#FFAD60] via-[#FF7E5F] to-[#FF3D3D] min-h-screen text-gray-100 relative overflow-hidden">

  {/* Food Texture Overlay */}
  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/food.png')] bg-repeat opacity-25 pointer-events-none"></div>

  {/* Main Content */}
  <div className="container mx-auto max-w-6xl px-4 relative z-10">
    <Navbar />
    <SearchResults />
    <RecipeView />
    <Footer />
  </div>

  <AddRecipeModal />
</div>


  )
}

export default App
