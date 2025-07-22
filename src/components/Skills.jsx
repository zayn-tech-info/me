import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { FaArrowUp } from "react-icons/fa";

const skills = [
  {
    name: "HTML",
    percent: 95,
    icon: <SiHtml5 className="text-orange-600" size={40} />,
  },
  {
    name: "CSS",
    percent: 90,
    icon: <SiCss3 className="text-blue-600" size={40} />,
  },
  {
    name: "JavaScript",
    percent: 70,
    icon: <SiJavascript className="text-yellow-400" size={40} />,
  },
  {
    name: "React",
    percent: 65,
    icon: <SiReact className="text-cyan-400" size={40} />,
  },
  {
    name: "Tailwind CSS",
    percent: 80,
    icon: <SiTailwindcss className="text-teal-400" size={40} />,
  },
  {
    name: "Bootstrap",
    percent: 85,
    icon: <SiBootstrap className="text-purple-700" size={40} />,
  },
  {
    name: "Node.js",
    percent: 30,
    icon: <SiNodedotjs className="text-green-600" size={40} />,
  },
  {
    name: "Express.js",
    percent: 25,
    icon: <SiExpress className="text-gray-800" size={40} />,
  },
  {
    name: "MongoDB",
    percent: 50,
    icon: <SiMongodb className="text-green-700" size={40} />,
  },
];

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
      className="py-12 px-4 md:px-16 bg-gradient-to-br from-green-100 via-green-200 to-green-300 rounded-3xl shadow-2xl max-w-3xl mx-auto mt-10 border border-gray-100 relative"
    >
      <span className="bg-green-200 rounded-md px-4 mb-10 py-2 inline-block">
        <span className="section-title text-xl font-bold ">Skills</span>
      </span>
      <div className="grid grid-cols-2 gap-12 mt-8">
        {skills.map((skill, idx) => (
          <div
            key={skill.name}
            className="group flex flex-col items-center justify-between h-full"
          >
            <div className="flex flex-col items-center w-full">
              <div className="mb-3 flex justify-center items-center w-full">
                {skill.icon}
              </div>
              <div className="flex justify-between items-center mb-1 w-full">
                <span className="text-lg font-semibold text-gray-800">
                  {skill.name}
                </span>
                <span className="text-sm font-bold text-green-700">
                  {skill.percent}%
                </span>
              </div>
              <div className="w-full h-5 bg-green-100 rounded-full overflow-hidden shadow-inner relative">
                <motion.div
                  className="h-full bg-green-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.percent}%` }}
                  transition={{
                    duration: 1.2,
                    delay: idx * 0.15,
                    type: "spring",
                    stiffness: 80,
                  }}
                />
              </div>
            </div>
          </div>
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
