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
  {
    id: 2,
    title: "Exclusive Shopping",
    image: Ecommerceapp,
    description:
      "Feature-rich shopping platform focusing on performance and seamless user checkout flows.",
    link: "https://exclusive-shopping.vercel.app/",
    tags: ["HTML", "Tailwind", "JavaScript"],
  },
  {
    id: 3,
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
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto mb-12 flex items-end justify-between">
        <div>
          <h2 className="text-base md:text-lg text-accent tracking-widest uppercase font-mono mb-4">
            Case Studies
          </h2>
          <p className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Selected Works
          </p>
        </div>
        <div className="hidden md:flex items-center gap-2 text-zinc-500 text-sm font-mono">
          <span>Scroll or Hover to Pause</span>
          <ArrowRight size={16} />
        </div>
      </div>

      {/* Carousel Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 md:px-12 pb-12 hide-scrollbar w-full"
        style={{ scrollBehavior: "smooth" }}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative flex-shrink-0 w-[85vw] md:w-[600px] snap-center"
          >
            <div className="relative flex flex-col h-full bg-zinc-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-colors duration-500">
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent z-10 transition-colors duration-500"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale group-hover:grayscale-0 opacity-90 group-hover:opacity-100"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/5 rounded-full text-zinc-400 hover:text-white hover:bg-accent hover:scale-110 transition-all duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>

                <p className="text-zinc-400 leading-relaxed mb-6 text-base md:text-lg flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-3 py-1.5 rounded-full border border-white/10 text-zinc-400 bg-white/5 group-hover:border-accent/30 group-hover:text-accent transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* Spacer to allow scrolling the last item fully into view if needed */}
        <div className="w-6 md:w-12 flex-shrink-0"></div>
      </div>
    </section>
  );
};

export default Projects;
