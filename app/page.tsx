import Image from 'next/image'
import { About, Contact, Experience, Feedbacks, Hero, Navbar, StarsCanvas, Tech, Works } from '../components'

export default function Home() {
  return (
    <main>
      <div className='bg-center bg-no-repeat bg-cover bg-hero-pattern'>
        <Navbar />
        <Hero />
      </div>
      <About pageId='about' />
      <Experience pageId='experience' />
      <Tech pageId='tech' />
      <Works pageId='work' />
      <Feedbacks pageId='feedback' />
      <div className='relative z-0'>
        <Contact pageId='contact' />
        <StarsCanvas />
      </div>

    </main>
  )
}