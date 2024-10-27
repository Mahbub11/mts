"use client";
import Curve from "@/components/Curve/Curve";
import TransactionWrapper from "@/components/Transaction-wrapper";
import AboutUsBody from "@/container/about-us/aboutus-body";
import HeroAboutUS from "@/container/about-us/hero-aboutus";
import HeroCaseStudies from "@/container/case-studies-page/Hero";
import Projectspresentation from "@/container/case-studies-page/Projects";
import Ready from "@/container/home-page/ready/Ready";
import Lenis from "lenis";
import { useEffect, useState } from "react";

export default function AboutUs() {
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

      <div className="h-auto w-full">
        <HeroAboutUS></HeroAboutUS>
        <div className="mt-[-10rem] sm:mt-[-15rem]">
          <TransactionWrapper>
            <AboutUsBody></AboutUsBody>
          </TransactionWrapper>
        </div>
      </div>

      {/* </Curve> */}
    </>
  );
}
