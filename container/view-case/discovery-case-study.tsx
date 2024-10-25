import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import Rounded from "@/components/Rounded";

const DiscoveryCaseStudy = () => {
  return (
    <div className="w-full border-t border-[#21212155] pt-[20px] ">
      <div className="flex-col space-y-[3rem]">
        <div
          className="w-full flex justify-between sm:gap-[25px] 
      xm:gap-[25px] padding-x sm:flex-col xm:flex-col space-x-10"
        >
          <div className="w-[30%] sm:w-full xm:w-full ">
            <h3 className="paragraph font-medium text-secondry font-NeueMontreal">
              Client Needs Assessment
            </h3>
          </div>
          <div
            className="w-[80%] sm:w-full xm:w-full sm:flex-col 
        xm:flex-col flex space-x-10"
          >
            <div className="w-[50%] sm:w-full xm:w-full flex flex-col gap-y-[40px]">
              <p className="paragraph font-NeueMontreal text-secondry">
                Conducted in-depth discussions with the client to understand
                their business objectives <br />
                target audience, and specific challenges they faced with their
                previous website.
              </p>
            </div>
            <div className="flex flex-col gap-[10px] sm:mt-5">
              <div className="w-fit rounded-[50px] border border-[#212121] hover:border-btn_clr cursor-pointer">
                <div className="small-text font-NeueMontreal text-secondry 
                uppercase group-hover:text-btn_clr transition-all duration-300 ease-in-out hover:text-white">
                  <Rounded className="py-[3px]" backgroundColor="#00B4D8">
                    <p className="z-10 px-[15px]">Business Objectives</p>
                  </Rounded>
                </div>
              </div>
              <div className="w-fit rounded-[50px] border border-[#212121] hover:border-btn_clr  cursor-pointer">
                <div className="small-text font-NeueMontreal text-secondry 
                uppercase group-hover:text-btn_clr 
                transition-all duration-300 ease-in-out hover:text-white">
                  <Rounded className="py-[3px]" backgroundColor="#00B4D8">
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
              Technical Requirements Gathering
            </h3>
          </div>
          <div
            className="w-[80%] sm:w-full xm:w-full sm:flex-col 
        xm:flex-col flex space-x-10"
          >
            <div className="w-[50%] sm:w-full xm:w-full flex flex-col gap-y-[40px]">
              <p className="paragraph font-NeueMontreal text-secondry">
                Identified necessary features and functionalities, such as
                payment processing, inventory management, and user account
                systems.
              </p>
            </div>
            <div className="flex flex-col gap-[10px] sm:mt-5">
              <div className="w-fit rounded-[50px] border border-[#212121] hover:border-btn_clr cursor-pointer">
                <Link
                  className="small-text font-NeueMontreal text-secondry uppercase group-hover:text-background transition-all duration-300 ease-in-out hover:text-white"
                  href="/services/"
                >
                  <Rounded className="py-[3px]" backgroundColor="#00B4D8">
                    <p className="z-10 px-[15px]">onboarding </p>
                  </Rounded>
                </Link>
              </div>
              <div className="w-fit rounded-[50px] border border-[#212121] hover:border-btn_clr cursor-pointer">
                <Link
                  className="small-text font-NeueMontreal text-secondry uppercase group-hover:text-background transition-all duration-300 ease-in-out hover:text-white"
                  href="/services/"
                >
                  <Rounded className="py-[3px]" backgroundColor="#00B4D8">
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

export default DiscoveryCaseStudy;
