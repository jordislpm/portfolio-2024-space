import React from 'react'
import { TypeAnimation } from 'react-type-animation';

function TypingAnimationAbout() {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'project experience',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'as a frontend developer',
        1000,
        'as a React developer',
        1000,
        'as a fullstack "MERN" developer',
        1000
      ]}
      wrapper="p"
      speed={15}
    //   style={{ display: 'inline-block' }}
      repeat={Infinity}
      className='text-4xl text-bold text-white block'
    />
  )
}

export default TypingAnimationAbout