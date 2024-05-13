"use client"

import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

type SectionHeaderProps = {
    children: string;
}

const SectionHeader = ({children}: SectionHeaderProps) => {
    const headingRef = useRef<HTMLHeadingElement | null>(null)
    useLayoutEffect(() => {
        const context = gsap.context(() => {
            gsap.from(headingRef.current, {
                y: -100,
                duration: .6,
                scrollTrigger: {
                    trigger: headingRef.current,
                    scrub: true,
                    start: "top 50%",
                    end: "top 10%"
                }
            })
        })
        return () => {
            context.revert();
        }
    }, [])
  return (
    <div className='flex flex-col items-center gap-3 overflow-y-hidden'>
        <div className='relative xsm:w-4/6 sm:w-3/6 md:w-3/6 w-80 h-[2px] bg-white mx-auto'></div>
        <h1 ref={headingRef} className='italic text-center xsm:text-h4 xsm:leading-h4 sm:text-h3 sm:leading-h3 md:text-h2 md:leading-h2 text-h1 leading-h1 '>{children}</h1>
    </div>
  )
}

export default SectionHeader
