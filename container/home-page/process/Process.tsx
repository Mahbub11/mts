"use client";
import { useState } from "react";

import { processItem } from "@/constants";
import { motion, AnimatePresence } from "framer-motion";
import TextHover from "@/animation/TextHover";

export default function Process() {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(
    processItem[0]?.id || null
  );

  const toggleAccordion = (itemId: string) => {
    if (activeAccordion === itemId) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(itemId);
    }
  };

  return (
    <section className="w-full mt-[5rem] sm:px-2 md:px-10 lg:px-10 font-gvf">
      <div className="">
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

      <div className="w-full flex justify-end md:mt-10 lg:mt-10 sm:mt-5 md:ml-[-3rem]  
      lg:ml-[-3rem]">
        <div className="md:w-[70%] lg:w-[70%] sm:w-full items-end flex 
         flex-col sm:px-5 md:px-10 lg:px-10 py-10">
          {processItem.map((item) => (
            <div
              key={item.id}
              className="sm:w-full w-[90%] flex-col flex md:py-[1rem] lg:py-[1rem]
              sm:py-[5px]
               border-b border-gray-300"
            >
              <div
                className="flex items-center justify-between transition-all
               duration-500 ease-in-out cursor-pointer"
                onClick={() => toggleAccordion(item.id)}
              >
                <div
                  className="flex gap-x-[1rem] 
              font-gvf items-center sm:text-[20px]
               md:text-[2rem] lg:text-[1.5rem]   text-gray-900 font-[500]
               font-NeueMontreal"
                >
                  <TextHover
                    title1="0"
                    subTitle1={item.id}
                    title2={item.title}
                    subTitle2={item.subTitle}
                  />
                </div>
                <button className="text-[2rem] ">
                  {activeAccordion === item.id ? "-" : "+"}
                </button>
              </div>
              <AnimatePresence>
                {activeAccordion === item.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{
                      ease: "anticipate",
                      duration: 1,
                      type: "tween",
                    }}
                  >
                    <p className="small-text text-justify tracking-wider font-normal font-NeueMontreal
                     text-secondry px-2 py-5">
                      {item.para}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
