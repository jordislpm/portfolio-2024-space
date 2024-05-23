"use client"

import ProjectCard from "@/components/ProjectCard/ProjectCard";
import React, {useRef} from "react";
import { myProjects } from "@/constants/projects";
import ProjectCardAnimated from "@/components/ProjectCardAnimated/ProjectCardAnimated";
import {motion, useScroll} from "framer-motion"
import ProjectCardAnimated2 from "@/components/ProjectCardAnimated2/ProjectCardAnimated2";
function Projects() {

const ref = useRef<HTMLElement>(null);
const {scrollYProgress} = useScroll({
target: ref,
offset:["0 1", "1.33 1"]
})


  return (
    <motion.section
    ref={ref}
      className="scroll-mt-28 flex flex-col items-center justify-center z-[30] min-h-[auto]"
      id="projects"
    >
      <h2
        className='text-[30px] font-medium mt-[10px] text-center mb-[15px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
        My Projects
      </h2>
      <div className="grid-cards-container"

      >
        {myProjects.map((project) => (
          <React.Fragment key={project.title}>
            <ProjectCardAnimated {...project} />
          </React.Fragment>
        ))}
         {myProjects.map((project) => (
          <React.Fragment key={project.title}>
            <ProjectCardAnimated2 {...project} />
          </React.Fragment>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;