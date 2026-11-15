"use client"
import React from 'react'
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from 'next/image'
import { typeSkillDataProvider } from '@/types'

interface Props extends typeSkillDataProvider {
  index: number
}

function SkillsDataProvider({ Image_src, width, height, index, skill_name }: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true
  })

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  }
  const animationDelay = 0.15

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay, duration: 0.3 }}
      className="group relative flex items-center justify-center transition-transform duration-200 hover:scale-110 cursor-pointer"
      title={skill_name}
    >
      <Image
        src={Image_src}
        width={width}
        height={height}
        alt={skill_name || "tech skill"}
        className="object-contain drop-shadow-[0_0_8px_rgba(112,66,248,0.25)] group-hover:drop-shadow-[0_0_12px_rgba(6,182,212,0.6)] transition-all"
      />
    </motion.div>
  )
}

export default SkillsDataProvider
