import React, { useState } from "react";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import Recipeapp from "../images/recipeida.png";
import Ecommerceapp from "../images/ecommerce.png";
import TemuCloneImg from "../images/temu_clone.png";
import Shopydash from "../images/shopydash.png";
import Vanita from "../images/vanita.png";

const DESCRIPTION_PREVIEW_LENGTH = 120;

const projects = [
    {
        id: 1,
        title: "Modern Fashion E-commerce Store",
        category: "E-Commerce Architecture",
        image: Vanita,
        description:
          "A full-featured e-commerce platform for a fashion brand, enabling customers to browse products by category, select size and color variants, add items to their cart, and securely complete purchases using Stripe. The platform includes user authentication, order management, email confirmations, and an admin dashboard for managing products and customer orders, providing a complete and scalable online store experience.",
        link: "https://vanita-by-mo.vercel.app/",
        tags: ["React", "Convex", "Stripe", "Tailwind", "Zustand"],
      },
  {
    id: 2,
    title: "Recipeida",
    category: "Recipe app",
    image: Recipeapp,
    description:
      "An intelligent recipe application utilizing the Spoonacular API. Features real-time data fetching, advanced search optimization, and responsive dietary filtering.",
    link: "https://recipeapp-hz7o.vercel.app/",
    tags: ["React", "Vite", "REST API"],
  },
  {
    id: 3,
    title: "Shopydash",
    category: "Multi-vendor Platform",
    image: Shopydash,
    description:
      "A hyper-local multi-vendor marketplace tailored for university environments. Connects students with campus sellers, facilitating secure trade of essentials with location-based filtering.",
    link: "https://app.shopydash.com/",
    tags: ["React", "Vite", "REST API", "Tailwind"],
  },
  {
        id: 4,
    title: "Temu Clone",
    category: "E-Commerce Architecture",
    image: TemuCloneImg,
    description:
      "A comprehensive e-commerce architecture implementing scalable cart logic, complex product variants, and seamless payment gateway integration.",
    link: "https://temu-clone-zayn.vercel.app/",
    tags: ["React", "Express", "Node", "MongoDB"],
  },
];

const Projects = () => {
  const [expandedIds, setExpandedIds] = useState(new Set());

  const toggleDescription = (id) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const getPreview = (text) => {
    if (text.length <= DESCRIPTION_PREVIEW_LENGTH) return text;
    return text.slice(0, DESCRIPTION_PREVIEW_LENGTH).trim() + "...";
  };

  const needsReadMore = (text) => text.length > DESCRIPTION_PREVIEW_LENGTH;

  return (
    <section id="projects" className="py-24 md:py-32 bg-zinc-950">
      <div className="px-6 md:px-12 max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mb-24 md:mb-32">
          <h2 className="text-base text-accent tracking-widest uppercase font-mono mb-6">
            Selected Works
          </h2>
          <h3 className="text-5xl md:text-7xl font-bold text-white leading-[0.9] tracking-tighter">
            Crafting digital <br />
            <span className="text-zinc-600">experiences.</span>
          </h3>
        </div>

        {/* Sticky Cards Container - each card has min-height so next doesn't cover before fully viewed */}
        <div className="flex flex-col gap-12 pb-24">
          {projects.map((project, index) => {
            const isExpanded = expandedIds.has(project.id);
            const showReadMore = needsReadMore(project.description);
            return (
              <div
                key={project.id}
                className="sticky top-24 md:top-32 self-start w-full min-h-[85vh] flex flex-col"
                style={{
                  top: `calc(100px + ${index * 40}px)`,
                  zIndex: index + 1,
                }}
              >
                <div className="bg-zinc-900 border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-500 hover:border-white/20 hover:shadow-accent/5 flex-1 min-h-0">
                  <div className="grid lg:grid-cols-2 gap-8 md:gap-12 p-8 md:p-12 items-start min-h-[75vh]">
                    {/* Text Content */}
                    <div className="order-2 lg:order-1 space-y-6 flex flex-col min-h-0">
                      <div className="flex items-center gap-4 shrink-0">
                        <span className="text-4xl font-bold text-white/10 font-mono">
                          0{index + 1}
                        </span>
                        <div className="h-px flex-grow bg-white/10"></div>
                        <span className="text-accent text-xs font-bold tracking-widest uppercase">
                          {project.category}
                        </span>
                      </div>

                      <div className="min-h-0 flex flex-col flex-1">
                        <h4 className="text-3xl md:text-5xl font-bold text-white mb-4 shrink-0">
                          {project.title}
                        </h4>
                        <div className="flex flex-col gap-2 min-h-0">
                          {!isExpanded ? (
                            <p className="text-zinc-400 text-lg leading-relaxed font-light">
                              {getPreview(project.description)}
                            </p>
                          ) : (
                            <div
                              className="text-zinc-400 text-lg leading-relaxed font-light overflow-y-auto pr-2 max-h-[200px] rounded"
                              style={{ scrollbarGutter: "stable" }}
                            >
                              {project.description}
                            </div>
                          )}
                          {showReadMore && (
                            <button
                              type="button"
                              onClick={() => toggleDescription(project.id)}
                              className="inline-flex items-center gap-1 text-accent hover:text-accent/80 text-sm font-medium mt-1 transition-colors"
                            >
                              {isExpanded ? (
                                <>
                                  <ChevronUp size={16} />
                                  Read less
                                </>
                              ) : (
                                <>
                                  <ChevronDown size={16} />
                                  Read more
                                </>
                              )}
                            </button>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 shrink-0">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-4 py-2 rounded-full bg-white/5 border border-white/5 text-zinc-300 text-xs font-mono tracking-wide"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="pt-4 shrink-0">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-3 text-white font-medium hover:text-accent transition-colors"
                        >
                          <span className="border-b border-white/20 group-hover:border-accent pb-0.5 transition-colors">
                            View Live Project
                          </span>
                          <ArrowUpRight
                            size={18}
                            className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
                          />
                        </a>
                      </div>
                    </div>

                    {/* Image Content */}
                    <div className="order-1 lg:order-2 relative aspect-video lg:aspect-[4/3] rounded-xl overflow-hidden bg-black/50 group shrink-0">
                      <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
