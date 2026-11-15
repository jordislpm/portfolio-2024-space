"use client"
import React from 'react'

interface MenuBurgerProps {
  onChildClick: () => void
  openMenu: boolean
}

function MenuBurger({ onChildClick, openMenu }: MenuBurgerProps) {
  return (
    <button
      type="button"
      onClick={onChildClick}
      aria-label={openMenu ? "Close navigation menu" : "Open navigation menu"}
      className="lg:hidden relative p-2.5 rounded-xl bg-[#7042f8]/20 border border-[#7042f8]/50 hover:border-cyan-400 text-gray-200 hover:text-cyan-300 transition-all duration-300 shadow-[0_0_12px_rgba(112,66,248,0.3)] hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] focus:outline-none"
    >
      <div className="w-5 h-4 flex flex-col justify-between items-center relative">
        <span
          className={`h-0.5 w-full bg-cyan-300 rounded-full transition-all duration-300 ease-out origin-center ${
            openMenu ? 'rotate-45 translate-y-[7px] bg-cyan-400' : ''
          }`}
        />
        <span
          className={`h-0.5 w-full bg-purple-300 rounded-full transition-all duration-200 ${
            openMenu ? 'opacity-0 scale-0' : 'opacity-100'
          }`}
        />
        <span
          className={`h-0.5 w-full bg-cyan-300 rounded-full transition-all duration-300 ease-out origin-center ${
            openMenu ? '-rotate-45 -translate-y-[7px] bg-cyan-400' : ''
          }`}
        />
      </div>
    </button>
  )
}

export default MenuBurger
