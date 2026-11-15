"use client"

import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Nav from '../Nav/Nav'
import { Socials } from '@/constants'
import MenuBurger from '@/components/MenuBurger/MenuBurger'
import { motion, AnimatePresence } from 'framer-motion'

function Header() {
  const [scroll, setScroll] = useState<boolean>(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

  // Detección de scroll para estilizar el header fijo
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Bloqueo de scroll en el body cuando el menú móvil está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  // Cerrar menú móvil automáticamente si la ventana se agranda a desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header
        className={`w-full h-16 fixed top-0 z-50 transition-all duration-300 px-4 sm:px-8 md:px-12 ${
          scroll || isMobileMenuOpen
            ? 'shadow-lg backdrop-blur-xl bg-[#030014]/90 border-b border-[#7042f8]/40 shadow-[#2A0E61]/40'
            : 'bg-transparent'
        }`}
      >
        <div className="w-full h-full flex flex-row items-center justify-between max-w-[1400px] mx-auto">
          {/* Logo de la marca */}
          <a
            href="#about"
            onClick={closeMobileMenu}
            className="flex flex-row items-center gap-2.5 group"
          >
            <Image
              src="/jordisdev-logo.png"
              alt="JordisDev Logo"
              height={44}
              width={44}
              className="cursor-pointer object-contain transition-transform group-hover:rotate-12 duration-300"
            />
            <span className="font-bold text-base sm:text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-white to-cyan-400">
              JordisDev
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center">
            <Nav />
          </div>

          {/* Acciones de la derecha (Redes en desktop + Botón hamburguesa en móvil) */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex flex-row items-center gap-3">
              {Socials.map(({ name, link, icon: Icon }) => (
                <a
                  key={name}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="p-2 rounded-lg bg-purple-950/40 border border-purple-500/20 text-gray-300 hover:text-cyan-400 hover:border-cyan-400/60 hover:shadow-[0_0_10px_rgba(6,182,212,0.4)] transition-all"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>

            {/* Botón Hamburguesa Animado */}
            <MenuBurger
              onChildClick={toggleMobileMenu}
              openMenu={isMobileMenuOpen}
            />
          </div>
        </div>

        {/* Panel de navegación móvil (Drawer) */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="fixed inset-x-0 top-16 bg-[#030014]/98 backdrop-blur-2xl border-b border-[#7042f8]/50 p-6 flex flex-col gap-6 z-50 shadow-[0_30px_60px_rgba(42,14,97,0.9)] lg:hidden max-h-[calc(100vh-4.5rem)] overflow-y-auto"
            >
              {/* Enlaces de navegación táctiles */}
              <Nav
                isMobile
                onItemClick={closeMobileMenu}
              />

              {/* Redes sociales en móvil */}
              <div className="pt-4 border-t border-purple-500/20 flex flex-col gap-3">
                <span className="text-xs uppercase tracking-wider font-semibold text-cyan-300">
                  Connect & Social
                </span>
                <div className="flex items-center gap-3">
                  {Socials.map(({ name, link, icon: Icon }) => (
                    <a
                      key={name}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 p-2.5 rounded-xl bg-purple-950/40 border border-purple-500/30 text-gray-200 hover:text-cyan-400 hover:border-cyan-400 transition-all flex items-center justify-center gap-2 text-sm font-medium"
                    >
                      <Icon size={18} />
                      <span>{name}</span>
                    </a>
                  ))}
                </div>

                {/* Botón de contacto directo */}
                <a
                  href="https://wa.link/06tqcw"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  className="w-full mt-2 py-2.5 button-primary text-center text-white font-medium rounded-xl text-sm flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(112,66,248,0.4)]"
                >
                  <span>Contact via WhatsApp</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Elemento bloqueador de pantalla completa debajo del menú (Backdrop Blocker) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeMobileMenu}
            className="fixed inset-0 top-16 w-screen h-screen bg-black/80 backdrop-blur-md z-40 lg:hidden cursor-pointer"
            aria-label="Close menu by clicking backdrop"
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
