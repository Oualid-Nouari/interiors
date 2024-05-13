"use client"

import React, { useLayoutEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { Service } from '@/utils/types'

const ServiceCard = ({service}: {service: Service}) => {
  const serviceArticleRef = useRef<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline();
      gsap.from(serviceArticleRef.current, {
        filter: "blur(3px)",
        duration: .7,
        transformOrigin: "bottom",
        delay: .3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: serviceArticleRef.current,
          scrub: true,
          start: "top 90%",
          end: "bottom 10%"
        }
      })
    }, serviceArticleRef)
    return () => context.revert();
  }, [])

  return (
    <article ref={serviceArticleRef} className='service-artc relative xsm:w-full sm:w-full md:w-full lg:w-[420px] w-full h-[448px]  rounded-5 overflow-hidden'>
        <Image src={service.picture} alt='Service image' width={1000} height={1000} className='w-full h-full absolute top-0 left-0 -z-30 object-cover rounded-5' />
        <div className='service-ovrl absolute duration-500 xlg:opacity-0 2xlg:opacity-0 3xlg:opacity-0 4xlg:opacity-0 left-0 w-full h-full flex items-end p-7 bg-gradient-to-t from-[rgba(0,0,0,.95)] to-[rgba(0,0,0,.32)]'>
          <h1 className='text-h5 leading-h5 duration-300 xlg:translate-y-11 2xlg:translate-y-11 3xlg:translate-y-11 4xlg:translate-y-11 italic'>{service.name}</h1>
        </div>
    </article>
  )
}

export default ServiceCard









































