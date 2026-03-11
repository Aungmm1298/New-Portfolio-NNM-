"use client";
import { useState } from "react";
import SectionHeading from "./ui/SectionHeading";
import Badge from "./ui/Badge";
import SectionReveal from "./SectionReveal";
import { experience } from "@/data/portfolio";

const filters = [
  { key: "all", label: "All Roles" },
  { key: "engineering", label: "Engineering" },
  { key: "business", label: "Business" },
];

function TimelineItem({ job, index, side }) {
  const isLeft = side === "left";
  return (
    <SectionReveal
      direction="random"
      delay={`delay-${(index % 3) + 1}`}
      className={`md:w-[calc(50%-2rem)] flex ${isLeft ? "md:mr-auto" : "md:ml-auto"}`}
    >
      <div
        className="group bg-brand-800 rounded-2xl border border-brand-700/50 shadow-sm
        hover:shadow-xl hover:-translate-y-0.5 hover:border-brand-500/60
        transition-all duration-300 p-6 w-full relative"
      >
        {/* Dot connector (hidden on mobile) */}
        <div
          className={`hidden md:block absolute top-7 w-4 h-4 rounded-full
            bg-brand-900 border-[3px] border-brand-400
            group-hover:border-brand-300 group-hover:scale-110
            transition-all duration-200
            ${isLeft ? "-right-8" : "-left-8"}`}
        />

        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-slate-100 text-[0.97rem] leading-snug mb-1">
              {job.title}
            </h3>
            <p className="text-brand-400 text-sm font-medium">{job.company}</p>
          </div>
          {job.current && (
            <span
              className="flex-shrink-0 inline-flex items-center gap-1 text-[0.65rem]
              font-semibold uppercase tracking-wide text-emerald-700 bg-emerald-50
              border border-emerald-200 px-2.5 py-0.5 rounded-full"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
              Live
            </span>
          )}
        </div>

        {/* Meta */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400 mb-4">
          <span>
            <i className="fas fa-calendar-alt text-[10px] mr-1.5" />
            {job.period}
          </span>
          <span>
            <i className="fas fa-map-marker-alt text-[10px] mr-1.5" />
            {job.location}
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {job.tags.map((t, i) => (
            <span
              key={i}
              className="text-[0.65rem] font-medium text-slate-500 bg-slate-100
                border border-slate-200 rounded-full px-2.5 py-0.5"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}

export default function Experience() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? experience
      : experience.filter((e) => e.category === filter);

  return (
    <section id="experience" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <SectionHeading eyebrow="Career Path" title="Work Experience" />
        </SectionReveal>

        {/* Filter pills */}
        <SectionReveal delay="delay-1">
          <div className="flex justify-center gap-2 mb-12 flex-wrap">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200
                  ${
                    filter === f.key
                      ? "bg-brand-500 text-white border-brand-500 shadow-md shadow-brand-500/30"
                      : "bg-brand-800 text-slate-300 border-brand-600/50 hover:border-brand-400 hover:text-brand-300"
                  }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </SectionReveal>

        {/* Timeline */}
        <div className="relative tl-track">
          {/* Desktop: alternating two-column */}
          <div className="hidden md:flex flex-col gap-10">
            {filtered.map((job, i) => (
              <TimelineItem
                key={`${job.company}-${i}`}
                job={job}
                index={i}
                side={i % 2 === 0 ? "left" : "right"}
              />
            ))}
          </div>

          {/* Mobile: single column */}
          <div className="md:hidden flex flex-col gap-6 pl-6">
            {/* Small dot on left spine */}
            {filtered.map((job, i) => (
              <SectionReveal
                key={`m-${job.company}-${i}`}
                delay={`delay-${(i % 3) + 1}`}
              >
                <div className="relative bg-brand-800 rounded-2xl border border-brand-700/50 shadow-sm p-5">
                  <div
                    className="absolute -left-[26px] top-6 w-3.5 h-3.5 rounded-full
                    bg-brand-900 border-[2.5px] border-brand-400"
                  />

                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-semibold text-slate-100 text-sm leading-snug mb-0.5">
                        {job.title}
                      </h3>
                      <p className="text-brand-400 text-xs font-medium">
                        {job.company}
                      </p>
                    </div>
                    {job.current && (
                      <span
                        className="text-[0.6rem] font-semibold uppercase tracking-wide
                        text-emerald-700 bg-emerald-50 border border-emerald-200
                        px-2 py-0.5 rounded-full whitespace-nowrap"
                      >
                        Current
                      </span>
                    )}
                  </div>

                  <div className="text-[0.7rem] text-slate-400 mb-3">
                    {job.period} · {job.location}
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {job.tags.map((t, ti) => (
                      <span
                        key={ti}
                        className="text-[0.62rem] text-slate-400 bg-brand-700/50
                        border border-brand-600/40 rounded-full px-2 py-0.5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
