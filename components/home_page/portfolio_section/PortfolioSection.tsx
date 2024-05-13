import SectionHeader from '@/components/reusable/SectionHeader'
import React from 'react'
import ProjectCard from './ProjectCard'
import { PortfolioData } from '@/utils/PortfolioData';

const PortfolioSection = () => {
  return (
    <section className='w-full flex flex-col items-center gap-12' id='portfolio_section'>
      <SectionHeader>Portfolio</SectionHeader>
      <div className='flex xsm:flex-col xsm:gap-12  sm:flex-col sm:gap-12  md:flex-col md:gap-12 gap-8 flex-wrap justify-between'>
        {PortfolioData.map((item, index) => {
            return <ProjectCard key={index} num={item} isOdd={index % 2 !== 0} />
        })}
      </div>
      {/* <Link href={"#"} className='w-fit mt-10'>
        <Button content='More Projects' type='second'  />
      </Link> */}
    </section>
  )
}

export default PortfolioSection
