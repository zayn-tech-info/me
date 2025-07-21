import React from "react";
import { ExternalLink } from "lucide-react";
import Recipeapp from "../images/recipeida.png";
import Ecommerceapp from "../images/ecommerce.png";

const projects = [
  {
    id: 1,
    image: Recipeapp,
    title: "Recipeida",
    description:
      "A recipe website with a search bar and a list of recipes. It uses the spoonacular API to fetch recipes. It also has a recipe detail page and a recipe list page. ",
    link: "https://recipeapp-hz7o.vercel.app/",
    tags: ["React", "Tailwind", "Vite", "Spoonacular API"],
  },
  {
    id: 2,
    title: "Exclusive Shopping",
    image: Ecommerceapp,
    description:
      "A full-featured e-commerce platform with cart and checkout functionality.",
    link: "https://exclusive-shopping.vercel.app/",
    tags: ["Html", "Tailwind css", "Javascript"],
  },
];

const Projects = () => (
  <section className="max-w-5xl mx-auto mt-20 px-4">
    <span className="bg-green-200 rounded-md px-4 mb-10 py-2">
      <span className="section-title text-xl font-bold ">Projects</span>
    </span>
    <div className="flex flex-col gap-10">
      {projects.map((project) => (
        <div
          key={project.title}
          className="bg-white rounded-2xl mt-10 border border-gray-100 shadow-lg p-8 flex flex-col transition-transform duration-300 hover:shadow-xl"
        >
          <h3 className="text-lg font-bold mb-7 font-sans transition-colors duration-200 bg-green-500 text-white inline-block px-4 py-2 rounded-md max-w-max">
            {project.title}
          </h3>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover rounded-t-2xl"
          />
          <p className="text-brand-gray text-sm mt-10 mb-5">
            {project.description}
          </p>
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
