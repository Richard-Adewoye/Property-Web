import { useState } from 'react';
import { Phone, Mail, Instagram, Dribbble, MessageSquare, Check } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 4000);
  };

  return (
    <footer id="footer" className="w-full pt-8 pb-6 px-4 sm:px-6 lg:px-8">
      {/* Main Ocean Blue Rounded Card Box transformed into Charcoal & Terracotta Monolith */}
      <div className="bg-[#1A1A1A] text-white p-8 sm:p-12 md:p-16 relative overflow-hidden border-2 border-[#1A1A1A] shadow-[8px_8px_0px_0px_#D13111]">
        
        {/* Top Grid Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pb-12 border-b-2 border-white/10">
          
          {/* Left Column: Brand & Contacts */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <div className="w-1.5 h-7 bg-[#D13111]"></div>
              <span className="font-heading text-2xl font-black italic tracking-tighter text-white">
                PROTAH<span className="text-[#D13111] not-italic">.</span>
              </span>
            </div>

            <p className="text-white/70 text-xs sm:text-sm leading-relaxed max-w-md font-medium">
              We deliver premium architectural real estate, combining solid modernist foundations with thoughtful spaces across the archipelago.
            </p>

            {/* Quick Contact Links */}
            <div className="space-y-3 pt-2 text-xs text-white/90 font-bold uppercase tracking-wider">
              <div className="flex items-center gap-3 bg-white/5 p-3 border border-white/15 w-fit">
                <div className="p-2 bg-[#D13111] text-white">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[9px] text-white/50 font-extrabold uppercase tracking-widest">Have a question?</div>
                  <div className="font-mono-code font-bold text-white">310-437-2766</div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/5 p-3 border border-white/15 w-fit">
                <div className="p-2 bg-[#D13111] text-white">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[9px] text-white/50 font-extrabold uppercase tracking-widest">Contact us at</div>
                  <div className="font-mono-code font-bold text-white">protah@outlook.com</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Newsletter Subscription Box */}
          <div className="lg:col-span-6 bg-white/5 p-6 sm:p-8 border-2 border-white/15 flex flex-col justify-between">
            <div>
              <div className="w-12 h-1 bg-[#D13111] mb-2"></div>
              <h3 className="font-heading text-xl font-black uppercase tracking-tight mb-2 text-white">
                Newsletter Dispatch
              </h3>
              <p className="text-white/70 text-xs leading-relaxed mb-6 font-medium">
                Be The First One To Know About Exclusive Listings, Offers And Events Weekly In Your Mailbox. Unsubscribe Whenever You Like With One Click.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative flex items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-white/10 text-white placeholder-white/40 text-xs font-bold uppercase tracking-wider pl-4 pr-32 py-3.5 border border-white/20 focus:outline-none focus:border-[#D13111] transition-all"
                />
                <button
                  type="submit"
                  className="absolute right-1 px-5 py-2.5 bg-[#D13111] hover:bg-[#B0280D] text-white font-bold text-xs uppercase tracking-widest transition-all cursor-pointer border border-[#1A1A1A] flex items-center gap-1"
                >
                  {subscribed ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Joined!</span>
                    </>
                  ) : (
                    <span>Submit</span>
                  )}
                </button>
              </div>
              {subscribed && (
                <p className="text-[#D13111] text-xs font-bold uppercase tracking-wider animate-in fade-in">
                  ✓ Success! You are now subscribed to the ProtAh dispatch.
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Links & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-white/70 font-bold uppercase tracking-widest">
          
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[11px]">
            <a href="#stats" className="hover:text-[#D13111] transition-colors">About us</a>
            <a href="#properties" className="hover:text-[#D13111] transition-colors">Jobs</a>
            <a href="#footer" className="hover:text-[#D13111] transition-colors">Blog</a>
            <a href="#footer" className="hover:text-[#D13111] transition-colors">Press</a>
            <a href="#footer" className="hover:text-[#D13111] transition-colors">FAQ</a>
            <a href="#properties" className="hover:text-[#D13111] transition-colors">Careers</a>
            <a href="#footer" className="hover:text-[#D13111] transition-colors">Contact</a>
            <a href="#footer" className="hover:text-[#D13111] transition-colors">Privacy policy</a>
            <a href="#footer" className="hover:text-[#D13111] transition-colors">Terms of Use</a>
          </div>

          {/* Social Icons & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center space-x-2 text-white">
              <a href="#" className="p-2 border border-white/20 hover:bg-[#D13111] transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 border border-white/20 hover:bg-[#D13111] transition-colors" aria-label="Dribbble">
                <Dribbble className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 border border-white/20 hover:bg-[#D13111] transition-colors" aria-label="WhatsApp">
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
            <div className="text-white/50 text-[10px] font-mono-code font-bold">
              © 2012-2026 PROTAH ARCHITECTURE
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
