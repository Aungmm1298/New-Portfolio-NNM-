"use client";
import { useState, useEffect } from "react";
import { navigation } from "@/data/portfolio";
import ScrollProgress from "./ScrollProgress";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <ScrollProgress />

      <header className="hidden md:flex fixed top-8 left-0 right-0 z-50 justify-center">
        <nav className="flex items-center gap-8 text-sm font-medium">
          {navigation.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              className="relative text-slate-300 hover:text-white transition-colors group"
            >
              {label}

              {/* modern underline animation */}
              <span className="absolute left-0 -bottom-1 h-[1.5px] w-0 bg-brand-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          <a
            href="#contact"
            className="ml-4 text-brand-400 hover:text-brand-300 transition"
          >
            Contact
          </a>
        </nav>
      </header>
    </>
  );
}
