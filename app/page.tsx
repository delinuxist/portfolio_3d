import Image from 'next/image'
import { About, Experience, Hero, Navbar, Tech } from '../components'

export default function Home() {
  return (
    <main>
      <div className='bg-center bg-no-repeat bg-cover bg-hero-pattern'>
        <Navbar />
        <Hero />
      </div>
      <About pageId='about' />
      <Experience pageId='work' />
      <Tech pageId='tech' />
    </main>
  )
}