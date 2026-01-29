import { Navbar, Footer } from "./components"
import {
  HomePage,
  RecipesPage,
  FavouritesPage,
  FoodPage,
  NotFoundPage,
} from "./pages";

import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
        <Route path="/recipe/:id" element={<FoodPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App
