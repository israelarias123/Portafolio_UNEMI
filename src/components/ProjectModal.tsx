import React, { useState } from 'react';
import { X, Github, Code, CheckCircle2, Copy, Check, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    if (project.codeSnippet) {
      navigator.clipboard.writeText(project.codeSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 dark:bg-[#0A0A0F]/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#141418] border border-slate-200 dark:border-[#2A2A35] rounded-xl shadow-2xl my-8 overflow-hidden transition-colors">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-200 dark:border-[#2A2A35] bg-slate-50 dark:bg-[#1E1E24]">
          <div>
            <span className="text-[11px] font-semibold text-[#0088A3] dark:text-[#00E5FF] uppercase tracking-wider">
              {project.category}
            </span>
            <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded text-slate-500 dark:text-[#A0A0B0] hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-[#141418] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Image */}
          <div className="rounded-lg overflow-hidden border border-slate-200 dark:border-[#2A2A35] max-h-56 bg-slate-100 dark:bg-[#1E1E24]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded text-xs font-medium bg-slate-100 dark:bg-[#1E1E24] text-[#0088A3] dark:text-[#00E5FF] border border-slate-200 dark:border-[#2A2A35]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Detailed Description */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-[#A0A0B0] mb-1.5">
              Descripción del Proyecto
            </h4>
            <p className="text-sm text-slate-800 dark:text-white leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Technical Highlights */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-[#A0A0B0] mb-2">
              Puntos Clave de Implementación
            </h4>
            <ul className="space-y-2">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start text-xs text-slate-700 dark:text-[#E0E0E6]">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-[#0088A3] dark:text-[#00E5FF] shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Code Snippet Box */}
          {project.codeSnippet && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-[#A0A0B0] flex items-center">
                  <Code className="w-3.5 h-3.5 mr-1.5 text-[#0088A3] dark:text-[#00E5FF]" />
                  Extracto de Código
                </h4>
                <button
                  onClick={handleCopyCode}
                  className="inline-flex items-center text-xs text-[#0088A3] dark:text-[#00E5FF] hover:underline cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 mr-1" /> Copiado
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 mr-1" /> Copiar Código
                    </>
                  )}
                </button>
              </div>

              <pre className="p-4 bg-slate-900 dark:bg-[#0A0A0F] border border-slate-700 dark:border-[#2A2A35] rounded-lg text-xs font-mono text-emerald-400 overflow-x-auto">
                <code>{project.codeSnippet}</code>
              </pre>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-[#2A2A35] bg-slate-50 dark:bg-[#1E1E24] flex items-center justify-between">
          <span className="text-xs text-slate-500 dark:text-[#A0A0B0]">
            Repo ID: israelarias123
          </span>

          <div className="flex items-center space-x-3">
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 rounded text-xs font-medium text-slate-600 dark:text-[#A0A0B0] hover:text-slate-900 dark:hover:text-white cursor-pointer"
            >
              Cerrar
            </button>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded text-xs font-semibold bg-[#0088A3] dark:bg-[#00E5FF] text-white dark:text-[#0A0A0F] hover:bg-[#007088] dark:hover:bg-[#00E5FF]/90 transition-colors"
            >
              <Github className="w-4 h-4 mr-1.5" />
              Ver en GitHub
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
