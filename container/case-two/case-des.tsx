"use client";
import { useRef } from "react";
import ProjectCard from "../home-page/project/project-card";
import Tags from "@/components/Tags";
import { presentationProjectItem } from "@/constants";
import CaseBreakDown from "./case-breakdown";
import DetailCaseStudy from "./detail-case-section";
import Ready from "../home-page/ready/Ready";
import CaseTwoBreakDown from "./case-breakdown";
import DetailCaseTwoStudy from "./detail-case-section";

export default function CaseTwoDetail() {
  const container = useRef(null);
  return (
    <div className="w-full" ref={container}>
      <div
        className="w-full flex flex-col items-center justify-center 
	  bg-transparent"
      >
        <div
          data-scroll
          data-scroll-speed="-.2"
          className="bg-[#96b9c623] sm:w-full w-[75%] py-[20px] rounded-t-[10px]	"
        />
        <div
          className="bg-gradient-to-b from-[#eef7fa] to-[#ffffff] relative z-20 sm:w-full 
          w-[90%] py-[20px] sm:rounded-none rounded-t-[10px]"
          data-scroll
          data-scroll-speed="-.1"
        />
      </div>
      <section
        className="w-full relative z-30 lg:px-[5rem] xl:px-[10rem]
	    bg-white"
      >
        <div className=" px-[2rem] py-10 ">
          <CaseTwoBreakDown></CaseTwoBreakDown>
          <div className="mt-[5rem]">
            <DetailCaseTwoStudy></DetailCaseTwoStudy>
          </div>
        </div>

        {/* <div className="lg:w-[90%] w-full mx-auto">
          <Ready></Ready>
        </div> */}
      </section>
    </div>
  );
}
