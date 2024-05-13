import Image from 'next/image'
import React, { useLayoutEffect, useRef } from 'react'
import Client from "../../../public/MEE.png"
import RatingStars from './RatingStars'
import { testimonial } from '@/utils/types'
import gsap from 'gsap'

const TestimonialCard = ({testimonial, isOdd}: {testimonial: testimonial, isOdd: boolean}) => {
    const articleRef = useRef<HTMLDivElement | null>(null);
    useLayoutEffect(() => {
        const mm = gsap.matchMedia();
        mm.add("(min-width:940px)", () => {
            gsap.fromTo(articleRef.current, {
                y: isOdd ? 0 : 40,
            }, {
                y: isOdd ? 40 : 0,
                scrollTrigger: {
                    trigger: articleRef.current,
                    scrub: true,
                    start: "top 80%",
                    end: "bottom 30%"
                }
            })
        })
    }, [])
  return (
    <article ref={articleRef} className={`relative xsm:w-full sm:w-full md:w-full lg:w-[420px] w-full rounded-5 overflow-hidden ${isOdd ? "bg-white text-black" : "bg-black text-white"} bg-black px-4 pt-[28px] pb-3 flex flex-col items-center`}>
        <div className='flex flex-col items-center gap-2 max-w-[200px]'>
            <Image src={Client} alt='Client image' width={1000} height={1000} className='w-[102px] h-[102px] rounded-[50%]' />
            <h6 className='text-h6 leading-h6 text-center'>{testimonial.clientName}</h6>
            <RatingStars rating={testimonial.rating} />
        </div>
        <div className='w-full'>
            <h1 className='text-h1 leading-h1 text-start'>“</h1>
            <p className='text-center -translate-y-8'>{testimonial.message}</p>
            <h1 className='text-h1 leading-h1 text-start rotate-180 -translate-y-14'>“</h1>
        </div>
        <div className={`absolute bottom-4 left-[50%] -translate-x-[50%] w-[160px] h-[2px] ${isOdd ? "bg-black" : "bg-white"}`}></div>
    </article>
  )
}

export default TestimonialCard
