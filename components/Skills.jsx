'use client';

import { useState } from 'react';
import SectionHeading from './ui/SectionHeading';
import SectionReveal from './SectionReveal';
import { skills } from '@/data/portfolio';

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);
  const currentCategory = skills[activeTab];

  return (
    <section id="skills" className="py-12 bg-transparent relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionReveal>
          <SectionHeading eyebrow="Expertise" title="Skills & Competencies" />
        </SectionReveal>

        {/* --- TABS --- */}
        <div className="mt-8 overflow-x-auto pb-2 scrollbar-hide">
          <div className="flex items-center gap-2 min-w-max">
            {skills.map((skill, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300
                  ${activeTab === index 
                    ? 'bg-brand-500/10 border-brand-500/50 text-brand-400 shadow-[0_0_15px_rgba(37,76,108,0.1)]' 
                    : 'bg-brand-800/20 border-brand-700/30 text-slate-400 hover:border-brand-600/50 hover:text-slate-200'
                  }`}
              >
                <i className={`${skill.icon} text-[10px] ${activeTab === index ? 'text-brand-400' : 'text-slate-500'}`} />
                <span className="text-[11px] font-bold tracking-wider uppercase">{skill.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* --- MAIN CONTENT CARD --- */}
        <SectionReveal key={activeTab}>
          <div className="mt-6 bg-[#0a0f18] border border-brand-700/30 rounded-[1.2rem] overflow-hidden shadow-2xl relative min-h-[220px]">
            {/* Dot Grid Background */}
            <div 
              className="absolute inset-0 opacity-[0.25]"
              style={{
                backgroundImage: 'radial-gradient(rgba(37, 76, 108, 0.15) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}
            />

            <div className="relative p-5 md:p-7">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-brand-500/5 animate-pulse" />
                  <i className={`${currentCategory.icon} text-lg text-brand-400 relative z-10`} />
                </div>
                <div>
                  <h3 className="text-brand-400 font-bold uppercase tracking-[2px] text-[10px] mb-0.5">
                    {currentCategory.title}
                  </h3>
                  <p className="text-slate-500 text-[10px] font-medium uppercase tracking-wider">
                    {currentCategory.items.length} {currentCategory.type === 'lang' ? 'languages' : 'specializations'}
                  </p>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="flex flex-wrap gap-2.5">
                {currentCategory.type === 'lang' ? (
                  currentCategory.items.map((item, i) => (
                    <div 
                      key={i}
                      className="group bg-[#111927] border border-brand-700/20 hover:border-brand-500/40 rounded-lg p-2.5 flex items-center gap-3 transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <div className="w-7 h-7 rounded bg-brand-900 border border-brand-700/40 flex items-center justify-center text-brand-400 group-hover:scale-105 transition-transform">
                         <i className="fas fa-language text-[10px]" />
                      </div>
                      <div className="pr-2">
                        <div className="text-slate-200 font-bold text-[11px] mb-0.5 leading-none">{item.lang}</div>
                        <div className="text-brand-500 text-[9px] font-bold uppercase tracking-wider">{item.level}</div>
                      </div>
                    </div>
                  ))
                ) : (
                  currentCategory.items.map((item, i) => (
                    <div 
                      key={i}
                      className="group bg-[#111927] border border-brand-700/20 hover:border-brand-500/40 rounded-lg px-3.5 py-2 flex items-center gap-2.5 transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <div className="w-5 h-5 rounded bg-brand-900 border border-brand-700/40 flex items-center justify-center text-brand-400/70 group-hover:text-brand-400 transition-colors">
                        <i className="fas fa-check-circle text-[9px] opacity-50 group-hover:opacity-100" />
                      </div>
                      <span className="text-slate-300 font-medium text-[11px] whitespace-nowrap">{item}</span>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Glowing Corner */}
            <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-brand-500/10 blur-[80px] rounded-full pointer-events-none" />
          </div>
        </SectionReveal>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
