import React from 'react';
import { Github } from 'lucide-react';
import { HERO_DATA } from '../data';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-[#2A2A35] bg-slate-100 dark:bg-[#0A0A0F] py-8 text-xs text-slate-600 dark:text-[#A0A0B0] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Mandatory Copyright text */}
        <p className="text-center sm:text-left">
          © 2026 Israel Arias. Source code on{' '}
          <a
            href={HERO_DATA.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0088A3] dark:text-[#00E5FF] font-medium hover:underline inline-flex items-center"
          >
            GitHub
          </a>
          .
        </p>

        {/* Factual Academic Tag */}
        <div className="flex items-center space-x-4">
          <span>Estudiante de TI — UNEMI</span>
          <a
            href={HERO_DATA.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-full bg-white dark:bg-[#141418] border border-slate-300 dark:border-[#2A2A35] text-slate-600 dark:text-[#A0A0B0] hover:text-[#0088A3] dark:hover:text-[#00E5FF] hover:border-[#0088A3] dark:hover:border-[#00E5FF] transition-colors"
            title="GitHub Repository"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>

      </div>
    </footer>
  );
};
