"use client"
import React from "react";
import HeroContent from "@/components/Sub/HeroContent";

const Hero = () => {
  const handleClick = () => {
    console.log('ProjectCard fue clickeado');
  }
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me"
    onClick={handleClick}>
      <video
        autoPlay
        muted
        loop
        className="blackhole_principal rotate-180 absolute top-[-340px] md:opacity-100 opacity-0 h-full w-full left-0 z-[-100] object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" className="z-[-100]" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;