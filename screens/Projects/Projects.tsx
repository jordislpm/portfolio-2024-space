import ProjectCard from "@/components/ProjectCard/ProjectCard";
import React from "react";
import { typeMyProjects } from "@/types";
import { myProjects } from "@/constants/projects";
import CardAnimated from "@/components/CardAnimated/CardAnimated";


function Projects (){
  return (
    <section
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h2 className='text-[30px] font-medium mt-[10px] text-center mb-[15px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
        My Projects
      </h2>
      <div className="grid-cards-container">
     {myProjects.map((project)=>(
<ProjectCard
key={project.title}
src={project.src}
title={project.title}
description={project.description}/>
     ))}


{myProjects.map((project)=>(
<CardAnimated
key={project.title}
src={project.src}
title={project.title}
description={project.description}/>
     ))}
      </div>
    </section>
  );
};

export default Projects;