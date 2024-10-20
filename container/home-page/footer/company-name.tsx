"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const phrases = ["MEGH", "TECH","LTD"];

const MeghNameFooter = () => {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true }); // Trigger animation once when in view

  return (
    <section ref={containerRef} className="flex flex-col items-start">
      {phrases.map((phrase, index) => (
        <motion.div
          key={index}
          className={`flex items-center mb-4 text-[80px] leading-[0.9]
          text-gray-800 font-bold ${
            index === 1 ? 'ml-8' :
            index === 2 ? 'ml-[6rem]' : '' // Add left margin for the second phrase
          }`}
        >
          {phrase.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              initial={{ opacity: 0, y: 20 }} // Start off invisible and slightly below
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animate to visible when in view
              exit={{ opacity: 0, y: 20 }} // Animate out when exiting
              transition={{ duration: 0.5, delay: charIndex * 0.1 }} // Staggered animation
              className="mr-3" // Margin right between characters
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      ))}
    </section>
  );
};

export default MeghNameFooter;
