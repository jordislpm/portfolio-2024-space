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
