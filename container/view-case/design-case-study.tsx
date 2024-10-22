import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import Rounded from "@/components/Rounded";
import Image from "next/image";
import {
  after,
  chelengeBg,
  showcase1,
  showcase2,
  showcase3,
  showcase4,
  showcase5,
  showcase6,
} from "@/public";
import BackgroundImg from "@/components/BackgroundImg";

const DesignCaseStudy = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div className="w-full border-t border-[#21212155] pt-[20px] ">
      <div className="flex-col space-y-[3rem]">
        <div
          className="w-full flex justify-between sm:gap-[25px] 
      xm:gap-[25px] padding-x sm:flex-col xm:flex-col space-x-10"
        >
          <div className="w-[30%] sm:w-full xm:w-full ">
            <h3 className="paragraph font-medium text-secondry font-NeueMontreal">
              Prototyping
            </h3>
          </div>
          <div
            className="w-[80%] sm:w-full xm:w-full sm:flex-col 
        xm:flex-col flex space-x-10"
          >
            <div className="w-[50%] sm:w-full xm:w-full flex flex-col gap-y-[40px]">
              <p className="paragraph font-NeueMontreal text-secondry">
                Built interactive prototypes to simulate the user experience,
                allowing stakeholders to interact with the design before
                development began.
              </p>
            </div>
            <div className="flex flex-col gap-[10px] sm:mt-5">
              <div className="w-fit rounded-[50px] border border-[#212121] cursor-pointer">
                <div className="small-text font-NeueMontreal text-secondry uppercase group-hover:text-background transition-all duration-300 ease-in-out hover:text-white">
                  <Rounded className="py-[3px]" backgroundColor="#000">
                    <p className="z-10 px-[15px]">Business Objectives</p>
                  </Rounded>
                </div>
              </div>
              <div className="w-fit rounded-[50px] border border-[#212121] cursor-pointer">
                <div className="small-text font-NeueMontreal text-secondry uppercase group-hover:text-background transition-all duration-300 ease-in-out hover:text-white">
                  <Rounded className="py-[3px]" backgroundColor="#000">
                    <p className="z-10 px-[15px]">Platform Evaluation</p>
                  </Rounded>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[5rem] flex-col space-y-10">
        <div className="w-full padding-x padding-y">
          <BackgroundImg src={chelengeBg} />
        </div>
        <div className="w-[80%] mx-auto padding-x flex gap-[40px] sm:w-full xm:w-full sm:flex-col xm:flex-col">
          <div className="w-[49%] sm:w-full xm:w-full">
            <Image
              src={showcase1}
              className="w-full  object-cover rounded-[20px]"
              alt="chelengeBgImg"
            />
          </div>
          <div className="w-[49%] sm:w-full xm:w-full">
            <Image
              src={showcase2}
              className="w-full  object-cover rounded-[20px]"
              alt="chelengeBgImg"
            />
          </div>
        </div>
        <div className="w-full padding-x padding-y">
          <BackgroundImg src={showcase3} />
        </div>
        <div className="w-[80%] mx-auto padding-x flex gap-[40px] sm:w-full xm:w-full sm:flex-col xm:flex-col">
          <div className="w-[49%] sm:w-full xm:w-full">
            <Image
              src={showcase4}
              className="w-full  object-cover rounded-[20px]"
              alt="chelengeBgImg"
            />
          </div>
          <div className="w-[49%] sm:w-full xm:w-full">
            <Image
              src={showcase5}
              className="w-full  object-cover rounded-[20px]"
              alt="chelengeBgImg"
            />
          </div>
        </div>
        <div className="w-full padding-x padding-y">
          <BackgroundImg src={showcase6} />
        </div>
        <div className="w-[80%] sm:w-full xm:w-full mx-auto padding-x flex gap-[20px]">
          <div className="w-full">
            <Image
              src={after}
              className="w-full object-cover rounded-[20px]"
              alt="chelengeBgImg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignCaseStudy;
