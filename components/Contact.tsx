'use client'
import { useState, useRef, RefObject, LegacyRef } from 'react'
import withSectionWrapper from './hoc/WithSectionWrapper'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { slideIn } from './utils/motion'
import { styles } from './utils/style'
import { EarthCanvas } from './canvas'


const Contact = () => {
  const formRef = useRef<LegacyRef<HTMLFormElement>>();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false);

  const handleChange = () => {}

  const handleSubmit = () => {}

  return (
    <div className='flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row'>
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className=' flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>
        <form ref={formRef.current} onSubmit={handleSubmit} className='flex flex-col gap-8 mt-12'>
          <label className='flex flex-col'>
            <span>Your Name</span>
            <input name='name' onChange={handleChange}
              value={form.name} placeholder='What&apos;s your name?' type="text" className='px-4 py-4 text-white border-none rounded-lg bg-tertiary placeholder:text-secondary outlined-none' />
          </label>
          <label className='flex flex-col'>
            <span>Your Email</span>
            <input name='email' onChange={handleChange} value={form.email} placeholder='What&apos;s your email?' type="email" className='px-4 py-4 text-white border-none rounded-lg bg-tertiary placeholder:text-secondary outlined-none' />
          </label>
          <label className='flex flex-col'>
            <span>Your Message</span>
            <textarea rows={7} name='message' onChange={handleChange} value={form.message} placeholder='What do you want to say?' className='px-4 py-4 text-white border-none rounded-lg outline-none bg-tertiary placeholder:text-secondary' />
          </label>
          <button
            type='submit'
            className='px-8 py-3 font-bold text-white outline-none bg-tertiary w-fit shadow-primary rounded-xl'
          >{loading ? 'Sending' : 'Send'}</button>
        </form>
      </motion.div>
      <motion.div variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default withSectionWrapper(Contact);