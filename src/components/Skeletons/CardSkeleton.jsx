const FoodCardsSkeleton = () => {
  return (
    <div className="bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden max-w-95 w-full mx-auto p-0 shadow-sm animate-pulse">

      <div className="aspect-video bg-slate-200 w-full" />

      <div className="p-6">
        <div className="h-4 bg-slate-200 rounded-full w-3/4 mb-3" />
        <div className="h-4 bg-slate-200 rounded-full w-1/2 mb-6" />

        <div className="flex justify-between items-center pt-4 border-t border-slate-50">
          <div className="h-3 bg-slate-100 rounded-full w-16" />
          <div className="h-3 bg-slate-100 rounded-full w-20" />
        </div>
      </div>
    </div>
  );
};

export default FoodCardsSkeleton;