import React from 'react'
import Image from 'next/image'
import { CardProjectLinkProps } from '@/types'

function CardProjectLink({ link, name, img, alert }: CardProjectLinkProps) {
  if (!alert) {
    return (
      <div
        onClick={(e) => e.stopPropagation()}
        className='flex button-primary cursor-pointer p-2 w-[40px] rounded z-60 hover:border hover:border-[#06b6d4]'
        rel="noopener noreferrer"
      >
        <Image
          className='project_link'
          src={img}
          alt={name}
          key={name}
          width={35}
          height={35}
        />
      </div>
    )
  } else {
    return (
      <a
        onClick={(e) => e.stopPropagation()}
        className='flex button-primary cursor-pointer p-2 w-[40px] rounded z-60 hover:border hover:border-[#06b6d4]'
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className='project_link'
          src={img}
          alt={name}
          key={name}
          width={35}
          height={35}
        />
      </a>
    )
  }
}

export default CardProjectLink
