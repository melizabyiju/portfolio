import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeTicker from './components/MarqueeTicker';
import About from './components/About';
import ResearchSpotlight from './components/ResearchSpotlight';
import ProjectExplorer from './components/ProjectExplorer';
import Skills from './components/Skills';
import EducationTimeline from './components/EducationTimeline';
import Achievements from './components/Achievements';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ProjectModal from './components/ProjectModal';

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        return localStorage.getItem('meliza_portfolio_theme') || 'light';
      } catch (e) {
        return 'light';
      }
    }
    return 'light';
  });

  const [selectedProject, setSelectedProject] = useState(null);

  // Apply theme to <html> element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
    }
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('meliza_portfolio_theme', theme);
      }
    } catch (e) {}
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0F030E] text-slate-800 dark:text-slate-100 antialiased selection:bg-gold-500 selection:text-plum-950 relative">
      {/* Interactive Custom Mouse Cursor */}
      <CustomCursor />

      {/* Floating Glass Navigation Pill */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Content Sections */}
      <main>
        <Hero />
        
        <MarqueeTicker />

        <About />

        <ResearchSpotlight />

        <ProjectExplorer onSelectProject={(project) => setSelectedProject(project)} />

        <Skills />

        <EducationTimeline />

        <Achievements />

        <Leadership />

        <Contact />
      </main>

      {/* Site Footer */}
      <Footer />

      {/* Project Detail Inspection Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
