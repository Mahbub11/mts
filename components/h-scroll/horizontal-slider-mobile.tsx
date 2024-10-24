"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import path from "path";

import Card from "./card";
import CardMobile from "./cardMobile";

const HorizontalScrollCarouselMobile: React.FC = () => {
  const container = useRef<SVGSVGElement>(null);
  const paths = useRef<SVGPathElement | null>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const svgRef = useRef<SVGSVGElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-390%"]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null, // viewport
        rootMargin: "0px", // no margin
        threshold: 0.02, // 50% of target visible
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    // Clean up the observer
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScrollChange = () => {
      const currentScrollProgress = scrollYProgress.get();
      console.log(currentScrollProgress);

      const path = paths.current;
      if (!path) return;

      const pathLength = path.getTotalLength();
      path.style.strokeDasharray = pathLength.toString();
      path.style.strokeDashoffset = `${
        pathLength * (1 - currentScrollProgress)
      }`; // Adjust for drawing effect
    };

    window.addEventListener("scroll", handleScrollChange);

    return () => window.removeEventListener("scroll", handleScrollChange);
  }, []);
  return (
    <section ref={targetRef} className=" relative h-[300rem] line-draw ">
      <div
        className="sticky top-0 flex h-screen items-center 
        overflow-hidden "
      >
        <motion.div   style={{ x }} className="w-full left-[30%]
         py-[6rem] flex  h-full relative">
         <CardMobile></CardMobile>
          <svg
            ref={container}
            className="h-[30rem] w-[100rem] absolute top-[35%] "
            viewBox="0 0 714.155 172.904"
          >
            <path
              ref={paths}
              id="Path_14"
              data-name="Path 14"
              d="M6.016,3020.427h0c4.851-17.5,34.608-83.025,62.647-98.653.272-.153.754-.406,1.234-.644,4.31-2.06,8.527-4.273,15.348-5.207,11.311-2.266,25.365-.036,28,0,.434.006.864.015,1.448.032,11.018.313,20.2,4.236,28.468,10.6,36.047,27.752,49.693,101.838,105.619,101.838,68.851,0,64.444-112.471,139.868-112.471s94.488,115.922,161.609,112.471,80.926-110.554,145.625-112.471c15.463-.458,24.43,4.031,24.43,4.031"
              transform="translate(-12.979 -2912.571)"
              fill="none"
              stroke="#a1a1a1"
              stroke-width="3"
              
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

interface LogosProps {
  scrollProgress: any; // Adjust type as necessary (e.g., `MotionValue`)
}

const Logos: React.FC<LogosProps> = ({ scrollProgress }) => {
  const y = useTransform(scrollProgress, [0, 1], [-225, 0]);

  return (
    <div className="h-[250px] bg-customDark overflow-hidden">
      <motion.div
        style={{ y }}
        className="h-full bg-black/30 flex justify-center gap-10 items-center p-10"
      >
        {[...Array(5)].map((_, i) => {
          return <h2>LOGO</h2>;
        })}
      </motion.div>
    </div>
  );
};

export default HorizontalScrollCarouselMobile;



