// components/AnimatedText.tsx

"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TextHover from "@/animation/TextHover";
import SvgIcon from "../../public/SVG/MEGH.svg";
import Image from "next/image";
import TextHoverSingle from "@/animation/TextHoverSingle";
import Link from "next/link";
import SvgContainer from "../svg-section/svg-container";
import { client01, client02 } from "@/public";
import splitStringUsingRegex from "@/animation/SplitStringREGEX";

const carVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};
const infoText =
  "Hi, I’m Shamsun Nahar, a full stack developer and UI/UX designer with a Software Engineering degree and over six years of experience. Skilled in HTML, CSS, PHP, Laravel, Python, Django, Vue.js, and AI, I bring together technical precision and creative design to build functional, user-friendly websites and applications. I’m passionate about crafting meaningful digital experiences that resonate with users. Whether you need a custom website, a dynamic app, or an engaging design, I’m here to help turn your vision into reality. Let’s create something impactful together!";
const texts: string[] = [
  "Best For E-commerce",
  "Targeted Website Redesign",
  "Effective Web Development",
];

const variants = {
  enter: {
    y: 10,
    opacity: 0,
  },
  center: {
    zIndex: 1,
    y: 0,
    opacity: 1,
  },
  exit: {
    zIndex: 0,
    opacity: 0,
  },
};
const navItems = [
  { title: "Case Studies", href: "/case-studies", id: 1 },
  { title: "Services", href: "/services", id: 2 },
  { title: "Contact Us", href: "/contact-us", id: 3 },
];

const AnimatedText: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const infoMap = splitStringUsingRegex(infoText);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearTimeout(timer);
  }, [index]);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { pathLength: 1, opacity: 1, transition: { duration: 2 } },
  };

  return (
    <div
      className="bg-gradient-to-b from-[#96b9c6] to-[#ffffff]
    h-screen"
    >
      <div className="sm:hidden">
        <div
          className="absolute bottom-[7%] left-[-10%] md:left-[-15%]
        sm:left-[-45%]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="257"
            height="257"
            viewBox="0 0 257 257"
          >
            <g
              id="Ellipse_3"
              data-name="Ellipse 3"
              fill="none"
              stroke="#18afe8"
              strokeWidth="4"
              strokeDasharray="10"
            >
              <circle cx="128.5" cy="128.5" r="128.5" stroke="none" />
              <circle cx="128.5" cy="128.5" r="126.5" fill="none" />
            </g>
          </svg>
        </div>

        <div
          className="absolute bottom-[1%] left-[-8%] md:left-[-13%]
        sm:left-[-40%]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="257"
            height="257"
            viewBox="0 0 257 257"
          >
            <g
              id="Ellipse_3"
              data-name="Ellipse 3"
              fill="none"
              stroke="#18afe8"
              strokeWidth="4"
              strokeDasharray="10"
            >
              <circle cx="128.5" cy="128.5" r="128.5" stroke="none" />
              <circle cx="128.5" cy="128.5" r="126.5" fill="none" />
            </g>
          </svg>
        </div>
      </div>

      <div className="h-screen w-full pt-[8rem]">
        <div className="sm:w-full sm:px-2 w-[80%] h-[40rem] mx-auto">
          <div className="flex-col items-center justify-center">
            <div className="w-full h-full flex justify-center">
              {" "}
              <div
                className="self-center h-[10rem] w-[10rem] rounded-full
               border-[2px] border-btn_clr z-20"
              >
                <Image
                  className="h-full w-full object-cover rounded-full"
                  src={client02}
                  alt="Logo"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className="w-full h-full flex justify-center mt-[-4.5rem] z-10">
              {" "}
              <div className="h-[30rem] w-full backdrop-blur-sm bg-white/30">
                <div className="mt-[5rem] text-center">
                 

                  <div className="sm:px-2 sm:w-full w-[80%] mx-auto text-justify
                  sm:pt-[2rem] pt-[5rem]">
                    <motion.p
                     viewport={{ once: true }}
                      initial="hidden"
                      whileInView="reveal"
                      transition={{ staggerChildren: 0.045 }}
                      className="font-montreal sm:text-[15px] text-[18px] leading-loose tracking-wide"
                    >
                      {infoMap.map((char) => (
                        <motion.span
                          key={char}
                          transition={{ duration: 0.1 }}
                          variants={carVariants}
                        >
                          {char}
                        </motion.span>
                      ))}
                    </motion.p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SvgContainer></SvgContainer>
    </div>
  );
};

export default AnimatedText;
