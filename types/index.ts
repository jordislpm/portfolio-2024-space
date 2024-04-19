
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
}

export interface typeMyProjects{
   data: typeProjectCard[];
}

export interface typesTypingAnimation{
    textOptions: string[]
    time: number;
    className: string
}