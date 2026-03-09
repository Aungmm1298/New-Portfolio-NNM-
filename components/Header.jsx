'use client';
import { useState, useEffect, useRef } from 'react';
import ScrollProgress from './ScrollProgress';
import { navigation } from '@/data/portfolio';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActive] = useState('');
  const ticking = useRef(false);

  /* ── Scroll handling ── */
  useEffect(() => {
    const sectionIds = navigation.map(n => n.href.slice(1)).filter(Boolean);

    function handleScroll() {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const currentY = window.scrollY;

        // Background appearance
        setScrolled(currentY > 20);

        // Active section tracking
        let current = '';
        if (currentY < 100) {
          current = '';
        } else {
          for (const id of sectionIds) {
            const el = document.getElementById(id);
            if (el && el.getBoundingClientRect().top <= 120) {
              current = id;
            }
          }
        }
        setActive(current);
        ticking.current = false;
      });
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ── Desktop Nav Item Component ── */
  const NavItem = ({ href, label }) => {
    const id = href.slice(1);
    const isActive = (href === '#' && activeSection === '') || activeSection === id;

    return (
      <a
        href={href}
        className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 transform
          ${isActive 
            ? 'text-brand-200 bg-brand-700/50 shadow-[0_0_15px_rgba(96,136,168,0.25)]' 
            : 'text-slate-400 hover:text-white hover:bg-white/5 hover:-translate-y-0.5'}`}
      >
        {label}
        {isActive && (
          <span className="absolute -bottom-px left-1/2 -translate-x-1/2 w-4 h-[2px] rounded-full bg-brand-300 shadow-[0_0_10px_rgba(96,136,168,0.8)]" />
        )}
      </a>
    );
  };

  return (
    <>
      <ScrollProgress />

      {/* Main Navbar Container */}
      <header
        className="hidden md:flex fixed top-0 left-0 right-0 z-50 justify-center px-4 py-4 pointer-events-none transition-all duration-500"
      >
        <div className={`
          pointer-events-auto flex items-center gap-2 px-6 py-2 rounded-full transition-all duration-500
          ${scrolled
            ? 'bg-brand-900/10 backdrop-blur-md border border-brand-700/20'
            : 'bg-transparent border border-transparent'}
        `}>

          {/* Desktop Navigation */}
          <nav className="flex items-center gap-1">
            {navigation.map((link) => (
              <NavItem key={link.label} {...link} />
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden md:flex items-center gap-2 bg-brand-500 hover:bg-brand-400 text-white text-[10px] tracking-wider font-bold px-4 py-1.5 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand-500/20 ml-2"
          >
            CONTACT
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex items-center justify-center w-8 h-8 rounded-full hover:bg-brand-800/50 text-slate-300 transition-colors ml-1"
            aria-label="Toggle menu"
          >
            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'} text-base`} />
          </button>
        </div>

        {/* Mobile Drawer */}
        <div className={`
          fixed inset-x-4 top-20 md:hidden pointer-events-auto overflow-hidden rounded-3xl transition-all duration-500 ease-in-out
          ${menuOpen
            ? 'max-h-[450px] opacity-100 bg-brand-900/95 backdrop-blur-2xl border border-brand-700/50 shadow-2xl py-6'
            : 'max-h-0 opacity-0 border-none'}
        `}>
          <nav className="flex flex-col items-center gap-2 px-6">
            {navigation.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="w-full text-center py-3 text-base font-medium text-slate-300 hover:text-brand-300 hover:bg-brand-800/50 rounded-xl transition-all"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 w-full text-center bg-brand-500 text-white font-bold py-3.5 rounded-xl hover:bg-brand-400 transition-all shadow-lg"
            >
              Get in Touch
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
