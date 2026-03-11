import SectionHeading from "./ui/SectionHeading";
import SectionReveal from "./SectionReveal";
import { highlights } from "@/data/portfolio";

const colorMap = {
  brand: {
    bg: "bg-brand-600/30",
    border: "border-brand-500/40",
    icon: "text-brand-400",
    ring: "group-hover:bg-brand-500/30",
  },
  teal: {
    bg: "bg-teal-900/40",
    border: "border-teal-600/40",
    icon: "text-teal-400",
    ring: "group-hover:bg-teal-800/50",
  },
  sky: {
    bg: "bg-sky-900/40",
    border: "border-sky-600/40",
    icon: "text-sky-400",
    ring: "group-hover:bg-sky-800/50",
  },
  rose: {
    bg: "bg-rose-900/40",
    border: "border-rose-600/40",
    icon: "text-rose-400",
    ring: "group-hover:bg-rose-800/50",
  },
  gold: {
    bg: "bg-amber-900/40",
    border: "border-amber-600/40",
    icon: "text-amber-400",
    ring: "group-hover:bg-amber-800/50",
  },
  mint: {
    bg: "bg-emerald-900/40",
    border: "border-emerald-600/40",
    icon: "text-emerald-400",
    ring: "group-hover:bg-emerald-800/50",
  },
};

function HighlightCard({ icon, color, title, text, delay }) {
  const c = colorMap[color] ?? colorMap.brand;
  return (
    <SectionReveal direction="random" delay={delay}>
      <div
        className={`group bg-brand-800 rounded-2xl p-6 border ${c.border} shadow-sm
        hover:shadow-xl hover:-translate-y-1 hover:border-opacity-80
        transition-all duration-300 h-full flex flex-col`}
      >
        {/* Icon */}
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4
          ${c.bg} border ${c.border} ${c.ring} transition-colors`}
        >
          <i className={`${icon} ${c.icon} text-lg`} />
        </div>
        <h3 className="font-semibold text-slate-100 mb-2 text-[0.97rem]">
          {title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed flex-1">{text}</p>
      </div>
    </SectionReveal>
  );
}

export default function KeyHighlights() {
  return (
    <section className="py-20 bg-transparent border-y border-brand-700/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <SectionHeading eyebrow="Career Snapshot" title="Key Highlights" />
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {highlights.map((h, i) => (
            <HighlightCard key={i} {...h} delay={`delay-${(i % 3) + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
