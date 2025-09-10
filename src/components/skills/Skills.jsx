import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";
import { skills } from "../../utils/constants";
import SkillsComponent from "./SkillsComponent";

const Skills = () => {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const trigger = window.innerHeight * 0.6;
      setShowTop(window.scrollY > trigger);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="skills"
      className="max-w-2xl mx-auto py-12 px-4 md:px-16 bg-gradient-to-br from-green-100 via-green-200 to-green-300 rounded-3xl shadow-2xl mt-10 border border-gray-100 relative"
    >
      <span className="bg-green-200 rounded-md px-4 mb-10 py-2 inline-block">
        <span className="section-title text-xl font-bold ">Skills</span>
      </span>
      <div className="grid grid-cols-2 gap-12 mt-8">
        {skills.map((skill, idx) => (
          <SkillsComponent key={skill.name} skill={skill} idx={idx} />
        ))}
      </div>

      <motion.button
        onClick={handleBackToTop}
        className="fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-300"
        aria-label="Back to top"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          showTop ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
        }
        transition={{ duration: 0.3 }}
        style={{ pointerEvents: showTop ? "auto" : "none" }}
      >
        <FaArrowUp size={22} />
      </motion.button>
    </section>
  );
};

export default Skills;
