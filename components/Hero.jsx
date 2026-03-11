import Image from "next/image";
import SectionReveal from "./SectionReveal";
import Typewriter from "./Typewriter";
import { profile } from "@/data/portfolio";

/* ── small stat card ─────────────────────────────── */
function MetricCard({ value, label }) {
  return (
    <div
      className="bg-brand-800 rounded-2xl p-4 text-center border border-brand-600/40
      shadow-sm hover:-translate-y-0.5 hover:border-brand-400 hover:shadow-md
      transition-all duration-200 cursor-default"
    >
      <div className="font-serif text-2xl font-bold text-brand-400">
        {value}
      </div>
      <div className="text-[0.68rem] text-slate-400 uppercase tracking-wider font-medium mt-0.5">
        {label}
      </div>
    </div>
  );
}

/* ── info chip ───────────────────────────────────── */
function InfoChip({ icon, text }) {
  return (
    <div
      className="flex items-center gap-2 bg-brand-800 border border-brand-600/40 rounded-full
      px-4 py-1.5 text-sm text-slate-300 font-medium shadow-sm"
    >
      <i className={`${icon} text-brand-400 text-xs`} />
      {text}
    </div>
  );
}

/* ── about stat item ─────────────────────────────── */
function AboutStat({ icon, value, label }) {
  return (
    <div
      className="flex items-center gap-4 bg-brand-800 rounded-2xl p-4 border border-brand-600/40
      shadow-sm hover:translate-x-1 hover:border-brand-400/60 hover:shadow-md
      transition-all duration-200 group cursor-default"
    >
      <div
        className="w-11 h-11 rounded-[14px] flex items-center justify-center flex-shrink-0
        bg-brand-700/60 border border-brand-500/40 text-brand-400
        group-hover:bg-brand-600/50 group-hover:scale-105 transition-all"
      >
        <i className={icon} />
      </div>
      <div>
        <div className="font-serif font-bold text-xl text-slate-100">
          {value}
        </div>
        <div className="text-sm text-slate-400 leading-tight">{label}</div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <>
      {/* ══ HERO ══════════════════════════════════════════════════════════ */}
      <section
        id="hero"
        className="relative pt-28 pb-20 bg-transparent overflow-hidden"
      >
        {/* BG blobs removed to cleaner Vanta view */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — text */}
            <div>
              <SectionReveal>
                <p className="text-brand-500 text-[0.7rem] font-bold uppercase tracking-[4px] mb-4">
                  Welcome
                </p>
              </SectionReveal>

              <SectionReveal delay="delay-1">
                <h1
                  className="font-serif text-5xl sm:text-6xl lg:text-[4.5rem] font-bold
                  text-slate-100 leading-[1.05] mb-5"
                >
                  Naing{" "}
                  <span
                    className="bg-gradient-to-br from-brand-500 to-brand-700
                    bg-clip-text text-transparent"
                  >
                    Naing Maw
                  </span>
                </h1>
              </SectionReveal>

              <SectionReveal delay="delay-2">
                <p
                  className="text-slate-400 text-sm font-medium uppercase tracking-[2.5px] mb-6
                  pb-6 border-b border-brand-700/60 min-h-[3.5rem]"
                >
                  <Typewriter
                    text={profile.title.toUpperCase()}
                    delay={120}
                    pause={3000}
                  />
                </p>
              </SectionReveal>

              <SectionReveal delay="delay-3">
                <p className="text-slate-300 text-[1.02rem] leading-relaxed mb-8 max-w-[520px]">
                  {profile.lead}
                </p>
              </SectionReveal>

              {/* CTA buttons */}
              <SectionReveal delay="delay-4">
                <div className="flex flex-wrap gap-3 mb-10">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600
                      text-white px-6 py-3 rounded-full font-medium text-sm
                      transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-500/30"
                  >
                    <span>✉</span> Contact Me
                  </a>
                  <a
                    href="#experience"
                    className="inline-flex items-center gap-2 border-2 border-brand-500
                      text-brand-400 hover:bg-brand-800 px-6 py-3 rounded-full font-medium text-sm
                      transition-all hover:-translate-y-0.5"
                  >
                    View Experience
                  </a>
                  <a
                    href={profile.cvUrl}
                    download
                    className="inline-flex items-center gap-2 bg-brand-800 border border-brand-600/50
                      text-slate-300 hover:bg-brand-700 px-6 py-3 rounded-full font-medium text-sm
                      transition-all hover:-translate-y-0.5"
                  >
                    ↓ Download CV
                  </a>
                </div>
              </SectionReveal>

              {/* Metrics */}
              <SectionReveal delay="delay-5">
                <div className="grid grid-cols-3 gap-3">
                  {profile.metrics.map((m, i) => (
                    <MetricCard key={i} value={m.value} label={m.label} />
                  ))}
                </div>
              </SectionReveal>
            </div>

            {/* Right — photo */}
            <SectionReveal
              direction="right"
              className="flex flex-col items-center"
            >
              {/* Ring wrapper */}
              <div
                className="photo-ring p-[4px] rounded-full w-[280px] h-[280px] sm:w-[320px] sm:h-[320px]
                hover:scale-105 transition-transform duration-500"
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-brand-700 p-[5px]">
                  <Image
                    src={profile.photo}
                    alt={profile.name}
                    width={320}
                    height={320}
                    className="w-full h-full rounded-full object-cover object-center scale-110"
                    priority
                  />
                </div>
              </div>

              {/* Info chips */}
              <div className="mt-5 flex flex-col gap-2 items-center">
                {profile.infoChips.map((chip, i) => (
                  <InfoChip key={i} icon={chip.icon} text={chip.text} />
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ══ ABOUT ════════════════════════════════════════════════════════ */}
      <section id="about" className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <SectionReveal>
            <div className="text-center mb-14">
              <span
                className="inline-block text-[0.7rem] font-semibold uppercase tracking-[3.5px]
                text-brand-400 bg-brand-700/40 border border-brand-500/40 px-3.5 py-1.5 rounded-full mb-4"
              >
                Who I Am
              </span>
              <div className="relative inline-block">
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-slate-100 pb-4 block">
                  About Me
                </h2>
              </div>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Bio */}
            <div className="lg:col-span-3">
              <SectionReveal delay="delay-1">
                <div className="flex flex-wrap gap-2 mb-7">
                  {profile.chips.map((c, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-2 text-sm text-slate-300
                        bg-brand-700/40 border border-brand-600/40 rounded-full px-3.5 py-1.5 font-medium"
                    >
                      <i className={`${c.icon} text-brand-400 text-xs`} />
                      {c.text}
                    </span>
                  ))}
                </div>
              </SectionReveal>

              {profile.bio.map((para, i) => (
                <SectionReveal key={i} delay={`delay-${i + 2}`} direction="random">
                  <p className="text-slate-300 leading-relaxed text-[0.97rem] mb-5">
                    {para}
                  </p>
                </SectionReveal>
              ))}
            </div>

            {/* Stat cards */}
            <div className="lg:col-span-2 flex flex-col gap-3">
              {profile.statsCards.map((s, i) => (
                <SectionReveal key={i} delay={`delay-${i + 1}`} direction="random">
                  <AboutStat icon={s.icon} value={s.value} label={s.label} />
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
