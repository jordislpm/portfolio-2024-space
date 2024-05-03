import React from 'react'

function Nav() {
    return (
        <nav className='flex absolute lg:top-auto lg:left-auto top-[75px] items-center lg:flex-row flex-col justify-between w-full h-auto border border-[#7042f861] bg-[#7042f8]  lg:bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded lg:rounded-full hover:border-[#06b6d4]'>
            <a href='/#about' className='cursor-pointer text-gray-200 hover:text-[#06b6d4]'>About</a>
            <a href='/#skills' className='cursor-pointer text-gray-200 hover:text-[#06b6d4]'>Skills</a>
            <a href='/#projects' className='cursor-pointer text-gray-200 hover:text-[#06b6d4]'>Projects</a>
            <a href='/#experience' className='cursor-pointer text-gray-200 hover:text-[#06b6d4]'>Experience</a>
        </nav>
    )
}

export default Nav