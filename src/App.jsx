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
import CommandPalette from './components/CommandPalette';
import DeveloperTerminal from './components/DeveloperTerminal';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('meliza_portfolio_theme') || 'light';
  });

  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
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
    localStorage.setItem('meliza_portfolio_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Keyboard shortcut listener for Ctrl+K (Command Palette) and Backtick ` for Terminal
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      // Ctrl+K or Cmd+K
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
      // Backtick or Ctrl+` for terminal
      if (e.ctrlKey && e.key === '`') {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0F030E] text-slate-800 dark:text-slate-100 antialiased selection:bg-gold-500 selection:text-plum-950 relative">
      {/* Interactive Custom Mouse Cursor */}
      <CustomCursor />

      {/* Floating Glass Navigation Pill */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        openCommandPalette={() => setCommandPaletteOpen(true)}
        openTerminal={() => setTerminalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          openTerminal={() => setTerminalOpen(true)}
          openCommandPalette={() => setCommandPaletteOpen(true)}
        />
        
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

      {/* Ctrl+K Command Palette */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        toggleTheme={toggleTheme}
        theme={theme}
        openTerminal={() => setTerminalOpen(true)}
        onSelectProject={(project) => setSelectedProject(project)}
      />

      {/* Interactive Developer Terminal */}
      <DeveloperTerminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        toggleTheme={toggleTheme}
        theme={theme}
      />
    </div>
  );
}
