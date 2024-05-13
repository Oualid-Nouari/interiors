import Link from 'next/link'
import React from 'react'

const NavLinks = () => {
  
  return (
    <ul className='flex justify-between items-center gap-9 md:gap-6 4xlg:gap-12 xsm:hidden sm:hidden'>
      <Link href="#about_section" className='hover:opacity-50 font-bold 4xlg:text-h6 duration-300'>About</Link>
      <Link href="#services_section" className='hover:opacity-50 font-bold 4xlg:text-h6 duration-300'>Services</Link>
      <Link href="#portfolio_section" className='hover:opacity-50 font-bold 4xlg:text-h6 duration-300'>Portfolio</Link>
      <Link href="#contact_section" className='hover:opacity-50 font-bold 4xlg:text-h6 duration-300'>Contact</Link>
    </ul>
  )
}

export default NavLinks
