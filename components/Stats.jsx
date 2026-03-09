'use client';
import { useEffect, useRef, useState } from 'react';
import SectionHeading from './ui/SectionHeading';
import SectionReveal from './SectionReveal';
import { stats } from '@/data/portfolio';

function useCounter(target, duration = 1800) {
  const [count, setCount] = useState(0);
  const triggered = useRef(false);
  const ref = useRef(null);

  useEffect(() => {
    if (target === null) return;
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          obs.disconnect();

          let start = null;
          function step(ts) {
            if (!start) start = ts;
            const progress = Math.min((ts - start) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3); // easeOutCubic
            setCount(Math.floor(ease * target));
            if (progress < 1) requestAnimationFrame(step);
            else setCount(target);
          }
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.6 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);

  return { count, ref };
}

function StatCard({ icon, count, suffix, label, delay }) {
  const { count: animated, ref } = useCounter(count);

  return (
    <SectionReveal delay={delay}>
      <div
        ref={ref}
        className="group bg-white/70 backdrop-blur-sm rounded-2xl p-7 text-center
          border border-white/80 shadow-sm hover:shadow-xl hover:-translate-y-2
          hover:bg-white transition-all duration-300 cursor-default"
      >
        {/* Icon ring */}
        <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4
          bg-brand-50 border-2 border-brand-200/60 text-brand-500
          group-hover:scale-110 group-hover:border-brand-400 transition-all duration-300">
          <i className={`${icon} text-xl`} />
        </div>

        {/* Number */}
        <div className="font-serif text-4xl md:text-5xl font-bold text-brand-500 mb-1 leading-none
          transition-all duration-300">
          {count === null ? '—' : `${animated}${suffix}`}
        </div>

        {/* Label */}
        <div className="text-slate-500 text-sm font-medium tracking-wide mt-1">{label}</div>
      </div>
    </SectionReveal>
  );
}

export default function Stats() {
  return (
    <section className="py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0d2033 0%, #081422 45%, #0a1a2e 100%)' }}>
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-brand-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-teal-500/8 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionReveal>
          <SectionHeading eyebrow="Key Numbers" title="At a Glance" light />
        </SectionReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((s, i) => (
            <StatCard
              key={i}
              {...s}
              delay={`delay-${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
