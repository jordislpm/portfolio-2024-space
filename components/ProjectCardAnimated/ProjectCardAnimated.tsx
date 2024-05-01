"use client"
import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { typeProjectCard } from '@/types'
import Image from 'next/image'
import { Source } from '@/constants'



const ProjectCardAnimated = ({ src, title, description, repository, liveCode, technologies, stackType}: typeProjectCard) => {
    const [isFlipped, setIsFlipped] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    function handleFlip() {
        if(!isAnimating) {
            setIsFlipped(!isFlipped)
            setIsAnimating(true)
        }
    }
  return (
    <div
    onClick={handleFlip}
    className='border border-[#2A0E61] max-w-500  h-[400px] rounded-md cursor-pointer overflow-hidden'>
        <motion.div
        className='flip-card-inner w-full h-full'
        initial={false}
        animate={{rotateY: isFlipped ? 180 : 360}}
        transition={{ duration: 0.6, animationDirection: 'normal'}}
        onAnimationComplete={() => setIsAnimating(false)}
        >
            <div
            style={{backgroundImage: `url(${src})`}}
            className='w-full h-full group relative flip-card-front bg-cover bg-center text-white rounded-lg p-4'>
                    <div  className='absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40'/>
                    <div className='absolute inset-0 w-full h-full text-[20px] pb-10 hidden group-hover:flex items-center z-[20] justify-center'>
                    Learn more &gt;
                    </div>
            </div>
            <div
            style={{backgroundImage: `url(${src})`}}
            className='w-full h-full group relative flip-card-back bg-cover bg-center text-white rounded-lg'>
<div className='flex flex-col w-full h-full justify-around items-center p-1 bg-black opacity-75'>
                <h1 className="text-2xl font-semibold text-white">{title}</h1>
                <div className="flex w-full justify-around gap-1 min-h-[100px]">
                    <div>
                    <div className="border p-1">
                    <p className="mt-2 text-black-300">{description}</p>
                    </div>
                    <p className="mt-2 text-white">
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
        </motion.div>
    </div>
  )
}

export default ProjectCardAnimated