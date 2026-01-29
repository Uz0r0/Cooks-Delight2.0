import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FoodCard } from "../components";

const FavouritesPage = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const loadFavourites = () => {
      const saved =
        JSON.parse(localStorage.getItem("cooks-delight-favs")) || [];
      setFavourites(saved);
    };

    loadFavourites();
  }, []);

  return (
    <div className="min-h-screen">
      <main className="py-15 px-8 max-w-[1440px] mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-10 text-center">
          Your Favourites
        </h1>

        {favourites.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {favourites.map((recipe) => (
              <FoodCard
                recipe={recipe}
                key={recipe.id}
                isFavouritePage={true}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-40">
            <p className="text-slate-400 text-lg italic mb-6">
              You haven't saved any recipes yet.
            </p>
            <NavLink
              to="/recepies"
              className="group flex flex-col mx-auto pt-5 items-center gap-2 text-slate-900 transition-colors duration-300 cursor-pointer disabled:opacity-50"
            >
              <span className="text-xs font-bold uppercase tracking-[0.3em]">
                Explore recipes
              </span>
              <div className="h-px w-12 bg-slate-200 transition-all duration-500 group-hover:w-40 group-hover:bg-orange-500" />
            </NavLink>
          </div>
        )}
      </main>
    </div>
  );
};

export default FavouritesPage;
