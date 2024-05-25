
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
    repository:string;
    technologies: string[];
    stackType: string
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
}