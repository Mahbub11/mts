"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type paragraphProps = {
  paragraph: string;
};

export default function ParagraphOne({ paragraph }: paragraphProps) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 1", "start 0.9"],
  });

  const words = paragraph.split(" ");

  return (
    <p
      ref={container}
      className="flex text-[20px] p-5 w-[90%] text-justify mt-[-1rem] leading-tight flex-wrap"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

type wordProps = {
  children: string;
  progress: any;
  range: number[];
};

const Word = ({ children, progress, range }: wordProps) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mr-3 mt-3 text-justify">
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};