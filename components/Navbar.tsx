'use client'
import { useState } from 'react'
import { navLinks } from '../core/constants'
import { styles } from './utils/style'
import { logo, menu, close } from '../public/assets'
import Image from 'next/image'
import Link from 'next/link'
import useCurrentPath from './hooks/useCurrentPath'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const currentPath = useCurrentPath();

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className='flex items-center justify-between w-full mx-auto max-w-7xl'>
        <Link href={"/#home"} className='flex items-center gap-2'
          onClick={() => {
            window.scroll(0, 0)
          }}
        >
          <Image src={logo} alt='logo' width={50} height={5} className='object-contain ' />
          <p className=' text-white text-[18px] font-bold cursor-pointer'>Adrian <span className='hidden sm:block'>| Javascript Mastery</span></p>
        </Link>
        <ul className='flex-row hidden gap-10 list-none sm:flex'>
          {navLinks.map(link => (
            <li key={link.id} className={`${currentPath.includes(link.id) ? "text-white" : "text-secondary"} hover:text-white cursor-pointer text-[18px] font-medium`}>
              <Link href={link.id}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <div className='flex items-center justify-end flex-1 sm:hidden'>
          <Image src={toggle ? close : menu} alt='menu' className=' cursor-pointer w-[28px] h-[28px] object-contain' onClick={() => setToggle(!toggle)} />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='flex flex-col items-start justify-end gap-4 list-none '>
              {navLinks.map(link => (
                <li key={link.id} className={`${currentPath.includes(link.id) ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => setToggle(!toggle)}
                >
                  <Link href={link.id}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar