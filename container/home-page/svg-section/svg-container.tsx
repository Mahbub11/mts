"use client";

import React, { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import SvgComponent from "./svgComponent";
import Lenis from "lenis";

export default function SvgContainer() {
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
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  return (
    <div ref={container}>
      <Container scrollProgress={scrollYProgress} />
    </div>
  );
}

interface Props {
  scrollProgress: any;
}

const Container: React.FC<Props> = ({ scrollProgress }) => {
  const y = useTransform(scrollProgress, [0, 1], [-400, 0]);

  return (
    <div className="h-full  overflow-hidden">
      <motion.div
        style={{ y }}
        className="h-full 
             flex justify-center gap-10 items-center p-10"
      >
        <SvgComponent></SvgComponent>
      </motion.div>
    </div>
  );
};
