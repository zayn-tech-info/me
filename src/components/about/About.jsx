import React from "react";
import me_ from "../../images/me_.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image / Visual Side */}
          <div className="relative order-2 md:order-1 flex justify-center md:justify-start">
            <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 ease-out group">
              <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img
                src={me_}
                alt="Yakubu Abdulbasit"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating Stats Card - Only visible on larger screens */}
            <div className="absolute -bottom-8 -right-8 z-20 bg-zinc-900/90 backdrop-blur-md p-6 rounded-2xl border border-white/5 shadow-2xl hidden md:block animate-fade-in">
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-4xl font-bold text-accent">4+</p>
                  <p className="text-xs text-zinc-400 uppercase tracking-wider font-mono mt-1">
                    Years
                    <br />
                    Experience
                  </p>
                </div>
                <div className="h-10 w-px bg-white/10"></div>
                <div>
                  <p className="text-4xl font-bold text-white">15+</p>
                  <p className="text-xs text-zinc-400 uppercase tracking-wider font-mono mt-1">
                    Projects
                    <br />
                    Completed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 md:order-2">
            <div className="inline-block px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs font-mono tracking-widest uppercase mb-6">
              Who I Am
            </div>

            <h3 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600">
                digital perfection.
              </span>
            </h3>

            <div className="space-y-6 text-lg text-zinc-400 leading-relaxed">
              <p>
                I'm Yakubu Abdulbasit, a software developer who bridges the gap
                between functional systems and aesthetic design. I don't just
                write code; I architect solutions that scale and solve
                real-world problems.
              </p>
              <p>
                My journey involves deep dives into full-stack development,
                constantly challenging myself to learn the "why" behind the
                "how". Whether it's optimizing a backend query or perfecting a
                micro-interaction, I believe craftsmanship is in the details.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-8 border-t border-white/5 pt-8">
              <div>
                <span className="block text-white font-medium mb-1">
                  Location
                </span>
                <span className="text-zinc-500">Nigeria</span>
              </div>
              <div>
                <span className="block text-white font-medium mb-1">
                  Status
                </span>
                <span className="text-accent flex items-center gap-2">
                  Open for work
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
