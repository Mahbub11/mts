import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import Rounded from "@/components/Rounded";

const DevelopmentCaseTwoStudy = () => {
  return (
    <div className="w-full border-t border-[#21212155] pt-[20px] ">
      <div className="flex-col space-y-[3rem]">
        <div
          className="w-full flex justify-between sm:gap-[25px] 
      xm:gap-[25px] padding-x sm:flex-col xm:flex-col space-x-10"
        >
          <div className="w-[30%] sm:w-full xm:w-full ">
            <h3 className="paragraph font-medium text-secondry font-NeueMontreal">
              Agile Methodology
            </h3>
          </div>
          <div
            className="w-[80%] sm:w-full xm:w-full sm:flex-col 
        xm:flex-col flex space-x-10"
          >
            <div className="w-[50%] sm:w-full xm:w-full flex flex-col gap-y-[40px]">
              <p className="paragraph font-NeueMontreal text-secondry">
                Adopted an agile development approach, facilitating iterative
                progress and regular feedback from stakeholders.
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

        <div
          className="w-full flex justify-between sm:gap-[25px]
      space-x-10 xm:gap-[25px] padding-x sm:flex-col xm:flex-col"
        >
          <div className="w-[30%] sm:w-full xm:w-full ">
            <h3 className="paragraph font-medium text-secondry font-NeueMontreal">
              Quality Assurance
            </h3>
          </div>
          <div
            className="w-[80%] sm:w-full xm:w-full sm:flex-col 
        xm:flex-col flex space-x-10"
          >
            <div className="w-[50%] sm:w-full xm:w-full flex flex-col gap-y-[40px]">
              <p className="paragraph font-NeueMontreal text-secondry">
                Conducted thorough testing (unit, integration, and user
                acceptance testing) to identify and resolve bugs before launch.
              </p>
            </div>
            <div className="flex flex-col gap-[10px] sm:mt-5">
              <div className="w-fit rounded-[50px] border border-[#212121] cursor-pointer">
                <Link
                  className="small-text font-NeueMontreal text-secondry uppercase group-hover:text-background transition-all duration-300 ease-in-out hover:text-white"
                  href="/services/"
                >
                  <Rounded className="py-[3px]" backgroundColor="#000">
                    <p className="z-10 px-[15px]">onboarding </p>
                  </Rounded>
                </Link>
              </div>
              <div className="w-fit rounded-[50px] border border-[#212121] cursor-pointer">
                <Link
                  className="small-text font-NeueMontreal text-secondry uppercase group-hover:text-background transition-all duration-300 ease-in-out hover:text-white"
                  href="/services/"
                >
                  <Rounded className="py-[3px]" backgroundColor="#000">
                    <p className="z-10 px-[15px]">policy deck </p>
                  </Rounded>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentCaseTwoStudy;
