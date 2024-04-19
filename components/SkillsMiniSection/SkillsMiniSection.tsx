import React from 'react'
import SkillsDataProvider from '../SkillsDataProvider/SkillsDataProvider';
import { typeSkillsMiniSection } from '@/types';




function SkillsMiniSection({title , data}: typeSkillsMiniSection) {
  return (
    <div className='flex flex-col items-center text-2xl font-bold text-white w-auto h-auto'>
                <span>{title}</span>
                <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
                    {data.map((image, index) => (
                        <SkillsDataProvider
                        Image_src={image.Image_src}
                            width={image.width}
                            height={image.height}
                            index={index}
                            key={index}
                        />)
                    )}
                </div>
            </div>
  )
}

export default SkillsMiniSection