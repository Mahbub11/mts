"use client";
import { navVarients } from "@/motion";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import MobileNav from "./MobileNav";
import MtIcon from "@/public/SVG/mt-svg";
import Link from "next/link";
import ButtonMailto from "../email/mail-to";

const navItems = [
  { title: "Case Studies", link: "/case-studies" },
  { title: "Services", link: "/services" },
];

const itemVariants = {
  initial: { opacity: 0 },
  visible: { opacity: 1 },
};

const containerVariants = {
  initial: { x: "-60%" },
  visible: { x: "-10%" },
};
const containerVariantsMobile = {
  initial: { x: "0" },
  visible: { x: "0" },
};
const borderVariants = {
  initial: { width: 0, opacity: 0 },
  hover: { width: "100%", opacity: 1 },
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    setIsMobile(window.innerWidth < 768); // Adjust threshold as needed

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      variants={navVarients}
      initial="initial"
      animate="vissible"
      className="w-full h-[8vh] sm:px-5 px-10 py-2 bg-transparent/5 fixed
    backdrop-blur-[3rem] z-[99] top-0 left-0 font-NeueMontreal"
    >
      <div
        className="flex justify-between items-center mx-auto h-full 
      text-gray-800 font-[800]"
      >
        <Link href="/">
          <span className="sm:hidden">
            <MtIcon height="3rem" width="3rem"></MtIcon>
          </span>
          <span className="hidden sm:block">
            <MtIcon height="2rem" width="2rem"></MtIcon>
          </span>
        </Link>

        <div>
          <h2 className="font-montreal text-gray-700 tracking-wider uppercase">
            Shamsun Nahar
          </h2>
        </div>

        <div>
          <div className="font-montreal text-gray-800 ">
            <ButtonMailto
              label="Contct Me"
              mailto="mm@gmail.com"
            ></ButtonMailto>
            {/* <Link href="/contact-us">
              <h3 className="z-10 cursor-pointer tracking-tight">Contact ME</h3>
            </Link> */}
          </div>
         
        </div>
      </div>
    </motion.nav>
  );
}
