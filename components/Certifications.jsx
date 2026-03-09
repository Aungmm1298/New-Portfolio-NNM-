import SectionHeading from './ui/SectionHeading';
import SectionReveal from './SectionReveal';
import { certifications } from '@/data/portfolio';

const colorMap = {
  brand: { bg: 'bg-brand-700/40', border: 'border-brand-500/40', icon: 'text-brand-400', accent: 'bg-brand-500', tag: 'bg-brand-700/60 text-brand-300 border-brand-500/50' },
  teal: { bg: 'bg-teal-900/40', border: 'border-teal-600/40', icon: 'text-teal-400', accent: 'bg-teal-500', tag: 'bg-teal-900/60  text-teal-300  border-teal-600/50' },
  rose: { bg: 'bg-rose-900/40', border: 'border-rose-600/40', icon: 'text-rose-400', accent: 'bg-rose-500', tag: 'bg-rose-900/60  text-rose-300  border-rose-600/50' },
};

function CertCard({ cert, delay }) {
  const c = colorMap[cert.color] ?? colorMap.brand;
  return (
    <SectionReveal direction="random" delay={delay}>
      <div className={`group relative bg-brand-800 rounded-2xl border shadow-sm
        hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden
        ${c.border}`}>

        {/* Left accent bar */}
        <div className={`absolute left-0 top-0 bottom-0 w-1 ${c.accent} rounded-l-2xl`} />

        <div className="p-6 pl-7">
          {/* Year + tag */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-[0.68rem] font-bold uppercase tracking-[3px] text-slate-400">
              {cert.year}
            </span>
            <span className={`text-[0.62rem] font-semibold uppercase tracking-[2px]
              border px-2.5 py-0.5 rounded-full ${c.tag}`}>
              {cert.tag}
            </span>
          </div>

          {/* Icon */}
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4
            border ${c.bg} ${c.border} ${c.icon}
            group-hover:scale-105 transition-transform`}>
            <i className={`${cert.icon} text-lg`} />
          </div>

          {/* Title */}
          <h3 className="font-semibold text-slate-100 text-[0.97rem] mb-1 leading-snug">
            {cert.title}
          </h3>

          {/* Issuer */}
          <p className={`text-sm font-medium mb-3 ${c.icon}`}>{cert.issuer}</p>

          {/* Description */}
          <p className="text-slate-400 text-sm leading-relaxed">{cert.desc}</p>
        </div>
      </div>
    </SectionReveal>
  );
}

export default function Certifications() {
  if (!certifications?.length) return null;

  return (
    <section id="certifications" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <SectionHeading eyebrow="Recognition" title="Certifications & Awards" />
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <CertCard key={i} cert={cert} delay={`delay-${(i % 3) + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
