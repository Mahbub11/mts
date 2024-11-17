import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { webProcess } from "@/constants"; // Assuming webProcess is already imported
import {
  reactLogo,
  htmlLogo,
  figmaLogo,
  nextJsLogo,
  djangoLogo,
  wordpressLogo,
  shopifyLogo,
  devOpsLogo,
  nodeLogo,
  expressjs,
  postgres,
  mongoIcon,
  vuejs,
  tailwindCSS,
  dockerIcon,
  awsLogo,
  kubernets,
} from "@/public";

const icons = [
  reactLogo,
  nextJsLogo,
  vuejs,
  htmlLogo,
  nodeLogo,
  expressjs,
  djangoLogo,
  postgres,
  mongoIcon,
  tailwindCSS,
  dockerIcon,
  kubernets,
  awsLogo,
  wordpressLogo,
  shopifyLogo,
  devOpsLogo, // Websites (WordPress, HTML5, React)
];

export default function ServiceSection() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <section className="w-full sm:px-5  px-[3rem] mt-[10rem]">
      <div className="w-full flex justify-start">
        <motion.h1
          className="text-btn_clr uppercase leading-none font-gvf
           sm:text-[3rem] md:text-[6rem] lg:text-[6rem]
            font-bold overflow-hidden -z-10 text-start"
        >
          {"services".split("").map((item: string, i: number) => (
            <motion.span
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.1,
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="inline-block text-btn_clr"
              key={i}
            >
              {item}
            </motion.span>
          ))}
        </motion.h1>
      </div>

      <div className="flex justify-end mt-[5rem]">
        <div className="sm:w-full w-[70%] mx-1">
        <AnimatePresence>
            <div className="w-full h-full flex gap-10 flex-wrap">
              {icons.map((icon, index) => (
                <motion.div
                  key={index}
                  className="sm:h-[4rem] sm:w-[6rem] h-[8rem] w-[10rem] bg-gray-50 flex flex-col items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <Image
                    className="sm:h-[4rem] sm:w-[4rem] h-[6rem] w-[6rem] px-3 py-3"
                    src={icon}
                    alt={`icon-${index}`}
                    width={300} // Adjust width and height as needed
                    height={300}
                  />
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
