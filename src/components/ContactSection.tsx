import React, { useState } from 'react';
import { Mail, Github, GraduationCap, MapPin, Copy, Check, FileText } from 'lucide-react';
import { HERO_DATA, ACADEMIC_INFO } from '../data';

interface ContactSectionProps {
  onOpenCv: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenCv }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(HERO_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Academic Context Card */}
          <div className="lg:col-span-7 bg-white dark:bg-[#141418] border border-slate-200 dark:border-[#2A2A35] rounded-xl p-6 sm:p-8 shadow-xs">
            <div className="flex items-center space-x-2 text-xs font-semibold text-[#0088A3] dark:text-[#00E5FF] uppercase tracking-wider mb-2">
              <GraduationCap className="w-4 h-4" />
              <span>Formación Académica</span>
            </div>
            
            <h2 className="font-heading font-bold text-2xl text-slate-900 dark:text-white mb-4">
              Información Universitaria
            </h2>

            <div className="space-y-4 text-sm text-slate-600 dark:text-[#A0A0B0]">
              <div className="p-4 bg-slate-100 dark:bg-[#1E1E24] border border-slate-200 dark:border-[#2A2A35] rounded-lg">
                <p className="font-heading font-bold text-slate-900 dark:text-white text-base">
                  {ACADEMIC_INFO.program}
                </p>
                <p className="text-[#0088A3] dark:text-[#00E5FF] text-xs font-semibold mt-0.5">
                  {ACADEMIC_INFO.institution}
                </p>
                <p className="mt-2 text-xs text-slate-600 dark:text-[#A0A0B0]">
                  Estado actual: <span className="text-slate-900 dark:text-white font-medium">{ACADEMIC_INFO.currentSemester}</span> · {ACADEMIC_INFO.academicLocation}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                  Asignaturas Relevantes Aprobadas:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {ACADEMIC_INFO.coursesCompleted.map((course, idx) => (
                    <div key={idx} className="flex items-center space-x-2 p-2 bg-slate-50 dark:bg-[#1E1E24]/50 border border-slate-200 dark:border-[#2A2A35] rounded">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0088A3] dark:bg-[#00E5FF]"></span>
                      <span className="text-slate-700 dark:text-[#E0E0E6]">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Direct Links */}
          <div className="lg:col-span-5 bg-white dark:bg-[#141418] border border-slate-200 dark:border-[#2A2A35] rounded-xl p-6 sm:p-8 flex flex-col justify-between h-full shadow-xs">
            <div>
              <div className="flex items-center space-x-2 text-xs font-semibold text-[#0088A3] dark:text-[#00E5FF] uppercase tracking-wider mb-2">
                <Mail className="w-4 h-4" />
                <span>Contacto Directo</span>
              </div>
              
              <h2 className="font-heading font-bold text-2xl text-slate-900 dark:text-white mb-4">
                Canales de Comunicación
              </h2>

              <p className="text-sm text-slate-600 dark:text-[#A0A0B0] leading-relaxed mb-6">
                Para consultas académicas, colaboración en proyectos o verificación de perfil técnico:
              </p>

              {/* Email Copy Box */}
              <div className="p-4 bg-slate-100 dark:bg-[#1E1E24] border border-slate-200 dark:border-[#2A2A35] rounded-lg mb-4">
                <p className="text-xs text-slate-600 dark:text-[#A0A0B0] mb-1">Correo Institucional UNEMI:</p>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-sm text-slate-900 dark:text-white font-medium truncate">
                    {HERO_DATA.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="shrink-0 p-1.5 rounded bg-white dark:bg-[#141418] border border-slate-300 dark:border-[#2A2A35] text-slate-600 dark:text-[#A0A0B0] hover:text-[#0088A3] dark:hover:text-[#00E5FF] transition-colors cursor-pointer"
                    title="Copiar correo"
                  >
                    {copied ? <Check className="w-4 h-4 text-[#0088A3] dark:text-[#00E5FF]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Location Badge */}
              <div className="flex items-center space-x-2 text-xs text-slate-600 dark:text-[#A0A0B0] p-3 bg-slate-50 dark:bg-[#1E1E24]/50 border border-slate-200 dark:border-[#2A2A35] rounded-lg mb-6">
                <MapPin className="w-4 h-4 text-[#0088A3] dark:text-[#00E5FF] shrink-0" />
                <span>{HERO_DATA.location}</span>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="space-y-3 pt-2">
              <a
                href={HERO_DATA.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center px-4 py-2.5 rounded-md text-sm font-semibold text-slate-800 dark:text-white bg-slate-100 dark:bg-[#1E1E24] border border-slate-300 dark:border-[#2A2A35] hover:border-[#0088A3] dark:hover:border-[#00E5FF] hover:text-[#0088A3] dark:hover:text-[#00E5FF] transition-colors"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub: israelarias123
              </a>

              <button
                onClick={onOpenCv}
                className="w-full flex items-center justify-center px-4 py-2.5 rounded-md text-sm font-semibold text-white dark:text-[#0A0A0F] bg-[#0088A3] dark:bg-[#00E5FF] hover:bg-[#007088] dark:hover:bg-[#00E5FF]/90 transition-colors cursor-pointer"
              >
                <FileText className="w-4 h-4 mr-2" />
                Ver Curriculum Vitae Completo
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
