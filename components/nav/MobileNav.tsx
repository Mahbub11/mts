"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { footernavbarItems } from "@/constants";

import { AnimatePresence, motion } from "framer-motion";
import { AlignJustify, X } from "lucide-react";

export default function MobileNav() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="w-full ">
        <AlignJustify
          onClick={() => setToggle(true)}
          className="text-3xl cursor-pointer text-black"
        />
      </div>
      <AnimatePresence mode="wait">
        {toggle && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1, ease: [0.3, 0.86, 0.36, 0.95] }}
            className="fixed top-0 bottom-0 right-0 z-50 w-full min-h-screen flex justify-end items-end flex-col bg-secondry"
          >
            <div className="w-full px-5 flex justify-between items-center h-[8vh] border-b border-[#f1f1f155] padding-x">
              <Link href={"/"}>
                <h1 className="text-white">mT</h1>
              </Link>
              <X
                onClick={() => setToggle(false)}
                className="text-3xl cursor-pointer text-white"
              />
            </div>
            <ul className="h-full w-full flex justify-center
			 text-center flex-col gap-[10px] ">
              {footernavbarItems.map((item) => (
                <Link
                  href={item.href}
                  key={item.id}
                  onClick={(toggle) => setToggle(!toggle)}
                  className="text-[60px] leading-[60px]
				   font-fg uppercase 
				   font-bold tracking-[-.9] text-white"
                >
                  {item.title}
                </Link>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
