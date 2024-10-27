"use client";

import Ready from "@/container/home-page/ready/Ready";
import Clients from "@/container/home-page/review/Clients";
import Expectations from "@/container/service-page/Expectations";
import ClientsReviewExpectations from "@/container/service-page/clients-review";
import ServiceHeroSection from "@/container/service-page/service-hero";
import ServiceProcess from "@/container/service-page/service-process";
import Lenis from "lenis";
import { useEffect, useRef, useState } from "react";

export default function ServiceSectionContainer() {
  const container = useRef(null);
  return (
    <div className="w-full mt-[2rem]" ref={container}>
      <div
        className="w-full flex flex-col items-center justify-center 
	  bg-transparent"
      >
        <div
          data-scroll
          data-scroll-speed="-.2"
          className="bg-gradient-to-b from-[#96b9c670] to-[#FFFF]
           w-full py-[0px]	z-10 h-[8rem] "
        >
          <h2
            className="px-5 py-5 text-center
            text-[40px] sm:text-[30px] font-gvf font-[800]
             text-gray-800 drop-shadow-sm
            "
          >
           Where Technology Meets Your  Needs
          </h2>
        </div>
      </div>
      <section
        className="w-full relative z-30 
	   bg-white"
      >
        <div className=" ">
          <div className="h-[5rem]"></div>

          <div className="sm:w-full sm:px-2 w-[80%] mx-auto  h-full">
            <ServiceHeroSection></ServiceHeroSection>
            <div className="mt-[10rem]">
              <ServiceProcess></ServiceProcess>
            </div>

            <div className="mt-[10rem]">
              <Expectations></Expectations>
            </div>

            <div className="mt-[10rem]">
              <ClientsReviewExpectations></ClientsReviewExpectations>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[80%] mx-auto">
          <Ready></Ready>
        </div>
      </section>
    </div>
  );
}
