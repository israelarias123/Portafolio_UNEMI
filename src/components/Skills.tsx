import React from 'react';
import { Code2, Server, Database, CheckCircle2, Wrench } from 'lucide-react';
import { SKILLS_DATA } from '../data';

export const Skills: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-6 h-6 text-[#0088A3] dark:text-[#00E5FF]" />;
      case 'Server':
        return <Server className="w-6 h-6 text-[#0088A3] dark:text-[#00E5FF]" />;
      case 'Database':
        return <Database className="w-6 h-6 text-[#0088A3] dark:text-[#00E5FF]" />;
      default:
        return <Wrench className="w-6 h-6 text-[#0088A3] dark:text-[#00E5FF]" />;
    }
  };

  return (
    <section id="skills" className="py-16 md:py-24 border-b border-slate-200 dark:border-[#2A2A35] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-2 text-xs font-semibold text-[#0088A3] dark:text-[#00E5FF] uppercase tracking-wider mb-2">
            <Wrench className="w-4 h-4" />
            <span>Competencias Técnicas</span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white">
            Technical Skills
          </h2>
          <p className="mt-2 text-slate-600 dark:text-[#A0A0B0] text-sm max-w-2xl">
            Dominio de herramientas de desarrollo, tecnologías clave y fundamentos del programa académico de Tecnologías de la Información.
          </p>
        </div>

        {/* 3 Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILLS_DATA.map((skill, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-[#141418] border border-slate-200 dark:border-[#2A2A35] rounded-xl flex flex-col justify-between hover:border-[#0088A3] dark:hover:border-[#00E5FF]/60 hover:shadow-lg transition-all duration-200"
            >
              <div>
                {/* Header with Icon */}
                <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-[#1E1E24] border border-slate-200 dark:border-[#2A2A35] flex items-center justify-center mb-5">
                  {getIcon(skill.iconName)}
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-2">
                  {skill.title}
                </h3>

                {/* Factual Description */}
                <p className="text-sm text-slate-600 dark:text-[#A0A0B0] leading-relaxed mb-6">
                  {skill.summary}
                </p>
              </div>

              {/* Technologies List */}
              <div className="pt-4 border-t border-slate-200 dark:border-[#2A2A35]/80">
                <p className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
                  Tecnologías & Herramientas:
                </p>
                <ul className="space-y-2">
                  {skill.technologies.map((tech, tIdx) => (
                    <li key={tIdx} className="flex items-center text-xs text-slate-700 dark:text-[#E0E0E6]">
                      <CheckCircle2 className="w-3.5 h-3.5 mr-2 text-[#0088A3] dark:text-[#00E5FF] shrink-0" />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

        {/* Development Environment Box */}
        <div className="mt-8 p-5 bg-slate-100/80 dark:bg-[#1E1E24]/60 border border-slate-200 dark:border-[#2A2A35] rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs">
          <div className="flex items-center space-x-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0088A3] dark:bg-[#00E5FF]"></span>
            <span className="text-slate-900 dark:text-white font-medium">Entorno de Trabajo & Control de Versiones:</span>
            <span className="text-slate-600 dark:text-[#A0A0B0]">Git, GitHub CLI, Linux Terminal, VS Code, Postman, npm, Vite</span>
          </div>
          <span className="text-slate-500 dark:text-[#A0A0B0] font-mono shrink-0">UNEMI · Modalidad Online</span>
        </div>

      </div>
    </section>
  );
};
