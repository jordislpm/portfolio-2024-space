import React from 'react'
import { Backend_skill, Frontend_skill, Full_stack, Other_skill } from '@/constants'
import SkillsMiniSection from '@/components/SkillsMiniSection/SkillsMiniSection'
import SkillText from '@/components/SkillText/SkillText'

function Skills() {
    return (
        <section
            id="skills"
            className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20"
            style={{ transform: "scale(0.9" }}
        >
            <SkillText/>
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
            <div className="w-full h-full absolute">
                <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
                    {/* <video
                        className="w-full h-auto"
                        preload="false"
                        playsInline
                        loop
                        muted
                        autoPlay
                        src="/cards-video.webm"
                    /> */}
                </div>
            </div>
        </section>
    )
}

export default Skills