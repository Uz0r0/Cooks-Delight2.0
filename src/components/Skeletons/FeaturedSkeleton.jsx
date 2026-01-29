const FeaturedRecipeSkeleton = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto h-125 md:h-150 overflow-hidden rounded-[3rem] mb-16 bg-slate-100 animate-pulse">
      <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full md:max-w-2xl">
        <div className="h-6 w-32 bg-slate-200 rounded-full mb-6" />

        <div className="h-10 md:h-12 bg-slate-200 rounded-2xl w-full mb-3" />
        <div className="h-10 md:h-12 bg-slate-200 rounded-2xl w-2/3 mb-8" />

        <div className="flex gap-6 mb-10">
          <div className="h-5 w-24 bg-slate-200 rounded-lg" />
          <div className="h-5 w-24 bg-slate-200 rounded-lg" />
          <div className="h-5 w-32 bg-slate-200 rounded-lg" />
        </div>

        <div className="h-14 w-44 bg-slate-300 rounded-full" />
      </div>
    </section>
  );
};

export default FeaturedRecipeSkeleton;