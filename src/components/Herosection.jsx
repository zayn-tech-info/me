import { Briefcase } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import TypewriterText from "./TypewriterText";
import me from "../images/me.jpg";

const Herosection = () => {
  return (
    <div className="items-center justify-center font-sans">
      <div className="flex items-start justify-start w-full mt-10">
        <motion.img
          className="w-36 h-36 rounded-full"
          src={me}
          alt="me"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
      <motion.div
        className="mt-5 space-y-5"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <h1 className="text-4xl font-bold font-sans">
          <span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.2 }}
            >
              Hello, I'm{" "}
            </motion.span>
            <TypewriterText
              words={["Yakubu Abdulbasit."]}
              loop={false}
            />
          </span>
        </h1>
        <div className="flex items-center bg-green-200 rounded-2xl px-4 py-2 w-64">
          <Briefcase className="inline-block w-7 h-7 mr-2 text-green-500 align-middle" />
          <p className="text-2xl font-medium font-sans inline align-middle">Web Developer</p>
        </div>
        <p className="text-lg text-brand-gray">
          I craft engaging, high-performance web experiences with a focus on clean code, modern design, and seamless user interaction.
        </p>
        <button className="border border-green-500 px-4 py-2 font-medium rounded-md">
          Hire me.
        </button>
      </motion.div>
    </div>
  );
};

export default Herosection;
