import { useEffect, useState, useMemo } from "react";
import { fetchRecipes } from "../services/tasteService";
import { Search } from "lucide-react";
import { FoodCard } from "../components";
import { CardSkeleton } from "../components/Skeletons";
import debounce from "lodash.debounce";

const RecipesPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const performSearch = async (query) => {
    setLoading(true);
    const data = await fetchRecipes(query, 21, 0);
    setRecipes(data);
    setLoading(false);
  };

  const debouncedSearch = useMemo(
    () => debounce((query) => performSearch(query), 500),
    [],
  );

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    debouncedSearch(value);
  };

  useEffect(() => {
    performSearch("");
  }, []);

  const handleShowMore = async () => {
    setLoadingMore(true);
    const nextBatch = await fetchRecipes(searchTerm, 18, recipes.length);
    if (nextBatch && nextBatch.length > 0) {
      setRecipes((prev) => [...prev, ...nextBatch]);
    }
    setLoadingMore(false);
  };

  return (
    <div className="min-h-screen">
      <main className="py-15 px-8 max-w-[1440px] mx-auto">
        <div className="relative w-full max-w-[515px] mx-auto mb-15">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search size={18} className="text-slate-500" />
          </div>

          <input
            type="text"
            placeholder="Enter name of food"
            onChange={handleInputChange}
            className="
              h-[38px] 
              w-full 
              pl-10 
              pr-4 
              rounded-2xl 
              bg-[#262522]/10
              text-slate-900 
              placeholder:text-slate-400 
              border-none 
              outline-none 
            "
          />
        </div>
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(21)].map((_, i) => (
              <CardSkeleton key={i} />
            ))}
          </div>
        ) : (
          <>
            {recipes.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {recipes.map((recipe) => (
                  <FoodCard recipe={recipe} key={recipe.id} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 text-slate-500">
                No recipes found for "{searchTerm}"
              </div>
            )}
          </>
        )}
        {!loading && recipes.length > 0 && !searchTerm && (
          <button
            onClick={handleShowMore}
            disabled={loadingMore}
            className="group flex flex-col mx-auto pt-20 items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors duration-300 cursor-pointer disabled:opacity-50"
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em]">
              {loadingMore ? "Loading..." : "Show More"}
            </span>
            <div className="h-px w-12 bg-slate-200 transition-all duration-500 group-hover:w-24 group-hover:bg-orange-500" />
          </button>
        )}
      </main>
    </div>
  );
};

export default RecipesPage;
