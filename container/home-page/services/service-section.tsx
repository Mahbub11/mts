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
} from "@/public";

// Icons by service with StaticImageData
const iconsByService: Record<number, StaticImageData[]> = {
  1: [reactLogo, htmlLogo, figmaLogo], // MVPs (React, HTML5, Figma)
  2: [nextJsLogo, nodeLogo, figmaLogo, htmlLogo], // Web Apps (Angular, Figma, HTML5)
  3: [nextJsLogo, djangoLogo, wordpressLogo, devOpsLogo], // Websites (WordPress, HTML5, React)
  4: [reactLogo, shopifyLogo, nextJsLogo, wordpressLogo], // E-commerce (React, HTML5, Angular)
};

export default function ServiceSection() {
  // Set all sections to open by default
  const [activeAccordions, setActiveAccordions] = useState<
    Record<number, boolean>
  >({
    1: true,
    2: true,
    3: true,
    4: true,
  });

  const toggleAccordion = (itemId: number) => {
    setActiveAccordions((prev) => ({
      ...prev,
      [itemId]: !prev[itemId], // Toggle specific accordion's open state
    }));
  };

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
          {webProcess.map((item) => (
            <div
              key={item.id}
              className={`w-full flex py-[10px] flex-col border-t border-[#21212155]`}
            >
              <div className="w-full flex items-center justify-between py-[10px] padding-x">
                <div className="w-[50%] sm:w-full xm:w-full">
                  <h3 className="paragraph text-[20px] text-gray-700 font-[600] font-NeueMontreal uppercase">
                    {item.phase}
                  </h3>
                </div>
              </div>

              {/* Accordion content */}
              <div
                className="w-full flex justify-between 
               sm:flex-col xm:flex-col"
              >
                <div className="sm:w-[80%] w-[50%] sm:hidden xm:hidden" />
                <div className="w-[80%] flex justify-center sm:w-full xm:w-full">
                  <AnimatePresence>
                    {activeAccordions[item.id] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{
                          ease: [0.4, 0, 0.2, 1],
                          duration: 1.3,
                        }}
                      >
                        <div className="flex flex-col gap-[20px] py-[10px]">
                          {/* Render Icons for the specific service */}
                          <div className="w-full h-fll flex justify-around space-x-[3rem] pb-10">
                            {iconsByService[item.id].map((icon, index) => (
                              <div key={index} className="h-full w-full">
                                <Image
                                  src={icon}
                                  alt={`Icon ${index + 1}`}
                                  className="sm:h-[2rem] sm:w-[2rem] h-[5rem] w-[5rem] object-cover"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className="w-[10%]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
