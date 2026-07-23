import React from 'react';
import { X, Printer, Mail, Github, GraduationCap } from 'lucide-react';
import { HERO_DATA, ACADEMIC_INFO, PROJECTS_DATA, SKILLS_DATA } from '../data';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="cv-modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 dark:bg-[#0A0A0F]/80 backdrop-blur-md overflow-y-auto">
      <style>{`
        @media print {
          body, html {
            background: #ffffff !important;
            color: #0f172a !important;
            overflow: visible !important;
            height: auto !important;
          }
          header, footer, nav, section, main, .no-print, button {
            display: none !important;
          }
          #root, #root > div, .min-h-screen {
            height: auto !important;
            min-height: 0 !important;
            display: block !important;
            overflow: visible !important;
          }
          .cv-modal-overlay {
            position: static !important;
            display: block !important;
            background: transparent !important;
            padding: 0 !important;
            backdrop-filter: none !important;
            overflow: visible !important;
            width: 100% !important;
            height: auto !important;
            inset: auto !important;
          }
          .printable-cv-container {
            position: static !important;
            display: block !important;
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            background: #ffffff !important;
            color: #0f172a !important;
            box-shadow: none !important;
            border: none !important;
            overflow: visible !important;
          }
          .cv-content-container {
            max-height: none !important;
            height: auto !important;
            overflow: visible !important;
            overflow-y: visible !important;
            padding: 0 !important;
          }
          .printable-cv-container * {
            color: #0f172a !important;
            background: transparent !important;
            border-color: #cbd5e1 !important;
            box-shadow: none !important;
          }
          ::-webkit-scrollbar {
            display: none !important;
            width: 0 !important;
            height: 0 !important;
          }
          * {
            scrollbar-width: none !important;
            -ms-overflow-style: none !important;
          }
        }
      `}</style>
      <div className="printable-cv-container relative w-full max-w-3xl bg-white dark:bg-[#141418] border border-slate-200 dark:border-[#2A2A35] rounded-xl shadow-2xl my-8 overflow-hidden transition-colors">
        
        {/* Modal Header */}
        <div className="no-print flex items-center justify-between p-4 sm:p-6 border-b border-slate-200 dark:border-[#2A2A35] bg-slate-50 dark:bg-[#1E1E24]">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0088A3] dark:bg-[#00E5FF]"></span>
            <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">
              Curriculum Vitae — Israel Arias
            </h3>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded text-xs font-semibold bg-[#0088A3] dark:bg-[#00E5FF] text-white dark:text-[#0A0A0F] hover:bg-[#007088] dark:hover:bg-[#00E5FF]/90 transition-colors inline-flex items-center cursor-pointer shadow-xs"
              title="Imprimir o guardar como PDF"
            >
              <Printer className="w-3.5 h-3.5 mr-1.5" />
              Imprimir / PDF
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded text-slate-500 dark:text-[#A0A0B0] hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-[#141418] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Document Container */}
        <div className="cv-content-container p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto text-sm text-slate-700 dark:text-[#E0E0E6]">
          
          {/* Document Header */}
          <div className="border-b border-slate-200 dark:border-[#2A2A35] pb-6">
            <h1 className="font-heading font-bold text-2xl text-slate-900 dark:text-white">Israel Arias</h1>
            <p className="text-[#0088A3] dark:text-[#00E5FF] font-medium text-sm mt-0.5">
              Information Technology Student & Web Developer
            </p>
            <div className="mt-3 flex flex-wrap gap-4 text-xs text-slate-600 dark:text-[#A0A0B0]">
              <span className="flex items-center">
                <Mail className="w-3.5 h-3.5 mr-1 text-[#0088A3] dark:text-[#00E5FF]" />
                {HERO_DATA.email}
              </span>
              <span className="flex items-center">
                <Github className="w-3.5 h-3.5 mr-1 text-[#0088A3] dark:text-[#00E5FF]" />
                github.com/israelarias123
              </span>
              <span className="flex items-center">
                <GraduationCap className="w-3.5 h-3.5 mr-1 text-[#0088A3] dark:text-[#00E5FF]" />
                UNEMI — Ecuador
              </span>
            </div>
          </div>

          {/* Profile Summary */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#0088A3] dark:text-[#00E5FF] mb-2">
              Perfil Profesional
            </h4>
            <p className="text-slate-600 dark:text-[#A0A0B0] text-xs leading-relaxed">
              {HERO_DATA.description}
            </p>
          </div>

          {/* Education Section */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#0088A3] dark:text-[#00E5FF] mb-3">
              Educación Superior
            </h4>
            <div className="p-4 bg-slate-50 dark:bg-[#1E1E24] border border-slate-200 dark:border-[#2A2A35] rounded-lg">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <p className="font-heading font-bold text-slate-900 dark:text-white text-sm">
                  {ACADEMIC_INFO.program}
                </p>
                <span className="text-xs text-[#0088A3] dark:text-[#00E5FF] font-medium">
                  2022 — Presente
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-[#A0A0B0] mt-1">{ACADEMIC_INFO.institution}</p>
              <p className="text-xs text-slate-600 dark:text-[#A0A0B0] mt-0.5">Semestre actual: {ACADEMIC_INFO.currentSemester}</p>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#0088A3] dark:text-[#00E5FF] mb-3">
              Competencias Técnicas
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              {SKILLS_DATA.map((skill, idx) => (
                <div key={idx} className="p-3 bg-slate-50 dark:bg-[#1E1E24] border border-slate-200 dark:border-[#2A2A35] rounded-lg">
                  <p className="font-bold text-slate-900 dark:text-white mb-1.5">{skill.title}</p>
                  <ul className="space-y-1 text-slate-600 dark:text-[#A0A0B0]">
                    {skill.technologies.map((t, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-1 h-1 rounded-full bg-[#0088A3] dark:bg-[#00E5FF] mr-1.5"></span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Repositories / Projects */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#0088A3] dark:text-[#00E5FF] mb-3">
              Proyectos de Código
            </h4>
            <div className="space-y-3">
              {PROJECTS_DATA.map((proj) => (
                <div key={proj.id} className="p-3.5 bg-slate-50 dark:bg-[#1E1E24] border border-slate-200 dark:border-[#2A2A35] rounded-lg">
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-slate-900 dark:text-white text-xs">{proj.title}</p>
                    <span className="text-[10px] text-[#0088A3] dark:text-[#00E5FF] font-mono">{proj.tags.join(' · ')}</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-[#A0A0B0] mt-1">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="no-print p-4 border-t border-slate-200 dark:border-[#2A2A35] bg-slate-50 dark:bg-[#1E1E24] flex items-center justify-between">
          <p className="text-xs text-slate-500 dark:text-[#A0A0B0]">
            Israel Arias · Portafolio Profesional UNEMI
          </p>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded text-xs font-semibold bg-[#0088A3] dark:bg-[#00E5FF] text-white dark:text-[#0A0A0F] hover:bg-[#007088] dark:hover:bg-[#00E5FF]/90 transition-colors cursor-pointer"
          >
            Cerrar Vista
          </button>
        </div>

      </div>
    </div>
  );
};
