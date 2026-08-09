export default function Partners() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b-2 border-[#1A1A1A]/10">
      <div className="flex flex-col items-center mb-8">
        <div className="w-16 h-1 bg-[#D13111] mb-2"></div>
        <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1A1A1A]/60">
          Institutional Partners & Collaborators
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        
        {/* Brookfield */}
        <div className="flex items-center justify-center p-4 bg-white border-2 border-[#1A1A1A] hover:bg-[#D13111] hover:text-white transition-all cursor-pointer group">
          <span className="font-heading font-black text-sm uppercase tracking-wider text-[#1A1A1A] group-hover:text-white">
            Brookfield
          </span>
        </div>

        {/* JLL */}
        <div className="flex items-center justify-center p-4 bg-white border-2 border-[#1A1A1A] hover:bg-[#D13111] hover:text-white transition-all cursor-pointer group">
          <span className="font-heading font-black text-base uppercase tracking-widest text-[#1A1A1A] group-hover:text-white">
            JLL
          </span>
        </div>

        {/* PARK */}
        <div className="flex items-center justify-center p-4 bg-white border-2 border-[#1A1A1A] hover:bg-[#D13111] hover:text-white transition-all cursor-pointer group">
          <span className="font-heading font-black text-xs uppercase tracking-widest text-[#1A1A1A] group-hover:text-white">
            Park Hotels
          </span>
        </div>

        {/* Potlatch */}
        <div className="flex items-center justify-center p-4 bg-white border-2 border-[#1A1A1A] hover:bg-[#D13111] hover:text-white transition-all cursor-pointer group">
          <span className="font-heading font-black text-xs uppercase tracking-widest text-[#1A1A1A] group-hover:text-white">
            Potlatch.
          </span>
        </div>

        {/* Regency */}
        <div className="flex items-center justify-center p-4 bg-white border-2 border-[#1A1A1A] hover:bg-[#D13111] hover:text-white transition-all cursor-pointer group">
          <span className="font-heading font-black text-xs uppercase tracking-widest text-[#1A1A1A] group-hover:text-white">
            Regency
          </span>
        </div>

        {/* Weyerhaeuser */}
        <div className="flex items-center justify-center p-4 bg-white border-2 border-[#1A1A1A] hover:bg-[#D13111] hover:text-white transition-all cursor-pointer group">
          <span className="font-heading font-black text-xs uppercase tracking-widest text-[#1A1A1A] group-hover:text-white">
            Weyerhaeuser
          </span>
        </div>

      </div>
    </section>
  );
}
