"use client";
import Home from "@/components/home";
import { useEffect, useState } from "react";
import Lenis from "lenis";


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
