// components/PageOverlay.tsx

"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface PageOverlayProps {
  isVisible: boolean;
  title: string;
}

const PageOverlay = ({ isVisible, title }: PageOverlayProps) => {
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsPaused(false);
      // Set a timer to pause for 1 second after the overlay is fully drawn
      const timer = setTimeout(() => {
        setIsPaused(true);
      }, 500); // Duration of the animation (same as the animate duration)

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <motion.div
      className={`fixed inset-0 flex items-center justify-center
       bg-black bg-opacity-75 transition-opacity duration-300 ${isVisible ?
         'opacity-100' : 'opacity-0 pointer-events-none'}`}
      initial={{ y: "100%" }} // Start from the bottom
      animate={isVisible ? { y: "0%" } : { y: "100%" }} // Move to the top
      exit={{ y: "100%" }} // Exit to the bottom
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{ borderTopLeftRadius: '90%', borderTopRightRadius: '90%' }} // Rounded top
    >
      <h1 className="text-white text-3xl">{title}</h1>

     
    </motion.div>
  );
};

export default PageOverlay;
