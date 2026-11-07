import React, { useState } from 'react';
import { Mail, Github, Linkedin, ArrowUpRight, Copy, Check, Send, MapPin, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSent, setFormSent] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personal.email}?subject=Collaboration Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nSender Email: ' + formData.email)}`;
    window.location.href = mailtoUrl;
    setFormSent(true);
    setTimeout(() => setFormSent(false), 4000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 max-w-6xl mx-auto px-4 sm:px-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 border-b border-plum-900/10 dark:border-white/10 mb-12 sm:mb-16">
        <div>
          <div className="font-mono text-xs font-bold tracking-widest text-gold-600 dark:text-gold-400 uppercase mb-2">
            08 / GET IN TOUCH & RESEARCH DIALOGUE
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-plum-950 dark:text-white tracking-tight">
            CONTACT & COLLABORATION
          </h2>
        </div>
        <div className="font-mono text-xs text-slate-500 dark:text-slate-400 mt-2 sm:mt-0">
          [08 / 08] • OPEN FOR RESEARCH
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        {/* Left Column: Direct Inquiries & Socials */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            <h3 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-plum-950 dark:text-white leading-[1.1] mb-6">
              Let's engineer something meaningful together.
            </h3>
            <p className="font-sans text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-8 max-w-lg">
              I am open to machine learning research fellowships, SE4AI collaborations, scientific publications, and ambitious technical startup initiatives.
            </p>

            {/* Email Card with Copy Trigger */}
            <div className="p-5 rounded-2xl border-2 border-plum-900/15 dark:border-gold-500/30 bg-white dark:bg-plum-950 shadow-card mb-6">
              <span className="font-mono text-xs text-gold-600 dark:text-gold-400 uppercase tracking-widest font-bold block mb-2">
                Primary Academic & Research Contact
              </span>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <a
                  href={`mailto:${personal.email}`}
                  className="font-display font-bold text-lg sm:text-xl text-plum-950 dark:text-white hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
                >
                  {personal.email}
                </a>
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-plum-900/15 dark:border-white/15 bg-slate-50 dark:bg-plum-900/50 text-xs font-mono font-medium hover:border-gold-500 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Quick Details */}
            <div className="flex flex-col gap-2 font-mono text-xs text-slate-600 dark:text-slate-300 mb-8">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold-500" />
                <span>Location: Kerala, India (Wayanad / Calicut)</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-gold-500" />
                <span>Affiliation: Amal Jyothi College of Engineering • NIT Calicut</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-plum-900/10 dark:border-white/10">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-plum-900/15 dark:border-white/15 bg-white dark:bg-plum-900 text-xs font-mono font-bold text-plum-950 dark:text-white hover:border-gold-500 hover:text-gold-600 transition-all shadow-sm"
            >
              <Github className="w-4 h-4" />
              <span>GITHUB</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-plum-900/15 dark:border-white/15 bg-white dark:bg-plum-900 text-xs font-mono font-bold text-plum-950 dark:text-white hover:border-gold-500 hover:text-gold-600 transition-all shadow-sm"
            >
              <Linkedin className="w-4 h-4" />
              <span>LINKEDIN</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>
          </div>
        </div>

        {/* Right Column: Direct Message Form */}
        <div className="lg:col-span-6">
          <form
            onSubmit={handleFormSubmit}
            className="p-6 sm:p-8 rounded-3xl border border-plum-900/15 dark:border-white/10 bg-white dark:bg-plum-950 shadow-card flex flex-col gap-4"
          >
            <h4 className="font-display font-bold text-xl text-plum-950 dark:text-white">
              Send a Direct Message
            </h4>
            <p className="font-sans text-xs text-slate-600 dark:text-slate-400 mb-2">
              Have a research inquiry, speaking invitation, or project proposal? Fill out the details below.
            </p>

            <div>
              <label className="font-mono text-xs text-slate-600 dark:text-slate-300 font-semibold block mb-1">
                YOUR NAME
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Dr. / Prof. / Engineer..."
                className="w-full px-4 py-2.5 rounded-xl border border-plum-900/15 dark:border-white/15 bg-slate-50 dark:bg-plum-900/40 text-sm font-sans text-plum-950 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-gold-500"
              />
            </div>

            <div>
              <label className="font-mono text-xs text-slate-600 dark:text-slate-300 font-semibold block mb-1">
                YOUR EMAIL
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="colleague@institution.edu"
                className="w-full px-4 py-2.5 rounded-xl border border-plum-900/15 dark:border-white/15 bg-slate-50 dark:bg-plum-900/40 text-sm font-sans text-plum-950 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-gold-500"
              />
            </div>

            <div>
              <label className="font-mono text-xs text-slate-600 dark:text-slate-300 font-semibold block mb-1">
                MESSAGE / PROPOSAL
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Briefly outline your research collaboration or inquiry..."
                className="w-full px-4 py-2.5 rounded-xl border border-plum-900/15 dark:border-white/15 bg-slate-50 dark:bg-plum-900/40 text-sm font-sans text-plum-950 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-gold-500 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-plum-800 hover:bg-plum-900 text-white dark:bg-gold-500 dark:hover:bg-gold-400 dark:text-plum-950 font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-sm hover:shadow-gold-glow"
            >
              <span>Dispatch Message</span>
              <Send className="w-3.5 h-3.5" />
            </button>

            {formSent && (
              <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-700 text-xs font-mono text-emerald-800 dark:text-emerald-300 text-center font-bold">
                ✓ Opening your default mail client with your prefilled message!
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
