// components/Discovery.tsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import DiscoveryCaseStudy from "./discovery-case-study";
import DesignCaseStudy from "./design-case-study";
import DevelopmentCaseStudy from "./development-case-study";

const items = [
  "Understanding the User Needs: Insights gathered from interviews and surveys with caregivers, families, and elderly users.",
  "Market Research: Analysis of existing solutions and gaps in the market.",
  "Defining Goals: Setting objectives for the platform based on user needs and business goals.",
];

const DetailCaseStudy: React.FC = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div className=" mx-4 my-8">
      <div className="flex-col  justify-center items-center ">
        <div>
          <h2 className="text-4xl font-bold mb-4 uppercase text-btn_clr">Discovery</h2>
          <DiscoveryCaseStudy />
        </div>

        <div className="mt-[8rem]">
          <h2 className="text-4xl font-bold mb-4 uppercase text-btn_clr ">Design</h2>
          <DesignCaseStudy></DesignCaseStudy>
        </div>


        <div className="mt-[8rem]">
          <h2 className="text-4xl font-bold mb-4 uppercase text-btn_clr">Development</h2>
          <DevelopmentCaseStudy />
        </div>
      </div>
    </div>
  );
};

export default DetailCaseStudy;
