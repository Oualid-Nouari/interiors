"use client"

import React, { useLayoutEffect, useRef } from 'react'
import Image1 from "../../../public/image 1.jpg"
import Image from 'next/image';
import gsap from 'gsap';
import { Portfolio } from '@/utils/types';

type ProjectCardProps = {
    isOdd: boolean;
    num: Portfolio
}

const ProjectCard = ({ isOdd, num }: ProjectCardProps) => {
    const firstNumRef = useRef<HTMLSpanElement | null>(null);
    const middleNumRef = useRef<HTMLSpanElement | null>(null);
    const lastNumRef = useRef<HTMLSpanElement | null>(null);

    const cardRef = useRef<HTMLDivElement | null>(null);
    useLayoutEffect(() => {
        const context = gsap.context(() => {
            gsap.to(middleNumRef.current, {
                top: -20,
                scrollTrigger: {
                    trigger: middleNumRef.current,
                    scrub: true,
                    start: "top 80%",
                    end: "bottom 10%"
                }
            });
            gsap.to(firstNumRef.current, {
                top: -10,
                scrollTrigger: {
                    trigger: middleNumRef.current,
                    scrub: true,
                    start: "top 80%",
                    end: "bottom 10%"
                }
            })
            gsap.to(lastNumRef.current, {
                top: -10,
                scrollTrigger: {
                    trigger: middleNumRef.current,
                    scrub: true,
                    start: "top 80%",
                    end: "bottom 10%"
                }
            })
        })
        const mm = gsap.matchMedia();
        mm.add("(min-width:768px)", () => {
            gsap.to(cardRef.current, {
                y: isOdd ? -20 : 20,
                scrollTrigger: {
                    trigger: cardRef.current,
                    scrub: true,
                    start: "top 80%",
                    end: "bottom 10%"
                }
            })
        })
        return () => {
            context.revert()
        }
    }, []);
  return ( 
    <article ref={cardRef} className={`project_container xsm:w-full sm:w-full md:w-full h-fit flex flex-col items-end w-5/12 ${isOdd  ? "lg:translate-y-[10px] xlg:translate-y-[10px] 2xlg:translate-y-[10px] 3xlg:translate-y-[100px] 4xlg:translate-y-[100px]" : ""} `}>
      <h1 className='translate-x-2 xsm:text-h4 xsm:leading-h4 sm:text-h3 sm:leading-h3 md:text-h2 md:leading-h2 lg:text-h3 lg:leading-h3 text-h1 leading-h1 italic tracking-[16px] text-right'>
        {num.number.split("").map((num, index) => {
            return <span key={index} ref={index === 0 ? firstNumRef : index === 1 ? middleNumRef : index === 2 ? lastNumRef : null} className='relative'>{num}</span>
        })}
      </h1>
      <div className='w-full bg-black rounded-5 overflow-hidden h-[375px]'>
      <Image src={num.picture} alt='image-1' width={1000} height={1000} className='w-full h-full bg-black rounded-5 object-cover '/>
      </div>
    </article>
  )
}

export default ProjectCard
