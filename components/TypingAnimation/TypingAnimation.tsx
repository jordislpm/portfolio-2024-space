import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { typesTypingAnimation } from '@/types';

function TypingAnimation({className, textOptions, time}:typesTypingAnimation) {
  
  const sequenceResult: (number | string)[] = textOptions.reduce((acc: (number | string)[], text: string, index: number) => {
    acc.push(text);
    if (index !== textOptions.length - 1) {
        acc.push(time);
    }
    return acc;
}, []);
  
  
  return (
    <TypeAnimation
      sequence={sequenceResult}
      wrapper="p"
      speed={15}
    //   style={{ display: 'inline-block' }}
      repeat={Infinity}
      className={className}
    />
  )
}

export default TypingAnimation