"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import NavLinks from "./NavLinks";
import gsap from "gsap";
import { usePathname, useRouter } from "next/navigation";

type SideBarLinks = {
  name: string;
  href: string;
};

const Header = ({ pathname }: {pathname?: string}) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const sidebarLinksRef = useRef<HTMLButtonElement[]>([]);
  const headerContainerRef = useRef<HTMLDivElement | null>(null);
  const sidebarLinks: SideBarLinks[] = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "Portfolio",
      href: "/portfolio",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  useLayoutEffect(() => {
    if (openSidebar) {
      const context = gsap.context(() => {
        const tl = gsap.timeline();
        console.log(sidebarLinksRef);
        sidebarLinksRef.current?.forEach((link) => {
          tl.to(link, {
            x: 0,
            duration: 0.1,
            stagger: 0.02,
          });
        });
      });
      return () => {
        context.revert();
      }
    }
  }, [openSidebar]);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      if(headerContainerRef.current && pathname === "Home") {
        gsap.to(headerContainerRef.current, {
          top: 16,
          duration: .7,
          ease: "power3.out",
          opacity: 1,
          delay: 11
        })
      }
    })
    return () => {
      context.revert();
    }
  }, []);

  const handleOpenSidebar = () => {
    setOpenSidebar(!openSidebar);
  };
  const router = useRouter();
  const pathName = usePathname();
  return (
    <>
      <header ref={headerContainerRef} className={`w-full z-20 mx-auto bg-white bg-opacity-[.48] h-[60px] 4xlg:h-[72px] flex items-center rounded-5 relative ${pathname === "Home" ? "top-0 opacity-0" : "top-4"}`}>
        <nav className="flex justify-between items-center w-full px-6 sm:px-2">
          <button>Logo</button>
          <AiOutlineMenu
            className="cursor-pointer text-h6 hidden xsm:inline-block sm:inline-block"
            onClick={handleOpenSidebar}
          />
          <NavLinks />
          <Link
            href={"#"}
            className="xsm:hidden sm:hidden hover:opacity-50 font-bold 4xlg:text-h6 duration-300"
          >
            +2126 43 79 11 54
          </Link>
        </nav>
      </header>

      {openSidebar && (
        <div
          className="absolute top-0 left-0 w-screen h-screen z-20 bg-black opacity-40"
          onClick={() => setOpenSidebar(false)}
        ></div>
      )}

      <aside
        className={` xsm:w-screen ${
          openSidebar ? "right-0" : "-right-[340px] xsm:-right-screen"
        } duration-300 w-[340px] h-screen fixed top-0 bg-bg-color z-30 px-12 flex flex-col gap-7 pt-32`}
      >
        <AiOutlineClose
          className="absolute top-6 right-6 text-h5 cursor-pointer hover:opacity-50 duration-300"
          onClick={() => setOpenSidebar(false)}
        />
        <h6 className="w-full border-b-[1px] border-white opacity-70">
          Navigation
        </h6>
        <ul className="flex flex-col gap-5">
          {sidebarLinks.map((link, index) => {
            return (
              <button
              ref={(ref) => {
                if (ref) {
                  sidebarLinksRef.current[index] = ref;
                }
              }}
                key={index}
                className="text-h5 leading-h5 text-start hover:opacity-50 duration-300 translate-x-20"
              >
                {link.name}
              </button>
            );
          })}
        </ul>
      </aside>
    </>
  );
};

export default Header;
