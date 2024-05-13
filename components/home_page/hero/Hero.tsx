"use client";

import Image from "next/image";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import HeroImage1 from "../../../public/image 1.jpg";
import HeroImage2 from "../../../public/image 2.jpg";
import gsap from "gsap";
import Button from "@/components/reusable/Button";
import Link from "next/link";
import SplitType from "split-type";

const Hero = () => {
  const preloaderRef = useRef<HTMLDivElement | null>(null);
  const preloadTitle = useRef<HTMLHeadingElement | null>(null);

  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const paragraphRef = useRef<HTMLHeadingElement | null>(null);
  const btnsRef = useRef<HTMLDivElement | null>(null);

  const imagesList = [
    HeroImage1,
    HeroImage2,
    HeroImage1,
    HeroImage2,
    HeroImage1,
    HeroImage2,
    HeroImage1,
    HeroImage2,
    HeroImage1,
  ];
  const imagesListRef = useRef<HTMLImageElement[]>([]);
  const [showImages, setShowImages] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const rectangleRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const imagesTimeout = setTimeout(() => {
      setShowImages(false);
    }, imagesList.length * 1000 + 2000);

    showImages
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "auto");

    return () => {
      clearTimeout(imagesTimeout);
    };
  }, [showImages]);

  // Scroll to the top agter reloading
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const imagesInterval = setInterval(() => {
      if (currentImageIndex >= imagesList.length - 1) {
        setCurrentImageIndex(0);
      } else {
        setCurrentImageIndex((prevIndex) => prevIndex + 1);
      }
    }, 20000);
    return () => {
      clearInterval(imagesInterval);
    };
  }, [currentImageIndex]);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline();
      if (preloadTitle.current) {
        let splittedChars = new SplitType(preloadTitle.current).chars;
        tl.from(splittedChars, {
          delay: .8,
          yPercent: 330,
          duration: 0.6,
          stagger: 0.02,
        });
      }
      if (preloaderRef.current) {
        tl.to(preloaderRef.current, {
          top: "-100%",
          delay: 2,
          duration: 0.8,
          ease: "power3",
        });
      }
      imagesListRef.current.forEach((img, index) => {
        if (index === 0) {
          tl.to(
            img,
            {
              top: 0,
              duration: 0.8,
              ease: "power3.out",
            },
            "<"
          );
        } else {
          tl.to(img, {
            top: 0,
            duration: 0.8,
            ease: "power3.out",
          });
        }
      });
      if (overlayRef.current) {
        tl.from(overlayRef.current, {
          opacity: 0.2,
          duration: 0.6,
        });
      }
      if (titleRef.current) {
        const splittedTitleChars = new SplitType(titleRef.current).lines;
        tl.from(splittedTitleChars, {
          yPercent: 430,
          duration: 0.9,
          stagger: 0.08,
        });
      }
      if (paragraphRef.current) {
        const splittedParagraphLines = new SplitType(paragraphRef.current)
          .lines;
        tl.from(splittedParagraphLines, {
          yPercent: 430,
          duration: 0.9,
          stagger: 0.08,
        });
      }
      if (btnsRef.current) {
        tl.from(btnsRef.current, {
          yPercent: 140,
          opacity: 0,
          duration: 0.9,
        });
      }
      if (rectangleRef.current) {
        gsap.from(rectangleRef.current, {
          bottom: 100,
          scrollTrigger: {
            trigger: rectangleRef.current,
            scrub: true,
            start: "center center",
            end: "bottom 40%",
          },
        });
      }
    });
    return () => {
      context.revert();
    };
  }, []);
  return (
    <React.Fragment>
      <div className="absolute top-0 left-0 w-full h-screen overflow-hidden flex justify-center items-center">
        <Image
          width={1000}
          height={1000}
          src={imagesList[currentImageIndex]}
          alt="hero image"
          className="w-full h-screen object-cover absolute top-0 left-0"
        />
        {showImages &&
          imagesList.map((img, index) => {
            return (
              <Image
                ref={(ref) => {
                  if (ref) {
                    imagesListRef.current[index] = ref;
                  }
                }}
                key={index}
                src={img.src}
                alt=""
                width={1000}
                height={1000}
                className="absolute top-full left-0 w-full h-full object-cover"
              />
            );
          })}
        <div
          ref={overlayRef}
          className="absolute top-0 left-0 w-full h-full bg-[#000] opacity-[.60]"
        ></div>
        <div className="relative flex flex-col gap-4 items-center w-full">
          <h1
            ref={titleRef}
            className="xsm:text-h4  overflow-hidden flex flex-col py-2 xsm:leading-h4 sm:text-h3 sm:leading-h3 md:text-h2 md:leading-h2 text-h1 leading-h1 bolder italic text-center"
          >
            Designing{" "}
            <div>
              Las Vegas <span className="text-orange">Homes</span>
            </div>
          </h1>
          <p
            ref={paragraphRef}
            className="text-center overflow-hidden w-full px-7 lg:w-5/6 xlg:w-5/6 2xlg:w-5/6 3xlg:w-5/6 4xlg:w-5/6"
          >
            Lorem ipsum dolor sit amet consectetur. Libero velit netus faucibus
            ultricies scelerisque vitae.
          </p>
          <div
            ref={btnsRef}
            className="btns flex xsm:flex-col xsm:px-3 xsm:w-full sm:flex-col sm:w-full sm:px-[52px] w-fit gap-3"
          >
            <Link href="/" className="w-full">
              <Button type="main" content="Call us" />
            </Link>
            <Link href="#testimonials_section" className="w-full">
              <Button type="second" content="What people say" />
            </Link>
          </div>
        </div>
      </div>

      {/* Preloader */}
      {showImages && (
        <div
          ref={preloaderRef}
          className="fixed top-0 left-0 bg-bg-color w-full h-full z-40 flex justify-center items-center"
        >
          <h5
            ref={preloadTitle}
            className="preload-text text-h5 leading-h5 overflow-hidden text-center"
          >
            Welcome to Design interiors
          </h5>
        </div>
      )}

      {/* Rectangle */}
      <div
        ref={rectangleRef}
        className="absolute left-[50%] translate-x-[-50%] -z-40 rounded-[249px] w-[308px] h-[656px] border-2 border-white bottom-[-72px]"
      >
        .
      </div>
    </React.Fragment>
  );
};

export default Hero;
