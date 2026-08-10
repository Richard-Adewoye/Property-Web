import { useState } from 'react';
import { ChevronDown, Menu, X, Building2 } from 'lucide-react';

export default function Navbar({ onOpenAuth }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectDropdownOpen, setProjectDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#1A1A1A]/10 transition-all duration-200">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <a 
            href="#" 
            className="flex items-center gap-2.5 group transition-transform active:scale-95"
            aria-label="ProtAh Home"
          >
            <div className="w-1.5 h-7 bg-[#D13111] group-hover:scale-y-110 transition-transform"></div>
            <span className="font-heading text-2xl font-black italic tracking-tighter text-[#1A1A1A]">
              PROTAH<span className="text-[#D13111] not-italic">.</span>
            </span>
          </a>

          {/* Desktop Left Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-xs font-bold uppercase tracking-widest text-[#1A1A1A]/70">
            <a href="#" className="text-[#D13111] font-black hover:text-[#D13111] transition-colors">
              Home
            </a>
            <a href="#properties" className="hover:text-[#1A1A1A] transition-colors">
              Buy
            </a>
            <a href="#properties" className="hover:text-[#1A1A1A] transition-colors">
              Sell & Rent
            </a>
            
            {/* Our Project Dropdown */}
            <div className="relative group">
              <button 
                onClick={() => setProjectDropdownOpen(!projectDropdownOpen)}
                onMouseEnter={() => setProjectDropdownOpen(true)}
                className="flex items-center gap-1 hover:text-[#1A1A1A] py-2 transition-colors cursor-pointer uppercase font-bold"
              >
                <span>Our Project</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#1A1A1A]/50 group-hover:rotate-180 transition-transform" />
              </button>

              {projectDropdownOpen && (
                <div 
                  onMouseLeave={() => setProjectDropdownOpen(false)}
                  className="absolute left-0 mt-1 w-56 bg-[#FAF9F6] border-2 border-[#1A1A1A] p-3 z-50 shadow-[4px_4px_0px_0px_#1A1A1A] animate-in fade-in duration-150 space-y-1"
                >
                  <a href="#properties" className="flex items-center gap-2 px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-[#1A1A1A] hover:bg-[#D13111] hover:text-white transition-colors">
                    <Building2 className="w-4 h-4 text-[#D13111] group-hover:text-white" /> Exclusive Apartments
                  </a>
                  <a href="#properties" className="flex items-center gap-2 px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-[#1A1A1A] hover:bg-[#D13111] hover:text-white transition-colors">
                    <Building2 className="w-4 h-4 text-[#1A1A1A]" /> Commercial Shophouses
                  </a>
                  <a href="#properties" className="flex items-center gap-2 px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-[#1A1A1A] hover:bg-[#D13111] hover:text-white transition-colors">
                    <Building2 className="w-4 h-4 text-[#D13111]" /> Luxury Villas
                  </a>
                </div>
              )}
            </div>
          </nav>

          {/* Desktop Right Navigation */}
          <div className="hidden md:flex items-center space-x-6 text-xs font-bold uppercase tracking-widest text-[#1A1A1A]/70">
            <button 
              onClick={() => onOpenAuth('join')}
              className="hover:text-[#1A1A1A] transition-colors cursor-pointer"
            >
              Join with Us
            </button>
            <a href="#footer" className="hover:text-[#1A1A1A] transition-colors">
              Contact
            </a>
            <a href="#stats" className="hover:text-[#1A1A1A] transition-colors">
              About Us
            </a>

            {/* Login Button */}
            <button
              onClick={() => onOpenAuth('login')}
              className="px-6 py-2.5 bg-[#1A1A1A] text-white hover:bg-[#D13111] font-bold text-xs uppercase tracking-widest transition-colors active:scale-95 cursor-pointer"
            >
              Login
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center border-2 border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF9F6] border-b-2 border-[#1A1A1A] px-4 pt-4 pb-6 space-y-2 animate-in slide-in-from-top duration-200 shadow-lg">
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-3 font-bold text-xs uppercase tracking-widest text-[#D13111] bg-[#1A1A1A]/5 border-l-2 border-[#D13111]"
          >
            Home
          </a>
          <a
            href="#properties"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-3 font-bold text-xs uppercase tracking-widest text-[#1A1A1A] hover:text-[#D13111] hover:bg-[#1A1A1A]/5"
          >
            Buy & Rent Properties
          </a>
          <a
            href="#stats"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-3 font-bold text-xs uppercase tracking-widest text-[#1A1A1A] hover:text-[#D13111] hover:bg-[#1A1A1A]/5"
          >
            About ProtAh
          </a>
          <a
            href="#footer"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-3 font-bold text-xs uppercase tracking-widest text-[#1A1A1A] hover:text-[#D13111] hover:bg-[#1A1A1A]/5"
          >
            Contact
          </a>

          <div className="pt-3 border-t border-[#1A1A1A]/10 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth('join');
              }}
              className="w-full text-center py-3.5 border-2 border-[#1A1A1A] text-[#1A1A1A] font-bold text-xs uppercase tracking-widest active:scale-95 transition-transform"
            >
              Join with Us
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth('login');
              }}
              className="w-full text-center py-3.5 bg-[#1A1A1A] text-white font-bold text-xs uppercase tracking-widest active:scale-95 transition-transform"
            >
              Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
