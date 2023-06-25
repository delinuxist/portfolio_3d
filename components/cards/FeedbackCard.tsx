import React from 'react'
import { fadeIn } from '../utils/motion'
import { motion } from 'framer-motion'
import Image from 'next/image'

const FeedbackCard = (Props: { name: string, image: string, testimonial: string, designation: string, company: string, index: number }) => {
  return (
    <motion.div variants={fadeIn("right", "spring", Props.index * 0.5, 0.75)} className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'>
      <p className='text-white font-black text-[48px]'>&quot;</p>
      <div className='mt-1'>
        <p>{Props.testimonial}</p>
        <div className='flex items-center justify-between gap-1 mt-7'>
          <div className='flex flex-col flex-1'>
            <p className='text-white font-medium text-[16px]'><span className='blue-text-gradient'>@</span> {Props.name}</p>
            <p className='mt-1 text-secondary text-[12px]'>
              {Props.designation} of {Props.company}
            </p>
          </div>
          <Image src={Props.image} alt={Props.name} height={50} width={50} className='object-cover rounded-full' />
        </div>
      </div>
    </motion.div>
  )
}

export default FeedbackCard