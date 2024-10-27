"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { TpageSkillsProps } from "@/types";
import { useEffect, useState } from "react";
import IconBxSearchAlt from "@/public/SVG/IconBxSearchAlt";
import { phase1, process1, process2, process3, process4, process5, process6 } from "@/public";
import IconClipboardEditOutline from "@/public/SVG/IconclipBoardEdit";
import IconSoftware_paintbrush from "@/public/SVG/IconSoftwarepaint";
import Icon345MakeGroup from "@/public/SVG/IconMakeGroup";
import IconAbTesting from "@/public/SVG/IconAbTesting";
import IconDeploymentUnit from "@/public/SVG/IconDeploymentUnit";

export default function Card() {
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
					items-center justify-between shrink-0 relative"
          key={item.id}
        >
          <div
            className="absolute xl:top-[50%] xl:right-[8%] fflg:right-[5%]
          slg:right-[1%] slg:top-[52%] elg:top-[55%]
          lg:top-[50%] lg:right-[-20%]"
          >
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
							 font-IBMPlex font-extrabold uppercase text-gray-700"
                >
                  DISCOVERY
                </h1>
              </div>
              {item.images.slice(1, 2).map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  className="w-[200px] h-[200px]  rounded-full 
								 flex items-center
								 justify-center bg-[#A8E4F1] z-50 "
                >
                 
                  <Image
                    className="w-[130px] h-[130px] rounded-full  "
                    src={process1}
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
          className=" w-[20%] h-full flex-col flex 
					items-center justify-between shrink-0 relative "
          key={item.id}
        >
          <div
            className="absolute xl:top-[8%] xl:left-[50%]
          lg:top-[8%] lg:left-[50%] slg:top-[12%]"
          >
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
                  className="drop-shadow-md text-[30px] tracking-tighter
							 font-IBMPlex font-extrabold uppercase text-gray-700"
                >
                  Storytelling
                </h1>
              </div>
              {item.images.slice(1, 2).map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  className="w-[200px] h-[200px]  rounded-full 
                  flex items-center
                  justify-center bg-[#A8E4F1] z-50"
                >
                  
                  <Image
                    className="lg:w-[120px] td:h-[80px]
									 lg:h-[120px] mht:h-[80px] md:w-[100px] md:h-[100px] "
                    src={process2}
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
          <div
            className="absolute xl:top-[53%] xl:left-[60%]
          lg:top-[53%] lg:left-[60%] tlg:top-[55%] tlg:left-[75%] slg:top-[65%]"
          >
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
                  className="drop-shadow-md text-[30px] tracking-tighter
							 font-IBMPlex font-extrabold uppercase text-gray-700"
                >
                  DESIGN
                </h1>
              </div>
              {item.images.slice(1, 2).map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  className="w-[200px] h-[200px]  rounded-full 
                  flex items-center
                  justify-center bg-[#A8E4F1]  z-50"
                >
                  
                  <Image
                    className="lg:w-[100px] td:h-[80px]
									 lg:h-[100px] mht:h-[80px] md:w-[100px] md:h-[100px] "
                    src={process3}
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
          <div
            className="absolute xl:top-[8%] xl:left-[45%]
          lg:top-[8%] lg:left-[45%]  tlg:top-[8%] tlg:left-[62%] slg:top-[12%] 
          slg:left-[50%]"
          >
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
                  className="drop-shadow-md text-[30px] tracking-tighter
							 font-IBMPlex font-extrabold uppercase text-gray-700 "
                >
                  Development
                </h1>
              </div>
              {item.images.slice(1, 2).map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  className="w-[200px] h-[200px]  rounded-full 
                  flex items-center
                  justify-center bg-[#A8E4F1] z-50"
                >
                  
                  <Image
                    className="lg:w-[100px] td:h-[80px]
									 lg:h-[100px] mht:h-[80px] md:w-[100px] md:h-[100px] "
                    src={process4}
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
          <div
            className="absolute xl:top-[51%] xl:left-[35%] 
          lg:top-[50%] lg:left-[60%] tlg:top-[55%] tlg:left-[70%]
          slg:top-[65%] sslg:top-[60%] slg:left-[50%]"
          >
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
                  className="drop-shadow-md text-[30px] tracking-tighter
							 font-IBMPlex font-extrabold uppercase text-gray-700"
                >
                  SQA
                </h1>
              </div>
              {item.images.slice(1, 2).map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  className="w-[200px] h-[200px]  rounded-full 
                  flex items-center
                  justify-center bg-[#A8E4F1] z-50"
                >
                 
                  <Image
                    className="lg:w-[100px] td:h-[80px]
									 lg:h-[100px] mht:h-[80px] md:w-[100px] md:h-[100px] "
                    src={process5}
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
          <div
            className="absolute xl:top-[8%] xl:right-[30%]
          lg:top-[8%] lg:right-[5%] tlg:top-[8%] tlg:right-[10%]
          slg:right-[30%]"
          >
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
                  {item.skillNo6}
                </h1>
                <h1
                  className="drop-shadow-md text-[30px] tracking-tighter
							 font-IBMPlex font-extrabold uppercase text-gray-700 "
                >
                  Deployment
                </h1>
              </div>
              {item.images.slice(1, 2).map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  className="w-[200px] h-[200px]  rounded-full 
                  flex items-center
                  justify-center bg-[#A8E4F1]  z-50"
                >
                  
                  <Image
                    className="lg:w-[100px] td:h-[80px]
									 lg:h-[100px] mht:h-[80px] md:w-[100px] md:h-[100px] "
                    src={process6}
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
