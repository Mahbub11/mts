'use client'

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface TransactionWrapperProps {
  children: ReactNode;
}

export default function TransactionWrapper({ children }: TransactionWrapperProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true }); // Set to false to animate every time it comes into view

  return (
    <motion.div
      ref={ref}
      initial={{ y: 20, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 1.5 }}
    >
      {children}
    </motion.div>
  );
}
