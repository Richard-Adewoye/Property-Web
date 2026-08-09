export default function FeatureBanner() {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative overflow-hidden border-2 border-[#1A1A1A] bg-[#1A1A1A] shadow-[8px_8px_0px_0px_#1A1A1A] group">
        <img
          src="/src/assets/images/feature_building_1786311061433.jpg"
          alt="Modernist Residential Architecture"
          className="w-full h-64 sm:h-96 md:h-[480px] object-cover object-center grayscale contrast-125 group-hover:scale-102 group-hover:grayscale-0 transition-all duration-700 ease-out"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 bg-[#D13111] text-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest border border-[#1A1A1A]">
          FEATURED STRUCTURE
        </div>
      </div>
    </section>
  );
}
