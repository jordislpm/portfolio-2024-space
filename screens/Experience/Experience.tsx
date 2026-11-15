"use client"

import React from 'react'
import { Experiences } from '@/constants/experience'
import TimeLine from '@/components/TimeLine/TimeLine'
import { motion } from 'framer-motion'

function Experience() {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center gap-4 w-full relative z-[30] scroll-mt-28 px-4 md:px-8 py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center max-w-[800px]"
      >
        <h2 className="text-[32px] md:text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-400 to-cyan-500">
          Work Experience
        </h2>
        <p className="text-gray-300 text-sm md:text-base mt-2 max-w-[620px]">
          My journey and professional track record as a full-stack and frontend software developer.
        </p>
      </motion.div>

      <TimeLine Experiences={Experiences} />
    </section>
  )
}

export default Experience
