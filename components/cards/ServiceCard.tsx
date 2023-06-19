import { StaticImageData } from 'next/image'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'
import Image from 'next/image'

const ServiceCard = (Props: { index: number, title: string, icon: StaticImageData }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div variants={fadeIn("left", 'spring', 0.5 * Props.index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          className=' bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <Image src={Props.icon} height={80} width={80} alt={Props.title} className='object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{Props.title}</h3>
        </div>
      </motion.div>

    </Tilt>
  )
}

export default ServiceCard