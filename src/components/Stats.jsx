import { ArrowRight, Building, Users, Handshake, Home } from 'lucide-react';

export default function Stats({ onExploreProjects }) {
  const statsList = [
    { number: '300K+', label: 'Property Options', icon: Home },
    { number: '48+', label: 'Partners', icon: Handshake },
    { number: '52K+', label: 'Customers', icon: Users },
    { number: '125K+', label: 'Listing Property', icon: Building },
  ];

  return (
    <section id="stats" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Text Column */}
        <div className="lg:col-span-6 space-y-6">
          <div className="w-20 h-1 bg-[#D13111]"></div>
          
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-[#D13111]">
            National Footprint / Volume IV
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A1A1A] uppercase tracking-tight leading-tight">
            We Are Spread All Over<br /><span className="text-[#D13111]">The Archipelago.</span>
          </h2>

          <p className="text-[#444444] text-sm sm:text-base leading-relaxed max-w-xl font-medium">
            Sit curabitur aliquet morbi venenatis sit in. Ultrices tortor facilisi et sit non enim. Vel, a eu nulla egestas nunc, sed morbi facilisis. At sed auctor aliquam metus. At elit tortor enim sapien pellentesque.
          </p>

          <div className="pt-2">
            <button
              onClick={onExploreProjects}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#1A1A1A] hover:bg-[#D13111] text-white font-bold text-xs uppercase tracking-widest transition-colors duration-200 cursor-pointer border-2 border-[#1A1A1A]"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Stats Grid Column */}
        <div className="lg:col-span-6 bg-[#FAF9F6] p-6 sm:p-10 border-2 border-[#1A1A1A] shadow-[8px_8px_0px_0px_#1A1A1A]">
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {statsList.map((stat, idx) => {
              return (
                <div 
                  key={idx} 
                  className="bg-white p-5 sm:p-6 border-2 border-[#1A1A1A] transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#D13111] group"
                >
                  <div className="font-heading text-2xl sm:text-4xl font-black text-[#1A1A1A] group-hover:text-[#D13111] transition-colors tracking-tighter">
                    {stat.number}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]/70 mt-2">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
