'use client'
import React from 'react'
import withSectionWrapper from './hoc/WithSectionWrapper'
import { motion } from 'framer-motion';
import { textVariant, fadeIn } from './utils/motion';
import { styles } from './utils/style';
import { projects } from '../core/constants';
import { ProjectCard } from './cards';

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={`${styles.sectionSubText}`}>My Work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>
      <div className='flex w-full'>
        <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod laboriosam porro voluptates aliquid consectetur molestiae deleniti eum, distinctio necessitatibus odio repellendus excepturi totam nulla. Esse soluta vel minima itaque aliquam asperiores aut. Placeat, doloribus numquam? Vero nam blanditiis rerum, qui voluptas recusandae, quod vitae dolore libero vel laboriosam, nostrum officia.
        </motion.p>
      </div>
      <div className='flex flex-wrap mt-20 gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={project.name + index} {...project} index={index} />
        ))}

      </div>
    </>
  )
}

export default withSectionWrapper(Works);