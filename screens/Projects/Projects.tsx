"use client"

import React, { useRef, useState, useMemo } from "react";
import { myProjects } from "@/constants/projects";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCardAnimated2 from "@/components/ProjectCardAnimated2/ProjectCardAnimated2";

type FilterType = "all" | "fullstack" | "frontend";

function Projects() {
  const ref = useRef<HTMLElement>(null);
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filterOptions: { label: string; value: FilterType; count: number }[] = useMemo(() => [
    { label: "All Projects", value: "all", count: myProjects.length },
    {
      label: "Full Stack",
      value: "fullstack",
      count: myProjects.filter((p) => p.stackType.toLowerCase().includes("fullstack")).length,
    },
    {
      label: "Frontend",
      value: "frontend",
      count: myProjects.filter(
        (p) => !p.stackType.toLowerCase().includes("fullstack") || p.stackType.toLowerCase().includes("frontend")
      ).length,
    },
  ], []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return myProjects;
    if (activeFilter === "fullstack") {
      return myProjects.filter((p) => p.stackType.toLowerCase().includes("fullstack"));
    }
    if (activeFilter === "frontend") {
      return myProjects.filter(
        (p) => !p.stackType.toLowerCase().includes("fullstack") || p.stackType.toLowerCase().includes("frontend")
      );
    }
    return myProjects;
  }, [activeFilter]);

  return (
    <motion.section
      ref={ref}
      className="scroll-mt-28 flex flex-col items-center justify-center z-[30] min-h-[auto] px-4 md:px-[50px] py-[50px]"
      id="projects"
    >
      <div className="flex flex-col items-center text-center mb-8 max-w-[800px]">
        <h2 className="text-[32px] md:text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-400 to-cyan-500">
          Featured Projects
        </h2>
        <p className="text-gray-300 text-sm md:text-base mt-2 max-w-[620px]">
          A showcase of full-stack platforms, healthcare systems, and web applications developed with modern technologies.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6 p-1.5 rounded-full bg-[#030014]/80 border border-[#7042f8]/40 backdrop-blur-md shadow-[0_0_15px_rgba(112,66,248,0.2)]">
          {filterOptions.map((filter) => {
            const isActive = activeFilter === filter.value;
            return (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`relative px-4 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 flex items-center gap-1.5 ${
                  isActive
                    ? "text-white shadow-[0_0_12px_rgba(6,182,212,0.5)]"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterPill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#7042f8] to-[#06b6d4] -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span>{filter.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? "bg-white/20 text-white" : "bg-purple-950/60 text-purple-300 border border-purple-500/20"
                  }`}
                >
                  {filter.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid de Proyectos */}
      <motion.div layout className="grid_cards_container w-full max-w-[1400px]">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <ProjectCardAnimated2 project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
}

export default Projects;
