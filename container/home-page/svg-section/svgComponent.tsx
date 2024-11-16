import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";

const SvgComponent: React.FC = () => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const timeout = setTimeout(() => {
      document.body.style.cursor = "default";
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  const svgRef = useRef<SVGSVGElement | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [fillOffset, setFillOffset] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (svgRef.current && isVisible) {
      const rect = svgRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if the SVG is in the viewport
      if (rect.top >= 0 && rect.bottom <= windowHeight) {
        const offset = Math.max(0, windowHeight - rect.top);
        const progress = Math.min(offset / (windowHeight / 2.5) / 2, 1);
        setScrollY(progress);

        // Smoothly update fill offset
        setFillOffset((prevOffset) => {
          const newOffset = Math.min(progress * 100, 100);
          return prevOffset + (newOffset - prevOffset) * 0.1; // Smooth transition
        });
      } else {
        setScrollY(0);
        setFillOffset(0);
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting && entry.intersectionRatio === 1);
        if (!entry.isIntersecting) {
          setScrollY(0);
          setFillOffset(0);
        }
      },
      { threshold: 1 }
    );

    if (svgRef.current) {
      observer.observe(svgRef.current);
    }

    return () => {
      if (svgRef.current) {
        observer.unobserve(svgRef.current);
      }
    };
  }, [svgRef]);

  useEffect(() => {
    if (isVisible) {
      window.addEventListener("scroll", handleScroll);
    } else {
      setScrollY(0);
      setFillOffset(0);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  const strokeColor = scrollY === 1 ? "#" : "#b9d7ed"; // Same color for stroke when filled
  const strokeLinecap = scrollY === 1 ? "round" : "butt"; // Make stroke rounded when fully filled
  const shadowFilter = scrollY === 1 ? "" : "none"; // Add shadow effect

  return (
    <div
      className="container mx-auto flex justify-center h-auto
      sm:mt-[2rem] mt-[10rem]"
      style={{ position: "relative" }}
    >
      <svg
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 790.3 215.106"
        className=" lg:w-[130rem] md:w-[66rem] sm:[150rem] sm:ml-7  md:ml-[5rem]
        lg:ml-[7rem]"
        style={{ position: "relative", zIndex: 1 }}
      >
        <defs>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "rgba(0, 212, 255, 0.4)", stopOpacity: 1 }}
            />
            <stop
              offset={`${fillOffset}%`}
              style={{ stopColor: "rgba(138, 235, 255, 0.4)", stopOpacity: 1 }}
            />
            <stop
              offset="0%"
              style={{ stopColor: "transparent", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>

        <motion.path
          d="M34,128H0V.8H37.8L80,79.2V.8h34V128H75.2L34,52.6Zm469.6,0H410.8V.8h91.6v26H444.8V50.4h49.8v26H444.8V102h58.8ZM611,113.8l11-24.6a46.231,46.231,0,0,0,9.609,5.463q.394.171.791.337a78.785,78.785,0,0,0,13.4,4.2,67.415,67.415,0,0,0,9.192,1.411q2.3.187,4.608.189,9.6,0,13.2-3a11.442,11.442,0,0,0,2.086-2.233A8.163,8.163,0,0,0,676.4,90.8a8.9,8.9,0,0,0-.507-3.064A7.7,7.7,0,0,0,673.5,84.4a17.607,17.607,0,0,0-2.152-1.5,41.007,41.007,0,0,0-5.943-2.837q-.6-.238-1.205-.464l-16.8-6.2a85.617,85.617,0,0,1-22.145-11.691q-1.517-1.155-2.955-2.409-9.5-8.3-9.5-22.9A34.826,34.826,0,0,1,615,23.8a30.977,30.977,0,0,1,10.616-13.73q.243-.183.489-.363Q636.216,2.324,652.87.558A105.7,105.7,0,0,1,664,0,92.018,92.018,0,0,1,688.893,3.04q1.413.4,2.807.862a68.619,68.619,0,0,1,9.414,3.891,49,49,0,0,1,8.624,5.522q.538.435,1.062.887L700.6,37.6a42.771,42.771,0,0,0-3.979-1.988q-2.119-.934-4.588-1.8-.913-.319-1.833-.615a88.841,88.841,0,0,0-12.9-3.1q-4.026-.669-8.1-.945Q666.9,29,664.6,29q-6.847,0-10.557,1.534a10.406,10.406,0,0,0-1.343.666,9.388,9.388,0,0,0-1.871,1.43A5.986,5.986,0,0,0,649,37a7.308,7.308,0,0,0,2.8,5.5,15.071,15.071,0,0,0,2.059,1.514A39.879,39.879,0,0,0,661.2,47.4l14.6,5.4q17.775,6.512,26.336,13.721,1.124.943,2.164,1.979a28,28,0,0,1,8.136,17.737q.166,1.777.164,3.563,0,17.4-12.9,28.7a41.482,41.482,0,0,1-14.665,8.111,64.327,64.327,0,0,1-13.5,2.741,92.926,92.926,0,0,1-9.337.448,93.888,93.888,0,0,1-29.1-4.5,86.267,86.267,0,0,1-9.623-3.726A54,54,0,0,1,611,113.8ZM325.6,128h-48V7.8a79.853,79.853,0,0,1,11.119-3.747A106.417,106.417,0,0,1,299.2,1.9,155.913,155.913,0,0,1,320.82.019Q321.91,0,323,0a113.417,113.417,0,0,1,19.773,1.612A72.25,72.25,0,0,1,362.2,7.762,53.49,53.49,0,0,1,375,16.5a52.843,52.843,0,0,1,14.862,24.917A84.824,84.824,0,0,1,392.8,64.6a96.57,96.57,0,0,1-1.1,15.015,64.47,64.47,0,0,1-3.939,14.494A49.436,49.436,0,0,1,384.3,101a50.082,50.082,0,0,1-23.7,20.5,79.149,79.149,0,0,1-19.672,5.427A105.2,105.2,0,0,1,325.6,128Zm-145.447-.674A87.422,87.422,0,0,0,196.6,128.8c.46,0,.917,0,1.373-.009a81.872,81.872,0,0,0,18.837-2.3,52.826,52.826,0,0,0,30.4-19.584Q259.6,90.6,259.6,64.6q0-20-7.4-34.5A51.826,51.826,0,0,0,230.7,7.8,60.622,60.622,0,0,0,212.425,1.39,85.674,85.674,0,0,0,196.6,0,87.345,87.345,0,0,0,181.258,1.29,63.8,63.8,0,0,0,162.1,7.8a53.668,53.668,0,0,0-22.3,22.3,63.3,63.3,0,0,0-6.307,18.053A86.334,86.334,0,0,0,132,64.6a86.8,86.8,0,0,0,1.337,15.6A62.928,62.928,0,0,0,139.8,99a53.2,53.2,0,0,0,22.3,22.1,63.844,63.844,0,0,0,18.053,6.226ZM519.6,119.4,529,94.8a23.483,23.483,0,0,0,16.4,6.2,19.375,19.375,0,0,0,3.8-.346,11.684,11.684,0,0,0,3.838-1.442A8.916,8.916,0,0,0,556.1,96.1q2.9-4.9,2.9-12.5V.8h34V89.6a54.032,54.032,0,0,1-1.406,12.666A38.037,38.037,0,0,1,583,119a31.656,31.656,0,0,1-14.905,9.207A52.624,52.624,0,0,1,553,130.2a59.978,59.978,0,0,1-18.7-2.9,50.188,50.188,0,0,1-7.6-3.15,36.792,36.792,0,0,1-7.1-4.75ZM312,29v73h11.8a40.453,40.453,0,0,0,10.086-1.188,27.582,27.582,0,0,0,19.837-18.149A54.073,54.073,0,0,0,356.4,64.6a64.284,64.284,0,0,0-.78-10.367,40.457,40.457,0,0,0-2.8-9.766A27.988,27.988,0,0,0,348,36.9q-8.4-9.3-24.4-9.3-2.437,0-4.867.214-.467.04-.933.086A33.033,33.033,0,0,0,312,29ZM196.6,100q13.6,0,20.7-8.9a28.607,28.607,0,0,0,4.695-8.925,45.982,45.982,0,0,0,1.945-9.064,70.659,70.659,0,0,0,.46-8.311,68.479,68.479,0,0,0-.693-10.084,43.625,43.625,0,0,0-2.365-9.265A29.543,29.543,0,0,0,217.3,38.1q-7.1-9.3-20.7-9.3a31.985,31.985,0,0,0-9.666,1.391A25.222,25.222,0,0,0,175.1,38.1a30.265,30.265,0,0,0-5.67,10.5,46.751,46.751,0,0,0-1.942,9.853q-.294,3.165-.288,6.348a61.3,61.3,0,0,0,.733,9.814q1.674,10.3,7.167,16.486Q183,100,196.6,100Z"
          fill="url(#blueGradient)"
          stroke={strokeColor}
          strokeWidth="1"
          strokeLinecap={strokeLinecap}
          filter={shadowFilter}
          initial={{ pathLength: 1 }}
          animate={{ pathLength: 1 }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
        />
      </svg>
    </div>
  );
};

export default SvgComponent;
