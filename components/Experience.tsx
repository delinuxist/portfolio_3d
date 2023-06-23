'use client'
import { VerticalTimeline } from "react-vertical-timeline-component"
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'

import { styles } from './utils/style'
import { experiences } from '../core/constants'
import { textVariant } from './utils/motion'
import withSectionWrapper from './hoc/WithSectionWrapper'
import { ExperienceCard } from './cards'

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={`${styles.sectionSubText}`}>What I have done</p>
        <h2 className={`${styles.sectionHeadText}`}>Work Experience.</h2>
      </motion.div>
      <div className='flex flex-col mt-20'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.title} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default withSectionWrapper(Experience)