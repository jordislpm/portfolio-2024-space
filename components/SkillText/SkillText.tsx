"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utilities/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import TypingAnimation from '../TypingAnimation/TypingAnimation'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center px-4'>
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-3 border border-[#7042f88b] opacity-[0.95] backdrop-blur-md"
      >
        <SparklesIcon className="text-[#b49bff] mr-2 h-5 w-5 animate-pulse" />
        <h1 className="Welcome-text text-[13px] font-semibold">
          Modern Tech Stack with Next.js 14
        </h1>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[28px] sm:text-[34px] text-white font-bold mt-[12px] text-center mb-[10px]'
      >
        Building scalable apps with modern technologies
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className='text-[24px] sm:text-[30px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-8 mt-[5px] text-center'
      >
        <TypingAnimation
          className='min-h-[64px] sm:min-h-[44px] flex items-center justify-center text-[22px] sm:text-[28px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-400 to-cyan-500 mb-6 text-center leading-tight'
          time={2000}
          textOptions={[
            "Clean code architecture",
            "Scalable full-stack logic",
            "High-performance user interfaces",
            "Reliable production systems"
          ]}
        />
      </motion.div>
    </div>
  )
}

export default SkillText
