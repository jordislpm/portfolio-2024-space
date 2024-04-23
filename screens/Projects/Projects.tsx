import ProjectCard from "@/components/ProjectCard/ProjectCard";
import React from "react";
import { myProjects } from "@/constants/projects";
import ProjectCardAnimated from "@/components/ProjectCardAnimated/ProjectCardAnimated";

function Projects() {
  return (
    <section
      className="flex flex-col items-center justify-center py-20 z-[30]"
      id="#projects"
    >
      <h2 
      className='text-[30px] font-medium mt-[10px] text-center mb-[15px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
        My Projects
      </h2>
      <div className="grid-cards-container"
       
      >
        {/* {myProjects.map((project) => (
          <ProjectCard
            key={project.title}
            src={project.src}
            title={project.title}
            description={project.description}
            liveCode={project.liveCode} 
            repository={project.repository}
            technologies={project.technologies}
            stackType={project.stackType}/>
        ))} */}
                {myProjects.map((project) => (
          <ProjectCardAnimated
            key={project.title}
            src={project.src}
            title={project.title}
            description={project.description}
            liveCode={project.liveCode} 
            repository={project.repository}
            technologies={project.technologies}
            stackType={project.stackType}/>
        ))}
      </div>
    </section>
  );
};

export default Projects;