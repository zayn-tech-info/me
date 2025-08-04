import { useEffect, useState } from "react";


export function TypewriterParagraphs({ paragraphs, typingSpeed = 6, paragraphPause = 400 }) {
	const [displayed, setDisplayed] = useState(Array(paragraphs.length).fill(""));
	const [currentParagraph, setCurrentParagraph] = useState(0);
	const [charIndex, setCharIndex] = useState(0);
  
	useEffect(() => {
	  if (currentParagraph >= paragraphs.length) return;
	  if (charIndex <= paragraphs[currentParagraph].length) {
		const timeout = setTimeout(() => {
		  setDisplayed((prev) => {
			const updated = [...prev];
			updated[currentParagraph] = paragraphs[currentParagraph].slice(0, charIndex);
			return updated;
		  });
		  setCharIndex((prev) => prev + 1);
		}, typingSpeed);
		return () => clearTimeout(timeout);
	  } else if (currentParagraph < paragraphs.length - 1) {
		const timeout = setTimeout(() => {
		  setCurrentParagraph((prev) => prev + 1);
		  setCharIndex(0);
		}, paragraphPause);
		return () => clearTimeout(timeout);
	  }
	}, [charIndex, currentParagraph, paragraphs, typingSpeed, paragraphPause]);
  
	return (
	  <>
		{paragraphs.map((_, idx) => (
		  <p className={idx < paragraphs.length - 1 ? "mb-5" : ""} key={idx}>
			{displayed[idx]}
			{currentParagraph === idx && charIndex <= paragraphs[idx].length ? (
			  <span className="animate-pulse">|</span>
			) : null}
		  </p>
		))}
	  </>
	);
  }