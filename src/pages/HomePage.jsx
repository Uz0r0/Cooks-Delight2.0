import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { fetchRecipes } from "../services/tasteService"; 
import { FeaturedRecipe, FoodCard } from "../components";
import { FeaturedSkeleton, CardSkeleton } from "../components/Skeletons";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const data = await fetchRecipes("", 10); 
      setRecipes(data);
      setLoading(false);
    };

    loadData();
  }, []);

  return (
    <div className="min-h-screen">
      <main className="py-15 px-8 max-w-[1440px] mx-auto">
        {loading ? (
          <FeaturedSkeleton />
        ) : (
          <FeaturedRecipe recipe={recipes[0]} />
        )}
        <section className="flex flex-col gap-15 lg:px-15">
          <div className="flex flex-col items-center">
            <h2 className="text-center text-3xl md:text-5xl font-semibold pb-4 md:pb-6 text-gray-900 tracking-tight">
              Simple and Tasty Recipes
            </h2>
            <p className="text-center text-gray-500 text-sm lg:text-base max-w-2xl leading-relaxed">
              Discover a curated collection of approachable recipes designed to
              bring family and friends back to the table without spending all
              evening in the kitchen.
            </p>
          </div>
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(9)].map((_, i) => (
                <CardSkeleton key={i} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {recipes.slice(1).map((recipe) => (
                <FoodCard recipe={recipe} key={recipe.id} />
              ))}
            </div>
          )}
          <NavLink
            to="/recepies"
            className="group flex flex-col mx-auto pt-5 items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors duration-300 cursor-pointer disabled:opacity-50"
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em]">
              Explore more
            </span>
            <div className="h-px w-12 bg-slate-200 transition-all duration-500 group-hover:w-30 group-hover:bg-orange-500" />
          </NavLink>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
