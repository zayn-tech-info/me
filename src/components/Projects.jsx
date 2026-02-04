import React, { useRef, useEffect } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import Recipeapp from "../images/recipeida.png";
import Ecommerceapp from "../images/ecommerce.png";
import TemuCloneImg from "../images/temu_clone.png";

const projects = [
  {
    id: 1,
    title: "Temu Clone",
    image: TemuCloneImg,
    description:
      "A comprehensive e-commerce architecture implementing scalable cart logic and payment gateway integration.",
    link: "https://temu-clone-zayn.vercel.app/",
    tags: ["React", "Express", "Node", "MongoDB"],
  },
  /*   {
    id: 2,
    title: "Exclusive Shopping",
    image: Ecommerceapp,
    description:
      "Feature-rich shopping platform focusing on performance and seamless user checkout flows.",
    link: "https://exclusive-shopping.vercel.app/",
    tags: ["HTML", "Tailwind", "JavaScript"],
  }, */
  {
    id: 2,
    title: "Recipeida",
    image: Recipeapp,
    description:
      "Culinary discovery engine utilizing Spoonacular API for real-time data fetching and search optimization.",
    link: "https://recipeapp-hz7o.vercel.app/",
    tags: ["React", "Vite", "REST API"],
  },
];

const Projects = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const interval = setInterval(() => {
      // Check if user is hovering over the container to pause auto-scroll
      if (scrollContainer.matches(":hover")) return;

      const maxScrollLeft =
        scrollContainer.scrollWidth - scrollContainer.clientWidth;
      const cardWidth = scrollContainer.querySelector("div").clientWidth + 24; // Width + gap-6 (24px)

      if (Math.ceil(scrollContainer.scrollLeft) >= maxScrollLeft - 10) {
        // Reset to start if near end
        scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        // Scroll to next card
        scrollContainer.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }, 4000); // Scroll every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="projects" className="py-24 md:py-32 overflow-hidden">
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto mb-16 flex items-end justify-between">
        <div className="relative">
          <h2 className="text-base md:text-lg text-accent tracking-[0.2em] uppercase font-mono mb-4">
            Case Studies
          </h2>
          <p className="text-5xl md:text-7xl font-bold text-white tracking-tighter mix-blend-overlay opacity-80">
            Selected Works
          </p>
        </div>
        <div className="hidden md:flex items-center gap-3 text-zinc-500 text-sm font-mono tracking-wide">
          <span>DRAG OR SCROLL</span>
          <ArrowRight size={16} />
        </div>
      </div>

      {/* Carousel Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-8 px-6 md:px-12 pb-12 hide-scrollbar w-full"
        style={{ scrollBehavior: "smooth" }}
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="group relative flex-shrink-0 w-[85vw] md:w-[650px] snap-center"
          >
            {/* Artistic Index Number */}
            <div className="absolute -top-12 -left-4 z-0 pointer-events-none select-none">
              <span className="text-[8rem] md:text-[10rem] font-bold text-white/5 font-mono leading-none group-hover:text-white/10 transition-colors duration-500">
                0{index + 1}
              </span>
            </div>

            <div className="relative z-10 flex flex-col h-full bg-zinc-900/30 backdrop-blur-sm border border-white/5 rounded-[2rem] overflow-hidden hover:border-white/20 transition-all duration-500 shadow-2xl">
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent z-10 opacity-80"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-110 filter grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                />

                {/* Floating Tags Overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-[10px] uppercase tracking-wider font-bold bg-white/10 backdrop-blur-md text-white border border-white/10 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow relative">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-accent transition-colors duration-300 tracking-tight">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 rounded-full text-zinc-400 hover:text-white hover:bg-accent hover:rotate-45 transition-all duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>

                <div className="w-12 h-0.5 bg-accent/50 mb-6 group-hover:w-full transition-all duration-500 ease-out"></div>

                <p className="text-zinc-400 leading-relaxed text-lg font-light flex-grow">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        ))}
        {/* Spacer to allow scrolling the last item fully into view if needed */}
        <div className="w-6 md:w-16 flex-shrink-0"></div>
      </div>
    </section>
  );
};

export default Projects;
