"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { typeProjectCard } from '@/types'
import Image from 'next/image'
import { Source } from '@/constants'



const ProjectCardAnimated = ({ src, title, description, repository, liveCode, technologies, stackType }: typeProjectCard) => {
    const [isFlipped, setIsFlipped] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    const handleFlip = () => {
      setIsFlipped(!isFlipped);
    };
  
    const handleLinkClick = (e: React.MouseEvent) => {
      e.stopPropagation();
    };
  
    return (
      <div
        onClick={handleFlip}
        className='border border-[#2A0E61] max-w-500 md:h-[550px] sm:h-[500px] h-[500px] rounded-md cursor-pointer perspective-1000'
      >
        <div
          className={`flip-card-inner w-full h-full transition-transform duration-600 transform ${isFlipped ? 'rotate-y-180' : ''}`}
        >
          <div
            style={{ backgroundImage: `url(${src})` }}
            className='w-full h-full group relative flip-card-front bg-cover bg-center text-white rounded-lg p-4 backface-hidden'
          >
            <div className='absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40' />
            <div className='absolute inset-0 w-full h-full text-[20px] pb-10 hidden group-hover:flex items-center justify-center'>
              Learn more &gt;
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${src})` }}
            className='w-full h-full group relative flip-card-back bg-cover bg-center text-white rounded-lg transform rotate-y-180 backface-hidden'
          >
            <div className='flex flex-col w-full h-full justify-around items-center p-1 bg-black opacity-85'>
              <h1 className='text-2xl font-semibold text-white'>{title}</h1>
              <div className='flex w-full flex-col justify-around gap-1 min-h-[100px]'>
                <div>
                  <div className='border rounded p-1 border-[#06b6d4] bg-[#7042f899]'>
                    <p className='mt-2 text-white'>{description}</p>
                  </div>
                  <p className='mt-2 text-white'>
                    The project was implemented using: |
                    {technologies.map((technology) => (
                      <span className='inline' key={technology}> {technology} |</span>
                    ))}
                  </p>
                </div>
                <div className='flex flex-row justify-around items-center w-full h-full'>
                  <a
                    className='flex button-primary cursor-pointer p-2 w-[40px] rounded z-50 hover:border hover:border-[#06b6d4]'
                    href={liveCode}
                    onClick={handleLinkClick}
                  >
                    <Image
                      className='project_link'
                      src={Source[0].src}
                      alt={Source[0].name}
                      key={Source[0].name}
                      width={35}
                      height={35}
                    />
                  </a>
                  <a
                    className='flex button-primary cursor-pointer p-2 w-[40px] rounded z-50 hover:border hover:border-[#06b6d4]'
                    href={repository}
                    onClick={handleLinkClick}
                  >
                    <Image
                      className='project_link'
                      src={Source[1].src}
                      alt={Source[1].name}
                      key={Source[1].name}
                      width={35}
                      height={35}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };


export default ProjectCardAnimated