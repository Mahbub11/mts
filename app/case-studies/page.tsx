"use client";
import Curve from "@/components/Curve/Curve";
import HeroCaseStudies from "@/container/case-studies-page/Hero";
import { useEffect } from "react";


export default function CaseStudies() {
	
	return (
		<>
			<Curve >
                
                <div className="h-[40rem] w-full mt-[15rem]">
                     <HeroCaseStudies></HeroCaseStudies>
                </div>


            </Curve>
		</>
	);
}
