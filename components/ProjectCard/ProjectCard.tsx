"use client"
import React from 'react'
import { typeProjectCard } from '@/types'
import Image from 'next/image'
import { Source } from '@/constants'

function ProjectCard({ src, title, description, repository, liveCode }: typeProjectCard) {
    return (
        <div className='overflow-hidden rounded-lg  border border-[#2A0E61] max-w-500'>
            <Image
                src={src}
                alt={title}
                width={800}
                height={800}
                className="w-full object-contain"
            />
            <div className='flex flex-col justify-center items-center p-4'>
                <h1 className="text-2xl font-semibold text-white">{title}</h1>
                <div className="flex w-full justify-around gap-1">
                    <p className="mt-2 text-gray-300">{description}</p>
                    <div className='button-primary flex flex-col justify-between rounded w-[70px] p-2'>
                        <a className='cursor-pointer'
                            href={repository}
                            target='_blank'>
                            <Image
                                className='project_link'
                                src={Source[0].src}
                                alt={Source[0].name}
                                key={Source[0].name}
                                width={40}
                                height={40} />
                        </a>
                        <a className='cursor-pointer'
                            href={liveCode}
                            target='_blank'>
                            <Image
                                className='project_link'
                                src={Source[1].src}
                                alt={Source[1].name}
                                key={Source[1].name}
                                width={40}
                                height={40} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;