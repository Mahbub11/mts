"use client";
import Card from "./card";
import Image from "next/image";
import { TpageSkillsProps } from "@/types";
import { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import HorizontalScrollCarouselTablet from "./horizontal-slider-tablet";
import HorizontalScrollCarouselMobile from "./horizontal-slider-mobile";

export default function HorizontalScrollCarousel() {
  
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const svgRef = useRef<SVGSVGElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null, // viewport
        rootMargin: "0px", // no margin
        threshold: 0.05, // 50% of target visible
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
    const svg = svgRef.current;
    const path = pathRef.current;
    const target = targetRef.current;

    if (!svg || !path || !target) return;

    const pathLength = path.getTotalLength();
    path.style.strokeDasharray = pathLength.toString();
    path.style.strokeDashoffset = pathLength.toString();

    const handleScroll = () => {
      const rect = target.getBoundingClientRect();
      const startAnimationAt = window.innerHeight / 2; // Start when 50% is in viewport

      if (isVisible) {
        console.log("calllllllled");
        const distance = window.scrollY - rect.top + startAnimationAt;
        const totalDistance =
          svg.clientHeight + rect.height - window.innerHeight;
        const percentage = distance / totalDistance;

        const slowDownFactor = 0.55;
        const adjustedPercentage = percentage * slowDownFactor - 0.7;

        console.log(adjustedPercentage - 1);

        path.style.strokeDashoffset = `${
          pathLength * (1 - adjustedPercentage)
        }`;

        console.log(pathLength * (1 - adjustedPercentage));
        console.log(totalDistance);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  return (
    <>
      <div>
        <div className="sm:px-3 px-10 md:mt-[10rem]">
          <h1
            className="text-btn_clr uppercase leading-none font-gvf
            sm:text-[3rem] md:text-[6rem] lg:text-[6rem]  font-bold overflow-hidden -z-10 text-start"
          >
            {"process".split("").map((item: string, i: number) => (
              <motion.span
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.5,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="inline-block"
                key={i}
              >
                {item}
              </motion.span>
            ))}
          </h1>
        </div>

        <section
          ref={targetRef}
          className="sm:hidden md:hidden relative h-[300rem] line-draw "
        >
          <div
            className="sticky top-0 flex h-screen items-center 
        overflow-hidden  svg-container"
          >
            <motion.div
              style={{ x }}
              className="w-full py-[2rem] flex  h-full relative"
            >
              <Card />
              <svg
                ref={svgRef}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1548 245.8"
                className="overflow-visible absolute
                xl:w-[150rem] xl:top-[40%] xl:left-[15%]
                lg:w-[115rem] lg:top-[40%] lg:left-[15%]
                flg:w-[160rem] flg:top-[40%] flg:left-[15%]
                fflg:w-[170rem] fflg:top-[40%] fflg:left-[15%]
                slg:w-[178rem]
                ttlg:w-[140rem]
                tlg:w-[145rem]
                sslg:w-[190rem]
                
                 
                 "
              >
                <path
                  className="path"
                  ref={pathRef}
                  id="Path_14"
                  data-name="Path 14"
                  d="M 6.923 3127.849 c 21.713 -49.069 66.11 -157.369 131.125 -193.487 c 23.739 -20.473 78.968 -16.427 87.189 -16.225 c 123.5 3.027 129.035 237.305 266.313 237.305 s 132.415 -237.305 282.8 -237.305 s 192.866 249.723 326.695 237.305 s 156.884 -230.407 285.884 -237.305 h 0"
                  transform="translate(1.652 -2912.571)"
                  fill="none"
                  stroke="#00b4d84f"
                  stroke-width="8"
                />
              </svg>
            </motion.div>
          </div>
        </section>

        <div className="hidden md:block">
          <HorizontalScrollCarouselTablet></HorizontalScrollCarouselTablet>
        </div>

        <div className="hidden sm:block">
          
          <HorizontalScrollCarouselMobile></HorizontalScrollCarouselMobile>
        </div>
      </div>
    </>
  );
}
