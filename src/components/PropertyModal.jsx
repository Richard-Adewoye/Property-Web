import { useState } from 'react';
import { X, MapPin, Bed, Bath, Maximize2, Check, Calendar, ShieldCheck } from 'lucide-react';

export default function PropertyModal({ property, onClose }) {
  const [inquirySent, setInquirySent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  if (!property) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setInquirySent(true);
    setTimeout(() => {
      setInquirySent(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A1A1A]/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-[#FAF9F6] border-2 border-[#1A1A1A] shadow-[12px_12px_0px_0px_#1A1A1A] overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 bg-[#1A1A1A] text-white hover:bg-[#D13111] border border-[#1A1A1A] transition-colors cursor-pointer"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-[#1A1A1A] shrink-0">
          <img
            src={property.image}
            alt={property.name}
            className="w-full h-full object-cover grayscale contrast-125"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-90" />

          <div className="absolute bottom-6 left-6 right-6 text-white space-y-1 z-10">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-[#D13111] text-white font-bold text-[10px] uppercase tracking-widest border border-white/20">
                {property.type}
              </span>
              <span className="px-3 py-1 bg-white text-[#1A1A1A] font-bold text-[10px] uppercase tracking-widest flex items-center gap-1 border border-[#1A1A1A]">
                <MapPin className="w-3 h-3 text-[#D13111]" />
                {property.city}
              </span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-black uppercase tracking-tight">
              {property.name}
            </h2>
            <p className="text-xs text-white/80 font-mono-code">{property.location}</p>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-[#1A1A1A]">
          
          {/* Price & Primary Specs Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-white border-2 border-[#1A1A1A]">
            <div>
              <div className="text-[9px] uppercase font-bold text-[#1A1A1A]/60 tracking-widest">Property Price</div>
              <div className="font-mono-code text-2xl sm:text-3xl font-black text-[#D13111]">
                {property.price}
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">
              <div className="flex items-center gap-1.5 bg-[#FAF9F6] px-3 py-2 border border-[#1A1A1A]">
                <Bed className="w-4 h-4 text-[#D13111]" />
                <span>{property.beds} Beds</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#FAF9F6] px-3 py-2 border border-[#1A1A1A]">
                <Bath className="w-4 h-4 text-[#D13111]" />
                <span>{property.baths} Baths</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#FAF9F6] px-3 py-2 border border-[#1A1A1A]">
                <Maximize2 className="w-4 h-4 text-[#D13111]" />
                <span>{property.sqft}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <div className="w-12 h-1 bg-[#D13111]"></div>
            <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-[#1A1A1A]">About Property</h3>
            <p className="text-xs sm:text-sm text-[#444] leading-relaxed font-medium">
              {property.description}
            </p>
          </div>

          {/* Key Advantages */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
            <div className="flex items-center gap-2 p-3 bg-white border-2 border-[#1A1A1A] text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">
              <ShieldCheck className="w-4 h-4 text-[#D13111]" />
              <span>10% Down Payment</span>
            </div>
            <div className="flex items-center gap-2 p-3 bg-white border-2 border-[#1A1A1A] text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">
              <Calendar className="w-4 h-4 text-[#D13111]" />
              <span>5-Yr Installment</span>
            </div>
            <div className="flex items-center gap-2 p-3 bg-white border-2 border-[#1A1A1A] text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">
              <Check className="w-4 h-4 text-[#D13111]" />
              <span>Verified Title Deed</span>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="pt-4 border-t-2 border-[#1A1A1A]/10">
            <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-[#1A1A1A] mb-4">Request Tour / Information</h3>

            {inquirySent ? (
              <div className="p-5 bg-[#1A1A1A] text-white border-2 border-[#1A1A1A] text-center space-y-2 animate-in zoom-in-95">
                <Check className="w-8 h-8 text-[#D13111] mx-auto" />
                <div className="font-bold text-sm uppercase tracking-wider">Inquiry Sent Successfully!</div>
                <div className="text-xs text-white/80">A ProtAh property consultant will contact you shortly.</div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                    placeholder="Your Email"
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
                  className="w-full py-3.5 bg-[#D13111] hover:bg-[#B0280D] text-white font-bold text-xs uppercase tracking-widest border-2 border-[#1A1A1A] transition-colors cursor-pointer"
                >
                  Send Inquiry to Agent
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
