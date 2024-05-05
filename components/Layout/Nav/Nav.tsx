import React from 'react'



function Nav() {

    const routes = ["About", "Skills", "Projects", "Experience"]


    return (
        <nav className='flex text-[20px] absolute lg:top-auto lg:left-auto top-[75px] items-center lg:flex-row flex-col justify-between w-full h-auto border border-[#7042f861] bg-[#7042f8]  lg:bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded lg:rounded-full hover:border-[#06b6d4]'>
            {routes.map((route)=>(
                <a key={route} href={`/#${route.toLowerCase()}`} className='cursor-pointer text-gray-200 text-[15px] hover:text-[#06b6d4]'>{route}</a>
            ))}
        </nav>
    )
}

export default Nav