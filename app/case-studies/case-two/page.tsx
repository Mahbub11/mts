"use client";
import Curve from "@/components/Curve/Curve";
import HeroCaseStudies from "@/container/case-studies-page/Hero";
import Projectspresentation from "@/container/case-studies-page/Projects";
import CaseTwoDetail from "@/container/case-two/case-des";
import HeroCasetwoStudy from "@/container/case-two/case-hero";
import CaseDetail from "@/container/view-case/case-des";
import HeroCaseStudy from "@/container/view-case/case-hero";
import Lenis from "lenis";
import { useEffect, useState } from "react";

export default function Page() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const timeout = setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {/* <Curve > */}

      <div className="h-auto w-full ">
       <HeroCasetwoStudy></HeroCasetwoStudy>
       <CaseTwoDetail></CaseTwoDetail>
      </div>

      {/* </Curve> */}
    </>
  );
}
