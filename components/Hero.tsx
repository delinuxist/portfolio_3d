'use client'
import { motion } from 'framer-motion'
import { styles } from './utils/style'
import { ComputersCanvas } from './canvas'
import Link from 'next/link'

const Hero = () => {
  return (
    <section id='home' className='relative w-full h-screen mx-auto'>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col items-center justify-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 h-40 sm:h-80 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>Hi, I&apos;m <span className='text-[#915eff]'>Emmanuel</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}> Full Stack Developer</p>
        </div>
      </div>
      <ComputersCanvas />
      <div className='absolute flex items-center justify-center w-full xs:bottom-10 bottom-32'>
        <Link href={"/#about"}>
          <div className=' w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 mb-1 rounded-full bg-secondary'
            >

            </motion.div>
          </div>
        </Link>
      </div>
    </section>
  )
}

export default Hero