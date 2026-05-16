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
            className='hero_content flex flex-row items-center justify-center md:px-20 px-5  mt-40 w-full z-[20] scroll-mt-28'
            id='about'
        >
            <div className='h-full w-full flex flex-col gap-3 justify-center m-auto text-start z-[20]'>
                <motion.div
                    variants={slideInFromTop}
                    className='Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] z-[20]'
                >
                    <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
                    <h1 className='Welcome-text text-[13px]'>
                        Fullstack Developer Porfolio
                    </h1>
                </motion.div>
                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto lg:h-auto h-[191px] '
                >
                    <span className='h-auto lg:h-[180px]'>
                        Providing <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'
                        >the best </span>
                        <TypingAnimation
                            textOptions={[
                                "project experience",
                                'as a React developer',
                                'as a fullstack "MERN" developer'
                            ]}
                            time={1000}
                            className='lg:text-4xl text-[18px] text-bold text-white block' />
                    </span>

                </motion.div>
  <motion.p
  variants={slideInFromLeft(0.08)}
  className="text-lg text-gray-400 my-5 max-w-[600px] z-[20]"
>
  I&apos;m Juan Tomas, but most people call me Jordis. I&apos;m a full-stack
  web developer focused on building modern, scalable, and user-friendly web
  applications with JavaScript, TypeScript, React, Next.js, Node.js, Express,
  and PostgreSQL. Since completing my programming bootcamp in 2022, I&apos;ve
  continued growing through real-world work, personal projects, and full-stack
  development experience. I currently build software solutions for medical
  billing, claims management, reporting, and business operations, combining
  frontend development, backend logic, database design, and practical
  problem-solving. I&apos;m looking for an opportunity to contribute to a
  professional development team and help build reliable, high-quality software.
</motion.p>
                <motion.a
                    href='https://wa.link/06tqcw'
                    target='_blank'
                    variants={slideInFromLeft(1)}
                    className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] hover:text-[#06b6d4]'>
                    contact me!
                </motion.a>
            </div>
            <motion.div
                variants={slideInFromRight(0.8)}
                className='w-full h-full flex justify-center items-center z-[20]'>


                <Image

                    src="/mainIconsdark.svg"
                    alt="work icons"
                    height={650}
                    width={650}
                />
            </motion.div>
        </motion.div>
    )
}

export default HeroContent