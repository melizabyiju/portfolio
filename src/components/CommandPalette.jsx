import React, { useState, useEffect, useRef } from 'react';
import { Search, Compass, Terminal, Moon, Sun, Mail, ArrowRight, Check, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export default function CommandPalette({
  isOpen,
  onClose,
  toggleTheme,
  theme,
  openTerminal,
  onSelectProject
}) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);

  const { personal, projects } = portfolioData;

  const actions = [
    {
      id: 'about',
      name: 'Go to About Section',
      group: 'Navigation',
      icon: <Compass className="w-4 h-4 text-gold-500" />,
      perform: () => {
        window.location.hash = '#about';
        onClose();
      }
    },
    {
      id: 'projects',
      name: 'Go to Engineering Projects',
      group: 'Navigation',
      icon: <Compass className="w-4 h-4 text-gold-500" />,
      perform: () => {
        window.location.hash = '#projects';
        onClose();
      }
    },
    {
      id: 'research',
      name: 'Go to SE4AI Research Spotlight',
      group: 'Navigation',
      icon: <Compass className="w-4 h-4 text-gold-500" />,
      perform: () => {
        window.location.hash = '#research';
        onClose();
      }
    },
    {
      id: 'skills',
      name: 'Go to Technical Skills',
      group: 'Navigation',
      icon: <Compass className="w-4 h-4 text-gold-500" />,
      perform: () => {
        window.location.hash = '#skills';
        onClose();
      }
    },
    {
      id: 'education',
      name: 'Go to Education & Honors',
      group: 'Navigation',
      icon: <Compass className="w-4 h-4 text-gold-500" />,
      perform: () => {
        window.location.hash = '#education';
        onClose();
      }
    },
    {
      id: 'achievements',
      name: 'Go to Achievements & Hackathons',
      group: 'Navigation',
      icon: <Compass className="w-4 h-4 text-gold-500" />,
      perform: () => {
        window.location.hash = '#achievements';
        onClose();
      }
    },
    {
      id: 'leadership',
      name: 'Go to Leadership & Community',
      group: 'Navigation',
      icon: <Compass className="w-4 h-4 text-gold-500" />,
      perform: () => {
        window.location.hash = '#leadership';
        onClose();
      }
    },
    {
      id: 'contact',
      name: 'Go to Contact Section',
      group: 'Navigation',
      icon: <Mail className="w-4 h-4 text-gold-500" />,
      perform: () => {
        window.location.hash = '#contact';
        onClose();
      }
    },
    {
      id: 'terminal',
      name: 'Launch Developer Terminal CLI',
      group: 'Interactive Tools',
      icon: <Terminal className="w-4 h-4 text-gold-500" />,
      perform: () => {
        onClose();
        openTerminal();
      }
    },
    {
      id: 'theme',
      name: `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`,
      group: 'Preferences',
      icon: theme === 'dark' ? <Sun className="w-4 h-4 text-gold-400" /> : <Moon className="w-4 h-4 text-plum-600" />,
      perform: () => {
        toggleTheme();
        onClose();
      }
    },
    {
      id: 'email',
      name: 'Copy Meliza’s Email (melizabyiju@gmail.com)',
      group: 'Actions',
      icon: <Mail className="w-4 h-4 text-gold-500" />,
      perform: () => {
        navigator.clipboard.writeText(personal.email);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
          onClose();
        }, 1200);
      }
    },
    {
      id: 'github',
      name: 'Open GitHub Profile (@melizabyiju)',
      group: 'Social',
      icon: <GithubIcon className="w-4 h-4 text-gold-500" />,
      perform: () => {
        window.open(personal.github, '_blank');
        onClose();
      }
    },
    {
      id: 'linkedin',
      name: 'Open LinkedIn Profile',
      group: 'Social',
      icon: <LinkedinIcon className="w-4 h-4 text-gold-500" />,
      perform: () => {
        window.open(personal.linkedin, '_blank');
        onClose();
      }
    },
    ...projects.map((p) => ({
      id: `project-${p.id}`,
      name: `Inspect Project: ${p.title} — ${p.subtitle}`,
      group: 'Projects',
      icon: <Sparkles className="w-4 h-4 text-gold-500" />,
      perform: () => {
        onClose();
        onSelectProject(p);
      }
    }))
  ];

  const filteredActions = actions.filter((action) =>
    action.name.toLowerCase().includes(query.toLowerCase()) ||
    action.group.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredActions.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredActions.length) % filteredActions.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredActions[selectedIndex]) {
          filteredActions[selectedIndex].perform();
        }
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredActions, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-plum-950/70 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl rounded-2xl bg-white dark:bg-plum-950 border border-plum-900/20 dark:border-gold-500/30 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150 flex flex-col max-h-[75vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-plum-900/10 dark:border-white/10">
          <Search className="w-4 h-4 text-gold-600 dark:text-gold-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command or jump to a section..."
            className="flex-1 bg-transparent text-sm font-mono text-plum-950 dark:text-white placeholder:text-slate-400 focus:outline-none"
          />
          {copied ? (
            <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-bold">
              <Check className="w-3.5 h-3.5" /> Copied!
            </span>
          ) : (
            <kbd className="text-[10px] bg-slate-100 dark:bg-plum-900 px-1.5 py-0.5 rounded text-slate-500 dark:text-slate-400 font-mono">
              ESC
            </kbd>
          )}
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-2 divide-y divide-transparent">
          {filteredActions.length === 0 ? (
            <div className="py-8 text-center text-xs font-mono text-slate-500">
              No matching commands or sections found.
            </div>
          ) : (
            filteredActions.map((action, idx) => (
              <button
                key={action.id}
                onClick={action.perform}
                onMouseEnter={() => setSelectedIndex(idx)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-xs font-mono transition-colors ${
                  selectedIndex === idx
                    ? 'bg-gold-50 dark:bg-plum-900 text-plum-950 dark:text-gold-300 font-semibold'
                    : 'text-slate-700 dark:text-ice-200 hover:bg-slate-50 dark:hover:bg-plum-900/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  {action.icon}
                  <span>{action.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-widest font-normal">
                    {action.group}
                  </span>
                  <ArrowRight className={`w-3.5 h-3.5 text-gold-500 ${selectedIndex === idx ? 'opacity-100' : 'opacity-0'}`} />
                </div>
              </button>
            ))
          )}
        </div>

        {/* Footer Hint */}
        <div className="px-4 py-2 bg-slate-50 dark:bg-plum-900/40 border-t border-plum-900/10 dark:border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
          <span>Navigate with ↑ ↓ and Press Enter</span>
          <span className="text-gold-600 dark:text-gold-400">Ctrl+K / ⌘K</span>
        </div>
      </div>
    </div>
  );
}
