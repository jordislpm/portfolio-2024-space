import React from 'react'
import { Experiences } from '@/constants/experience'
import { TypeExperience } from '@/types'

function Experience() {
    return (
        <section
            id="experience"
            className="flex flex-col items-center justify-center gap-3 h-full relative z-[30] scroll-mt-28"
            style={{ transform: "scale(0.9" }}
        >
            <h2
                className='text-[30px] font-medium mt-[10px] text-center mb-[15px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
                Work experience
            </h2>
            <div className='text-white'>
                {Experiences.map((experience, index) => (
                    <div key={`${experience.year} ${index}`}
                        className='mb-[30px] flex  lg:justify-center bg-[#2A0E61] pb-[30px]'>
                        <div className='w-full lg:W-1/4'>
                            <p className='mb-2 text-m text-neutral-400'>{experience.year}</p>
                        </div>
                        <div className='w-full max-w-xl lg:w-3/4'>
                            <h2 className='mb-2 font-semibold'>
                                {experience.role} -{" "}
                                <span className='text-sm text-purple-100'>
                                    {experience.company}
                                </span>
                            </h2>
                            <p className='mb-4 text-neutral-400'>{experience.description}</p>
                            {experience.technologies.map((tech, index) => (
                                <span key={index}
                                    className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            pepa
        </section>
    )
}

export default Experience