import React from 'react'
import styles from "./TimeLine.module.css"
import { TypeExperience } from '@/types'
import Image from 'next/image'

interface typeTimeLine {
    Experiences: TypeExperience[]
}


function TimeLine({ Experiences }: typeTimeLine) {
    return (
        <div className={styles.timeline}>
            {Experiences.map((experience, index) => (
                <div key={experience.date} className={styles.container}>
                    <Image
                        className={styles.img}
                        src={experience.icon}
                        alt={experience.title}
                        width={30}
                        height={30} />
                    <div className={styles.text_box}>
                        <h2>{experience.title}</h2>
                        <small>{experience.company}</small>
                        <p>{experience.description}</p>
                        <div className='flex flex-wrap gap-2 text-[20px] w-full h-auto'>
                        {experience.technologies.map((tecnology, index)=>(
                            <span className="flex w-auto h-[40px] p-2 bg-[#06b6d4] rounded" key={tecnology}>
                                {tecnology}
                            </span>
                        ))}
                        </div>

                        <small>{experience.date}</small>
                        <span className={styles.container_arrow}></span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TimeLine