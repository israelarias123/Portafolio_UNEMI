import React, { useState } from 'react';
import { Github, Code, ExternalLink, Layers } from 'lucide-react';
import { PROJECTS_DATA } from '../data';
import { Project } from '../types';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [selectedTag, setSelectedTag] = useState<string>('Todos');

  const allTags = ['Todos', 'Python', 'Node.js', 'React', 'JavaScript', 'SQL'];

  const filteredProjects = selectedTag === 'Todos'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.tags.some(t => t.toLowerCase().includes(selectedTag.toLowerCase())));

  return (
    <section id="projects" className="py-16 md:py-24 border-b border-slate-200 dark:border-[#2A2A35] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-semibold text-[#0088A3] dark:text-[#00E5FF] uppercase tracking-wider mb-2">
              <Layers className="w-4 h-4" />
              <span>Desarrollo de Software & Algoritmos</span>
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white">
              Proyectos Destacados
            </h2>
            <p className="mt-2 text-slate-600 dark:text-[#A0A0B0] text-sm max-w-xl">
              Selección de repositorios con soluciones técnicas, automatización y desarrollo web full-stack.
            </p>
          </div>

          {/* Filter Tag Pills */}
          <div className="flex flex-wrap gap-2 pt-2 md:pt-0">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                  selectedTag === tag
                    ? 'bg-[#0088A3] dark:bg-[#00E5FF] text-white dark:text-[#0A0A0F] font-semibold'
                    : 'bg-white dark:bg-[#141418] text-slate-700 dark:text-[#A0A0B0] border border-slate-300 dark:border-[#2A2A35] hover:text-slate-900 dark:hover:text-white hover:border-[#0088A3] dark:hover:border-[#00E5FF]/40'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive 2x2 Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group bg-white dark:bg-[#141418] border border-slate-200 dark:border-[#2A2A35] rounded-xl overflow-hidden flex flex-col hover:border-[#0088A3] dark:hover:border-[#00E5FF] hover:shadow-lg transition-all duration-200"
            >
              {/* Project Image Header */}
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-100 dark:bg-[#1E1E24] border-b border-slate-200 dark:border-[#2A2A35]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:opacity-90 transition-opacity duration-200"
                />
                <div className="absolute top-3 left-3 bg-white/90 dark:bg-[#0A0A0F]/90 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-medium text-[#0088A3] dark:text-[#00E5FF] border border-slate-200 dark:border-[#2A2A35]">
                  {project.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-[#1E1E24] text-slate-600 dark:text-[#A0A0B0] border border-slate-200 dark:border-[#2A2A35]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white group-hover:text-[#0088A3] dark:group-hover:text-[#00E5FF] transition-colors">
                    {project.title}
                  </h3>

                  {/* Factual Description */}
                  <p className="mt-2 text-sm text-slate-600 dark:text-[#A0A0B0] leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Card Actions Footer */}
                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-[#2A2A35] flex items-center justify-between">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center text-xs font-semibold text-[#0088A3] dark:text-[#00E5FF] hover:underline cursor-pointer"
                  >
                    <Code className="w-3.5 h-3.5 mr-1.5" />
                    Inspeccionar Código
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1.5 rounded text-xs font-medium text-slate-700 dark:text-[#E0E0E6] bg-slate-100 dark:bg-[#1E1E24] border border-slate-300 dark:border-[#2A2A35] hover:border-[#0088A3] dark:hover:border-[#00E5FF] hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    <Github className="w-3.5 h-3.5 mr-1.5" />
                    GitHub
                    <ExternalLink className="w-3 h-3 ml-1 text-slate-400 dark:text-[#A0A0B0]" />
                  </a>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
