"use client";
import Link from "next/link";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { useInView, motion } from "framer-motion";
import RoundButton from "../../../components/RoundButton";
import Rounded from "../../../components/Rounded";

const phrases = ["Ready", "to start", "the project"];

export default function Ready() {
  const container = useRef(null);
  const inView = useInView(container, { once: true }); // Trigger animation once when in view

  return (
    <section
      className="w-full relative z-30 min-h-screen mt-[10rem] 
      sm:h-screen xm:h-screen padding-y rounded-t-[20px]"
      ref={container}
    >
      <div className="w-full h-full flex justify-center
       gap-[50px] items-center flex-col">
        <motion.div
          className="flex flex-col gap-[10px] text-center text-gray-700"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }} // Animate based on visibility
          transition={{ duration: 0.5 }}
        >
          {phrases.map((phrase, index) => (
            <motion.h1
              key={index}
              className="sm:text-[70px] sm:leading-[60px]
              md:text-[120px] md:leading-[100px] lg:text-[120px]
               lg:leading-[120px] 
              xm:text-[80px] 
                xm:leading-[60px] tracking-[2.5px] font-bold font-fg
                 text-gray-800 uppercase"
              initial={{ rotateY: 180, opacity: 0 }} // Start flipped
              animate={
                inView
                  ? { rotateY: 0, opacity: 1 }
                  : { rotateY: 180, opacity: 0 }
              } // Flip to front when in view
              exit={{ rotateY: 180, opacity: 0 }} // Flip back when exiting
              transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation
            >
              {phrase}
            </motion.h1>
          ))}
        </motion.div>
        <div className="flex flex-col items-center gap-[10px]">
          <div className="w-full flex justify-center mt-[3rem]">
            <div
              className="flex items-center justify-center
               bg-[#00B4D8] cursor-pointer rounded-full group "
            >
              <RoundButton
                href="/presentation"
                title="view all case studies"
                bgcolor="#00B4D8"
                className="bg-white text-customDark"
                style={{ color: "#fff" }}
              />
            </div>
          </div>
          <p className="text-[20px] font-NeueMontreal text-secondry">OR</p>
          <div
            className="flex items-center justify-between bg-transparent cursor-pointer rounded-full group border 
          border-[#212121] hover:border-[#00d4ff] hover:text-customDark "
          >
            <Link
              className="xl:text-[18px] xl:leading-[28px] text-[14px] leading-[24px] uppercase font-normal font-NeueMontreal"
              href="/contact"
            >
              <Rounded className="py-[6px]" backgroundColor="#00B4D8">
                <p className="z-10 px-[10px] ml-[15px] py-[6px] group-hover:text-white text-black">
                  hello@ochi.design
                </p>
                <div
                  className="bg-black group-hover:bg-white text-black
                p-[10px]
                 rounded-full scale-[0.3] mr-[10px] group-hover:scale-[0.9] 
                 transition-all z-10 transform duration-[0.3s] ease-[.215,.61,.355,1]"
                >
                  <ArrowUpRight
                    strokeWidth={1.5}
                    size={30}
                    className="scale-[0] group-hover:scale-[1]"
                  />
                </div>
              </Rounded>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
