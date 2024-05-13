import SectionHeader from '@/components/reusable/SectionHeader'
import React from 'react'
import TestimonialCard from './TestimonialCard'
import { testimonialData } from '@/utils/TestimonialsData'

const Testimonials = () => {
  return (
    <section id='testimonials_section' className='w-full flex flex-col items-center gap-12 '>
      <SectionHeader>Testimonials</SectionHeader>
      <div className='flex xsm:flex-wrap w-full sm:flex-wrap md:flex-wrap lg:flex-wrap justify-center xsm:gap-12 sm:gap-12 md:gap-12 lg:gap-8 gap-6'>
        {testimonialData.map((item, index) => {
            return <TestimonialCard key={index} isOdd={index % 2 !== 0 ? true : false} testimonial={item} />
        })}
      </div>
    </section>
  )
}

export default Testimonials
