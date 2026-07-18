import React, { useState } from 'react';
import projectsData from './projectsData.json';

const categories = [
  { id: "all", name: "All Work" },
  { id: "Full Stack", name: "Full Stack" },
  { id: "Front End", name: "Front End" },
  { id: "Back End", name: "Back End" },
  { id: "Shopify", name: "Shopify" }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all"
    ? projectsData
    : activeCategory === "Back End"
      ? projectsData.filter(project => 
          project.category === "Back End" || 
          project.category === "Backend" ||
          project.tags.some(tag => 
            ["NestJS", "Node.js", "Express", "FastAPI", "MongoDB", "PostgreSQL", "Redis", "APIs", "Backend", "Back End"].includes(tag)
          )
        )
      : projectsData.filter(project => project.category === activeCategory);

  return (
    <section className="w-full p-4 md:p-6 animate-fade-in flex flex-col gap-6 text-left">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Projects<span className="text-purple-600">.</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm max-w-xl">
            A curated selection of my work across full stack web applications and frontend designs.
          </p>
        </div>

        {/* Filter categories */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-brand-purple text-white shadow-md shadow-brand-purple/25'
                  : 'bg-white/50 dark:bg-slate-900/40 text-slate-600 dark:text-slate-300 border border-slate-200/50 dark:border-slate-800/50 hover:bg-brand-purple/10 dark:hover:bg-slate-800/40'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="glass-panel glass-card-interactive rounded-4xl p-6 flex flex-col justify-between h-280px relative overflow-hidden group border border-slate-200/50 dark:border-slate-800/50"
          >
            {/* Background gradient glow */}
            <div className="absolute top-[-20%] left-[-20%] w-[140%] h-[140%] bg-linear-to-tr from-purple-500/5 via-transparent to-blue-500/5 pointer-events-none transition-opacity duration-500 opacity-60 group-hover:opacity-100"></div>

            <div className="z-10 flex flex-col gap-3">
              {/* Category tag */}
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/30 px-2.5 py-1 rounded-full">
                  {project.category}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-800 dark:text-white tracking-tight group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed line-clamp-3">
                {project.description}
              </p>
            </div>

            <div className="z-10 mt-4 flex flex-col gap-4">
              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex justify-between items-center border-t border-slate-200/40 dark:border-slate-800/40 pt-3">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs font-bold text-slate-700 hover:text-brand-purple dark:text-slate-300 dark:hover:text-brand-purple-light transition-colors cursor-pointer"
                >
                  <span>Launch Demo</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>

                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-slate-100 hover:bg-purple-600 hover:text-white dark:bg-slate-800/60 dark:hover:bg-purple-600 flex items-center justify-center text-slate-700 dark:text-slate-400 transition-all duration-300 cursor-pointer active:scale-90"
                    aria-label="View Source Code"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                    </svg>
                  </a>
                ) : (
                  <div
                    className="w-8 h-8 rounded-full bg-slate-100/50 dark:bg-slate-800/30 flex items-center justify-center text-slate-400 dark:text-slate-600 cursor-not-allowed opacity-60"
                    title="Private Source Code"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
