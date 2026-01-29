import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchRecipeDetails } from "../services/tasteService";
import { Clock, Users, ChevronLeft, Utensils, Heart } from "lucide-react";

const FoodPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFav, setIsFav] = useState(false);

  useEffect(
    () => {
      const getDetails = async () => {
        const data = await fetchRecipeDetails(id);
        setRecipe(data);
        setLoading(false);

        if (data) {
          const saved =
            JSON.parse(localStorage.getItem("cooks-delight-favs")) || [];
          setIsFav(saved.some((item) => item.id === data.id));
        }
      };
      getDetails();
    },
    [id]
  );

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-400">
        Loading deliciousness...
      </div>
    );
  if (!recipe)
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="text-center text-2xl font-semibold">Recipe not found</div>
      </div>
    );
      

  const toggleFavourite = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const saved = JSON.parse(localStorage.getItem("cooks-delight-favs")) || [];
    let updatedFavs;

    if (isFav) {
      updatedFavs = saved.filter((item) => item.id !== recipe.id);
    } else {
      updatedFavs = [...saved, recipe];
    }

    localStorage.setItem("cooks-delight-favs", JSON.stringify(updatedFavs));
    setIsFav(!isFav);
  };

  return (
    <div className="min-h-screen bg-main-bg">
      <div className="relative h-[50vh] w-full">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 z-10 p-3 bg-white/90 backdrop-blur-md rounded-full shadow-lg hover:scale-110 transition-all cursor-pointer"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={toggleFavourite}
          className="absolute top-6 right-6 z-10 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-all active:scale-90 cursor-pointer "
        >
          <Heart
            size={24}
            className={`transition-colors duration-300 ${
              isFav ? "fill-red-500 text-red-500" : "text-gray-400"
            }`}
          />
        </button>
        <img
          src={recipe.thumbnail_url}
          className="w-full h-full object-cover"
          alt={recipe.name}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-10 left-8 right-8 max-w-[1440px] mx-auto text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{recipe.name}</h1>
          <div className="flex gap-6 text-sm font-medium">
            <span className="flex items-center gap-2">
              <Clock size={18} /> {recipe.total_time_minutes || 30} mins
            </span>
            <span className="flex items-center gap-2">
              <Users size={18} /> {recipe.num_servings} servings
            </span>
          </div>
        </div>
      </div>

      <main className="max-w-[1440px] mx-auto px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Utensils className="text-orange-500" /> Ingredients
          </h2>
          <ul className="space-y-4">
            {recipe.sections?.[0]?.components?.map((item, index) => (
              <li
                key={index}
                className="flex gap-3 pb-4 border-b border-slate-300 text-slate-600"
              >
                <span className="text-orange-500 font-bold">•</span>
                {item.raw_text}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6">Instructions</h2>
          <div className="space-y-8">
            {recipe.instructions?.map((step, index) => (
              <div key={index} className="flex gap-6">
                <span className="text-4xl font-black text-brand-secondary">
                  {index + 1}
                </span>
                <p className="text-slate-600 leading-relaxed pt-2">
                  {step.display_text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default FoodPage;
