import { Link } from "react-router-dom";
import { Clock, Users, PlayCircle } from "lucide-react";

const FeaturedRecipe = ({ recipe }) => {
  if (!recipe) return null;

  return (
    <section className="relative w-full max-w-7xl mx-auto h-125 md:h-150 overflow-hidden rounded-[3rem] mb-16 shadow-2xl">
      <img
        src={recipe.thumbnail_url}
        alt={recipe.name}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

      <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full md:max-w-2xl text-white">
        <span className="inline-block bg-orange-500 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
          Recipe of the Day
        </span>

        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          {recipe.name}
        </h1>

        <div className="flex flex-wrap gap-6 text-sm font-medium mb-8">
          <div className="flex items-center gap-2">
            <Clock size={20} className="text-orange-400" />
            <span>{recipe.total_time_minutes || 45} mins</span>
          </div>
          <div className="flex items-center gap-2">
            <Users size={20} className="text-orange-400" />
            <span>{recipe.num_servings || 4} Servings</span>
          </div>
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-lg">
            <span className="text-xs uppercase">Highly Rated</span>
          </div>
        </div>

        <Link
          to={`/recipe/${recipe.id}`}
          className="w-max flex items-center gap-2 bg-orange-500 backdrop-blur-md border border-white/20 text-white px-7 py-3 rounded-full font-medium hover:scale-[1.03] transition-all duration-300 cursor-pointer"
        >
          <span>View Recipe</span>
          <PlayCircle size={20} />
        </Link>
      </div>
    </section>
  );
};

export default FeaturedRecipe;
