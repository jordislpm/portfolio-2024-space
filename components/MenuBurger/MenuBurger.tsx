"use client"
import React from 'react'
import Image from 'next/image';

interface MenuBurgerProps {
    onChildClick: () => void;
    openMenu: boolean;
  }

function MenuBurger({ onChildClick, openMenu }: MenuBurgerProps) {
    
    const toggleOpen = ()=>{
        onChildClick()
    }

  return (
    <div onClick={toggleOpen}
    className='block lg:hidden'>
        <div className='relative flex justify-center items-center w-[25px] h-full bg-green p-auto'>
        {openMenu ?
         <Image
         className='cursor-pointer w-full h-full md:w-[30px] absolute left-3'
         src="/close-white.svg"
         alt="/close-white.svg"
         width={15}
         height={15} /> :
         <Image
         className='cursor-pointer w-full h-full md:w-[30px] absolute left-3'
         src="/menu-white.svg"
         alt="/menu-white.svg"
         width={15}
         height={15} />}
        </div>
    </div>
  )
}

export default MenuBurger