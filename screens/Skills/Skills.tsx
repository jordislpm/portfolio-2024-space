"use client"

import React from 'react'
import { 
    Backend_skill, 
    Frontend_skill, 
    Full_stack, 
    Other_skill 
} from '@/constants'
import SkillsMiniSection from '@/components/SkillsMiniSection/SkillsMiniSection'
import SkillText from '@/components/SkillText/SkillText'

function Skills() {
    return (
        <section
        id="skills"
        className="scroll-mt-28 flex flex-col items-center justify-center gap-3 h-full relative z-[30]"
        // style={{ transform: "scale(0.9)" }}
        >
            <SkillText />
            <SkillsMiniSection
                title='Frontend skills'
                data={Frontend_skill} />
            <SkillsMiniSection
                title='Backend Skills'
                data={Backend_skill} />
            <SkillsMiniSection
                title='Fullstack Skills'
                data={Full_stack} />
            <SkillsMiniSection
                title='Others'
                data={Other_skill} />
      <div className="circle_black_hole">
        <div>
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
        </section>
    )
}

export default Skills