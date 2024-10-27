"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { TpageSkillsProps } from "@/types";
import { useEffect, useState } from "react";
import { process1, process2, process3, process4, process5 } from "@/public";

export default function CardTablet() {
  const [data, setData] = useState<TpageSkillsProps[]>([
    {
      id: "66c5134e380f22191abe833d",
      title: "Process",
      skillNo1: "01",
      skillNo2: "02",
      skillNo3: "03",
      skillNo4: "04",
      skillNo5: "05",
      skillNo6: "06",
      heading1: "Fusion 360",
      heading2: "After Effect",
      heading3: "Illustrator",
      heading4: "Phtoshop",
      heading5: "Indesign",
      images: [
        process1,
       process2,
        process3,
        process4,
        process5,
      ],
    },
  ]);

  return (
    <>
      {data?.map((item) => (
        <div
          className="w-[20%] h-full flex-col flex 
					items-center justify-between shrink-0 relative "
          key={item.id}
         >
          <div className="absolute top-[50%] left-[-70%]">
            <div
              className="w-full h-full 
		      flex items-center justify-center flex-col"
            >
              <div className="flex flex-col items-center relative z-[99]">
                <h1
                  className="text-[#2E2E2E]/10 text-[200px]
							 mdd:text-[120px] tracking-tighter 
							  td:text-[60px] lg:text-[80px] 
							 mht:text-[60px] md:text-[70px] 
							 sm:text-[40px] xm:text-[40px] 
							 font-extrabold leading-tight"
                >
                  {item.skillNo1}
                </h1>
                <h1
                  className="drop-shadow-md lg:text-[30px] tracking-tighter
							 font-IBMPlex font-extrabold uppercase text-btn_clr leading-tight"
                >
                  Requirenment
                </h1>
              </div>
              {item.images.slice(1, 2).map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  className="w-[150px] h-[150px]  rounded-full 
								border-4 border-[#bbb0d2] flex items-center
								 justify-center bg-white z-50"
                >
                  <Image
                    className="lg:w-[100px] td:h-[80px]
									 lg:h-[100px] mht:h-[80px] md:w-[100px] md:h-[100px] "
                    src={img}
                    alt="Image"
                    width={200}
                    height={200}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {data?.map((item) => (
        <div
          className=" w-full  h-full flex-col flex 
					items-center justify-between relative "
          key={item.id}
        >
          <div className="absolute w-full top-[2%] right-[50%]">
            
            <div
              className="w-full h-full 
		   flex items-center justify-center flex-col"
            >
              <div className="flex flex-col items-center relative z-[99]">
                <h1
                  className="text-[#2E2E2E]/10 text-[200px]
							 mdd:text-[120px] tracking-tighter 
							  td:text-[60px] lg:text-[80px] 
							 mht:text-[60px] md:text-[70px] 
							 sm:text-[40px] xm:text-[40px] 
							 font-extrabold leading-tight"
                >
                  {item.skillNo2}
                </h1>
                <h1
                  className="drop-shadow-md lg:text-[30px] tracking-tighter
                  font-IBMPlex font-extrabold uppercase text-btn_clr leading-tight"
                >
                  Requirenment
                </h1>
              </div>
              {item.images.slice(1, 2).map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  className="w-[150px] h-[150px]  rounded-full 
								border-4 border-[#bbb0d2] flex items-center
								 justify-center bg-white z-50"
                >
                  <Image
                    className="lg:w-[100px] td:h-[80px]
									 lg:h-[100px] mht:h-[80px] md:w-[100px] md:h-[100px] "
                    src={img}
                    alt="Image"
                    width={200}
                    height={200}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {data?.map((item) => (
        <div
          className=" w-[30%] h-full flex-col flex 
					items-center justify-between shrink-0 relative "
          key={item.id}
        >
          <div className="absolute w-full top-[50%]  left-[80%] ">
            <div
              className="w-full h-full 
		   flex items-center justify-center flex-col"
            >
              <div className="flex flex-col items-center relative z-[99]">
                <h1
                  className="text-[#2E2E2E]/10 text-[200px]
							 mdd:text-[120px] tracking-tighter 
							  td:text-[60px] lg:text-[80px] 
							 mht:text-[60px] md:text-[70px] 
							 sm:text-[40px] xm:text-[40px] 
							 font-extrabold leading-tight"
                >
                  {item.skillNo3}
                </h1>
                <h1
                  className="drop-shadow-md lg:text-[30px] tracking-tighter
                  font-IBMPlex font-extrabold uppercase text-btn_clr leading-tight"
                >
                  Requirenment
                </h1>
              </div>
              {item.images.slice(1, 2).map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  className="w-[150px] h-[150px]  rounded-full 
								border-4 border-[#bbb0d2] flex items-center
								 justify-center bg-white z-50"
                >
                  <Image
                    className="lg:w-[100px] td:h-[80px]
									 lg:h-[100px] mht:h-[80px] md:w-[100px] md:h-[100px] "
                    src={img}
                    alt="Image"
                    width={200}
                    height={200}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {data?.map((item) => (
        <div
          className=" w-[40%] h-full flex-col flex 
					 justify-between shrink-0 relative"
          key={item.id}
        >
          <div className="absolute w-full top-[5%] left-[65%] ">
            <div
              className="w-full h-full 
		   flex items-center justify-center flex-col"
            >
              <div className="flex flex-col items-center relative z-[99]">
                <h1
                  className="text-[#2E2E2E]/10 text-[200px]
							 mdd:text-[120px] tracking-tighter 
							  td:text-[60px] lg:text-[80px] 
							 mht:text-[60px] md:text-[70px] 
							 sm:text-[40px] xm:text-[40px] 
							 font-extrabold leading-tight"
                >
                  {item.skillNo4}
                </h1>
                <h1
                  className="drop-shadow-md lg:text-[30px] tracking-tighter
                  font-IBMPlex font-extrabold uppercase text-btn_clr leading-tight"
                >
                  Requirenment
                </h1>
              </div>
              {item.images.slice(1, 2).map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  className="w-[150px] h-[150px]  rounded-full 
								border-4 border-[#bbb0d2] flex items-center
								 justify-center bg-white z-50"
                >
                  <Image
                    className="lg:w-[100px] td:h-[80px]
									 lg:h-[100px] mht:h-[80px] md:w-[100px] md:h-[100px] "
                    src={img}
                    alt="Image"
                    width={200}
                    height={200}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {data?.map((item) => (
        <div
          className=" w-[30%] h-full flex-col flex 
					items-center justify-between shrink-0 relative "
          key={item.id}
        >
          <div className="absolute w-full top-[50%] left-[110%]">
            <div
              className="w-full h-full 
		   flex items-center justify-center flex-col"
            >
              <div className="flex flex-col items-center relative z-[99]">
                <h1
                  className="text-[#2E2E2E]/10 text-[200px]
							 mdd:text-[120px] tracking-tighter 
							  td:text-[60px] lg:text-[80px] 
							 mht:text-[60px] md:text-[70px] 
							 sm:text-[40px] xm:text-[40px] 
							 font-extrabold leading-tight"
                >
                  {item.skillNo2}
                </h1>
                <h1
                  className="drop-shadow-md lg:text-[30px] tracking-tighter
                  font-IBMPlex font-extrabold uppercase text-btn_clr leading-tight"
                >
                  Requirenment
                </h1>
              </div>
              {item.images.slice(1, 2).map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  className="w-[150px] h-[150px]  rounded-full 
								border-4 border-[#bbb0d2] flex items-center
								 justify-center bg-white z-50"
                >
                  <Image
                    className="lg:w-[100px] td:h-[80px]
									 lg:h-[100px] mht:h-[80px] md:w-[100px] md:h-[100px] "
                    src={img}
                    alt="Image"
                    width={200}
                    height={200}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      ))}


{data?.map((item) => (
        <div
          className="w-[40%]  h-full flex-col flex 
					 justify-between shrink-0 relative "
          key={item.id}
        >
          <div className="absolute top-[5%] left-[120%]">
            <div
              className="w-full h-full 
		   flex items-center justify-center flex-col"
            >
              <div className="flex flex-col items-center relative z-[99]">
                <h1
                  className="text-[#2E2E2E]/10 text-[200px]
							 mdd:text-[120px] tracking-tighter 
							  td:text-[60px] lg:text-[80px] 
							 mht:text-[60px] md:text-[70px] 
							 sm:text-[40px] xm:text-[40px] 
							 font-extrabold leading-tight"
                >
                  {item.skillNo5}
                </h1>
                <h1
                  className="drop-shadow-md lg:text-[30px] tracking-tighter
                  font-IBMPlex font-extrabold uppercase text-btn_clr leading-tight"
                >
                  Requirenment
                </h1>
              </div>
              {item.images.slice(1, 2).map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  className="w-[150px] h-[150px]  rounded-full 
								border-4 border-[#bbb0d2] flex items-center
								 justify-center bg-white z-50"
                >
                  <Image
                    className="lg:w-[100px] td:h-[80px]
									 lg:h-[100px] mht:h-[80px] md:w-[100px] md:h-[100px] "
                    src={img}
                    alt="Image"
                    width={200}
                    height={200}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      ))}

    </>
  );
}
