import { useState } from 'react';
import { ArrowRight, Bed, Bath, Maximize2, MapPin, Heart, Sparkles, FilterX, KeyRound, Tag, Building2, Landmark } from 'lucide-react';
import { PROPERTIES } from '../data/properties.js';

export default function RecommendedResidences({ 
  properties = PROPERTIES, 
  onSelectProperty, 
  activeCategory, 
  selectedCity, 
  selectedType, 
  selectedListingType = 'all', 
  setSelectedListingType, 
  onResetFilters 
}) {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (e, id) => {
    e.stopPropagation();
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const hasActiveFilters = Boolean(
    (activeCategory && activeCategory !== 'all') || 
    selectedCity || 
    selectedType || 
    selectedListingType !== 'all'
  );

  // Category counts based on overall PROPERTIES dataset
  const counts = {
    all: PROPERTIES.length,
    rent: PROPERTIES.filter(p => p.listingType === 'rent').length,
    buy: PROPERTIES.filter(p => p.listingType === 'buy').length,
    sell: PROPERTIES.filter(p => p.listingType === 'sell').length,
  };

  const filterTabs = [
    { id: 'all', label: 'All Listings', icon: Building2, count: counts.all },
    { id: 'rent', label: 'For Rent', icon: KeyRound, count: counts.rent },
    { id: 'buy', label: 'For Buy', icon: Tag, count: counts.buy },
    { id: 'sell', label: 'For Sale', icon: Landmark, count: counts.sell },
  ];

  const getListingBadgeStyle = (listingType) => {
    switch (listingType) {
      case 'rent':
        return 'bg-[#D13111] text-white border-white/20';
      case 'buy':
        return 'bg-[#1A1A1A] text-white border-white/20';
      case 'sell':
        return 'bg-[#2E5A44] text-white border-white/20';
      default:
        return 'bg-[#1A1A1A] text-white border-white/20';
    }
  };

  return (
    <section id="properties" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div className="max-w-xl space-y-3">
          <div className="w-20 h-1 bg-[#D13111]"></div>
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-[#D13111]">
            Curated Architectural Residences
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-black text-[#1A1A1A] uppercase tracking-tight leading-tight">
            Our Recommended<br /><span className="text-[#D13111]">Comfortable Residences</span>
          </h2>
          <p className="text-[#444444] text-xs sm:text-sm leading-relaxed font-medium">
            We have recommendations for comfortable housing for your family at flexible terms with down payment of 10% without interest.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {hasActiveFilters && (
            <button
              onClick={onResetFilters}
              className="px-4 py-2.5 bg-white border-2 border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 transition-colors cursor-pointer shadow-[3px_3px_0px_0px_#1A1A1A]"
            >
              <FilterX className="w-3.5 h-3.5" />
              Reset Filters
            </button>
          )}

          <a 
            href="#properties"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A1A1A] hover:bg-[#D13111] text-white font-bold text-xs uppercase tracking-widest transition-colors cursor-pointer border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#D13111]"
          >
            <span>See More</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Category Filter Navigation Bar (Rent, Buy, Sell, All) */}
      <div className="mb-8 p-2 bg-[#FAF9F6] border-2 border-[#1A1A1A] shadow-[6px_6px_0px_0px_#1A1A1A]">
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none sm:flex-wrap">
          <div className="px-3 py-2 text-[10px] font-black uppercase tracking-widest text-[#1A1A1A] hidden sm:block border-r border-[#1A1A1A]/20 pr-4 mr-1">
            Category Filter:
          </div>

          {filterTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = selectedListingType === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedListingType && setSelectedListingType(tab.id)}
                className={`shrink-0 sm:shrink sm:flex-1 min-h-[44px] px-4 py-2.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-[#D13111] text-white border-[#1A1A1A] shadow-[3px_3px_0px_0px_#1A1A1A]'
                    : 'bg-white text-[#1A1A1A] border-[#1A1A1A]/30 hover:border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#D13111]'}`} />
                <span className="whitespace-nowrap">{tab.label}</span>
                <span className={`ml-1 text-[10px] px-2 py-0.5 font-mono-code font-black ${
                  isActive ? 'bg-white text-[#D13111]' : 'bg-[#1A1A1A]/10 text-[#1A1A1A]'
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Property Cards Grid */}
      {properties.length === 0 ? (
        <div className="bg-white p-12 text-center border-2 border-[#1A1A1A] shadow-[6px_6px_0px_0px_#1A1A1A] space-y-3">
          <Sparkles className="w-8 h-8 text-[#D13111] mx-auto" />
          <h3 className="font-heading text-lg font-bold text-[#1A1A1A] uppercase tracking-wider">No properties found</h3>
          <p className="text-xs text-[#555] font-medium">Try loosening your search or category filters above.</p>
          <button
            onClick={onResetFilters}
            className="mt-2 px-6 py-2.5 bg-[#D13111] text-white text-xs font-bold uppercase tracking-widest cursor-pointer border border-[#1A1A1A]"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {properties.map((prop) => {
            const isFav = favorites.includes(prop.id);
            return (
              <div
                key={prop.id}
                onClick={() => onSelectProperty(prop)}
                className="group relative bg-white border-2 border-[#1A1A1A] hover:shadow-[8px_8px_0px_0px_#1A1A1A] transition-all duration-300 cursor-pointer flex flex-col hover:-translate-y-1"
              >
                {/* Image & Badges */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#1A1A1A]">
                  <img
                    src={prop.image}
                    alt={prop.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out grayscale group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-80" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 gap-2">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className={`px-2.5 py-1 font-bold text-[10px] uppercase tracking-widest border ${getListingBadgeStyle(prop.listingType)}`}>
                        {prop.listingType === 'rent' ? 'For Rent' : prop.listingType === 'buy' ? 'For Buy' : 'For Sale'}
                      </span>
                      <span className="px-2.5 py-1 bg-[#1A1A1A] text-white font-bold text-[10px] uppercase tracking-widest border border-white/20">
                        {prop.type}
                      </span>
                    </div>

                    <button
                      onClick={(e) => toggleFavorite(e, prop.id)}
                      className={`p-2 border border-[#1A1A1A] transition-all cursor-pointer shrink-0 ${
                        isFav 
                          ? 'bg-[#D13111] text-white' 
                          : 'bg-white text-[#1A1A1A] hover:bg-[#D13111] hover:text-white'
                      }`}
                      aria-label="Save to favorites"
                    >
                      <Heart className={`w-4 h-4 ${isFav ? 'fill-current' : ''}`} />
                    </button>
                  </div>

                  {/* Bottom Image Overlay Title */}
                  <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[#D13111] mb-0.5 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {prop.city}
                    </div>
                    <h3 className="font-heading text-lg font-bold tracking-tight text-white uppercase">
                      {prop.name}
                    </h3>
                  </div>
                </div>

                {/* Card Specs Footer */}
                <div className="p-5 flex items-center justify-between border-t-2 border-[#1A1A1A] bg-[#FAF9F6]">
                  <div className="font-mono-code font-black text-base text-[#D13111]">
                    {prop.price}
                  </div>
                  <div className="flex items-center gap-3 text-[#1A1A1A] text-xs font-bold uppercase tracking-wider">
                    <span className="flex items-center gap-1">
                      <Bed className="w-3.5 h-3.5 text-[#D13111]" />
                      {prop.beds}
                    </span>
                    <span className="flex items-center gap-1">
                      <Bath className="w-3.5 h-3.5 text-[#D13111]" />
                      {prop.baths}
                    </span>
                    <span className="flex items-center gap-1">
                      <Maximize2 className="w-3.5 h-3.5 text-[#D13111]" />
                      {prop.sqft}
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      )}

    </section>
  );
}
