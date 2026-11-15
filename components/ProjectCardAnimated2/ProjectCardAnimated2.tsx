"use client"
import React, { useState } from 'react'
import { typeProjectCard } from '@/types'
import CardProjectLink from '../CardProjectLink/CardProjectLink'
import PopUpAlertProjectLink from '../PopUpAlertProjectLink'

interface ProjectCardAnimatedProps {
  project: typeProjectCard
}

const ProjectCardAnimated2 = ({ project }: ProjectCardAnimatedProps) => {
  const {
    src,
    title,
    description,
    repository,
    liveCode,
    technologies,
    stackType,
    liveCode_state,
    repository_state,
    company
  } = project
  const [isFlipped, setIsFlipped] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [alertType, setAlertType] = useState<'liveCode' | 'repository' | null>(null)

  const handleFlip = (e: React.MouseEvent) => {
    setIsFlipped(!isFlipped)
    e.stopPropagation()
  }

  const checkOpenModal = (
    e: React.MouseEvent,
    alert: boolean | undefined,
    type: 'liveCode' | 'repository' | null
  ) => {
    if (!alert) {
      setAlertType(type)
      setIsModalOpen(true)
      e.stopPropagation()
    }
  }

  const isCompanyProject = company && company.toLowerCase() !== 'personal'
  const isFullStack = stackType.toLowerCase().includes('fullstack')

  return (
    <div className='relative w-full h-full group/card'>
      <PopUpAlertProjectLink
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        project={project}
        type={alertType}
      />

      <div
        onClick={handleFlip}
        className='border-[#2A0E61] border-[2px] hover:border-cyan-400 max-w-[500px] md:h-[460px] sm:h-[420px] h-[460px] rounded-xl cursor-pointer perspective-1000 backface-hidden overflow-hidden transition-all duration-300 shadow-[0_0_15px_rgba(42,14,97,0.4)] hover:shadow-[0_0_25px_rgba(6,182,212,0.25)]'
      >
        <div
          className={`flip-card-inner w-full h-full transition-transform duration-600 transform ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
        >
          {/* CARA FRONTAL */}
          <div
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: src.includes('billmed-landing') ? 'contain' : 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundColor: src.includes('billmed-landing') ? '#03080e' : '#030014'
            }}
            className='w-full h-full relative flip-card-front text-white rounded-xl p-4 backface-hidden flex flex-col justify-between overflow-hidden'
          >
            {/* Badges superiores */}
            <div className='flex flex-wrap gap-2 items-center justify-between z-10 w-full'>
              <span className={`text-[11px] font-medium px-2.5 py-1 rounded-full backdrop-blur-md border shadow-sm ${
                isCompanyProject
                  ? 'bg-purple-950/80 text-purple-200 border-purple-500/50'
                  : 'bg-slate-900/80 text-gray-300 border-gray-600/40'
              }`}>
                {isCompanyProject ? company : 'Personal Project'}
              </span>

              <span className={`text-[11px] font-medium px-2.5 py-1 rounded-full backdrop-blur-md border shadow-sm ${
                isFullStack
                  ? 'bg-cyan-950/80 text-cyan-300 border-cyan-400/50'
                  : 'bg-blue-950/80 text-blue-300 border-blue-400/50'
              }`}>
                {isFullStack ? 'Full Stack' : 'Frontend'}
              </span>
            </div>

            {/* Overlay inferior con información del proyecto */}
            <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/85 to-transparent pt-16 pb-4 px-4 z-10 flex flex-col gap-2 transition-all duration-300'>
              <h3 className='text-base sm:text-lg font-bold text-white group-hover/card:text-cyan-300 transition-colors line-clamp-2 drop-shadow-md'>
                {title}
              </h3>

              <div className='flex items-center justify-between text-xs pt-1 border-t border-purple-500/20'>
                <span className='text-cyan-400 flex items-center gap-1 font-medium group-hover/card:translate-x-1 transition-transform'>
                  Details & tech stack <span>&rarr;</span>
                </span>
                <span className='text-[10px] uppercase tracking-wider text-purple-300/90 bg-purple-900/40 px-2 py-0.5 rounded border border-purple-500/30'>
                  Click to flip ↻
                </span>
              </div>
            </div>
          </div>

          {/* CARA TRASERA */}
          <div
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: src.includes('billmed-landing') ? 'contain' : 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundColor: src.includes('billmed-landing') ? '#03080e' : '#030014'
            }}
            className='w-full h-full relative flip-card-back text-white rounded-xl transform rotate-y-180 backface-hidden'
          >
            <div className='flex flex-col justify-between w-full h-full p-4 bg-[#0a051ee6] backdrop-blur-md overflow-y-auto custom-scrollbar gap-3'>
              {/* Header de la tarjeta volteada */}
              <div className='flex items-center justify-between w-full pb-2 border-b border-purple-500/30'>
                <span className='text-[11px] font-medium uppercase tracking-wider text-purple-300/90 font-mono'>
                  {isCompanyProject ? company : 'Personal Project'}
                </span>
                <button
                  type='button'
                  onClick={handleFlip}
                  className='text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1 px-2.5 py-1 rounded bg-cyan-950/40 border border-cyan-500/30 transition-colors'
                  title='Volver a la portada'
                >
                  <span>↻</span> Flip
                </button>
              </div>

              {/* Título */}
              <h3 className='text-base sm:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-cyan-200 to-cyan-400'>
                {title}
              </h3>

              {/* Descripción */}
              <div className='border rounded-lg p-3 border-purple-500/30 bg-purple-950/30 backdrop-blur-sm'>
                <p className='text-xs sm:text-sm text-gray-200 leading-relaxed max-h-[110px] overflow-y-auto custom-scrollbar pr-1'>
                  {description}
                </p>
              </div>

              {/* Tecnologías como tags modernos */}
              <div className='w-full'>
                <p className='text-xs font-semibold text-cyan-300 mb-1.5 flex items-center gap-1.5'>
                  <span className='inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse'></span>
                  Tech Stack
                </p>
                <div className='flex flex-wrap gap-1.5 max-h-[90px] overflow-y-auto custom-scrollbar pr-1'>
                  {technologies.map((technology) => (
                    <span
                      key={technology}
                      className='text-[11px] px-2.5 py-0.5 rounded-md bg-cyan-950/50 text-cyan-200 border border-cyan-500/30 font-medium hover:border-cyan-400 transition-colors'
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {/* Botones de acción inferiores */}
              <div className='pt-2 mt-auto border-t border-purple-500/20 flex flex-row justify-around items-center w-full gap-2'>
                <div
                  className='flex-1'
                  onClick={(e) => {
                    e.stopPropagation()
                    checkOpenModal(e, liveCode_state, 'liveCode')
                  }}
                >
                  <div className='flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#7042f8]/20 border border-[#7042f8]/50 hover:border-cyan-400 hover:bg-cyan-950/40 transition-all justify-center group/btn'>
                    <CardProjectLink
                      link={liveCode}
                      img={'/link.svg'}
                      name='link'
                      alert={liveCode_state}
                      project={project}
                    />
                    <span className='text-xs font-medium text-gray-200 group-hover/btn:text-cyan-300 transition-colors'>
                      {liveCode_state ? 'Live Demo' : 'Live System'}
                    </span>
                  </div>
                </div>

                <div
                  className='flex-1'
                  onClick={(e) => {
                    e.stopPropagation()
                    checkOpenModal(e, repository_state, 'repository')
                  }}
                >
                  <div className='flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#7042f8]/20 border border-[#7042f8]/50 hover:border-cyan-400 hover:bg-cyan-950/40 transition-all justify-center group/btn'>
                    <CardProjectLink
                      link={repository}
                      img={'/github.svg'}
                      name='github'
                      alert={repository_state}
                      project={project}
                    />
                    <span className='text-xs font-medium text-gray-200 group-hover/btn:text-cyan-300 transition-colors'>
                      {repository_state ? 'Code' : 'Private Repo'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCardAnimated2
