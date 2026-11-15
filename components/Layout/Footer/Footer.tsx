"use client"

import React from "react";
import Image from "next/image";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/jordislpm",
      icon: RxGithubLogo,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/juan-tomas-de-pena-medina/",
      icon: RxLinkedinLogo,
    },
    {
      name: "Discord",
      href: "https://discord.com/users/jordislpm",
      icon: RxDiscordLogo,
    },
  ];

  return (
    <footer className="w-full relative z-[30] mt-20 border-t border-[#7042f8]/30 bg-[#030014]/85 backdrop-blur-md text-gray-300">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-purple-500/20">
          {/* Brand Column */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <a href="#about" className="flex items-center gap-2 group w-fit">
              <Image
                src="/jordisdev-logo.png"
                alt="JordisDev Logo"
                width={40}
                height={40}
                className="object-contain transition-transform group-hover:rotate-12 duration-300"
              />
              <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                JordisDev
              </span>
            </a>
            <p className="text-sm text-gray-400 max-w-[380px] leading-relaxed">
              Full-stack software developer engineering scalable web applications, business platforms, and enterprise healthcare solutions.
            </p>
            {/* Status Pill */}
            <div className="flex items-center gap-2 mt-1">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-emerald-400">
                Available for full-time & remote roles
              </span>
            </div>
          </div>

          {/* Quick Navigation Column */}
          <div className="flex flex-col gap-3">
            <span className="text-sm font-semibold uppercase tracking-wider text-cyan-300">
              Navigation
            </span>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5 w-fit group"
                  >
                    <span className="text-purple-400 group-hover:translate-x-0.5 transition-transform">
                      &rsaquo;
                    </span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Contact Column */}
          <div className="flex flex-col gap-3">
            <span className="text-sm font-semibold uppercase tracking-wider text-cyan-300">
              Connect
            </span>
            <div className="flex flex-col gap-2.5">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors w-fit group"
                  >
                    <span className="p-1.5 rounded-md bg-purple-950/50 border border-purple-500/30 group-hover:border-cyan-400 transition-colors">
                      <Icon className="text-base" />
                    </span>
                    <span>{social.name}</span>
                  </a>
                );
              })}

              <a
                href="mailto:jordislpm@gmail.com?subject=I'm%20interested%20in%20you%20as%20a%20software%20developer"
                className="mt-1 text-xs text-purple-300 hover:text-cyan-300 transition-colors break-all flex items-center gap-1.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                jordislpm@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            &copy; {currentYear} <span className="text-white font-medium">JordisDev</span>. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-400 hidden sm:inline">
              Built with Next.js, TypeScript & Tailwind CSS
            </span>
            <a
              href="#about"
              className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1 px-2.5 py-1 rounded bg-purple-950/40 border border-purple-500/30 hover:border-cyan-400"
            >
              Back to top <span>&uarr;</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
