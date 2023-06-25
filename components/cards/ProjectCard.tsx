import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { fadeIn } from '../utils/motion'
import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import { github } from '../../public/assets'


const ProjectCard = (Props: { name: string, description: string, index: number, tags: { name: string, color: string }[], image: StaticImageData, source_code_link: string }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", Props.index * 0.5, 0.75)}>
      <Tilt className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>
        <div className=' relative w-full h-[230px]'>
          <Image fill src={Props.image} alt={Props.name} className='object-cover w-full h-full rounded-2xl' />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div onClick={() => window.open(Props.source_code_link, "_blank")} className='flex items-center justify-center w-10 h-10 rounded-full cursor-pointer black-gradient'>
              <Image src={github} alt={github.src} height={30} width={30} className='object-contain' />
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{Props.name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{Props.description}</p>
        </div>
        <div className='flex flex-wrap gap-2 mt-4'>
          {Props.tags.map(tag => (
            <p key={tag.name} className={`${tag.color} text-[14px]`}>{tag.name}</p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

export default ProjectCard