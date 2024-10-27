"use client";
import { navVarients } from "@/motion";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import MobileNav from "./MobileNav";
import MtIcon from "@/public/SVG/mt-svg";
import Link from "next/link";

const navItems = [
  { title: "Case Studies", link: "/case-studies" },
  { title: "Services", link: "/services" },
  { title: "About Us", link: "/about-us" },
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
        <Link href='/'>
        <span className="sm:hidden">
          <MtIcon height="3rem" width="3rem"></MtIcon>
        </span>
        <span className="hidden sm:block">
          <MtIcon height="2rem" width="2rem"></MtIcon>
        </span></Link>

        <motion.div
          className=" flex items-center space-x-3 font-NeueMontreal text-[17px]
           tracking-wider 
           font-medium"
          variants={!isMobile ? containerVariants : containerVariantsMobile}
          initial="initial"
          animate={isScrolled ? "visible" : "initial"}
          transition={{ duration: 0.8 }}
        >
          {navItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="relative group sm:hidden"
              variants={itemVariants}
              initial="initial"
              animate={isScrolled ? "visible" : "initial"}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Link href={item.link}>
                <h3 className="z-10 cursor-pointer tracking-tight">
                  {item.title}
                </h3>
              </Link>
              <motion.div className="absolute left-0 bottom-0 h-[2px] bg-black w-full scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </motion.div>
          ))}

          <div className="relative group ">
            <Link href="/contact-us">
              <h3 className="z-10 cursor-pointer tracking-tight">Contact US</h3>
            </Link>
            <motion.div
              className="absolute left-0 bottom-0 h-[2px] bg-black w-full scale-x-0
               transition-transform duration-300 group-hover:scale-x-100"
            />
          </div>
        </motion.div>

        <div>
          <h3
            className="text-[17px] tracking-wider 
           font-medium sm:hidden"
          >
            Blog
          </h3>
          <div className="lg:hidden md:hidden">
            <MobileNav></MobileNav>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
