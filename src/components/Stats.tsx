import React from 'react';
import { STATS_DATA } from '../data';

export const Stats: React.FC = () => {
  return (
    <section id="stats" className="py-12 bg-slate-100/70 dark:bg-[#141418]/50 border-b border-slate-200 dark:border-[#2A2A35] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Minimalist 4-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {STATS_DATA.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 bg-white dark:bg-[#141418] border border-slate-200 dark:border-[#2A2A35] rounded-lg flex flex-col justify-between hover:border-[#0088A3] dark:hover:border-[#00E5FF]/50 transition-colors shadow-xs"
            >
              <div>
                {/* Big Number */}
                <span className="block font-heading font-bold text-3xl sm:text-4xl text-[#0088A3] dark:text-[#00E5FF] tracking-tight">
                  {stat.number}
                </span>
                
                {/* Label */}
                <p className="mt-1 font-heading font-semibold text-sm sm:text-base text-slate-900 dark:text-white">
                  {stat.label}
                </p>
              </div>

              {stat.subtext && (
                <p className="mt-3 pt-2 border-t border-slate-200 dark:border-[#2A2A35]/60 text-xs text-slate-500 dark:text-[#A0A0B0]">
                  {stat.subtext}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
