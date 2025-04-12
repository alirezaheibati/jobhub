import PopularCats from "./PopularCats";

export default function PopularContainer() {
  return (
    <section className="bg-slate-100 py-16">
      <div className="w-full">
        <h2 className="text-center w-full text-primary text-3xl md:text-4xl font-bold relative z-20 mb-6">
          Popular Jobs Categories
        </h2>
      </div>
      <PopularCats />
    </section>
  );
}
