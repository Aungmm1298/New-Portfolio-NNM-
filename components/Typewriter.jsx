'use client';

import { useState, useEffect } from 'react';

const Typewriter = ({ text, delay = 100, pause = 2000 }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (isDeleting) {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(prev => prev.slice(0, -1));
        }, delay / 2);
      } else {
        setIsDeleting(false);
        setCurrentIndex(0);
      }
    } else {
      if (currentText.length < text.length) {
        timeout = setTimeout(() => {
          setCurrentText(prev => text.slice(0, prev.length + 1));
        }, delay);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pause);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, text, delay, pause]);

  return (
    <span className="inline-block relative">
      {currentText}
      <span className="w-[2px] h-[1.1em] bg-brand-500 ml-1 inline-block align-middle animate-pulse" />
    </span>
  );
};

export default Typewriter;
