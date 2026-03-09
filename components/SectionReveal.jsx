'use client';
import { useRef, useEffect } from 'react';

/**
 * SectionReveal — wraps children; adds `.visible` once the element
 * enters the viewport (works on both server- and client-rendered content).
 *
 * Props:
 *   direction  – 'up' (default) | 'left' | 'right'
 *   delay      –  CSS delay class, e.g. 'delay-2'
 *   tag        –  wrapper element ('div' default)
 *   className  –  extra classes
 */
export default function SectionReveal({
  children,
  direction = 'up',
  delay = '',
  tag: Tag = 'div',
  className = '',
}) {
  const ref = useRef(null);
  const randomDir = useRef(null); // Use useRef to store the random direction

  useEffect(() => {
    // If direction is 'random' and it hasn't been set yet, pick one.
    // This ensures consistency for the component's lifetime.
    if (direction === 'random' && !randomDir.current) {
      const dirs = ['up', 'left', 'right', 'zoom'];
      randomDir.current = dirs[Math.floor(Math.random() * dirs.length)];
    }
  }, [direction]); // Re-run if the 'direction' prop changes

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
        } else {
          el.classList.remove('visible');
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const d = direction === 'random' ? randomDir.current || 'up' : direction;

  const dirClass = d === 'left'
    ? 'from-left'
    : d === 'right'
      ? 'from-right'
      : d === 'zoom'
        ? 'from-zoom'
        : '';

  return (
    <Tag ref={ref} className={`reveal ${dirClass} ${delay} ${className}`}>
      {children}
    </Tag>
  );
}
