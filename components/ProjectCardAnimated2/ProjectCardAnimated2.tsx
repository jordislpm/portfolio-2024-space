"use client"
import React, { Fragment, useState } from 'react'
import { typeProjectCard } from '@/types'
import { Source } from '@/constants'
import CardProjectLink from '../CardProjectLink/CardProjectLink'
import PopUpAlertProjectLink from '../PopUpAlertProjectLink'

interface ProjectCardAnimatedProps {
  project: typeProjectCard
}

const ProjectCardAnimated = ({ project}: ProjectCardAnimatedProps) => {
  const { src, title, description, repository, liveCode, technologies, stackType, alert } =project
  const [isFlipped, setIsFlipped] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleFlip = (e: React.MouseEvent) => {
    setIsFlipped(!isFlipped);
    e.stopPropagation();
  };

  const checkOpenModal = (e: React.MouseEvent, alert: boolean | undefined) => {

    if (alert) {
  
      console.log("open the modal")
      setIsModalOpen(true)
      e.stopPropagation();
    }
  }


  return (
    <div className='relative w-full h-full'>
      <PopUpAlertProjectLink 
      isOpen={isModalOpen} 
      setIsOpen={setIsModalOpen}
      project={project} />
      <div
        onClick={handleFlip}
        className='border border-[#2A0E61] border-[2px] hover:border-[#06b6d4] max-w-500 md:h-[450px] sm:h-[350px] h-[450px] rounded-md cursor-pointer perspective-1000 backface-hidden overflow-hidden'
      >

        <div
          className={`flip-card-inner w-full h-full transition-transform duration-600 transform ${isFlipped ? 'rotate-y-180' : ''}`}
        >
          <div
            style={{ backgroundImage: `url(${src})` }}
            className='w-full h-full group relative flip-card-front bg-cover bg-center text-white rounded-lg p-4 backface-hidden transition-transform duration-500 hover:scale-105'
          >
            <div className='absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40' />
            <div className='absolute inset-0 w-full h-full text-[15px] pb-10 hidden group-hover:flex items-center justify-center'>
              Learn more &gt;
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${src})` }}
            className='w-full h-full group relative flip-card-back bg-cover bg-center text-white rounded-md transform rotate-y-180 backface-hidden'
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
                  {/* {Source.map((source, index) => (
                  <CardProjectLink
                    key={source.name}
                    link={`${index === 0 ? liveCode : repository}`}
                    img={source.src}
                    name={source.name}/>
                ))} */}
                  <div onClick={(e) => checkOpenModal(e, alert)}>
                    <CardProjectLink link={liveCode} img={"/link.svg"} name='link' alert={alert} />
                  </div>
                  <div onClick={(e) => checkOpenModal(e, alert)}>
                    <CardProjectLink link={repository} img={"/github.svg"} name='link' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardAnimated;