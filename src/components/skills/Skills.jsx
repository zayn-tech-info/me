import React from "react";
import Marquee from "react-fast-marquee";
import SkillBgImg from "../../images/skill_backgroud.jpg";

const SkillsMarquee = () => {
  const skills = [
    "JavaScript",
    "ReactJS",
    "NodeJS",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Mongoose",
    "NextJS",
    "Python",
  ];

  return (
    <div
      style={{ backgroundImage: `url(${SkillBgImg})` }}
      className={`relative   bg-cover bg-center py-6 my-10 overflow-hidden`}
    >
      <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-gray-400 to-transparent z-10"></div>
      <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-gray-400 to-transparent z-10"></div>

      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover
        className="flex items-center"
      >
        {skills.map((skill, index) => (
          <span
            key={index}
            id="skills"
            className="bg-white text-black h-10 px-6 py-10 mx-3 rounded-full font-semibold shadow-md whitespace-nowrap"
          >
            {skill}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default SkillsMarquee;
