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
  <section
    id="projects"
    className="px-4 md:px-8 max-w-5xl mx-auto mt-10 py-10 "
  >
    <div>
      <p className="text-4xl font-mono font-extrabold text-center text-gray-800">
        What i'v being cooking
      </p>
    </div>
    <div>
      <div className="grid grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white rounded-2xl mt-10 border border-gray-100 shadow-lg p-8 flex flex-col h-[500px] transition-transform duration-300 hover:shadow-xl"
          >
            <i className="font-medium border-2 border-gray-300 px-3 py-1 text-center rounded-xl">
              {project.title}
            </i>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-2xl my-5"
            />
            <div className="flex flex-col justify-between flex-1">
              <div>
                <p className="text-brand-gray text-sm mt-4 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 transition-colors group mt-6"
              >
                View Project
                <ExternalLink className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
