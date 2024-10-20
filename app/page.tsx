"use client";
import Sticky from "@/animation/Sticky";
import TextBannarSection from "@/components/TextBannar/about";
import AboutSection from "@/components/about/about";
import AnimatedText from "@/components/hero/hero";
import Home from "@/components/home";
import NavBar from "@/components/nav/navBar";
import Project from "@/components/project/project";
import Image from "next/image";
import { useEffect, useState } from "react";
import Lenis from "lenis";
import { AnimatePresence } from "framer-motion";
import PreLoad from "@/animation/PreLoad";

export default function APP() {
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
     
       <Home></Home>
      {/* <AnimatePresence mode="wait">{isLoading &&
      <PreLoad title=""></PreLoad>
      }</AnimatePresence>
      {!isLoading && (
        <>
         
        </>
      )} */}
    </>
  );
}
