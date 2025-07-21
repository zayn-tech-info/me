import React, { useEffect, useState } from "react";

const TypewriterText = ({ words = [""], loop = false, typingSpeed = 100, pause = 1200 }) => {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const currentWord = words[wordIndex] || "";

    if (!isDeleting && charIndex <= currentWord.length) {
      timeout = setTimeout(() => {
        setDisplayed(currentWord.slice(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(currentWord.slice(0, charIndex));
        setCharIndex((prev) => prev - 1);
      }, typingSpeed / 2);
    } else if (!isDeleting && charIndex > currentWord.length) {
      if (loop || wordIndex < words.length - 1) {
        timeout = setTimeout(() => setIsDeleting(true), pause);
      }
    } else if (isDeleting && charIndex < 0) {
      setIsDeleting(false);
      setCharIndex(0);
      setWordIndex((prev) => {
        const next = prev + 1;
        if (next >= words.length) {
          return loop ? 0 : prev;
        }
        return next;
      });
    }
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, words, loop, typingSpeed, pause]);

  return <span>{displayed}<span className="animate-pulse">|</span></span>;
};

export default TypewriterText; 