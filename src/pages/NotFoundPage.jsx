import { useNavigate } from "react-router-dom";
import { UtensilsCrossed } from "lucide-react";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-8 text-center">
      <div className="w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center mb-4 animate-bounce">
        <UtensilsCrossed size={40} className="text-orange-500" />
      </div>

      <h1 className="text-8xl font-black text-orange-500 pb-5">404</h1>

      <div className="z-10">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Recipe Missing!
        </h2>
        <p className="text-slate-500 mb-10 max-w-md mx-auto">
          It looks like the kitchen is empty here. We couldn't find the page or
          recipe you were looking for.
        </p>

        <button
          onClick={() => navigate("/")}
          className="px-8 py-3 bg-slate-900 text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-orange-500 transition-all duration-300 shadow-lg hover:shadow-orange-500/20 cursor-pointer"
        >
          Back to Recipes
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
