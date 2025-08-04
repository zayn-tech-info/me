import React, { useRef, useState, useEffect } from "react";

// Intersection Observer hook
function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      options
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);
  return [ref, inView];
}

 
const paragraphs = [
  "Hey, I'm Yakubu Abdulbasit, a self-taught developer passionate about turning ideas into clean, responsive, and user-friendly web experiences. I love building things that not only work but also feel great to use.",
  "I've been working with HTML, CSS, JavaScript, React.js, and Tailwind CSS, constantly sharpening my skills through real-world projects, collaborative builds, and daily practice. Whether it's crafting small UI components or developing full web applications, I enjoy every step of the creative process.",
  "I'm currently open to opportunities where I can grow with a team, contribute to exciting products, and keep learning new tools and technologies. When I'm not coding, you'll find me exploring tech trends, helping friends debug, or sketching ideas for my next build."
];

function TypewriterParagraphs({ paragraphs, typingSpeed = 6, paragraphPause = 400 }) {
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

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });
  return (
    <>
      <div id="about" className="mt-10 py-10 h-96">
        <span className="bg-green-200 rounded-md px-4 mt-3 py-2">
          <span className="section-title text-xl font-bold ">About me</span>
        </span>
        <div className="text-base text-brand-gray my-8">
          <div ref={ref}>
            {inView ? (
              <TypewriterParagraphs paragraphs={paragraphs} />
            ) : (
              <>
                <p className="mb-5" style={{ minHeight: 60 }}></p>
                <p className="mb-5" style={{ minHeight: 60 }}></p>
                <p style={{ minHeight: 60 }}></p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
