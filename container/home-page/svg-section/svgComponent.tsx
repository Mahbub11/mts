import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const SvgComponent: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [scrollY, setScrollY] = useState(0);
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
      } else {
        setScrollY(100);
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting && entry.intersectionRatio === 1);
        if (!entry.isIntersecting) {
          setScrollY(0);
        }
      },
      { threshold: 1.0 }
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
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  const fillOffset = Math.min(scrollY * 100, 100);
  const strokeColor = scrollY === 1 ? "#" : "#b9d7ed"; // Same color for stroke when filled
  const strokeLinecap = scrollY === 1 ? "round" : "butt"; // Make stroke rounded when fully filled
  const shadowFilter = scrollY === 1 ? "" : "none"; // Add shadow effect

  return (
    <div
      
      className="container mx-auto  flex justify-center h-auto
      sm:px-2"
      style={{ position: "relative" }}
    >
      <svg
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        width="861.3"
        height="250.106"
        viewBox="0 0 871.3 215.106"
        className="lg:w-[66rem] md:w-[66rem]"
        style={{ position: "relative", zIndex: 1 }}
      >
        <defs>
          <linearGradient
            id="blueGradient"
            x1="0%"
            y1="10%"
            x2="100%"
            y2="100%"
          >
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
          d="M 176.1 2.103 L 246.9 2.103 L 246.9 213.603 L 188.1 213.603 L 188.1 96.903 L 148.2 213.603 L 99 213.603 L 58.8 96.003 L 58.8 213.603 L 0 213.603 L 0 2.103 L 71.1 2.103 L 124.2 139.503 L 176.1 2.103 Z M 643.2 71.703 L 579.9 71.703 Q 574.8 63.303 565.95 58.803 A 40.493 40.493 0 0 0 554.33 55.046 A 54.891 54.891 0 0 0 545.1 54.303 Q 522.9 54.303 510.15 68.703 A 48.839 48.839 0 0 0 499.385 89.77 Q 497.4 97.816 497.4 107.403 Q 497.4 134.703 511.05 148.953 Q 524.7 163.203 550.8 163.203 A 52.902 52.902 0 0 0 569.758 159.981 Q 583.555 154.724 591.911 140.891 A 62.466 62.466 0 0 0 594.9 135.303 L 535.8 135.303 L 535.8 93.003 L 645.6 93.003 L 645.6 150.003 A 104.814 104.814 0 0 1 630.129 175.917 A 122.699 122.699 0 0 1 625.35 181.503 A 98.228 98.228 0 0 1 602.805 199.751 A 121.075 121.075 0 0 1 591.6 205.653 A 101.235 101.235 0 0 1 562.37 213.986 A 129.451 129.451 0 0 1 545.1 215.103 A 125.935 125.935 0 0 1 513.823 211.363 A 103.638 103.638 0 0 1 488.85 201.453 Q 464.4 187.803 451.05 163.353 A 109.222 109.222 0 0 1 438.587 123.177 A 136.89 136.89 0 0 1 437.7 107.403 A 124.741 124.741 0 0 1 441.693 75.297 A 105.29 105.29 0 0 1 451.05 51.753 Q 464.4 27.303 488.7 13.653 A 106.23 106.23 0 0 1 527.506 1.083 A 134.8 134.8 0 0 1 544.8 0.003 A 136.762 136.762 0 0 1 573.866 2.933 A 95.831 95.831 0 0 1 610.8 19.203 Q 636.9 38.403 643.2 71.703 Z M 802.5 2.103 L 861.3 2.103 L 861.3 213.603 L 802.5 213.603 L 802.5 128.703 L 730.8 128.703 L 730.8 213.603 L 672 213.603 L 672 2.103 L 730.8 2.103 L 730.8 81.603 L 802.5 81.603 L 802.5 2.103 Z M 415.8 49.203 L 339.3 49.203 L 339.3 83.703 L 406.8 83.703 L 406.8 128.403 L 339.3 128.403 L 339.3 166.503 L 415.8 166.503 L 415.8 213.603 L 280.5 213.603 L 280.5 2.103 L 415.8 2.103 L 415.8 49.203 Z"
          fill="url(#blueGradient)"
          stroke={strokeColor} // Stroke color
          strokeWidth="1"
          strokeLinecap={strokeLinecap} // Change stroke cap based on fill state
          filter={shadowFilter} // Apply shadow filter based on fill state
          initial={{ pathLength: 1 }}
          animate={{ pathLength: 1 }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
          // Add transition for smooth filling
        />
      </svg>
    </div>
  );
};

export default SvgComponent;
