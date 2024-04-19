"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utilities/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import TypingAnimation from '../TypingAnimation/TypingAnimation'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
<motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Think better with Next js 13
          </h1>
        </motion.div>
        <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
        >
            Making apps with modern technologies
        </motion.div>
        <motion.div
        variants={slideInFromRight(0.5)}
        className='text-[30px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-10 mt-[10px] text-center'
        >
            <TypingAnimation
            className='text-[30px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-10 mt-[10px] text-center'
            time={2000}
            textOptions={["Never miss a task", "Never miss a deadline", "Never miss a idea"]}
            />
        </motion.div>
    </div>
  )
}

export default SkillText