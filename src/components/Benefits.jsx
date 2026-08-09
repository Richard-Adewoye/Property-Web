import { Shield, Zap, Key } from 'lucide-react';

export default function Benefits() {
  const benefitsList = [
    {
      num: '01.',
      title: 'Access to Exclusive Projects',
      desc: 'Monitor various exclusive project listings from various leading developers that are sure to be interesting for potential buyers.',
      icon: Key
    },
    {
      num: '02.',
      title: 'Personal Data Privacy is Safe',
      desc: 'All transaction data of you and your buyers, both primary and those using joint account services, must be kept safe.',
      icon: Shield
    },
    {
      num: '03.',
      title: 'Faster and Easier Transactions',
      desc: 'You can search for property types in many locations. Transactions are faster and you can get commissions easily.',
      icon: Zap
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14 space-y-3">
        <div className="w-20 h-1 bg-[#D13111]"></div>
        <div className="text-xs font-bold uppercase tracking-[0.3em] text-[#D13111]">
          Core Value Principles
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl font-black text-[#1A1A1A] uppercase tracking-tight">
          Benefits of Choosing Us
        </h2>
      </div>

      {/* 3 Columns Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefitsList.map((item, idx) => (
          <div 
            key={idx} 
            className="space-y-4 p-6 sm:p-8 bg-white border-2 border-[#1A1A1A] hover:shadow-[6px_6px_0px_0px_#1A1A1A] transition-all duration-200 group"
          >
            <div className="font-mono-code text-3xl sm:text-4xl font-black text-[#D13111] group-hover:translate-x-1 transition-transform">
              {item.num}
            </div>
            <h3 className="font-heading text-lg sm:text-xl font-bold uppercase tracking-tight text-[#1A1A1A]">
              {item.title}
            </h3>
            <p className="text-[#444444] text-xs sm:text-sm leading-relaxed font-medium">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
