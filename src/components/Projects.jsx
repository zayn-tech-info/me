import React from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Awesome Portfolio",
    description: "A modern portfolio website built with React and Tailwind CSS.",
    link: "https://your-portfolio-link.com",
    tags: ["React", "Tailwind", "Vite"],
  },
  {
    title: "E-commerce Store",
    description: "A full-featured e-commerce platform with cart and payment integration.",
    link: "https://your-ecommerce-link.com",
    tags: ["React", "Redux", "Stripe"],
  },
  // Add more projects here...
];

const Projects = () => (
  <section className="max-w-5xl mx-auto mt-20 px-4">
    <h2 className="text-3xl font-bold mb-10 font-sans">Projects</h2>
    <div className="flex flex-col gap-10">
      {projects.map((project) => (
        <div
          key={project.title}
          className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8 flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <h3 className="text-2xl font-bold mb-3 font-sans hover:underline hover:text-green-600 transition-colors duration-200">
            {project.title}
          </h3>
          <p className="text-brand-gray mb-6">{project.description}</p>
          <div className="flex flex-wrap gap-3 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-lg font-medium mt-auto hover:bg-green-600 transition-colors group"
          >
            View Project
            <ExternalLink className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects; 