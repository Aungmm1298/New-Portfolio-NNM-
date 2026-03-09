'use client';
import { useRef, useEffect, useState } from 'react';

/**
 * SectionHeading — eyebrow pill + animated-underline h2.
 * Renders as a 'use client' component so the underline can animate on scroll.
 */
export default function SectionHeading({ eyebrow, title, centered = true, light = false }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`mb-14 ${centered ? 'text-center' : ''}`}>
      <span
        className={`inline-block text-[0.7rem] font-semibold uppercase tracking-[3.5px] px-3.5 py-1.5 rounded-full mb-4 border
          ${light
            ? 'text-brand-200 bg-white/10 border-white/20'
            : 'text-brand-400 bg-brand-700/40 border-brand-500/40'}`}
      >
        {eyebrow}
      </span>

      <div className={centered ? 'flex justify-center' : ''}>
        <div className="relative inline-block">
          <h2
            className={`font-serif text-3xl md:text-4xl font-semibold pb-4
              ${light ? 'text-white' : 'text-slate-100'}`}
          >
            {title}
          </h2>
          <span
            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2.5px] rounded-full
              bg-gradient-to-r from-brand-500 via-sky-400 to-teal-500
              transition-[width] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-300"
            style={{ width: visible ? '64px' : '0px' }}
          />
        </div>
      </div>
    </div>
  );
}
