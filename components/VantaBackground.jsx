'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

/**
 * Vanta.js GLOBE  background: #1f182c;tion
 * Integrated with Next.js using dynamic script loading.
 */
export default function VantaBackground() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);
  const [scriptsLoaded, setScriptsLoaded] = useState({ three: false, vanta: false });

  useEffect(() => {
    // Initialize Vanta when both scripts are loaded and the ref is ready
    if (scriptsLoaded.three && scriptsLoaded.vanta && vantaRef.current && !vantaEffect) {
      const initVanta = () => {
        try {
          if (window.VANTA && window.VANTA.GLOBE) {
            setVantaEffect(
              window.VANTA.GLOBE({
                el: vantaRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.0,
                minWidth: 200.0,
                scale: 1.0,
                scaleMobile: 1.0,
                color: 0xdec6ce,
                color2: 0x271c1c,
                backgroundColor: 0x1f182c, // Matches user request exactly
              })
            );
          }
        } catch (error) {
          console.error('Vanta initialization failed:', error);
        }
      };
      
      initVanta();
    }

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, [scriptsLoaded, vantaEffect]);

  return (
    <>
      {/* Load Three.js first as it's a dependency for Vanta */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        strategy="afterInteractive"
        onLoad={() => setScriptsLoaded(prev => ({ ...prev, three: true }))}
      />
      {/* Load Vanta Globe */}
      <Script
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.globe.min.js"
        strategy="afterInteractive"
        onLoad={() => setScriptsLoaded(prev => ({ ...prev, vanta: true }))}
      />
      
      <div
        ref={vantaRef}
        id="vanta-background"
        className="fixed inset-0 z-[-1] w-full h-full"
      />
      
      {/* Overlay to ensure content readability */}
      <div className="fixed inset-0 z-[-1] bg-brand-900/40 pointer-events-none" />
    </>
  );
}
