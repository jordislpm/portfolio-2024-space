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
            className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20] scroll-mt-28'
            id='about'
        >
            <div className='h-full w-full flex flex-col gap-3 justify-center m-auto text-start'>
                <motion.div
                    variants={slideInFromTop}
                    className='Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]'
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
                    <span>
                    Providing <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'
                    >the best </span>
                    <TypingAnimation 
                    textOptions={[
                        "project experience",
                        'as a React developer',
                        'as a fullstack "MERN" developer'
                    ]}
                    time={1000}
                    className='lg:text-4xl text-[18px] text-bold text-white block'/>
                    </span>
                    
                </motion.div>
                <motion.p
                    variants={slideInFromLeft(.08)}
                    className='text-lg text-gray-400 my-5 max-w-[600px]'>
                    I&apos;m Juan tomas but everybody calls me Jordis. I&apos;m a fullstack web developer with expertise in JavaScript. After completing a programming bootcamp in 2022, I&apos;ve continued honing my skills through personal projects and have been professionally working as a frontend developer since January 2023. I thrive on challenging projects where I can learn and create products that are both useful and professional. I&apos;m ready to bring my experience to your team!
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
            className='w-full h-full flex justify-center items-center'>
            
            
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