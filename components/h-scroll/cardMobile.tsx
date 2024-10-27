"use client";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { process1, process2, process3, process4, process5, process6 } from "@/public";

interface Skill {
  id: number;
  heading: string;
  image: StaticImageData;
}

export default function CardMobile() {
  const [data, setData] = useState<Skill[]>([
    {
      id: 1,
      heading: "DISCOVERY",
      image: process1,

    },
    {
      id: 2,
      heading: "STORYTELLING",
      image: process2,
    },
    {
      id: 3,
      heading: "DESIGN",
      image: process3,
    },
    {
      id: 4,
      heading: "DEVELOPMENT",
      image: process4,
    },
    {
      id: 5,
      heading: "SQA",
      image: process5,
    },
    {
      id: 5,
      heading: "DEPLOYMENT",
      image: process6,
    },
   
  ]);

  return (
    <div className="w-full flex flex-col items-center space-y-10 z-10">
      {data.map((item) => (
        <div className="flex flex-col items-center text-center z-10" key={item.id}>
          <h1 className="text-[#2E2E2E]/60 text-[40px] z-100 
          font-extrabold leading-tight">
            {`0${item.id}`}
          </h1>
          <h1 className=" text-[30px] z-10 tracking-tighter 
           font-extrabold uppercase text-gray-700">
            {item.heading}
          </h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="w-[150px] h-[150px] z-10 rounded-full mt-2 
              flex items-center justify-center bg-[#A8E4F1]"
          >
            <Image
              className="h-[5rem] w-[5rem]"
              src={item.image}
              alt="Image"
              width={100}
              height={100}
            />
          </motion.div>
        </div>
      ))}
    </div>
  );
}
