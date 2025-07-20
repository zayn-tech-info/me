import { Briefcase } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const Herosection = () => {
  return (
    <div className="items-center justify-center font-sans">
      <div className="flex items-start justify-start w-full mt-10">
        <motion.img
          className="w-36 h-36 rounded-full"
          src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
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
          Hello, I'm Yakubu Abdulbasit.
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
