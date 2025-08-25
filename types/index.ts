import React from "react";

export interface typeSkillDataProvider{
    Image_src: string;
    width: number;
    height: number;
    skill_name?: string;
}

export interface typeSkillsMiniSection  {
    title: string
    data: typeSkillDataProvider[];
}

export interface typeProjectCard{
    src: string;
    title: string;
    description: string;
    liveCode: string;
    liveCode_state: boolean;
    repository_state: boolean;
    repository:string;
    technologies: string[];
    stackType: string;
    alert?: boolean;
    company: string;
    demo?: string;
    repositoryMessage?: string;
    liveCodeMessage?: string;
}

export interface typeMyProjects{
   data: typeProjectCard[];
}

export interface typesTypingAnimation{
    textOptions: string[]
    time: number;
    className: string
}

export interface TypeExperience {
    date: string,
    title:string,
    company: string,
    description: string,
    technologies: string[]
    icon: string;
}

export interface CardProjectLinkProps {
    link: string;
    name: string;
    img: string;
    alert?: boolean;
    project: typeProjectCard;
}