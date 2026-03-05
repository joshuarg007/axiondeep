"use client";

import { useState, useEffect, useRef } from "react";

interface TypewriterTextProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export default function TypewriterText({
  phrases,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2000,
  className = "",
}: TypewriterTextProps) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const phraseIndex = useRef(0);
  const charIndex = useRef(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (prefersReduced) {
      setText(phrases[0]);
      return;
    }

    let timeout: NodeJS.Timeout;

    const tick = () => {
      const currentPhrase = phrases[phraseIndex.current];

      if (!isDeleting) {
        charIndex.current++;
        setText(currentPhrase.slice(0, charIndex.current));

        if (charIndex.current === currentPhrase.length) {
          timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
          return;
        }
        timeout = setTimeout(tick, typingSpeed);
      } else {
        charIndex.current--;
        setText(currentPhrase.slice(0, charIndex.current));

        if (charIndex.current === 0) {
          setIsDeleting(false);
          phraseIndex.current = (phraseIndex.current + 1) % phrases.length;
          timeout = setTimeout(tick, typingSpeed * 2);
          return;
        }
        timeout = setTimeout(tick, deletingSpeed);
      }
    };

    timeout = setTimeout(tick, typingSpeed);
    return () => clearTimeout(timeout);
  }, [phrases, typingSpeed, deletingSpeed, pauseDuration, isDeleting]);

  return (
    <span className={className}>
      {text}
      <span className="inline-block w-[3px] h-[1em] bg-cyan-400 ml-1 animate-pulse align-baseline" />
    </span>
  );
}
