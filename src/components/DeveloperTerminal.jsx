import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, Minimize2, Maximize2, CornerDownLeft } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function DeveloperTerminal({ isOpen, onClose, toggleTheme, theme }) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: 'MelizaOS Research Terminal [Version 2.4.0-se4ai]\nType "help" for a list of available commands or "projects" to view engineering systems.'
    }
  ]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyPointer, setHistoryPointer] = useState(-1);
  const inputRef = useRef(null);
  const terminalEndRef = useRef(null);

  const { personal, stats, research, projects, skills, education, achievements } = portfolioData;

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdStr) => {
    const raw = cmdStr.trim();
    if (!raw) return;

    // Add to history
    setCommandHistory((prev) => [...prev, raw]);
    setHistoryPointer(-1);

    const parts = raw.split(' ');
    const cmd = parts[0].toLowerCase();
    const arg = parts.slice(1).join(' ').toLowerCase();

    const output = [];

    switch (cmd) {
      case 'help':
        output.push(
          'AVAILABLE COMMANDS:\n' +
          '  bio / whoami   - View Meliza’s academic & research background\n' +
          '  research       - Inspect SE4AI taxonomy & NIT Calicut residency\n' +
          '  projects       - List active engineering projects & architecture\n' +
          '  skills         - Enumerate empirical ML, SE & systems stack\n' +
          '  education      - View 10.0 CGPA & academic standing\n' +
          '  awards         - Review national hackathon awards & grants\n' +
          '  theme [light|dark] - Switch portfolio visual theme\n' +
          '  contact        - Display communication channels & socials\n' +
          '  clear          - Clear terminal buffer\n' +
          '  sudo           - Administrative escalation (Easter egg)\n' +
          '  exit           - Close terminal interface'
        );
        break;

      case 'bio':
      case 'whoami':
        output.push(
          `NAME: ${personal.name} (${personal.monogram})\n` +
          `ROLE: ${personal.title}\n` +
          `ACADEMICS: ${personal.cgpa} (${personal.rank}) at ${personal.institution}\n` +
          `LAB: ${personal.researchLab}\n` +
          `LOCATION: ${personal.location}\n` +
          `TAGLINE: "${personal.tagline}"`
        );
        break;

      case 'research':
        output.push(
          `=== SE4AI RESEARCH AT ${research.featured.institution.toUpperCase()} ===\n` +
          `TITLE: ${research.featured.title}\n` +
          `MENTOR: ${research.featured.mentor} (${research.featured.period})\n` +
          `DATASET: 2,500+ classified ML requirements across 5 sustainability dimensions\n` +
          `HIGHLIGHTS:\n` +
          research.featured.highlights.map((h) => `  * ${h}`).join('\n') +
          `\nFELLOWSHIP: ${research.fellowship.title} (${research.fellowship.role})`
        );
        break;

      case 'projects':
        output.push(
          '=== SELECTED ENGINEERING SYSTEMS ===\n' +
          projects.map((p) =>
            `[${p.index}] ${p.title} (${p.status})\n` +
            `    Domain: ${p.domain}\n` +
            `    Badge:  ${p.featuredBadge || 'Research Project'}\n` +
            `    Stack:  ${p.techStack.join(', ')}`
          ).join('\n\n')
        );
        break;

      case 'skills':
        output.push(
          '=== TECHNICAL ARSENAL ===\n' +
          Object.entries(skills).map(([cat, list]) =>
            `${cat.toUpperCase()}:\n` +
            list.map((s) => `  • ${s.name} [${s.level}]`).join('\n')
          ).join('\n\n')
        );
        break;

      case 'education':
        output.push(
          '=== ACADEMIC EXCELLENCE ===\n' +
          education.map((e) =>
            `${e.degree}\n` +
            `  Institution: ${e.institution} (${e.period})\n` +
            `  Grade:       ${e.grade} [${e.status}]\n` +
            `  Board:       ${e.board}`
          ).join('\n\n')
        );
        break;

      case 'awards':
        output.push(
          '=== COMPETITIVE HONORS & GRANTS ===\n' +
          achievements.map((a) =>
            `* ${a.title} (${a.year}) [${a.badge}]\n` +
            `  ${a.org} - ${a.description}`
          ).join('\n\n')
        );
        break;

      case 'contact':
        output.push(
          `EMAIL:    ${personal.email}\n` +
          `GITHUB:   ${personal.github}\n` +
          `LINKEDIN: ${personal.linkedin}\n` +
          `STATUS:   ${personal.statusText}`
        );
        break;

      case 'theme':
        if (arg === 'light' || arg === 'dark') {
          if (arg !== theme) toggleTheme();
          output.push(`Visual theme changed to ${arg.toUpperCase()} mode.`);
        } else {
          toggleTheme();
          output.push(`Toggled theme to ${theme === 'dark' ? 'LIGHT' : 'DARK'} mode.`);
        }
        break;

      case 'clear':
        setHistory([]);
        return;

      case 'sudo':
        output.push('meliza is not in the sudoers file. This incident will be reported to Dr. Pournami P. N. ;)');
        break;

      case 'exit':
      case 'quit':
        onClose();
        return;

      default:
        output.push(`Command not recognized: "${cmd}". Type "help" to display supported commands.`);
        break;
    }

    setHistory((prev) => [
      ...prev,
      { type: 'input', text: raw },
      ...output.map((t) => ({ type: 'output', text: t }))
    ]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
      setInputVal('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIdx = historyPointer === -1 ? commandHistory.length - 1 : Math.max(0, historyPointer - 1);
      setHistoryPointer(nextIdx);
      setInputVal(commandHistory[nextIdx]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyPointer === -1) return;
      const nextIdx = historyPointer + 1;
      if (nextIdx >= commandHistory.length) {
        setHistoryPointer(-1);
        setInputVal('');
      } else {
        setHistoryPointer(nextIdx);
        setInputVal(commandHistory[nextIdx]);
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-plum-950/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl h-[82vh] rounded-2xl bg-[#120512] text-ice-100 border border-gold-500/30 shadow-2xl flex flex-col overflow-hidden font-mono text-xs sm:text-sm animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header Bar */}
        <div className="bg-[#1C071C] px-4 py-2.5 border-b border-plum-900/60 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 cursor-pointer" onClick={onClose}></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
            <span className="ml-2 font-mono text-xs text-gold-400 font-semibold flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5" />
              <span>meliza@nitc-workstation:~</span>
            </span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <span className="text-[10px] text-slate-500 hidden sm:inline">bash (interactive)</span>
            <button onClick={onClose} className="p-1 hover:text-white" aria-label="Close terminal">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div
          className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-3 terminal-crt"
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((item, idx) => (
            <div key={idx}>
              {item.type === 'input' && (
                <div className="flex items-center gap-2 text-gold-400 font-bold">
                  <span>meliza@nitc:~$</span>
                  <span className="text-white">{item.text}</span>
                </div>
              )}
              {item.type === 'output' && (
                <pre className="whitespace-pre-wrap text-ice-200 font-mono text-xs sm:text-[13px] leading-relaxed pl-2 border-l border-gold-500/30">
                  {item.text}
                </pre>
              )}
              {item.type === 'system' && (
                <div className="text-gold-400/90 text-xs font-mono p-3 rounded-lg bg-plum-900/40 border border-gold-500/20 whitespace-pre-wrap">
                  {item.text}
                </div>
              )}
            </div>
          ))}

          {/* Active Input Line */}
          <div className="flex items-center gap-2 pt-1 text-gold-400 font-bold">
            <span>meliza@nitc:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-white font-mono text-xs sm:text-[13px] focus:outline-none caret-gold-400"
              autoFocus
              spellCheck={false}
              autoComplete="off"
            />
          </div>
          <div ref={terminalEndRef} />
        </div>

        {/* Terminal Footer Bar */}
        <div className="bg-[#180518] px-4 py-2 border-t border-plum-900/60 flex items-center justify-between text-[11px] text-slate-400 font-mono">
          <div className="flex items-center gap-3">
            <span>Type <code className="text-gold-400">help</code> for commands</span>
            <span>•</span>
            <span><code className="text-gold-400">clear</code> to reset</span>
          </div>
          <span className="text-gold-400/80">Press ESC to exit</span>
        </div>
      </div>
    </div>
  );
}
