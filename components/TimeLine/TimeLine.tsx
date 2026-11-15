"use client"

import React from 'react'
import { TypeExperience } from '@/types'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface TypeTimeLine {
  Experiences: TypeExperience[]
}

function TimeLine({ Experiences }: TypeTimeLine) {
  return (
    <div className='relative w-full max-w-[1200px] mx-auto px-4 md:px-6 py-10'>
      {/* Línea vertical cósmica central */}
      <div className='absolute top-0 bottom-0 left-6 md:left-1/2 -translate-x-1/2 w-[3px] bg-gradient-to-b from-purple-500 via-cyan-400 to-purple-600 shadow-[0_0_15px_rgba(6,182,212,0.6)] z-0 rounded-full' />

      <div className='flex flex-col gap-12 md:gap-16 relative z-10'>
        {Experiences.map((experience, index) => {
          const isEven = index % 2 === 0

          return (
            <div
              key={`${experience.company}-${experience.date}`}
              className='relative flex flex-col md:flex-row items-start w-full'
            >
              {/* Nodo con icono de la empresa */}
              <div className='absolute left-6 md:left-1/2 -translate-x-1/2 top-4 w-11 h-11 md:w-13 md:h-13 rounded-full bg-[#0a051e] border-2 border-cyan-400 p-1.5 shadow-[0_0_20px_rgba(6,182,212,0.6)] flex items-center justify-center z-20 transition-transform hover:scale-110'>
                <Image
                  src={experience.icon}
                  alt={experience.company}
                  width={34}
                  height={34}
                  className='rounded-full object-contain'
                />
              </div>

              {/* Contenedor de la tarjeta (alternado en desktop, alineado a la derecha en mobile) */}
              <motion.div
                initial={{ opacity: 0, y: 30, x: isEven ? -20 : 20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.05 }}
                className={`w-full md:w-[calc(50%-45px)] pl-16 md:pl-0 ${
                  isEven ? 'md:mr-auto md:pr-4' : 'md:ml-auto md:pl-4'
                }`}
              >
                <div className='group relative rounded-2xl p-5 md:p-6 bg-[#0a051ee6] border border-[#7042f8]/40 hover:border-cyan-400 backdrop-blur-md transition-all duration-300 shadow-[0_0_20px_rgba(42,14,97,0.35)] hover:shadow-[0_0_30px_rgba(6,182,212,0.25)]'>
                  {/* Flecha conectora (en pantallas grandes) */}
                  <div
                    className={`hidden md:block absolute top-6 w-3 h-3 rotate-45 bg-[#0a051ee6] border-t border-[#7042f8]/40 ${
                      isEven
                        ? '-right-1.5 border-r border-[#7042f8]/40 group-hover:border-cyan-400'
                        : '-left-1.5 border-l border-b border-[#7042f8]/40 group-hover:border-cyan-400'
                    }`}
                  />

                  {/* Header de la tarjeta */}
                  <div className='flex flex-wrap items-center justify-between gap-2 mb-2'>
                    {/* Badge de fecha */}
                    <span className='inline-flex items-center gap-1.5 text-xs font-mono font-medium px-3 py-1 rounded-full bg-purple-950/70 text-purple-300 border border-purple-500/40 backdrop-blur-md shadow-sm'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-3.5 w-3.5 text-cyan-400'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                        />
                      </svg>
                      {experience.date}
                    </span>

                    {/* Ubicación */}
                    {experience.location && (
                      <span className='inline-flex items-center gap-1 text-[11px] text-gray-400 font-medium'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-3.5 w-3.5 text-purple-400'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                          />
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                          />
                        </svg>
                        {experience.location}
                      </span>
                    )}
                  </div>

                  {/* Título del cargo */}
                  <h3 className='text-lg md:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors'>
                    {experience.title}
                  </h3>

                  {/* Empresa */}
                  <h4 className='text-sm md:text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mt-0.5'>
                    {experience.company}
                  </h4>

                  {/* Descripción */}
                  <p className='text-xs md:text-sm text-gray-300 leading-relaxed mt-3'>
                    {experience.description}
                  </p>

                  {/* Tecnologías como tags modernos */}
                  <div className='mt-4 pt-3 border-t border-purple-500/20'>
                    <p className='text-[11px] uppercase tracking-wider font-semibold text-cyan-300 mb-2 flex items-center gap-1.5'>
                      <span className='inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse'></span>
                      Technologies & Tools
                    </p>
                    <div className='flex flex-wrap gap-1.5'>
                      {experience.technologies.map((technology) => (
                        <span
                          key={technology}
                          className='text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-cyan-950/40 text-cyan-200 border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-900/40 transition-colors'
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TimeLine
