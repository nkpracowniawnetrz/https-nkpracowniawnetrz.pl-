import { useState } from "react";
import type { Project } from "../data/projects";

interface Props {
  projects: Project[];
  categories: string[];
}

export default function PortfolioFilter({ projects, categories }: Props) {
  const [activeCategory, setActiveCategory] = useState("Wszystkie");

  const filteredProjects =
    activeCategory === "Wszystkie"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {categories.map((cat) => {
          const count =
            cat === "Wszystkie"
              ? projects.length
              : projects.filter((p) => p.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 text-sm tracking-wide transition-all duration-300 flex items-center gap-2 ${
                activeCategory === cat
                  ? "bg-beige text-black"
                  : "border border-white/15 text-white/50 hover:border-beige/50 hover:text-beige"
              }`}
            >
              {cat}
              <span className={`text-xs ${activeCategory === cat ? "text-black/50" : "text-white/25"}`}>
                ({count})
              </span>
            </button>
          );
        })}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <a
            key={project.id}
            href={`/portfolio/${project.id}`}
            className="group block"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-[#141414] mb-4">
              <img
                src={project.thumbnail}
                alt={`Projekt ${project.category.toLowerCase()} — ${project.title}, NK Pracownia Wnętrz`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-14 h-14 border border-white/40 flex items-center justify-center backdrop-blur-sm">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="text-xs text-[#c9b99a]/60 tracking-[0.2em] uppercase mb-1">
              {project.category}
            </p>
            <h3 className="text-base font-light text-white/80 group-hover:text-white transition-colors">
              {project.title}
            </h3>
          </a>
        ))}
      </div>
    </>
  );
}
