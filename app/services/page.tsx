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
  
  return (
    <>
      <div className="h-screen w-full bg-slate-400">
        This is Service Page
      </div>
    </>
  );
}
