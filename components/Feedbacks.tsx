'use client'
import React from 'react'
import withSectionWrapper from './hoc/WithSectionWrapper'
import { styles } from './utils/style'
import { motion } from 'framer-motion'
import { textVariant } from './utils/motion'
import { testimonials } from '../core/constants'
import { FeedbackCard } from './cards'

const Feedbacks = () => {
  return (
    <div
      className=' mt-12 bg-black-100 rounded-[20px]'
    >
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant(0.1)}>
          <p className={`${styles.sectionSubText}`}>What others say</p>
          <h2 className={`${styles.sectionHeadText}`}>Testimonials</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  )
}

export default withSectionWrapper(Feedbacks);