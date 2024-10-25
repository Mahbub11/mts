"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

interface Skill {
  id: number;
  heading: string;
  image: string;
}

export default function CardMobile() {
  const [data, setData] = useState<Skill[]>([
    {
      id: 1,
      heading: "Fusion 360",
      image: "https://res.cloudinary.com/dnpqqwyhz/image/upload/v1724191543/n80tcp6tagcoh5te0w0z.svg",
    },
    {
      id: 2,
      heading: "After Effect",
      image: "https://res.cloudinary.com/dnpqqwyhz/image/upload/v1724191543/iaoj4urwnwinlye4j88s.svg",
    },
    {
      id: 3,
      heading: "Illustrator",
      image: "https://res.cloudinary.com/dnpqqwyhz/image/upload/v1724191543/ujylzfjmldhca2jhjkot.svg",
    },
    {
      id: 4,
      heading: "Photoshop",
      image: "https://res.cloudinary.com/dnpqqwyhz/image/upload/v1724191543/b9ydkrpnoeh3ny04xbiu.svg",
    },
    {
      id: 5,
      heading: "InDesign",
      image: "https://res.cloudinary.com/dnpqqwyhz/image/upload/v1724191543/dvvs2ip97jt2xxxmmi1c.svg",
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
           font-extrabold uppercase text-btn_clr leading-tight">
            {item.heading}
          </h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="w-[150px] h-[150px] z-10 rounded-full mt-2 border-4 border-[#bbb0d2] flex items-center justify-center bg-white"
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
