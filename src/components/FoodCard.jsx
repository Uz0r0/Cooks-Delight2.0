import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const FoodCard = ({ recipe }) => {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const checkFav = () => {
      const saved =
        JSON.parse(localStorage.getItem("cooks-delight-favs")) || [];
      const isAlreadySaved = saved.some((item) => item.id === recipe.id);
      setIsFav(isAlreadySaved);
    };

    checkFav();
  }, [recipe.id]);

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
    <div className="group bg-white rounded-[30px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col max-w-95 mx-auto w-full">
      <div className="relative overflow-hidden aspect-video">
        <img
          src={recipe.thumbnail_url}
          alt={recipe.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <button
          onClick={toggleFavourite}
          className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-all active:scale-90 cursor-pointer z-10"
        >
          <Heart
            size={18}
            className={`transition-colors duration-300 ${
              isFav ? "fill-red-500 text-red-500" : "text-gray-400"
            }`}
          />
        </button>

        {recipe.total_time_minutes && (
          <div className="absolute bottom-3 left-4 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-lg">
            {recipe.total_time_minutes} MINS
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col grow">
        <h3 className="font-bold text-gray-900 leading-snug line-clamp-2 min-h-[2.8rem] mb-2 text-lg">
          {recipe.name}
        </h3>

        <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-300">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            {recipe.num_servings || 1} Servings
          </span>
          <Link
            to={`/recipe/${recipe.id}`}
            className="text-sm font-bold text-orange-500 hover:text-orange-600 transition-colors cursor-pointer"
          >
            View Recipe →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
