import SectionHeading from './ui/SectionHeading';
import SectionReveal from './SectionReveal';
import { education } from '@/data/portfolio';

function EduCard({ edu, delay }) {
  return (
    <SectionReveal direction="random" delay={delay}>
      <div className={`group relative bg-brand-800 rounded-2xl border shadow-sm
        hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden
        ${edu.active
          ? 'border-brand-500/60 hover:border-brand-400/80'
          : 'border-brand-700/50 hover:border-brand-600/60'}`}>

        {/* Accent stripe */}
        <div className={`h-1 w-full ${edu.active
          ? 'bg-gradient-to-r from-brand-400 via-brand-500 to-teal-500'
          : 'bg-gradient-to-r from-slate-300 to-slate-400'}`} />

        <div className="p-8">
          {/* Background year watermark */}
          <div className="absolute -bottom-2 -right-2 font-serif text-[4.5rem] font-bold
            leading-none select-none pointer-events-none
            text-brand-400/8 group-hover:text-brand-400/15 transition-colors">
            {edu.bgYear}
          </div>

          {/* Icon */}
          <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5
            ${edu.active
              ? 'bg-brand-600/40 border border-brand-500/50 text-brand-400'
              : 'bg-brand-700/50 border border-brand-600/40 text-slate-400'}`}>
            <i className={`${edu.icon} text-xl`} />
          </div>

          {/* Period */}
          <p className="text-[0.7rem] font-semibold uppercase tracking-[3px] text-slate-400 mb-2">
            {edu.period}
          </p>

          {/* School */}
          <h3 className="font-serif text-xl font-semibold text-slate-100 mb-1">
            {edu.school}
          </h3>

          {/* Degree */}
          <p className="text-brand-400 text-sm font-medium mb-4 leading-snug">
            {edu.degree}
          </p>

          {/* Location + status */}
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="text-xs text-slate-400">
              <i className="fas fa-map-marker-alt text-[10px] mr-1.5" />
              {edu.location}
            </span>

            <span className={`text-[0.65rem] font-semibold uppercase tracking-[2px]
              border px-2.5 py-0.5 rounded-full
              ${edu.active
                ? 'text-emerald-400 bg-emerald-900/40 border-emerald-600/50'
                : 'text-slate-400 bg-brand-700/40 border-brand-600/40'}`}>
              {edu.status}
            </span>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}

export default function Education() {
  return (
    <section id="education" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <SectionHeading eyebrow="Academic Background" title="Education" />
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {education.map((edu, i) => (
            <EduCard key={i} edu={edu} delay={`delay-${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
