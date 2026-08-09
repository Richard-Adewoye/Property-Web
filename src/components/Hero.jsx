import { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { PROPERTY_TYPES, CITIES, ARCHITECTURE_TYPES } from '../data/properties.js';

export default function Hero({ activeCategory, setActiveCategory, selectedCity, setSelectedCity, selectedType, setSelectedType, onSearch }) {
  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);
  const [typeDropdownOpen, setTypeDropdownOpen] = useState(false);

  return (
    <section className="pt-4 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Outer Banner Box in Artistic Charcoal & Terracotta */}
      <div className="relative overflow-hidden bg-[#1A1A1A] text-white pt-12 sm:pt-16 pb-24 sm:pb-32 px-4 sm:px-8 text-center border-2 border-[#1A1A1A] shadow-[8px_8px_0px_0px_#D13111]">
        
        {/* Big Watermark Number */}
        <div className="absolute -bottom-10 -right-6 text-[220px] sm:text-[320px] font-black leading-none opacity-5 select-none pointer-events-none font-mono-code text-white">
          01
        </div>

        {/* Rotated Terracotta Geometric Box Accent */}
        <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#D13111] opacity-20 rotate-12 pointer-events-none"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-3xl mx-auto space-y-4 flex flex-col items-center">
          {/* Accent Red Bar */}
          <div className="w-24 h-1 bg-[#D13111] mb-2"></div>

          <div className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-[#D13111]">
            Edition 2026 / Architectural Real Estate
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight sm:leading-none text-white">
            Buy and Sell, Rent,<br />
            <span className="text-[#D13111]">Cooperate, Property</span>
          </h1>

          <p className="text-white/70 text-xs sm:text-sm font-medium tracking-wider max-w-lg">
            Choice of property options are all here. Monolith weight & visual elegance.
          </p>
        </div>

        {/* Floating Property Search Box */}
        <div className="relative z-20 mt-8 sm:mt-12 max-w-2xl mx-auto bg-[#FAF9F6] p-4 text-[#1A1A1A] border-2 border-[#1A1A1A] shadow-[6px_6px_0px_0px_#1A1A1A]">
          
          {/* Top Category Tabs */}
          <div className="flex items-center justify-between sm:justify-start sm:gap-3 border-b-2 border-[#1A1A1A]/10 pb-3 px-1 overflow-x-auto no-scrollbar">
            {PROPERTY_TYPES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-[#1A1A1A] text-white shadow-xs'
                      : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A] hover:bg-[#1A1A1A]/5'
                  }`}
                >
                  <span className="text-sm">{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Form Filter Row */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-3 items-center">
            
            {/* City Field */}
            <div className="sm:col-span-5 relative text-left bg-white p-2.5 border-2 border-[#1A1A1A]/15 hover:border-[#1A1A1A] transition-colors">
              <label className="block text-[9px] uppercase tracking-widest text-[#1A1A1A]/60 font-extrabold mb-0.5 px-1">
                City / Location
              </label>
              <button
                type="button"
                onClick={() => {
                  setCityDropdownOpen(!cityDropdownOpen);
                  setTypeDropdownOpen(false);
                }}
                className="w-full flex items-center justify-between px-1 text-xs font-bold text-[#1A1A1A] text-left cursor-pointer uppercase tracking-wider"
              >
                <span className="truncate">{selectedCity || 'All Cities'}</span>
                <ChevronDown className={`w-4 h-4 text-[#1A1A1A]/50 transition-transform ${cityDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {cityDropdownOpen && (
                <div className="absolute left-0 right-0 top-full mt-1 bg-[#FAF9F6] border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] py-1 z-50 animate-in fade-in duration-150">
                  <button
                    onClick={() => {
                      setSelectedCity('');
                      setCityDropdownOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-xs font-bold uppercase tracking-wider text-[#1A1A1A]/60 hover:bg-[#D13111] hover:text-white"
                  >
                    All Cities
                  </button>
                  {CITIES.map((city) => (
                    <button
                      key={city}
                      onClick={() => {
                        setSelectedCity(city);
                        setCityDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                        selectedCity === city ? 'bg-[#D13111] text-white' : 'text-[#1A1A1A] hover:bg-[#1A1A1A]/5'
                      }`}
                    >
                      {city}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Type Field */}
            <div className="sm:col-span-5 relative text-left bg-white p-2.5 border-2 border-[#1A1A1A]/15 hover:border-[#1A1A1A] transition-colors">
              <label className="block text-[9px] uppercase tracking-widest text-[#1A1A1A]/60 font-extrabold mb-0.5 px-1">
                Architecture Type
              </label>
              <button
                type="button"
                onClick={() => {
                  setTypeDropdownOpen(!typeDropdownOpen);
                  setCityDropdownOpen(false);
                }}
                className="w-full flex items-center justify-between px-1 text-xs font-bold text-[#1A1A1A] text-left cursor-pointer uppercase tracking-wider"
              >
                <span className="truncate">{selectedType || 'All Types'}</span>
                <ChevronDown className={`w-4 h-4 text-[#1A1A1A]/50 transition-transform ${typeDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {typeDropdownOpen && (
                <div className="absolute left-0 right-0 top-full mt-1 bg-[#FAF9F6] border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] py-1 z-50 animate-in fade-in duration-150">
                  <button
                    onClick={() => {
                      setSelectedType('');
                      setTypeDropdownOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-xs font-bold uppercase tracking-wider text-[#1A1A1A]/60 hover:bg-[#D13111] hover:text-white"
                  >
                    All Types
                  </button>
                  {ARCHITECTURE_TYPES.map((type) => (
                    <button
                      key={type}
                      onClick={() => {
                        setSelectedType(type);
                        setTypeDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                        selectedType === type ? 'bg-[#D13111] text-white' : 'text-[#1A1A1A] hover:bg-[#1A1A1A]/5'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Search Button */}
            <div className="sm:col-span-2">
              <button
                onClick={onSearch}
                className="w-full h-full py-3 px-4 bg-[#D13111] hover:bg-[#B0280D] text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-1.5 transition-all active:scale-95 border-2 border-[#1A1A1A] cursor-pointer"
              >
                <Search className="w-4 h-4" />
                <span>Search</span>
              </button>
            </div>

          </div>

        </div>

        {/* Architectural Graphics Accents */}
        <div className="absolute bottom-0 left-0 w-32 sm:w-52 opacity-80 pointer-events-none border-t-2 border-r-2 border-[#1A1A1A] overflow-hidden">
          <img 
            src="/src/assets/images/hero_architecture_1786311046789.jpg" 
            alt="Modern Minimalist Building"
            className="w-full h-28 sm:h-36 object-cover grayscale contrast-125 object-bottom"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="absolute bottom-0 right-0 w-32 sm:w-52 opacity-80 pointer-events-none border-t-2 border-l-2 border-[#1A1A1A] overflow-hidden">
          <img 
            src="/src/assets/images/feature_building_1786311061433.jpg" 
            alt="Modern Highrise Building"
            className="w-full h-28 sm:h-36 object-cover grayscale contrast-125 object-bottom"
            referrerPolicy="no-referrer"
          />
        </div>

      </div>
    </section>
  );
}
