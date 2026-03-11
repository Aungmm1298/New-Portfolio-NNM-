"use client";
import { useState, useEffect, useCallback } from "react";
import { navigation } from "@/data/portfolio";
import ScrollProgress from "./ScrollProgress";

const allLinks = [...navigation, { href: "#contact", label: "Contact" }];

export default function Header() {
  const [activeSection, setActiveSection] = useState("#");

  /* ── active section via IntersectionObserver ── */
  useEffect(() => {
    const ids = navigation
      .map(({ href }) => href.replace("#", ""))
      .filter(Boolean);

    const observers = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(`#${id}`);
        },
        { rootMargin: "-40% 0px -55% 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleClick = useCallback((href) => setActiveSection(href), []);

  return (
    <>
      <ScrollProgress />

      {/* Desktop only — no mobile nav */}
      <header className="hidden md:flex fixed top-0 left-0 right-0 z-50 justify-center pt-9 pointer-events-none">
        <nav className="pointer-events-auto flex items-start gap-10">
          {allLinks.map(({ href, label }) => {
            const isActive = activeSection === href;
            const isContact = href === "#contact";

            return (
              <a
                key={href}
                href={href}
                onClick={() => handleClick(href)}
                className="relative inline-flex flex-col items-center gap-2.5 group"
              >
                {/* top accent line — scales in from center */}
                <span
                  className={`absolute top-0 left-0 right-0 h-[2px] rounded-full origin-center transition-all duration-300 ease-out ${
                    isActive
                      ? "scale-x-100 opacity-100 bg-brand-400 shadow-[0_0_10px_2px_rgba(63,102,136,0.75)]"
                      : "scale-x-0 opacity-0 bg-brand-500 group-hover:scale-x-100 group-hover:opacity-40"
                  }`}
                />

                {/* label */}
                <span
                  className={`text-[10px] font-bold tracking-[0.22em] uppercase pt-[10px] transition-colors duration-300 ${
                    isActive
                      ? isContact
                        ? "text-brand-300"
                        : "text-white"
                      : "text-slate-600 group-hover:text-slate-300"
                  }`}
                >
                  {label}
                </span>
              </a>
            );
          })}
        </nav>
      </header>
    </>
  );
}
