import React from 'react'
import Image from 'next/image'
import { CardProjectLinkProps } from '@/types';



function CardProjectLink({link, name, img}:CardProjectLinkProps) {
    const handleLinkClick = (e: React.MouseEvent | React.TouchEvent) => {
        e.stopPropagation();
      };
  return (
                <a
                    className='flex button-primary cursor-pointer p-2 w-[40px] rounded z-50 hover:border hover:border-[#06b6d4]'
                    href={link}
                    onClick={handleLinkClick}
                    onTouchEnd={handleLinkClick}
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

export default CardProjectLink