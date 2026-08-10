import { useState } from 'react';
import { 
  X, MapPin, Bed, Bath, Maximize2, Check, Calendar, ShieldCheck, 
  Image as ImageIcon, Navigation, Compass, Layers, Phone, Mail, 
  ChevronLeft, ChevronRight, Maximize, ExternalLink, School, 
  ShoppingBag, Bus, Trees, Building, Clock, CheckCircle2, UserCheck
} from 'lucide-react';

export default function PropertyModal({ property, onClose }) {
  const [activeTab, setActiveTab] = useState('gallery'); // 'gallery' | 'map' | 'specs' | 'tour'
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [mapMode, setMapMode] = useState('standard'); // 'standard' | 'satellite' | 'transit'
  const [selectedTourDate, setSelectedTourDate] = useState('2026-08-12');
  const [selectedTourSlot, setSelectedTourSlot] = useState('10:00 AM');
  const [tourType, setTourType] = useState('in_person'); // 'in_person' | 'video'
  const [inquirySent, setInquirySent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', note: '' });

  if (!property) return null;

  const galleryList = property.gallery && property.gallery.length > 0 
    ? property.gallery 
    : [{ url: property.image, title: property.name, type: 'exterior' }];

  const currentGalleryItem = galleryList[activeGalleryIndex] || galleryList[0];

  const handleNextImage = () => {
    setActiveGalleryIndex((prev) => (prev + 1) % galleryList.length);
  };

  const handlePrevImage = () => {
    setActiveGalleryIndex((prev) => (prev - 1 + galleryList.length) % galleryList.length);
  };

  const handleSubmitTour = (e) => {
    e.preventDefault();
    setInquirySent(true);
  };

  const getNeighborhoodIcon = (type) => {
    switch (type) {
      case 'transit':
        return <Bus className="w-4 h-4 text-[#D13111]" />;
      case 'school':
        return <School className="w-4 h-4 text-[#D13111]" />;
      case 'shopping':
        return <ShoppingBag className="w-4 h-4 text-[#D13111]" />;
      case 'park':
        return <Trees className="w-4 h-4 text-[#D13111]" />;
      default:
        return <Building className="w-4 h-4 text-[#D13111]" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-[#1A1A1A]/80 backdrop-blur-xs animate-in fade-in duration-200">
      
      {/* Main Modal Outer Frame */}
      <div 
        className="relative w-full max-w-4xl bg-[#FAF9F6] border-2 border-[#1A1A1A] shadow-[12px_12px_0px_0px_#1A1A1A] overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-[#1A1A1A] text-white px-3 sm:px-5 py-3 sm:py-4 border-b-2 border-[#1A1A1A] flex items-center justify-between gap-2 sm:gap-4 shrink-0">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="w-1.5 h-6 sm:h-7 bg-[#D13111] shrink-0"></div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="px-1.5 py-0.5 bg-[#D13111] text-white font-bold text-[8px] sm:text-[9px] uppercase tracking-widest border border-white/20 shrink-0">
                  {property.listingType === 'rent' ? 'For Rent' : property.listingType === 'buy' ? 'For Buy' : 'For Sale'}
                </span>
                <span className="text-white/60 text-[9px] sm:text-[10px] font-mono-code uppercase truncate">{property.city}</span>
              </div>
              <h2 className="font-heading text-sm sm:text-xl font-black uppercase tracking-tight text-white truncate">
                {property.name}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="font-mono-code font-black text-xs sm:text-xl text-[#D13111] bg-white px-2 sm:px-3 py-1 border border-white/20">
              {property.price}
            </span>
            <button
              onClick={onClose}
              className="p-2 sm:p-2.5 bg-white text-[#1A1A1A] hover:bg-[#D13111] hover:text-white transition-colors cursor-pointer border border-[#1A1A1A] shrink-0"
              aria-label="Close modal"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs Header */}
        <div className="bg-white border-b-2 border-[#1A1A1A] px-3 sm:px-4 py-2 flex items-center justify-between overflow-x-auto shrink-0 gap-2 scrollbar-none">
          <div className="flex items-center gap-1.5 min-w-max">
            <button
              onClick={() => setActiveTab('gallery')}
              className={`px-3 py-2 min-h-[42px] text-[11px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 border transition-all cursor-pointer ${
                activeTab === 'gallery'
                  ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-[2px_2px_0px_0px_#D13111]'
                  : 'bg-[#FAF9F6] text-[#1A1A1A] border-[#1A1A1A]/20 hover:border-[#1A1A1A]'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5 text-[#D13111]" />
              <span>Gallery ({galleryList.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('map')}
              className={`px-3 py-2 min-h-[42px] text-[11px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 border transition-all cursor-pointer ${
                activeTab === 'map'
                  ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-[2px_2px_0px_0px_#D13111]'
                  : 'bg-[#FAF9F6] text-[#1A1A1A] border-[#1A1A1A]/20 hover:border-[#1A1A1A]'
              }`}
            >
              <Navigation className="w-3.5 h-3.5 text-[#D13111]" />
              <span>Location & Map</span>
            </button>

            <button
              onClick={() => setActiveTab('specs')}
              className={`px-3 py-2 min-h-[42px] text-[11px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 border transition-all cursor-pointer ${
                activeTab === 'specs'
                  ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-[2px_2px_0px_0px_#D13111]'
                  : 'bg-[#FAF9F6] text-[#1A1A1A] border-[#1A1A1A]/20 hover:border-[#1A1A1A]'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-[#D13111]" />
              <span>Specs</span>
            </button>

            <button
              onClick={() => setActiveTab('tour')}
              className={`px-3 py-2 min-h-[42px] text-[11px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 border transition-all cursor-pointer ${
                activeTab === 'tour'
                  ? 'bg-[#D13111] text-white border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A]'
                  : 'bg-[#FAF9F6] text-[#1A1A1A] border-[#1A1A1A]/20 hover:border-[#1A1A1A]'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Schedule Tour</span>
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-xs font-mono-code text-[#1A1A1A]/70">
            <MapPin className="w-3.5 h-3.5 text-[#D13111]" />
            <span className="truncate max-w-[200px]">{property.location}</span>
          </div>
        </div>

        {/* Modal Scrollable Content Area */}
        <div className="overflow-y-auto p-5 sm:p-6 space-y-6 flex-1 text-[#1A1A1A]">

          {/* TAB 1: HIGH-RES GALLERY */}
          {activeTab === 'gallery' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              {/* Main Image Stage */}
              <div className="relative h-72 sm:h-96 w-full bg-[#1A1A1A] border-2 border-[#1A1A1A] group overflow-hidden">
                <img
                  src={currentGalleryItem.url}
                  alt={currentGalleryItem.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent pointer-events-none" />

                {/* Left & Right Carousel Nav Controls */}
                {galleryList.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-[#1A1A1A] text-white hover:bg-[#D13111] border border-white/20 transition-all cursor-pointer z-10"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-[#1A1A1A] text-white hover:bg-[#D13111] border border-white/20 transition-all cursor-pointer z-10"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                {/* Bottom Image Caption & Lightbox Trigger */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white z-10">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[#D13111] bg-black/60 px-2 py-0.5 inline-block mb-1 border border-white/10">
                      {currentGalleryItem.type || 'High-Res View'} • {activeGalleryIndex + 1} of {galleryList.length}
                    </div>
                    <div className="font-heading font-black text-sm sm:text-base uppercase">
                      {currentGalleryItem.title}
                    </div>
                  </div>

                  <button
                    onClick={() => setIsLightboxOpen(true)}
                    className="p-2.5 bg-white text-[#1A1A1A] hover:bg-[#D13111] hover:text-white transition-colors cursor-pointer border border-[#1A1A1A] flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest"
                  >
                    <Maximize className="w-4 h-4" />
                    <span className="hidden sm:inline">Full Image</span>
                  </button>
                </div>
              </div>

              {/* Thumbnail Strip */}
              {galleryList.length > 1 && (
                <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
                  {galleryList.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveGalleryIndex(idx)}
                      className={`relative w-24 h-16 shrink-0 border-2 overflow-hidden transition-all cursor-pointer ${
                        activeGalleryIndex === idx
                          ? 'border-[#D13111] ring-2 ring-[#D13111] opacity-100 scale-105'
                          : 'border-[#1A1A1A]/30 opacity-70 hover:opacity-100 hover:border-[#1A1A1A]'
                      }`}
                    >
                      <img
                        src={item.url}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Quick Specs Snapshot */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3 bg-white border-2 border-[#1A1A1A]">
                  <div className="text-[9px] font-bold uppercase text-[#1A1A1A]/60">Bedrooms</div>
                  <div className="font-mono-code text-base font-black text-[#D13111] flex items-center gap-1.5">
                    <Bed className="w-4 h-4" /> {property.beds} Rooms
                  </div>
                </div>
                <div className="p-3 bg-white border-2 border-[#1A1A1A]">
                  <div className="text-[9px] font-bold uppercase text-[#1A1A1A]/60">Bathrooms</div>
                  <div className="font-mono-code text-base font-black text-[#D13111] flex items-center gap-1.5">
                    <Bath className="w-4 h-4" /> {property.baths} Baths
                  </div>
                </div>
                <div className="p-3 bg-white border-2 border-[#1A1A1A]">
                  <div className="text-[9px] font-bold uppercase text-[#1A1A1A]/60">Floor Area</div>
                  <div className="font-mono-code text-base font-black text-[#D13111] flex items-center gap-1.5">
                    <Maximize2 className="w-4 h-4" /> {property.sqft}
                  </div>
                </div>
                <div className="p-3 bg-white border-2 border-[#1A1A1A]">
                  <div className="text-[9px] font-bold uppercase text-[#1A1A1A]/60">Architecture</div>
                  <div className="font-mono-code text-base font-black text-[#1A1A1A] truncate">
                    {property.type}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: LOCATION & INTERACTIVE MAP */}
          {activeTab === 'map' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              {/* Map Controls & Visual Map Viewer */}
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-1 bg-[#D13111]"></div>
                    <h3 className="font-heading text-base font-black uppercase tracking-tight">Interactive Location Map</h3>
                  </div>

                  {/* Map Mode Selector */}
                  <div className="flex items-center gap-1 bg-white p-1 border-2 border-[#1A1A1A]">
                    <button
                      onClick={() => setMapMode('standard')}
                      className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                        mapMode === 'standard' ? 'bg-[#D13111] text-white' : 'text-[#1A1A1A] hover:bg-[#FAF9F6]'
                      }`}
                    >
                      Map
                    </button>
                    <button
                      onClick={() => setMapMode('satellite')}
                      className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                        mapMode === 'satellite' ? 'bg-[#D13111] text-white' : 'text-[#1A1A1A] hover:bg-[#FAF9F6]'
                      }`}
                    >
                      Satellite
                    </button>
                    <button
                      onClick={() => setMapMode('transit')}
                      className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                        mapMode === 'transit' ? 'bg-[#D13111] text-white' : 'text-[#1A1A1A] hover:bg-[#FAF9F6]'
                      }`}
                    >
                      Transit View
                    </button>
                  </div>
                </div>

                {/* Simulated Map Container */}
                <div className="relative h-80 w-full bg-[#E5E3DF] border-2 border-[#1A1A1A] overflow-hidden group">
                  {/* Map Background Pattern / Satellite Image Simulation */}
                  {mapMode === 'satellite' ? (
                    <img
                      src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80"
                      alt="Satellite Map View"
                      className="w-full h-full object-cover contrast-125 brightness-90"
                      referrerPolicy="no-referrer"
                    />
                  ) : mapMode === 'transit' ? (
                    <div className="w-full h-full bg-[#1A1A1A] relative p-6 flex items-center justify-center">
                      <div className="absolute inset-0 bg-[radial-gradient(#D13111_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
                      {/* Transit Line Simulation */}
                      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <line x1="10%" y1="20%" x2="90%" y2="80%" stroke="#D13111" strokeWidth="4" strokeDasharray="8 4" />
                        <line x1="20%" y1="90%" x2="80%" y2="10%" stroke="#3B82F6" strokeWidth="4" />
                      </svg>
                    </div>
                  ) : (
                    /* Standard Stylized Map */
                    <div className="w-full h-full bg-[#F4F3F0] relative overflow-hidden">
                      {/* Grid / Street Lines */}
                      <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
                        <path d="M 0 100 Q 250 80 500 150 T 1000 120" stroke="#1A1A1A" strokeWidth="12" fill="none" />
                        <path d="M 120 0 L 120 400" stroke="#CBD5E1" strokeWidth="16" />
                        <path d="M 380 0 L 380 400" stroke="#CBD5E1" strokeWidth="20" />
                        <path d="M 0 240 L 800 240" stroke="#CBD5E1" strokeWidth="14" />
                      </svg>
                      {/* Park Greenery Area */}
                      <div className="absolute top-10 right-10 w-40 h-32 bg-[#DCFCE7] border border-[#86EFAC] rounded-full opacity-60 flex items-center justify-center font-bold text-[10px] text-[#166534] uppercase tracking-widest">
                        Green Park
                      </div>
                    </div>
                  )}

                  {/* Central Animated Property Marker */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">
                    <div className="px-3 py-1.5 bg-[#1A1A1A] text-white border-2 border-white shadow-[4px_4px_0px_0px_#D13111] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 whitespace-nowrap animate-bounce">
                      <Compass className="w-4 h-4 text-[#D13111]" />
                      <span>{property.name}</span>
                    </div>
                    <div className="w-4 h-4 bg-[#D13111] border-2 border-white rotate-45 -mt-2"></div>
                  </div>

                  {/* Map Coordinate Badge & Directions Link */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-white/95 p-3 border-2 border-[#1A1A1A] z-20">
                    <div className="space-y-0.5">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-[#D13111]">
                        GPS Coordinates
                      </div>
                      <div className="font-mono-code text-xs font-bold text-[#1A1A1A]">
                        {property.coordinates ? `${property.coordinates.lat}° N, ${property.coordinates.lng}° E` : '-6.1754° N, 106.8272° E'}
                      </div>
                    </div>

                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(property.name + ' ' + property.location)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-[#D13111] text-white hover:bg-[#B0280D] font-bold text-xs uppercase tracking-widest border border-[#1A1A1A] flex items-center gap-1.5 transition-colors"
                    >
                      <span>Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Neighborhood Points of Interest */}
              <div className="space-y-3">
                <h4 className="font-heading text-sm font-bold uppercase tracking-wider">Nearby Transit & Services</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {(property.neighborhoodPoints || [
                    { name: 'District Central MRT Station', distance: '0.4 km', type: 'transit' },
                    { name: 'St. Mary International School', distance: '1.1 km', type: 'school' },
                    { name: 'Metropolitan Shopping Mall', distance: '0.8 km', type: 'shopping' },
                    { name: 'City Green Botanical Park', distance: '1.5 km', type: 'park' }
                  ]).map((point, idx) => (
                    <div key={idx} className="p-3 bg-white border-2 border-[#1A1A1A] flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 bg-[#FAF9F6] border border-[#1A1A1A]">
                          {getNeighborhoodIcon(point.type)}
                        </div>
                        <span className="text-xs font-bold uppercase text-[#1A1A1A]">{point.name}</span>
                      </div>
                      <span className="font-mono-code font-bold text-xs text-[#D13111] bg-[#1A1A1A]/5 px-2 py-1">
                        {point.distance}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: ARCHITECTURAL SPECS */}
          {activeTab === 'specs' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="space-y-2">
                <div className="w-12 h-1 bg-[#D13111]"></div>
                <h3 className="font-heading text-lg font-black uppercase tracking-tight">Architectural Specifications</h3>
                <p className="text-xs text-[#555] font-medium leading-relaxed">
                  Detailed material composition, utility specs, and structural foundation breakdown.
                </p>
              </div>

              {/* Specifications Matrix Table */}
              <div className="bg-white border-2 border-[#1A1A1A] divide-y-2 divide-[#1A1A1A]">
                <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-2 bg-[#FAF9F6]">
                  <div className="text-xs font-bold uppercase text-[#1A1A1A]/60">Property ID</div>
                  <div className="sm:col-span-2 font-mono-code font-bold text-xs text-[#D13111]">{property.id.toUpperCase()}</div>
                </div>
                <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <div className="text-xs font-bold uppercase text-[#1A1A1A]/60">Year Built</div>
                  <div className="sm:col-span-2 font-mono-code font-bold text-xs text-[#1A1A1A]">{property.specs?.yearBuilt || '2023'}</div>
                </div>
                <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-2 bg-[#FAF9F6]">
                  <div className="text-xs font-bold uppercase text-[#1A1A1A]/60">Structure & Materials</div>
                  <div className="sm:col-span-2 font-mono-code font-bold text-xs text-[#1A1A1A]">{property.specs?.structure || 'Reinforced Steel & Brick Concrete'}</div>
                </div>
                <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <div className="text-xs font-bold uppercase text-[#1A1A1A]/60">Parking Capacity</div>
                  <div className="sm:col-span-2 font-mono-code font-bold text-xs text-[#1A1A1A]">{property.specs?.parking || '2 Vehicles'}</div>
                </div>
                <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-2 bg-[#FAF9F6]">
                  <div className="text-xs font-bold uppercase text-[#1A1A1A]/60">Furnishing Level</div>
                  <div className="sm:col-span-2 font-mono-code font-bold text-xs text-[#1A1A1A]">{property.specs?.furnishing || 'Fully Furnished'}</div>
                </div>
                <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <div className="text-xs font-bold uppercase text-[#1A1A1A]/60">Electrical Power</div>
                  <div className="sm:col-span-2 font-mono-code font-bold text-xs text-[#D13111]">{property.specs?.electricity || '4,400 VA'}</div>
                </div>
                <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-2 bg-[#FAF9F6]">
                  <div className="text-xs font-bold uppercase text-[#1A1A1A]/60">Panoramic View</div>
                  <div className="sm:col-span-2 font-mono-code font-bold text-xs text-[#1A1A1A]">{property.specs?.view || 'City Skyline & Garden View'}</div>
                </div>
              </div>

              {/* Financial Structure Card */}
              <div className="p-5 bg-[#1A1A1A] text-white border-2 border-[#1A1A1A] space-y-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#D13111]" />
                  <h4 className="font-heading text-sm font-black uppercase tracking-wider">Financial & Title Guarantee</h4>
                </div>
                <p className="text-xs text-white/80 leading-relaxed">
                  All listings verified under ProtAh Joint Escrow Account. Guaranteed clear title deed and flexible payment terms available with approved financial partners.
                </p>
              </div>
            </div>
          )}

          {/* TAB 4: SCHEDULE TOUR */}
          {activeTab === 'tour' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="space-y-2">
                <div className="w-12 h-1 bg-[#D13111]"></div>
                <h3 className="font-heading text-lg font-black uppercase tracking-tight">Schedule Private Tour</h3>
                <p className="text-xs text-[#555] font-medium leading-relaxed">
                  Choose between an in-person physical walkthrough or a live guided video tour with our property director.
                </p>
              </div>

              {inquirySent ? (
                <div className="p-8 bg-[#1A1A1A] text-white border-2 border-[#1A1A1A] text-center space-y-3 animate-in zoom-in-95">
                  <CheckCircle2 className="w-12 h-12 text-[#D13111] mx-auto" />
                  <h4 className="font-heading text-lg font-black uppercase tracking-wider">Tour Scheduled Successfully!</h4>
                  <p className="text-xs text-white/80 max-w-md mx-auto">
                    Your request for a <span className="text-[#D13111] font-bold uppercase">{tourType === 'in_person' ? 'In-Person Walkthrough' : 'Live Video Tour'}</span> on <span className="font-mono-code font-bold">{selectedTourDate}</span> at <span className="font-mono-code font-bold">{selectedTourSlot}</span> has been confirmed.
                  </p>
                  <button
                    onClick={() => setInquirySent(false)}
                    className="px-6 py-2.5 bg-[#D13111] text-white text-xs font-bold uppercase tracking-widest cursor-pointer border border-white/20"
                  >
                    Schedule Another Tour
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitTour} className="space-y-5">
                  
                  {/* Tour Type Selector */}
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setTourType('in_person')}
                      className={`p-3 text-xs font-bold uppercase tracking-wider border-2 transition-all cursor-pointer flex items-center justify-center gap-2 ${
                        tourType === 'in_person'
                          ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-[3px_3px_0px_0px_#D13111]'
                          : 'bg-white text-[#1A1A1A] border-[#1A1A1A]/30 hover:border-[#1A1A1A]'
                      }`}
                    >
                      <UserCheck className="w-4 h-4 text-[#D13111]" />
                      <span>In-Person Tour</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setTourType('video')}
                      className={`p-3 text-xs font-bold uppercase tracking-wider border-2 transition-all cursor-pointer flex items-center justify-center gap-2 ${
                        tourType === 'video'
                          ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-[3px_3px_0px_0px_#D13111]'
                          : 'bg-white text-[#1A1A1A] border-[#1A1A1A]/30 hover:border-[#1A1A1A]'
                      }`}
                    >
                      <Clock className="w-4 h-4 text-[#D13111]" />
                      <span>Live Video Call</span>
                    </button>
                  </div>

                  {/* Date & Time Slot Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider">Select Preferred Date</label>
                      <input
                        type="date"
                        required
                        value={selectedTourDate}
                        onChange={(e) => setSelectedTourDate(e.target.value)}
                        className="w-full px-4 py-3 bg-white border-2 border-[#1A1A1A] text-xs font-bold uppercase focus:outline-none focus:border-[#D13111]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider">Select Time Slot</label>
                      <div className="grid grid-cols-3 gap-2">
                        {['09:00 AM', '10:00 AM', '02:00 PM', '04:00 PM', '05:30 PM'].map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedTourSlot(slot)}
                            className={`py-2 text-[10px] font-bold uppercase border cursor-pointer transition-all ${
                              selectedTourSlot === slot
                                ? 'bg-[#D13111] text-white border-[#1A1A1A]'
                                : 'bg-white text-[#1A1A1A] border-[#1A1A1A]/30 hover:border-[#1A1A1A]'
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Contact Info Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white border-2 border-[#1A1A1A] text-xs font-bold uppercase tracking-wider focus:outline-none focus:border-[#D13111]"
                    />
                    <input
                      type="email"
                      placeholder="Your Email Address"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white border-2 border-[#1A1A1A] text-xs font-bold uppercase tracking-wider focus:outline-none focus:border-[#D13111]"
                    />
                  </div>

                  <input
                    type="tel"
                    placeholder="Your Phone Number"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-white border-2 border-[#1A1A1A] text-xs font-bold uppercase tracking-wider focus:outline-none focus:border-[#D13111]"
                  />

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#D13111] hover:bg-[#B0280D] text-white font-bold text-xs uppercase tracking-widest border-2 border-[#1A1A1A] transition-colors cursor-pointer shadow-[4px_4px_0px_0px_#1A1A1A]"
                  >
                    Confirm Tour Appointment
                  </button>
                </form>
              )}
            </div>
          )}

        </div>

        {/* Modal Footer Bar */}
        <div className="bg-[#FAF9F6] border-t-2 border-[#1A1A1A] p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3 text-xs font-bold uppercase">
            <div className="flex items-center gap-1.5 text-[#1A1A1A]">
              <Phone className="w-4 h-4 text-[#D13111]" />
              <span className="font-mono-code">+1 310-437-2766</span>
            </div>
            <span className="text-[#1A1A1A]/30">•</span>
            <div className="flex items-center gap-1.5 text-[#1A1A1A]">
              <Mail className="w-4 h-4 text-[#D13111]" />
              <span className="font-mono-code">protah@outlook.com</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 bg-white text-[#1A1A1A] border-2 border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white font-bold text-xs uppercase tracking-widest transition-colors cursor-pointer w-full sm:w-auto"
          >
            Close Window
          </button>
        </div>

      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-60 bg-black/95 flex flex-col items-center justify-between p-4 animate-in fade-in"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div className="w-full flex items-center justify-between text-white py-2 z-10">
            <div className="font-heading text-sm font-bold uppercase tracking-wider">
              {currentGalleryItem.title} ({activeGalleryIndex + 1} / {galleryList.length})
            </div>
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="p-2 bg-white/10 hover:bg-[#D13111] text-white transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div 
            className="relative flex-1 flex items-center justify-center max-w-5xl w-full my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentGalleryItem.url}
              alt={currentGalleryItem.title}
              className="max-h-[80vh] max-w-full object-contain border-2 border-white/20 shadow-2xl"
              referrerPolicy="no-referrer"
            />

            {galleryList.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-3 bg-black/80 hover:bg-[#D13111] text-white border border-white/20 transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-black/80 hover:bg-[#D13111] text-white border border-white/20 transition-all cursor-pointer"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          <div className="text-white/60 text-xs font-mono-code py-2">
            Click anywhere outside or press X to exit full view
          </div>
        </div>
      )}

    </div>
  );
}
