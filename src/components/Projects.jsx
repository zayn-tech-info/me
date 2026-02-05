import React from "react";
import { ArrowUpRight } from "lucide-react";
import Recipeapp from "../images/recipeida.png";
import Ecommerceapp from "../images/ecommerce.png";
import TemuCloneImg from "../images/temu_clone.png";
import Shopydash from "../images/shopydash.png";

const projects = [
  {
    id: 1,
    title: "Temu Clone",
    category: "E-Commerce Architecture",
    image: TemuCloneImg,
    description: "A comprehensive e-commerce architecture implementing scalable cart logic, complex product variants, and seamless payment gateway integration.",
    link: "https://temu-clone-zayn.vercel.app/",
    tags: ["React", "Express", "Node", "MongoDB"],
  },
  {
    id: 2,
    title: "Recipeida",
    category: "Recipe app",
    image: Recipeapp,
    description: "An intelligent recipe application utilizing the Spoonacular API. Features real-time data fetching, advanced search optimization, and responsive dietary filtering.",
    link: "https://recipeapp-hz7o.vercel.app/",
    tags: ["React", "Vite", "REST API"],
  },
  {
      id: 3,
      title: "Shopydash",
      category: "Multi-vendor Platform",
      image: Shopydash,
      description: "A hyper-local multi-vendor marketplace tailored for university environments. Connects students with campus sellers, facilitating secure trade of essentials with location-based filtering.",
      link: "https://app.shopydash.com/",
      tags: ["React", "Vite", "REST API", "Tailwind"],
  }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 md:py-32 bg-zinc-950">
            <div className="px-6 md:px-12 max-w-[1200px] mx-auto">
                 {/* Header */}
                 <div className="mb-24 md:mb-32">
                     <h2 className="text-base text-accent tracking-widest uppercase font-mono mb-6">Selected Works</h2>
                     <h3 className="text-5xl md:text-7xl font-bold text-white leading-[0.9] tracking-tighter">
                        Crafting digital <br/>
                        <span className="text-zinc-600">experiences.</span>
                     </h3>
                 </div>

                 {/* Sticky Cards Container */}
                 <div className="flex flex-col gap-12 pb-24">
                     {projects.map((project, index) => {
                         // Distinct visual rhythm
                         return (
                             <div 
                                key={project.id} 
                                className="sticky top-24 md:top-32 self-start w-full"
                                style={{ 
                                    // Stacking effect calculation
                                    top: `calc(100px + ${index * 40}px)`,
                                    // Ensure proper layering
                                    zIndex: index + 1
                                }}
                             >
                                 <div className="bg-zinc-900 border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-500 hover:border-white/20 hover:shadow-accent/5">
                                     <div className="grid lg:grid-cols-2 gap-8 md:gap-12 p-8 md:p-12 items-center">
                                         
                                         {/* Text Content */}
                                        <div className="order-2 lg:order-1 space-y-8">
                                            <div className="flex items-center gap-4">
                                                <span className="text-4xl font-bold text-white/10 font-mono">0{index + 1}</span>
                                                <div className="h-px flex-grow bg-white/10"></div>
                                                <span className="text-accent text-xs font-bold tracking-widest uppercase">{project.category}</span>
                                            </div>

                                            <div>
                                                <h4 className="text-3xl md:text-5xl font-bold text-white mb-4">{project.title}</h4>
                                                <p className="text-zinc-400 text-lg leading-relaxed font-light">
                                                    {project.description}
                                                </p>
                                            </div>

                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.map(tag => (
                                                    <span key={tag} className="px-4 py-2 rounded-full bg-white/5 border border-white/5 text-zinc-300 text-xs font-mono tracking-wide">{tag}</span>
                                                ))}
                                            </div>

                                            <div className="pt-4">
                                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 text-white font-medium hover:text-accent transition-colors">
                                                    <span className="border-b border-white/20 group-hover:border-accent pb-0.5 transition-colors">View Live Project</span> 
                                                    <ArrowUpRight size={18} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                                                </a>
                                            </div>
                                        </div>

                                         {/* Image Content */}
                                         <div className="order-1 lg:order-2 relative aspect-video lg:aspect-[4/3] rounded-xl overflow-hidden bg-black/50 group">
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
                         )
                     })}
                 </div>
            </div>
        </section>
    )
};

export default Projects;
