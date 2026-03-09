'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import GLOBE from 'vanta/dist/vanta.globe.min';

const VantaGlobe = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    // Ensure THREE is on window for Vanta
    if (typeof window !== 'undefined') {
      window.THREE = THREE;
    }

    if (!vantaEffect && vantaRef.current) {
      try {
        const effect = GLOBE({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0xdec6ce,
          color2: 0x1c1c27, // Slight adjustment for contrast
          backgroundColor: 0x1f182c,
          size: 1.1, // Added a bit more presence
        });
        setVantaEffect(effect);
      } catch (error) {
        console.error('Vanta Globe initialization failed:', error);
      }
    }

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      className="fixed inset-0"
      style={{
        zIndex: -1,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none', // Allow clicking through to content
      }}
    />
  );
};

export default VantaGlobe;
