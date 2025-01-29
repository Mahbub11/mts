"use client";
import Curve from "@/components/Curve/Curve";
import HeroCaseStudies from "@/container/case-studies-page/Hero";
import Projectspresentation from "@/container/case-studies-page/Projects";
import CaseDetail from "@/container/view-case/case-des";
import HeroCaseStudy from "@/container/view-case/case-hero";
import Lenis from "lenis";
import { useEffect, useState } from "react";
import HeroCaseStudyPM from "./_comp/case-hero";
import CaseDes from "./_comp/case-des";

export default function Page() {
 

  return (
    <>
      <div className="h-auto w-full ">
       <HeroCaseStudyPM></HeroCaseStudyPM>
      <CaseDes></CaseDes>
      </div>
    </>
  );
}
