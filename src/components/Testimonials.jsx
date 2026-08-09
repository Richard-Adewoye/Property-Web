import { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/properties.js';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const activeTestimonial = TESTIMONIALS[activeIndex];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Container Box in Artistic Flair Style */}
      <div className="relative bg-[#FAF9F6] p-8 sm:p-14 md:p-16 text-center max-w-4xl mx-auto border-2 border-[#1A1A1A] shadow-[8px_8px_0px_0px_#1A1A1A]">
        
        {/* Top Terracotta Accent Line & Tag */}
        <div className="flex flex-col items-center mb-6 space-y-2">
          <div className="w-16 h-1 bg-[#D13111]"></div>
          <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D13111]">
            Client Endorsements & Reviews
          </div>
        </div>

        {/* Decorative Quote Icon */}
        <div className="inline-flex p-3 bg-[#1A1A1A] text-white border border-[#1A1A1A] mb-6">
          <Quote className="w-6 h-6 text-[#D13111]" />
        </div>

        {/* Heading */}
        <h2 className="font-heading text-2xl sm:text-3xl font-black text-[#1A1A1A] uppercase tracking-tight mb-8">
          Testimonials From Our Clients
        </h2>

        {/* Quote Content */}
        <div className="min-h-[120px] flex items-center justify-center">
          <p className="text-[#1A1A1A] text-sm sm:text-lg lg:text-xl font-bold leading-relaxed max-w-2xl mx-auto italic">
            "{activeTestimonial.quote}"
          </p>
        </div>

        {/* Author Avatar & Info */}
        <div className="mt-8 flex flex-col items-center justify-center space-y-3">
          <img
            src={activeTestimonial.avatar}
            alt={activeTestimonial.author}
            className="w-14 h-14 border-2 border-[#1A1A1A] object-cover"
            referrerPolicy="no-referrer"
          />
          <div>
            <div className="font-heading font-black text-[#1A1A1A] text-base uppercase tracking-wide">
              {activeTestimonial.author}
            </div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#D13111]">
              {activeTestimonial.role}
            </div>
          </div>
        </div>

        {/* Pagination Dots & Navigation Controls */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={handlePrev}
            className="p-2.5 bg-white border-2 border-[#1A1A1A] hover:bg-[#D13111] hover:text-white text-[#1A1A1A] transition-colors cursor-pointer"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center space-x-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`transition-all border border-[#1A1A1A] cursor-pointer ${
                  activeIndex === idx
                    ? 'w-6 h-2 bg-[#D13111]'
                    : 'w-2 h-2 bg-white hover:bg-[#1A1A1A]'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-2.5 bg-white border-2 border-[#1A1A1A] hover:bg-[#D13111] hover:text-white text-[#1A1A1A] transition-colors cursor-pointer"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
