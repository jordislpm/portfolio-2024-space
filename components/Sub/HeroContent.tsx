"use client"
import React from 'react'
import { motion } from "framer-motion"
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utilities/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import TypingAnimation from '../TypingAnimation/TypingAnimation'

function HeroContent() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="hero_content flex flex-col lg:flex-row items-center justify-between md:px-20 px-6 mt-36 lg:mt-40 w-full z-[20] scroll-mt-28 gap-10"
      id="about"
    >
      <div className="h-full w-full flex flex-col gap-4 justify-center text-start z-[20] max-w-[680px]">
        {/* Welcome Badge */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-3.5 border border-[#7042f88b] opacity-[0.95] z-[20] backdrop-blur-md"
        >
          <SparklesIcon className="text-[#b49bff] mr-2 h-5 w-5 animate-pulse" />
          <h1 className="Welcome-text text-[13px] font-semibold tracking-wide">
            Full-Stack Software Developer
          </h1>
        </motion.div>

        {/* Dynamic Heading with Typing Animation */}
        <motion.div
          variants={slideInFromLeft(0.4)}
          className="flex flex-col gap-2 mt-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
        >
          <span>
            Engineering{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-400 to-cyan-500">
              scalable & modern
            </span>
          </span>
          <TypingAnimation
            textOptions={[
              "Full-Stack Web Applications",
              "Enterprise Healthcare Systems",
              "Next.js & React Architectures",
              "REST APIs & Database Solutions"
            ]}
            time={1800}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-300 block min-h-[44px]"
          />
        </motion.div>

        {/* Bio Paragraph with Subtle Tech Highlights */}
        <motion.p
          variants={slideInFromLeft(0.6)}
          className="text-sm sm:text-base text-gray-300 my-2 max-w-[620px] z-[20] leading-relaxed"
        >
          I&apos;m <span className="text-white font-semibold">Juan Tomas</span> (better known as{" "}
          <span className="text-cyan-400 font-semibold">Jordis</span>), a full-stack developer specialized in building robust, performant web applications with{" "}
          <span className="text-purple-300 font-medium">React</span>,{" "}
          <span className="text-cyan-300 font-medium">Next.js</span>,{" "}
          <span className="text-purple-300 font-medium">TypeScript</span>,{" "}
          <span className="text-cyan-300 font-medium">Node.js</span>, and{" "}
          <span className="text-purple-300 font-medium">PostgreSQL</span>. Currently engineering systems for international medical billing, claims management, reporting, and workflow automation.
        </motion.p>

        {/* Quick Highlights / Stats Grid */}
        <motion.div
          variants={slideInFromLeft(0.75)}
          className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 my-2 w-full max-w-[620px] z-[20]"
        >
          <div className="p-3 rounded-xl bg-[#0a051ee6] border border-purple-500/30 backdrop-blur-md shadow-sm">
            <div className="text-cyan-400 font-bold text-lg sm:text-xl">2+ Years</div>
            <div className="text-gray-400 text-xs mt-0.5">Production Experience</div>
          </div>
          <div className="p-3 rounded-xl bg-[#0a051ee6] border border-purple-500/30 backdrop-blur-md shadow-sm">
            <div className="text-purple-300 font-bold text-lg sm:text-xl">Full-Stack</div>
            <div className="text-gray-400 text-xs mt-0.5">Frontend, APIs & DBs</div>
          </div>
          <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-[#0a051ee6] border border-purple-500/30 backdrop-blur-md shadow-sm">
            <div className="text-teal-300 font-bold text-lg sm:text-xl">Healthcare</div>
            <div className="text-gray-400 text-xs mt-0.5">Enterprise Systems</div>
          </div>
        </motion.div>

        {/* Dual CTA Buttons */}
        <motion.div
          variants={slideInFromLeft(0.9)}
          className="flex flex-wrap items-center gap-3 mt-3 z-[20]"
        >
          <a
            href="https://wa.link/06tqcw"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 button-primary text-center text-white font-medium cursor-pointer rounded-lg hover:text-[#06b6d4] transition-all shadow-[0_0_15px_rgba(112,66,248,0.4)] hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] flex items-center justify-center gap-2 text-sm"
          >
            <span>Get in touch</span>
            <span>&rarr;</span>
          </a>

          <a
            href="#projects"
            className="px-6 py-2.5 rounded-lg border border-[#7042f8]/60 bg-[#0a051e]/80 text-gray-200 font-medium hover:border-cyan-400 hover:text-cyan-300 transition-all backdrop-blur-md flex items-center justify-center gap-2 text-sm"
          >
            <span>Explore Projects</span>
            <span className="text-xs">&darr;</span>
          </a>
        </motion.div>
      </div>

      {/* Right Side Cosmic Icons Banner */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full lg:w-1/2 flex justify-center items-center z-[20] mt-6 lg:mt-0"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
          priority
          className="max-w-[450px] lg:max-w-[600px] w-full h-auto object-contain"
        />
      </motion.div>
    </motion.div>
  )
}

export default HeroContent
