"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Card from "./wwd-cards";

export default function Whatwedo() {
  return (
    <div
      id="what-we-do"
      className="w-full py-20 md:px-10 lg:px-10 sm:px-3 relative"
    >
      <div className="w-full padding-x py-20 xm:py-10 sm:py-10 ">
        <Card />
      </div>
    </div>
  );
}
