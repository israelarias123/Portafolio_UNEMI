import React, { useState } from 'react';
import { Github, Menu, X, FileText, Sun, Moon } from 'lucide-react';
import { HERO_DATA } from '../data';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenCv: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCv }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Estadísticas', href: '#stats' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 dark:bg-[#0A0A0F]/90 backdrop-blur-md border-b border-slate-200 dark:border-[#2A2A35] transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="font-heading font-bold text-xl tracking-tight text-slate-900 dark:text-white hover:opacity-90 transition-opacity">
          ISRAEL ARIAS<span className="text-[#0088A3] dark:text-[#00E5FF]">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 dark:text-[#A0A0B0] hover:text-[#0088A3] dark:hover:text-[#00E5FF] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Actions */}
        <div className="hidden md:flex items-center space-x-3">
          {/* Theme Switcher Button */}
          <button
            onClick={toggleTheme}
            className="inline-flex items-center px-3 py-1.5 border border-slate-300 dark:border-[#2A2A35] rounded-md text-xs font-medium text-slate-700 dark:text-[#E0E0E6] bg-slate-100 dark:bg-[#141418] hover:border-[#0088A3] dark:hover:border-[#00E5FF] hover:text-[#0088A3] dark:hover:text-[#00E5FF] transition-all cursor-pointer shadow-xs"
            title={theme === 'dark' ? 'Cambiar a Modo Claro' : 'Cambiar a Modo Oscuro'}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-400" />
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-indigo-600" />
              </>
            )}
          </button>

          <button
            onClick={onOpenCv}
            className="inline-flex items-center px-3 py-1.5 border border-slate-300 dark:border-[#2A2A35] rounded-md text-xs font-medium text-slate-700 dark:text-[#E0E0E6] bg-slate-100 dark:bg-[#141418] hover:border-[#0088A3] dark:hover:border-[#00E5FF] hover:text-[#0088A3] dark:hover:text-[#00E5FF] transition-colors cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 mr-1.5" />
            CV
          </button>
          <a
            href={HERO_DATA.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3.5 py-1.5 rounded-md text-xs font-semibold bg-slate-900 dark:bg-[#1E1E24] text-white border border-slate-800 dark:border-[#2A2A35] hover:border-[#0088A3] dark:hover:border-[#00E5FF] hover:text-[#0088A3] dark:hover:text-[#00E5FF] transition-colors"
          >
            <Github className="w-3.5 h-3.5 mr-1.5" />
            GitHub
          </a>
        </div>

        {/* Mobile Menu & Theme Toggle */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md text-slate-700 dark:text-[#A0A0B0] hover:bg-slate-100 dark:hover:bg-[#1E1E24] border border-slate-300 dark:border-[#2A2A35]"
            title={theme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-indigo-600" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-slate-700 dark:text-[#A0A0B0] hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#1E1E24] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-[#2A2A35] bg-white dark:bg-[#0A0A0F] px-4 pt-2 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-[#A0A0B0] hover:text-[#0088A3] dark:hover:text-[#00E5FF] hover:bg-slate-100 dark:hover:bg-[#141418] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-slate-200 dark:border-[#2A2A35] flex flex-col space-y-2">
            <button
              onClick={toggleTheme}
              className="w-full flex items-center justify-center px-4 py-2 border border-slate-300 dark:border-[#2A2A35] rounded-md text-sm font-medium text-slate-800 dark:text-[#E0E0E6] bg-slate-100 dark:bg-[#141418]"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-4 h-4 mr-2 text-amber-400" />
                  Cambiar a Modo Claro
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 mr-2 text-indigo-600" />
                  Cambiar a Modo Oscuro
                </>
              )}
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCv();
              }}
              className="w-full flex items-center justify-center px-4 py-2 border border-slate-300 dark:border-[#2A2A35] rounded-md text-sm font-medium text-slate-800 dark:text-[#E0E0E6] bg-slate-100 dark:bg-[#141418]"
            >
              <FileText className="w-4 h-4 mr-2" />
              Ver Curriculum Vitae
            </button>
            <a
              href={HERO_DATA.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center px-4 py-2 border border-slate-800 dark:border-[#00E5FF]/40 rounded-md text-sm font-semibold text-white bg-slate-900 dark:bg-[#1E1E24]"
            >
              <Github className="w-4 h-4 mr-2 text-[#0088A3] dark:text-[#00E5FF]" />
              Ver Repositorios en GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
