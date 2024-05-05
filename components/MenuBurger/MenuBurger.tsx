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
         className={`cursor-pointer w-full h-auto md:w-[30px] absolute left-3 rounded  ${openMenu ? "bg-[#7042f861] border-[1px] border-[#06b6d4]" : ""}`}
         src="/close-white.svg"
         alt="/close-white.svg"
         width={20}
         height={20} /> :
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