"use client";
import Curve from "@/components/Curve/Curve";
import HeroCaseStudies from "@/container/case-studies-page/Hero";
import Projectspresentation from "@/container/case-studies-page/Projects";
import { useEffect } from "react";


export default function CaseStudies() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);
	
	return (
		<>
			{/* <Curve > */}
                
                <div className="h-[40rem] w-full mt-[15rem]">
                     <HeroCaseStudies></HeroCaseStudies>
					 <Projectspresentation></Projectspresentation>
                </div>


            {/* </Curve> */}
		</>
	);
}
