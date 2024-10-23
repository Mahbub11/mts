"use client";
import { useRef } from "react";
import { project, projectItem } from "@/constants";

import { useScroll, motion, useTransform } from "framer-motion";
import ProjectCard from "./project-card";
import Tags from "../../../components/Tags";
import RoundButton from "../../../components/RoundButton";

export default function Project() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  

  // New opacity transformation
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);

  return (
    <div className="w-full mt-[15rem] sm:px-2 md:px-10 lg:px-10 font-gvf">
      <div className="w-full flex justify-start">
        <motion.h1
          className="text-btn_clr uppercase leading-none font-gvf
          sm:text-[3rem] md:text-[6rem] lg:text-[6rem]  font-bold overflow-hidden -z-10 text-start"
          style={{ opacity }} // Apply opacity transformation
        >
          {"Featured".split("").map((item: string, i: number) => (
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
        </motion.h1>
      </div>

      <div>
        <div
          className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2
         space-x-5 xl:flex xl:gap-10 xl:justify-center xl:space-x-10 xl:flex-wrap
        sm:px-5 mt-[4rem]"
        >
          {projectItem.map((item) => (
            <div key={item.id}>
              <div className="flex gap-[15px] items-center  mt-10">
                <span className="w-[10px] h-[10px] rounded-full bg-btn_clr" />
                <h1
                  className="small-text uppercase font-medium font-NeueMontreal
                 text-secondry"
                >
                  {item.title}
                </h1>
              </div>
              <ProjectCard item={item} key={item.id} />
              <div className="flex items-center gap-[10px] mt-[20px] flex-wrap">
                {item.links.map((link) => (
                  <Tags
                    className="hover:text-white"
                    bgcolor="#00B4D8"
                    item={link}
                    key={link.id}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center mt-[5rem]">
          <div
            className="flex items-center justify-center
               bg-btn_clr/80 cursor-pointer rounded-full group "
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
      </div>
      {/* <div
        className="mt-10 w-full flex justify-between gap-y-[2rem] padding-x flex-wrap"
        ref={container}
      >
        {project.map((project, index) => (
          <motion.div
            key={project.id}
            className="w-[49%]"
            style={{ y: transformStyles[index % transformStyles.length] }}
          >
            <ProjectCard item={project} />
          </motion.div>
        ))}
      </div> */}
    </div>
  );
}
