import React from "react";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiVite,
  SiFigma,
} from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express", icon: SiExpress, color: "#ffffff" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Vite", icon: SiVite, color: "#646CFF" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section id="skills" className="px-6 md:px-12 max-w-[1400px] mx-auto py-24">
      <div className="mb-16">
        <h2 className="text-base md:text-lg text-accent tracking-widest uppercase font-mono mb-4">
          Expertise
        </h2>
        <p className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          Technical Arsenal
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={item}
            className="group relative flex flex-col items-center justify-center p-6 bg-zinc-900/50 border border-white/5 rounded-xl transition-all duration-300 hover:border-white/20 hover:bg-zinc-800/50 hover:-translate-y-1"
          >
            {/* Hover Glow */}
            <div
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"
              style={{ backgroundColor: skill.color }}
            ></div>

            <div className="relative z-10 flex flex-col items-center gap-3">
              <skill.icon
                size={40}
                className="text-zinc-500 transition-colors duration-300 group-hover:text-white"
                style={{
                  color:
                    "var(--tw-text-opacity) !== 1 ? undefined : skill.color",
                }}
              />
              <span className="text-sm font-medium text-zinc-400 group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </div>
          </motion.div>
        ))}

        {/* Empty slots filler or 'More' indicator if needed, but grid looks good clean */}
      </motion.div>
    </section>
  );
};

export default Skills;
