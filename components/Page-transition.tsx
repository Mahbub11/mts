import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TransitionProps {
  children: ReactNode;
}
const Transition = ({ children }: TransitionProps) => {
  return (
    <>
      <motion.div
        className='slide-in bg-black'
        animate={{ scaleY: 0 }}
        initial={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.3, 1, 0.36, 1] }}
      ></motion.div>
      <motion.div
        className='slide-out bg-gray-400'
        animate={{ scaleY: 0 }}
        initial={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.3, 1, 0.36, 1] }}
      ></motion.div>
      {children}
    </>
  );
};

export default Transition;