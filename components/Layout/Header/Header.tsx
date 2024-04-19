"use client"
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Nav from '../Nav/Nav';
import { Socials } from '@/constants';

function Header() {
    const [scroll, setScroll] = useState<Boolean>(false);
    useEffect(() => {
        const handleScroll = () => {
            const isTop = window.scrollY === 0;
            if (!isTop && !scroll) {
                setScroll(true);
            } else if (isTop && scroll) {
                setScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scroll]);

    return (
        <div className={`w-full h-[65px] fixed top-0 ${scroll ? "shadow-lg backdrop-blur-md shadow-[#2A0E61]/50 bg-[#03001417]" : ""} z-50 px-10`}>
            <div className='w-full h-full flex flex-row intems-center justify-between m-auto px-[10px]'>
                <a href='about-me' className='h-auto w-auto flex flex-row items-center'>
                    <Image
                        src='/NavLogo.png'
                        alt='logo'
                        height={70}
                        width={70}
                        className='cursor-pointer hover:animation-slowpin' />
                    <span className='font-bold ml-[10px] hidden md:block text-gray-300'>
                        JordisDev Porfolio
                    </span>
                </a>
                <div className='w-[500px] h-full flex flex-row items-center justify-between md:mr-20'>
                    <Nav />
                 
                </div>
                <div className='flex flex-row gap-5'>
                        {Socials.map((social) => (
                            <Image
                                className='cursor-pointer'
                                src={social.src}
                                alt={social.name}
                                key={social.name}
                                width={24}
                                height={24} />
                        ))
                        }
                    </div>
            </div>
        </div>
    )
}

export default Header