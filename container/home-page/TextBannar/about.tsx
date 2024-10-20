"use client";
import { useRef } from "react";
import Marquee from "@/animation/LogoMarquee";
import { useScroll, motion, useTransform } from "framer-motion";

const TextBannarSection: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const transformStyles = [
    useTransform(scrollYProgress, [0, 1], [0, -100]),
    useTransform(scrollYProgress, [0, 1], [0, 100]),
    useTransform(scrollYProgress, [0, 1], [0, -100]),
    useTransform(scrollYProgress, [0, 1], [0, 100]),
    useTransform(scrollYProgress, [0, 1], [0, -100]),
    useTransform(scrollYProgress, [0, 1], [0, 100]),
    useTransform(scrollYProgress, [0, 1], [0, -100]),
    useTransform(scrollYProgress, [0, 1], [0, 100]),
  ];

  return (
    <section className="w-full sm:text-[3rem] md:text-[5rem] lg:text-[5rem] overflow-hidden relative
    font-montreal">
      <Marquee baseVelocity={0.5}>
        <h1 className="text-[#ffffff] uppercase font-semibold flex items-center justify-center w-full h-[10rem] z-10">
          {/* First Dot */}
          <span
            className="sm:w-[2.5rem] sm:h-[2.5rem] md:w-[3rem] md:h-[3rem]  border border-black rounded-full mt-2
            lg:w-[3rem] lg:h-[3rem]
          mx-3 bg-transparent flex items-center justify-center"
          >
            <span className="sm:w-[1rem] sm:h-[1rem]  md:w-[1.5rem] md:h-[1.5rem]
            lg:w-[1.5rem] lg:h-[1.5rem] border border-black rounded-full mx-3 bg-transparent flex items-center justify-center" />
          </span>
          <span />
          <span className="mx-5 text-stroke">MEGH&nbsp;TECHNOLOGIES</span>

          {/* Second Dot */}
          <span
            className="sm:w-[2.5rem] sm:h-[2.5rem] md:w-[3rem] md:h-[3rem] 
            lg:w-[3rem] lg:h-[3rem] border border-black rounded-full mt-2
          mx-3 bg-transparent flex items-center justify-center"
          >
            <span className="sm:w-[1rem] sm:h-[1rem]  md:w-[1.5rem] md:h-[1.5rem] 
            lg:w-[1.5rem] lg:h-[1.5rem] border border-black rounded-full mx-3 bg-transparent flex items-center justify-center" />
          </span>
          <span />
          <span className="mx-5 text-stroke">DESIGNER</span>

          {/* Third Dot */}
          <span
            className="sm:w-[2.5rem] sm:h-[2.5em] md:w-[3rem] md:h-[3rem]
            lg:w-[3rem] lg:h-[3rem] border border-black rounded-full mt-2
          mx-3 bg-transparent flex items-center justify-center"
          >
            <span className="sm:w-[1rem] sm:h-[1rem]  md:w-[1.5rem] md:h-[1.5rem] 
            lg:w-[1.5rem] lg:h-[1.5rem] border border-black rounded-full mx-3 bg-transparent flex items-center justify-center" />
          </span>
          <span />
          <span className="mx-5 text-stroke">CODER</span>

          {/* Fourth Dot */}
          <span
            className="sm:w-[2.5rem] sm:h-[2.5rem] md:w-[3rem] md:h-[3rem] 
            lg:w-[3rem] lg:h-[3rem] border border-black rounded-full mt-2
          mx-3 bg-transparent flex items-center justify-center"
          >
            <span className="sm:w-[1rem] sm:h-[1rem]  md:w-[1.5rem] md:h-[1.5rem] 
            lg:w-[1.5rem] lg:h-[1.5rem] border border-black rounded-full mx-3 bg-transparent flex items-center justify-center" />
          </span>
          <span />
          <span className="mx-5 text-stroke">Dev&nbsp;Ops</span>

          {/* Fifth Dot */}
          <span
            className="sm:w-[2.5rem] sm:h-[2.5rem] md:w-[3rem] md:h-[3rem] lg:w-[3rem] lg:h-[3rem] border border-black rounded-full mt-2
          mx-3 bg-transparent flex items-center justify-center"
          >
            <span className="sm:w-[1rem] sm:h-[1rem]  md:w-[1.5rem] md:h-[1.5rem]
            lg:w-[1.5rem] lg:h-[1.5rem] border border-black rounded-full mx-3 bg-transparent flex items-center justify-center" />
          </span>
          <span />
          <span className="mx-5 text-stroke">cyber&nbsp;security</span>

          {/* Sixth Dot */}
          <span
            className="sm:w-[2.5rem] sm:h-[2.5rem] md:w-[3rem] md:h-[3rem] 
            lg:w-[3rem] lg:h-[3rem] border border-black rounded-full mt-2
          mx-3 bg-transparent flex items-center justify-center"
          >
            <span className="sm:w-[1rem] sm:h-[1rem]  md:w-[1.5rem] md:h-[1.5rem] lg:w-[1.5rem] lg:h-[1.5rem] border border-black rounded-full mx-3 bg-transparent flex items-center justify-center" />
          </span>
          <span />
          <span className="mx-5 text-stroke">Artificial&nbsp;Intelligence</span>

          {/* Seventh Dot */}
         
          <span />
          <span className="mx-5 text-stroke">system&nbsp;design</span>
        </h1>
      </Marquee>
    </section>
  );
};

export default TextBannarSection;
