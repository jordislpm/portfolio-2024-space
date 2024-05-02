"use client"

import React from 'react'
import { Experiences } from '@/constants/experience'
import { TypeExperience } from '@/types'
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"
import TimeLine from '@/components/TimeLine/TimeLine';


function Experience() {
    return (
        <section
            id="experience"
            className="flex flex-col items-center justify-center gap-3 h-full relative z-[30] scroll-mt-28"
            style={{ transform: "scale(0.9" }}
        >
            <h2
                className='text-[30px] font-medium mt-[10px] text-center mb-[15px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
                Work experience
            </h2>
            {/* <VerticalTimeline>
                {Experiences.map((experience, index) => (
                    <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: "#f3f4f6",
                //   theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                //   theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af"
                //   theme === "light"
                //     ? "0.4rem solid #9ca3af"
                //     : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={experience.date}
              icon={experience.icon}
              iconStyle={{
                background:"#44444",
                //   theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{experience.title}</h3>
              <p className="font-normal !mt-0">{experience.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {experience.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
                ))}
            </VerticalTimeline> */}
          
            <TimeLine Experiences={Experiences} />
        </section>
    )
}

export default Experience