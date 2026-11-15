"use client"

import React, { useState, useEffect } from 'react'

interface NavProps {
  onItemClick?: () => void
  isMobile?: boolean
}

function Nav({ onItemClick, isMobile }: NavProps) {
  const [activeSection, setActiveSection] = useState<string>("about")

  const routes = [
    { id: "about", name: "About", href: "/#about", number: "01" },
    { id: "skills", name: "Skills", href: "/#skills", number: "02" },
    { id: "projects", name: "Projects", href: "/#projects", number: "03" },
    { id: "experience", name: "Experience", href: "/#experience", number: "04" },
  ]

  // Scroll Spy con IntersectionObserver
  useEffect(() => {
    const sectionIds = ["about", "skills", "projects", "experience"]

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -50% 0px",
      threshold: 0,
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  if (isMobile) {
    return (
      <nav className="flex flex-col gap-2.5 w-full">
        {routes.map((route) => {
          const isActive = activeSection === route.id
          return (
            <a
              key={route.name}
              href={route.href}
              onClick={onItemClick}
              className={`flex items-center justify-between p-3.5 rounded-xl border transition-all duration-300 group ${
                isActive
                  ? "bg-purple-950/70 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                  : "bg-purple-950/40 border-purple-500/30 text-gray-200 hover:border-cyan-400 hover:bg-cyan-950/40 hover:text-cyan-300"
              }`}
            >
              <div className="flex items-center gap-2">
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                )}
                <span className="text-base font-semibold group-hover:translate-x-1.5 transition-transform">
                  {route.name}
                </span>
              </div>
              <span className={`text-xs font-mono ${isActive ? "text-cyan-400" : "text-purple-400"}`}>
                {route.number}
              </span>
            </a>
          )
        })}
      </nav>
    )
  }

  return (
    <nav className="hidden lg:flex items-center justify-between gap-3 px-4 py-1.5 rounded-full border border-[#7042f8]/40 bg-[#030014]/75 backdrop-blur-md shadow-[0_0_15px_rgba(112,66,248,0.2)] hover:border-cyan-400/50 transition-all">
      {routes.map((route) => {
        const isActive = activeSection === route.id
        return (
          <a
            key={route.name}
            href={route.href}
            className={`relative text-xs xl:text-sm font-medium transition-all duration-300 cursor-pointer py-1 px-3 rounded-full flex items-center gap-1.5 ${
              isActive
                ? "text-white bg-[#7042f8]/40 border border-cyan-400/60 shadow-[0_0_12px_rgba(6,182,212,0.35)]"
                : "text-gray-300 hover:text-cyan-300"
            }`}
          >
            {isActive && (
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            )}
            <span>{route.name}</span>
          </a>
        )
      })}
    </nav>
  )
}

export default Nav
