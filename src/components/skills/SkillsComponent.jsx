import React from "react";
import { motion } from "framer-motion";

const SkillsComponent = ({ skill, idx }) => {
  return (
    <div className="group flex flex-col items-center justify-between h-full">
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
  );
};

export default SkillsComponent;
