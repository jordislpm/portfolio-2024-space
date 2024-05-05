import React from 'react'
import HeroContent from '@/components/Sub/HeroContent'

function Hero() {
  return (
    <div className='relative flex flex-col h-full w-full -z-40'>
        <video 
        autoPlay
        muted
        loop
        className='video_hole rotate-180 absolute top-[-340px]  h-full w-full left-0 z-[1] object-cover'>
<source src='/blackhole.webm' type='video/webm'/>
        </video>
        <HeroContent/>
    </div>
  )
}

export default Hero