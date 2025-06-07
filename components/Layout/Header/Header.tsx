"use client"
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Nav from '../Nav/Nav';
import { Socials } from '@/constants';
import MenuBurger from '@/components/MenuBurger/MenuBurger';

import {
    BsLinkedin
} from "react-icons/bs";
import { FaDiscord } from "react-icons/fa6";


function Header() {
    const [scroll, setScroll] = useState<boolean>(false);
    const [showNav, setShowNav] = useState<boolean>(true)
    useEffect(() => {
        const handleScroll = () => {
            const isTop = window.scrollY === 25;
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

    // Función para comprobar si la pantalla es "md" o mayor
    const checkScreenSize = () => {
        setShowNav(window.innerWidth >= 768); // Breakpoint "md" es 768px
    };

    useEffect(() => {
        // Comprueba el tamaño de la pantalla al montar
        checkScreenSize();

        // Listener para cambios en el tamaño de la pantalla
        const handleResize = () => {
            checkScreenSize();
        };

        window.addEventListener('resize', handleResize); // Añade el listener para el evento "resize"

        // Limpieza: elimina el listener al desmontar el componente
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Solo se ejecuta al montar y desmontar el componente
    const showMenu = () => {
        setShowNav(!showNav)
    }

    return (
        <div className={`w-full h-16 fixed top-0 ${scroll ? "shadow-lg backdrop-blur-md shadow-[#2A0E61]/50 lg:bg-[#03001466] bg-[#7042f8]" : ""} z-50 px-10`}>
            <div className='w-full h-full flex flex-row intems-center justify-between m-auto px-[10px]'>
                <a href='#about' className='h-auto w-auto flex flex-row items-center'>
                    <Image
                        src='/jordisdev-logo.png'
                        alt='logo'
                        height={70}
                        width={70}
                        className='cursor-pointer hover:animation-slowpin' />
                    <span className='font-bold ml-[10px] hidden lg:block text-gray-300 button-color-hover'>
                        JordisDev Porfolio
                    </span>
                </a>
                <div className='w-[500px] relative h-full flex flex-row items-center justify-between md:mr-20'>
                    {showNav && <Nav />}
                </div>
                <div className='flex flex-row gap-5'>
                    {Socials.map(({ name, link, icon: Icon }, index) => (
                        <a key={name}
                            href={link}
                            target='_blank'
                            className='flex justify-center items-center button-color-hover'>
                            <Icon className="button-color-hover" size={28} />
                        </a>

                    ))
                    }
                </div>
                <MenuBurger onChildClick={showMenu}
                    openMenu={showNav} />
            </div>
        </div>
    )
}

export default Header