import SectionHeader from '@/components/reusable/SectionHeader'
import React from 'react'
import ServiceCard from './ServiceCard'
import Link from 'next/link'
import Button from '@/components/reusable/Button'
import { ServicesData } from '@/utils/ServicesData'

const Services = () => {
  return (
    <section className='w-full flex flex-col items-center gap-12' id='services_section'>
      <SectionHeader>Our services</SectionHeader>
      <div className='flex xsm:flex-wrap w-full sm:flex-wrap md:flex-wrap lg:flex-wrap justify-center xsm:gap-12 sm:gap-12 md:gap-12 lg:gap-8 gap-6'>
        {ServicesData.map((service, index) => {
            return <ServiceCard key={index} service={service} />
        })}
      </div>
      {/* <Link href={"#"} className='w-fit'>
        <Button content='More service' type='second'  />
      </Link> */}
    </section>
  )
}

export default Services
