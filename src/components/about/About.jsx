import React, { useRef, useState, useEffect } from "react";
import { paragraphs } from "../../utils/constants";
import { TypewriterParagraphs } from "./TypewriterParagraphs";

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
