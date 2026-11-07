import React, { useState } from 'react';
import { Mail, ArrowUpRight, Send, User, Tag, PenLine } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formSent, setFormSent] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const subjectLine = formData.subject.trim() || `Portfolio Inquiry from ${formData.name}`;
    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setFormSent(true);
    setTimeout(() => setFormSent(false), 5000);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Subtle Ambient Decorative Ribbons in Corners (Matching Reference Image) */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-plum-600/10 via-gold-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-plum-800/15 via-gold-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Social Pills */}
          <div className="lg:col-span-5 flex flex-col justify-center pt-2 sm:pt-6">
            
            {/* Header: GET IN TOUCH ——— */}
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-xs font-bold tracking-widest text-slate-800 dark:text-slate-200 uppercase">
                GET IN TOUCH
              </span>
              <span className="w-12 h-[1.5px] bg-slate-800 dark:bg-slate-300"></span>
            </div>

            {/* Main Display Headline */}
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-plum-950 dark:text-white tracking-tight leading-[1.08] mb-1">
              Let’s build<br />
              something<br />
              meaningful.
            </h2>

            {/* Golden-Yellow Curved Underline Stroke */}
            <div className="mb-10 sm:mb-12">
              <svg
                className="w-44 sm:w-56 h-4 text-gold-500"
                viewBox="0 0 220 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 4 8 C 55 14, 155 15, 214 5"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Row of 3 Pill Action Cards: EMAIL, GITHUB, LINKEDIN */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Email Pill */}
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white dark:bg-plum-900/80 border border-plum-900/10 dark:border-white/10 text-slate-800 dark:text-slate-100 hover:text-gold-600 dark:hover:text-gold-400 hover:border-gold-400 shadow-sm hover:shadow transition-all group font-mono text-xs font-bold uppercase tracking-wider"
              >
                <Mail className="w-4 h-4 text-slate-700 dark:text-slate-200 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors" />
                <span>EMAIL</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* GitHub Pill */}
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white dark:bg-plum-900/80 border border-plum-900/10 dark:border-white/10 text-slate-800 dark:text-slate-100 hover:text-gold-600 dark:hover:text-gold-400 hover:border-gold-400 shadow-sm hover:shadow transition-all group font-mono text-xs font-bold uppercase tracking-wider"
              >
                <GithubIcon className="w-4 h-4 text-slate-700 dark:text-slate-200 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors" />
                <span>GITHUB</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* LinkedIn Pill */}
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white dark:bg-plum-900/80 border border-plum-900/10 dark:border-white/10 text-slate-800 dark:text-slate-100 hover:text-gold-600 dark:hover:text-gold-400 hover:border-gold-400 shadow-sm hover:shadow transition-all group font-mono text-xs font-bold uppercase tracking-wider"
              >
                <LinkedinIcon className="w-4 h-4 text-slate-700 dark:text-slate-200 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors" />
                <span>LINKEDIN</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

          </div>

          {/* Right Column: Clean Send a Message Form Card */}
          <div className="lg:col-span-7">
            <div className="rounded-[28px] border border-plum-900/10 dark:border-white/10 bg-white dark:bg-plum-950 p-6 sm:p-9 md:p-10 shadow-card">
              
              {/* Form Card Header */}
              <div className="flex items-center gap-3 mb-6">
                <Send className="w-5 h-5 -rotate-12 text-plum-900 dark:text-gold-400" />
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-plum-950 dark:text-white">
                  Send a Message
                </h3>
              </div>

              {/* The Form */}
              <form onSubmit={handleFormSubmit} className="space-y-4">
                
                {/* 2-Column: Your Name & Your Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1.5 font-sans">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-plum-900/15 dark:border-white/15 bg-slate-50/60 dark:bg-plum-900/30 text-sm font-sans text-plum-950 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-gold-500 focus:bg-white dark:focus:bg-plum-900/60 transition-all"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1.5 font-sans">
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-plum-900/15 dark:border-white/15 bg-slate-50/60 dark:bg-plum-900/30 text-sm font-sans text-plum-950 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-gold-500 focus:bg-white dark:focus:bg-plum-900/60 transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1.5 font-sans">
                    Subject
                  </label>
                  <div className="relative">
                    <Tag className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500" />
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g., Research Collaboration, Internship, Project Idea"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-plum-900/15 dark:border-white/15 bg-slate-50/60 dark:bg-plum-900/30 text-sm font-sans text-plum-950 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-gold-500 focus:bg-white dark:focus:bg-plum-900/60 transition-all"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1.5 font-sans">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <PenLine className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400 dark:text-slate-500" />
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message here..."
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-plum-900/15 dark:border-white/15 bg-slate-50/60 dark:bg-plum-900/30 text-sm font-sans text-plum-950 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-gold-500 focus:bg-white dark:focus:bg-plum-900/60 transition-all resize-none"
                    ></textarea>
                  </div>
                </div>

                {/* Send Message Button (Full-width deep plum pill button) */}
                <button
                  type="submit"
                  className="w-full mt-2 py-3.5 px-6 rounded-xl bg-[#2D0A28] hover:bg-[#420E3B] text-white dark:bg-gold-500 dark:hover:bg-gold-400 dark:text-plum-950 font-sans font-bold text-sm tracking-wide transition-all shadow-md hover:shadow-gold-glow flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 -rotate-12" />
                  <span>Send Message</span>
                </button>

                {formSent && (
                  <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-700 text-xs font-mono text-emerald-800 dark:text-emerald-300 text-center font-bold">
                    ✓ Opening your mail client with your prefilled message!
                  </div>
                )}
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
