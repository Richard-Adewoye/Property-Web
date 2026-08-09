import { useState } from 'react';
import { X, Mail, Lock, User, ArrowRight, Check } from 'lucide-react';

export default function AuthModal({ initialMode = 'login', onClose }) {
  const [mode, setMode] = useState(initialMode);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A1A1A]/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md bg-[#FAF9F6] border-2 border-[#1A1A1A] shadow-[10px_10px_0px_0px_#1A1A1A] p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2.5 bg-[#1A1A1A] text-white hover:bg-[#D13111] transition-colors border border-[#1A1A1A] cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-2 mb-6">
          <div className="flex justify-center mb-2">
            <div className="w-12 h-1 bg-[#D13111]"></div>
          </div>
          <div className="inline-flex items-center gap-2 font-heading text-xl font-black italic tracking-tighter text-[#1A1A1A]">
            <div className="w-1.5 h-5 bg-[#D13111]"></div>
            <span>PROTAH<span className="text-[#D13111] not-italic">.</span></span>
          </div>
          <h2 className="font-heading text-2xl font-black uppercase text-[#1A1A1A]">
            {mode === 'login' ? 'Welcome Back' : 'Join ProtAh Agency'}
          </h2>
          <p className="text-xs text-[#555] font-medium">
            {mode === 'login'
              ? 'Access your saved property listings and inquiries'
              : 'Become a partner or register as an exclusive buyer'}
          </p>
        </div>

        {/* Success Alert */}
        {success ? (
          <div className="p-6 bg-[#1A1A1A] text-white border-2 border-[#1A1A1A] text-center space-y-2">
            <Check className="w-10 h-10 text-[#D13111] mx-auto" />
            <div className="font-bold text-sm uppercase tracking-wider">
              {mode === 'login' ? 'Login Successful!' : 'Account Created!'}
            </div>
            <div className="text-xs text-white/80">Redirecting to your dashboard...</div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'join' && (
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1A1A1A] mb-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3.5 w-4 h-4 text-[#1A1A1A]" />
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 bg-white border-2 border-[#1A1A1A] text-xs font-bold uppercase tracking-wider focus:outline-none focus:border-[#D13111]"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#1A1A1A] mb-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-[#1A1A1A]" />
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 bg-white border-2 border-[#1A1A1A] text-xs font-bold uppercase tracking-wider focus:outline-none focus:border-[#D13111]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#1A1A1A] mb-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-3.5 w-4 h-4 text-[#1A1A1A]" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 bg-white border-2 border-[#1A1A1A] text-xs font-bold tracking-wider focus:outline-none focus:border-[#D13111]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#D13111] hover:bg-[#B0280D] text-white font-bold text-xs uppercase tracking-widest border-2 border-[#1A1A1A] transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              <span>{mode === 'login' ? 'Sign In' : 'Create Account'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        {/* Toggle Mode */}
        <div className="mt-6 pt-4 border-t-2 border-[#1A1A1A]/10 text-center text-xs font-bold uppercase tracking-wider text-[#555]">
          {mode === 'login' ? (
            <span>
              Don't have an account?{' '}
              <button
                onClick={() => setMode('join')}
                className="font-black text-[#D13111] hover:underline cursor-pointer"
              >
                Join with Us
              </button>
            </span>
          ) : (
            <span>
              Already have an account?{' '}
              <button
                onClick={() => setMode('login')}
                className="font-black text-[#D13111] hover:underline cursor-pointer"
              >
                Login
              </button>
            </span>
          )}
        </div>

      </div>
    </div>
  );
}
