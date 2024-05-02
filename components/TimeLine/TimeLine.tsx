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
                        <small>{experience.date}</small>
                        <p>{experience.description}</p>
                        <span className={styles.container_arrow}></span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TimeLine