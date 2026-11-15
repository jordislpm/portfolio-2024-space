import React from 'react'
import SkillsDataProvider from '../SkillsDataProvider/SkillsDataProvider'
import { typeSkillsMiniSection } from '@/types'

function SkillsMiniSection({ title, data }: typeSkillsMiniSection) {
  return (
    <div className='flex flex-col items-center w-full max-w-[1100px] my-3 px-4'>
      <span className='text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-white to-cyan-300 mb-3 tracking-wide'>
        {title}
      </span>
      <div className='flex flex-row justify-center flex-wrap gap-6 items-center'>
        {data.map((image, index) => (
          <React.Fragment key={`${image.skill_name || 'skill'}-${index}`}>
            <SkillsDataProvider
              {...image}
              index={index}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default SkillsMiniSection
