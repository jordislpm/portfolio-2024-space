"use client"
import React from 'react'
import { typeProjectCard } from '@/types'
import Image from 'next/image'
import { Source } from '@/constants'

function ProjectCard({ src, title, description, repository, liveCode, stackType, technologies }: typeProjectCard) {

    
    return (
        <div 
        className='overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] max-w-500'
        >
            <Image
                src={src}
                alt={title}
                width={800}
                height={800}
                className="w-full object-contain"
            />
            <div className='flex flex-col justify-center items-center p-4'>
                <h1 className="text-2xl font-semibold text-white">{title}</h1>
                <div className="flex w-full justify-around gap-1 min-h-[100px]">
                    <div>
                    <p className="mt-2 text-gray-300">{description}</p>
                    <p className="mt-2 text-gray-300">
                        The project was implemented using: 
                        {technologies.map((tecnology)=>(
                            <p className="inline"key={tecnology}> {tecnology} |</p>
                        ))} 
                    </p>
                    </div>
                    <div className='flex flex-col justify-between items-center w-[70px] min-h-[30] '>
                        <a className='flex button-primary cursor-pointer p-2 w-[40px] rounded'
                            href={liveCode}
                            target='_blank'
                         >
                            <Image
                                className='project_link'
                                src={Source[0].src}
                                alt={Source[0].name}
                                key={Source[0].name}
                                width={35}
                                height={35} />
                        </a>
                        <a className='flex button-primary cursor-pointer p-2 w-[40px] rounded'
                            href={repository}
                            target='_blank'>
                            <Image
                                className='project_link'
                                src={Source[1].src}
                                alt={Source[1].name}
                                key={Source[1].name}
                                width={35}
                                height={35} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;