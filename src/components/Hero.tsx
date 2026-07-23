import React from 'react';
import { Github, Download, ArrowUpRight, GraduationCap, Code, Terminal } from 'lucide-react';
import { HERO_DATA } from '../data';

interface HeroProps {
  onOpenCv: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCv }) => {
  return (
    <section id="hero" className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-slate-200 dark:border-[#2A2A35] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Main Hero Content Column */}
          <div className="lg:col-span-7 space-y-6">

            {/* Status Pill Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-[#141418] border border-slate-200 dark:border-[#2A2A35]">
              <span className="w-2 h-2 rounded-full bg-[#0088A3] dark:bg-[#00E5FF] animate-pulse"></span>
              <span className="text-xs font-medium text-slate-600 dark:text-[#A0A0B0] flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-[#0088A3] dark:text-[#00E5FF]" />
                UNEMI · 6to Semestre · TI en Línea
              </span>
            </div>

            {/* Mandatory Hero Title */}
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight leading-[1.15]">
              {HERO_DATA.title}
            </h1>

            {/* Mandatory Hero Description */}
            <p className="text-slate-600 dark:text-[#A0A0B0] text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {HERO_DATA.description}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              {/* Primary Button */}
              <a
                href={HERO_DATA.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-3 rounded-md text-sm font-semibold text-white dark:text-[#0A0A0F] bg-[#0088A3] dark:bg-[#00E5FF] hover:bg-[#007088] dark:hover:bg-[#00E5FF]/90 transition-colors shadow-sm"
              >
                <Github className="w-4 h-4 mr-2" />
                View My GitHub
                <ArrowUpRight className="w-4 h-4 ml-1.5" />
              </a>

              {/* Secondary Button */}
              <button
                onClick={onOpenCv}
                className="inline-flex items-center px-5 py-3 rounded-md text-sm font-medium text-slate-800 dark:text-white bg-slate-100 dark:bg-[#141418] border border-slate-300 dark:border-[#2A2A35] hover:border-[#0088A3] dark:hover:border-[#00E5FF] hover:text-[#0088A3] dark:hover:text-[#00E5FF] transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4 mr-2 text-[#0088A3] dark:text-[#00E5FF]" />
                Download CV
              </button>
            </div>

            {/* Factual Academic Metadata Tags */}
            <div className="pt-6 border-t border-slate-200 dark:border-[#2A2A35]/60 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-600 dark:text-[#A0A0B0]">
              <div className="flex items-center space-x-2">
                <Code className="w-4 h-4 text-[#0088A3] dark:text-[#00E5FF]" />
                <span>Frontend & APIs</span>
              </div>
              <div className="flex items-center space-x-2">
                <Terminal className="w-4 h-4 text-[#0088A3] dark:text-[#00E5FF]" />
                <span>Python & JS Engine</span>
              </div>
              <div className="flex items-center space-x-2 col-span-2 sm:col-span-1">
                <GraduationCap className="w-4 h-4 text-[#0088A3] dark:text-[#00E5FF]" />
                <span>Modalidad en Línea</span>
              </div>
            </div>

          </div>

          {/* Developer Avatar Photo Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">

              {/* Outer Framing Container */}
              <div className="p-3 bg-white dark:bg-[#141418] border border-slate-200 dark:border-[#2A2A35] rounded-xl shadow-lg relative group transition-colors">

                {/* Image Container */}
                <div className="relative overflow-hidden rounded-lg bg-slate-100 dark:bg-[#1E1E24]">
                  <img
                    src={HERO_DATA.avatarUrl}
                    alt="Israel Arias - Developer Student"
                    className="w-full h-auto filter contrast-[1.05] brightness-95 group-hover:brightness-100 transition-all duration-300"
                  />

                  {/* Subtle vignette gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 dark:from-[#0A0A0F]/80 via-transparent to-transparent"></div>

                  {/* Factual Overlay Badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 bg-white/90 dark:bg-[#0A0A0F]/90 backdrop-blur-md border border-slate-200 dark:border-[#2A2A35] rounded-md text-xs shadow-xs">
                    <p className="font-heading font-semibold text-slate-900 dark:text-white">Genaro Israel Arias Escobar</p>
                    <p className="text-slate-600 dark:text-[#A0A0B0] text-[11px] truncate">Ingeniería en TI · UNEMI</p>
                  </div>
                </div>

                {/* Minimalist Tech Pills Below Image */}
                <div className="mt-3 flex items-center justify-between px-1 text-[11px] text-slate-600 dark:text-[#A0A0B0]">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0088A3] dark:bg-[#00E5FF]"></span>
                    Ecuador - Los Ríos - Vinces
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
