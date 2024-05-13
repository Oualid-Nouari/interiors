"use client"

import Footer from "@/components/Footer";
import AboutSection from "@/components/home_page/about_section/AboutSection";
import Contact from "@/components/home_page/contact_section/Contact";
import Header from "@/components/header/Header";
import Hero from "@/components/home_page/hero/Hero";
import PortfolioSection from "@/components/home_page/portfolio_section/PortfolioSection";
import Services from "@/components/home_page/services_section/Services";
import Testimonials from "@/components/home_page/testimonials_section/Testimonials";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);


export default function Home() {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((el) => {
      el.addEventListener('click', (e) => {
        e.preventDefault()
        const id = el.getAttribute('href')?.slice(1)
        if (!id) return
        const target = document.getElementById(id)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' })
        }
      })
    })
  }, [])
  return (
    <main className="min-h-screen w-screen">
      <div className="w-full h-screen overflow-x-hidden xsm:px-3 sm:px-4 md:px-6 lg:px-6 xlg:px-6 2xlg:px-[72px] 3xlg:px-[72px] 4xlg:w-[1464px] mx-auto">
        <Header pathname={"Home"} />
        <Hero />
      </div>
      <div className="w-full flex flex-col items-center gap-[180px] xsm:px-3 sm:px-4 md:px-6 lg:px-6 xlg:px-8 2xlg:px-[72px] 3xlg:px-[72px] 4xlg:px-[72px] 4xlg:w-[1464px] mt-[108px] mx-auto">
        <AboutSection />
        <Services />
        <PortfolioSection />
        <Testimonials />
        <div className="w-screen flex flex-col 4xlg:w-[1464px]">
          <Contact />
          <Footer />
          </div>
      </div>
    </main>
  );
}
