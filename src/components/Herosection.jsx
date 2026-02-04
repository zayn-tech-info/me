import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Herosection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-[1400px] mx-auto pt-20"
    >
      <div className="flex flex-col gap-8 md:gap-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="overflow-hidden">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-white leading-[1.1] md:leading-[1.1]">
              Engineered
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600 leading-[1.1] md:leading-[1.1]">
              Simplicity.
            </h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="max-w-xl"
        >
          <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
            I build scalable digital systems and intuitive interfaces. Merging
            technical depth with creative precision to deliver products that
            feel inevitable.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex items-center gap-6"
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 text-white font-medium border-b border-white/20 pb-0.5 hover:border-accent transition-colors duration-300"
          >
            View Work
            <ArrowDown
              size={18}
              className="-rotate-90 group-hover:rotate-0 transition-transform duration-300"
            />
          </a>
        </motion.div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
};

export default Herosection;
