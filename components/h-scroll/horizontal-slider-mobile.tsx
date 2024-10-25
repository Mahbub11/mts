"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import path from "path";

import Card from "./card";
import CardMobile from "./cardMobile";

const HorizontalScrollCarouselMobile: React.FC = () => {
  const targetRef1 = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef1,
  });

  const svgRef1 = useRef<SVGSVGElement | null>(null);
  const pathRef1 = useRef<SVGPathElement | null>(null);
  const x = useTransform(scrollYProgress, [1, 0], ["0%", "-390%"]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null, // viewport
        rootMargin: "0px", // no margin
        threshold: 0.5, // 50% of target visible
      }
    );

    if (targetRef1.current) {
      observer.observe(targetRef1.current);
    }

    // Clean up the observer
    return () => {
      if (targetRef1.current) {
        observer.unobserve(targetRef1.current);
      }
    };
  }, []);

  console.log(isVisible);

  useEffect(() => {
    const handleScrollChange = () => {
      if (isVisible) {
        const currentScrollProgress = scrollYProgress.get();

        const path = pathRef1.current;
        if (!path) return;

        const pathLength = path.getTotalLength();
        path.style.strokeDasharray = pathLength.toString();
        path.style.strokeDashoffset = `${
          pathLength * (1 - currentScrollProgress)
        }`; // Adjust for drawing effect

        console.log(pathLength * (1 - currentScrollProgress));
      }
    };

    window.addEventListener("scroll", handleScrollChange);

    return () => window.removeEventListener("scroll", handleScrollChange);
  }, [isVisible]);
  return (
    <section ref={targetRef1} className="h-full relative  line-draw ">
      <div className="mt-[5rem] w-full mx-auto flex justify-center">
        <CardMobile></CardMobile>
        <svg
          ref={svgRef1}
          className="h-[70rem] w-3 top-[15%] absolute -z-10 opacity-20"
          viewBox="0 0 1 388.697"
        >
          <path
            ref={pathRef1}
            id="Path_17"
            data-name="Path 17"
            d="M472,2330.356v388.7"
            transform="translate(-471.5 -2330.356)"
            fill="none"
            stroke="#707070"
            stroke-width="5"
          />
        </svg>
      </div>
    </section>
  );
};

export default HorizontalScrollCarouselMobile;
