import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';
import { ProjectModal } from './components/ProjectModal';
import { Project } from './types';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-[#0A0A0F] text-slate-800 dark:text-[#E0E0E6] flex flex-col font-body antialiased transition-colors duration-200">
        {/* Navigation Header */}
        <Navbar onOpenCv={() => setIsCvOpen(true)} />

        {/* Main Content Body */}
        <main className="flex-1">
          <Hero onOpenCv={() => setIsCvOpen(true)} />
          <Stats />
          <Projects onSelectProject={(project) => setSelectedProject(project)} />
          <Skills />
          <ContactSection onOpenCv={() => setIsCvOpen(true)} />
        </main>

        {/* Footer */}
        <Footer />

        {/* Interactive Modals */}
        <CvModal
          isOpen={isCvOpen}
          onClose={() => setIsCvOpen(false)}
        />

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </ThemeProvider>
  );
}
