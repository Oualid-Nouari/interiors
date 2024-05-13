import React from 'react'
import BgImage from "../../../public/image 1.jpg"
import Image from 'next/image'
import Form from './Form'

const Contact = () => {
  return (
    <div id='contact_section' className='relative w-screen h-screen 4xlg:w-[1464px]'>
        <Image src={BgImage} alt='contact bg image' width={1000} height={1000} className='w-full h-full absolute top-0 left-0 object-cover' />
        <div className='w-full h-full absolute top-0 left-0 bg-[#000] opacity-[.72] z-10'></div>
        <Form />
    </div>
  )
}

export default Contact
