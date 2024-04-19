"use client"
import React from 'react'
import { typeProjectCard } from '@/types'
import Image from 'next/image'

function ProjectCard({ src, title, description }: typeProjectCard) {
    return (
        <div className='relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] max-w-500'>
            <Image
                src={src}
                alt={title}
                width={800}
                height={800}
                className="w-full object-contain"
            />

            <div className="relative p-4">
                <h1 className="text-2xl font-semibold text-white">{title}</h1>
                <p className="mt-2 text-gray-300">{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;