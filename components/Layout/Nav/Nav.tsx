import React from 'react'

function Nav() {
    return (
        <nav className='flex absolute md:top-auto md:left-auto top-[75px] items-center md:flex-row flex-col justify-between w-full h-auto border border-[#7042f861] bg-[#7042f861] md:bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded md:rounded-full text-gray-200'>
            <a href='/#about-me' className='cursor-pointer'>About Me</a>
            <a href='/skills' className='cursor-pointer'>Skills</a>
            <a href='/proyects' className='cursor-pointer'>Proyects</a>
            <a href='/experience' className='cursor-pointer'>Experience</a>
        </nav>
    )
}

export default Nav