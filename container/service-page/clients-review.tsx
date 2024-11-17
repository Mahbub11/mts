"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { clientsItem } from "@/constants";

import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

import Rounded from "@/components/Rounded";
import { ArrowUpRight } from "lucide-react";
import Button from "@/components/Button";

export default function ClientsReviewExpectations() {
  const [activeAccordion, setActiveAccordion] = useState(clientsItem[0].id);
  const toggleAccordion = (itemId: any) => {
    setActiveAccordion((prev) => (prev === itemId ? null : itemId));
  };
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);

  return (
    <section className="w-full mt-[15rem] sm:px-2 md:px-10 lg:px-10 font-gvf">
      <div className="w-full padding-x mb-[40px]">
        <h1
          className="sub-heading font-bold 
                font-NeueMontreal text-btn_clr uppercase text-[40px]"
        >
          What Client's Say
        </h1>
        <hr className=" mt-5"></hr>
      </div>

      <div className="w-full flex justify-end mt-[3rem] ml-[-3rem]">
        <div className=" w-[70%] ">
          {clientsItem.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className={`w-full flex py-[10px] mt-[3rem]  flex-col ${
                item.id == 1
                  ? "border-b border-[#21212155]"
                  : "border-b border-[#21212155]"
              }`}
            >
              <div
                className="w-full flex items-center justify-between 
			  py-[10px] padding-x"
              >
                <div className="w-[50%] flex items-center">
                  <div className="w-[40%] sm:w-auto xm:w-auto">
                    <Link
                      href={item.href}
                      className="small-text font-normal font-NeueMontreal text-secondry link-flash"
                    >
                      {item.website}
                    </Link>
                  </div>
                  <div className="w-auto sm:hidden xm:hidden">
                    <motion.h3
                      className={`small-text font-normal font-NeueMontreal text-secondry ${
                        activeAccordion === item.id
                          ? "opacity-100"
                          : "opacity-0"
                      } opacity-0 transition-all duration-200 ease-in-out`}
                    >
                      {item.title}
                    </motion.h3>
                  </div>
                </div>
                <div className="w-[50%] flex items-center justify-between">
                  <div className="w-[40%] sm:w-auto xm:w-auto">
                    <h3 className="small-text font-normal font-NeueMontreal text-secondry">
                      {item.name}
                    </h3>
                  </div>
                  <div className="w-[10%] sm:w-auto xm:w-auto flex items-end justify-end">
                    <button
                      className={`small-text font-normal font-NeueMontreal uppercase 
					  transition-all duration-200 ease-in-out ${
              activeAccordion === item.id
                ? "text-gray-300"
                : "text-secondry link-flash"
            }`}
                      onClick={() => toggleAccordion(item.id)}
                    >
                      {activeAccordion === item.id ? "read" : "read"}
                    </button>
                  </div>
                </div>
              </div>

              <div
                className={`w-full flex justify-between padding-x  sm:flex-col xm:flex-col`}
              >
                <div className="w-[20%] sm:w-auto xm:w-auto" />
                <div className="w-[30%] sm:w-auto xm:w-auto sm:flex xm:flex flex-wrap gap-x-[5px] sm:pt-[10px] xm:pt-[10px]">
                  {item.links.map((link) => (
                    <AnimatePresence key={link.id}>
                      {activeAccordion === item.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{
                            ease: [0.4, 0, 0.2, 1],
                            duration: 1,
                          }}
                        >
                          <Button
                            href={link.href}
                            title={link.title}
                            key={link.id}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  ))}
                </div>
                <div className="w-[40%] sm:w-auto xm:w-auto">
                  <AnimatePresence>
                    {activeAccordion === item.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{
                          ease: [0.4, 0, 0.2, 1],
                          duration: 1.3,
                        }}
                      >
                        <div className="flex flex-col gap-[20px] py-[30px]">
                          <div className="w-[130px] h-[130px]">
                            <Image
                              src={item.src}
                              alt="clientImg"
                              className="w-full h-full object-cover rounded-[10px]"
                            />
                          </div>
                          <div className="">
                            <p className="small-text tracking-wider font-normal font-NeueMontreal text-secondry">
                              {item.review}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className="w-[10%] sm:w-auto xm:w-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-[3rem] mx-auto w-full flex justify-center">
        <div
          className="flex w-fit items-center justify-between bg-transparent cursor-pointer rounded-full group border 
          border-[#212121] hover:border-[#00d4ff] hover:text-customDark "
        >
          <Link
            className="xl:text-[18px] xl:leading-[28px] text-[14px] leading-[24px] uppercase font-normal font-NeueMontreal"
            href="/contact"
          >
            <Rounded className="py-[6px]" backgroundColor="#00B4D8">
              <p className="z-10 px-[10px] ml-[15px] py-[6px] group-hover:text-white text-black">
                READ MORE
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
    </section>
  );
}
