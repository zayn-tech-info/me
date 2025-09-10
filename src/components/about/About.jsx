import React, { useRef, useState, useEffect } from "react";
import { paragraphs } from "../../utils/constants";
import { TypewriterParagraphs } from "./TypewriterParagraphs";

function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, options);
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);
  return [ref, inView];
}

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });
  return (
    <div className="px-4 md:px-8 max-w-2xl mx-auto">
      <div id="about" className="mt-20">
        <div>
          <p className="text-4xl font-mono font-extrabold text-center text-gray-800">Who I am</p>
        </div>
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
    </div>
  );
};

export default About;
