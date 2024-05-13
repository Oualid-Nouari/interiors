"use client"

import Button from '@/components/reusable/Button'
import Link from 'next/link'
import React, { useLayoutEffect, useRef } from 'react'
import Image1 from "../../../public/image 1.jpg"
import Image2 from "../../../public/image 2.jpg"
import Image from 'next/image'
import gsap from 'gsap'
import SplitType from 'split-type'

const AboutSection = () => {
    const titleRef = useRef<HTMLHeadingElement | null>(null);
    const paragraphRef = useRef<HTMLParagraphElement | null>(null);
    const btnsRef = useRef<HTMLDivElement | null>(null);

    const imageOneRef = useRef<HTMLImageElement | null>(null);
    const imageTwoRef = useRef<HTMLImageElement | null>(null)

    useLayoutEffect(() => {
        const context = gsap.context(() => {
            if(titleRef.current) {
                const splittedTitleLines = new SplitType(titleRef.current)
                gsap.from(splittedTitleLines.lines, {
                    yPercent: 200,
                    duration: .9,
                    stagger: .2,
                    scrollTrigger: {
                        trigger: splittedTitleLines.lines,
                        scrub: false,
                        toggleActions: "play complete play reverse"
                    }
                })
            }
            if(paragraphRef.current) {
                const splittedParagraphLines = new SplitType(paragraphRef.current)
                gsap.from(splittedParagraphLines.lines, {
                    yPercent: 300,
                    duration: .9,
                    stagger: .2,
                    scrollTrigger: {
                        trigger: splittedParagraphLines.lines,
                        scrub: false,
                        toggleActions: "play complete play reverse"
                    }
                })
            }
            if(btnsRef.current) {
                gsap.from(btnsRef.current, {
                  yPercent: 140,
                  opacity: 0,
                  duration: .9,
                  scrollTrigger: {
                    trigger: btnsRef.current,
                    scrub: false,
                    toggleActions: "play complete play reverse"
                  }
                })
              }
            if(imageOneRef.current) {
                gsap.to(imageOneRef.current, {
                    top: 70,
                    scrollTrigger: {
                        trigger: imageOneRef.current,
                        scrub: true,
                        start: "top 60%",
                        end: "bottom 40%",
                    }
                })
            }
            if(imageTwoRef.current) {
                gsap.to(imageTwoRef.current, {
                    bottom: 70,
                    scrollTrigger: {
                        trigger: imageOneRef.current,
                        scrub: true,
                        start: "top 60%",
                        end: "bottom 40%",
                    }
                })
            }
        })
        return () => {
            context.revert();
        }
    }, [])
  return (
    <section id='about_section' className='relative flex flex-col gap-6 justify-center items-center lg:px-[120px] xlg:px-[180px] 2xlg:px-[180px] 3xlg:px-[180px] min-h-[50vh]'>
      <h1 ref={titleRef} className='xsm:text-h5 xsm:leading-h5 sm:text-h5 sm:leading-h5 text-h4 leading-h4 w-full text-center italic px-1 overflow-y-hidden'>Discover the difference with <span className='text-orange'>Inside interiors</span> today.</h1>
      <p ref={paragraphRef} className='text-center overflow-y-hidden'>your premier destination for exquisite home interiors in Las Vegas. With a passion for design and years of experience, we specialize in creating spaces that blend sophistication with comfort. From concept to completion, were dedicated to bringing your vision to life.</p>
      <div ref={btnsRef} className='flex xsm:flex-col xsm:px-3 xsm:w-full sm:flex-col sm:w-full sm:px-[52px] w-fit gap-3 overflow-y-hidden'>
            <Link href="/" className='w-full min-w-[150px]'><Button type='main' content='More about us' /></Link>
            <Link href="#portfolio_section" className='w-full min-w-[150px]'><Button type='second' content='Our Portfolio' /></Link>
      </div>

      {/* Images: */}
      <Image ref={imageOneRef} src={Image1} alt='about-img-1' width={800} height={800} className='absolute top-0 lg:right-[-290px] right-[-249px] w-[360px] h-[209px] xsm:hidden sm:hidden md:hidden 4xlg:hidden object-cover rounded-5' />
      <Image ref={imageTwoRef} src={Image2} alt='about-img-2' width={800} height={800} className='absolute bottom-0 lg:left-[-290px] left-[-249px] w-[360px] h-[209px] xsm:hidden sm:hidden md:hidden 4xlg:hidden object-cover rounded-5' />
    </section>
  )
}

export default AboutSection
