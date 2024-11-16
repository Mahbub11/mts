"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { useTransform, motion, useScroll } from "framer-motion";
import {
  attentionDetail,
  customSoftware,
  nicheDesign,
  project1,
  project2,
  project3,
  project4,
  transParentResponsive,
} from "@/public";
import RoundButton from "../../../components/RoundButton";

export default function Card() {
  const container1 = useRef(null);
  const container2 = useRef(null);
  const container3 = useRef(null);
  const container4 = useRef(null);

  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: container1,
    offset: ["start end", "start start"],
  });

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: container2,
    offset: ["start end", "start start"],
  });

  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: container3,
    offset: ["start end", "start start"],
  });

  const { scrollYProgress: scrollYProgress4 } = useScroll({
    target: container4,
    offset: ["start end", "start start"],
  });

  const imageScale1 = useTransform(scrollYProgress1, [0, 1], [0.7, 1]);
  const imageScale2 = useTransform(scrollYProgress2, [0, 1], [0.7, 1]);
  const imageScale3 = useTransform(scrollYProgress3, [0, 1], [0.7, 1]);
  const imageScale4 = useTransform(scrollYProgress4, [0, 1], [0.7, 1]);

  return (
    <>
      <div
        ref={container1}
        className="font-NeueMontreal h-auto flex items-center justify-center sticky
         top-20  sm:top-[10%] text-gray-600"
      >
        <motion.div
          style={{
            backgroundColor: "#8aebff00", // Example color
            top: `calc(-5vh + ${1 * 25}px)`,
          }}
          className="w-full p-20 xm:p-7 sm:p-7 flex justify-between rounded-[30px] gap-10 relative -top-[45%] 
          h-auto transform origin-top xm:flex-col sm:flex-col"
        >
          <div className="w-1/2 xm:w-full sm:w-full h-full flex flex-col gap-14 pt-10 xm:pt-5 sm:pt-5 xm:gap-5 sm:gap-5">
            <div className="flex flex-col gap-2">
              <div className="w-fit flex flex-col gap-1 ml-3">
                <h2 className="text-[18px] font-normal leading-tight tracking-tight">
                  Tailored Solutions
                </h2>
                <div className="w-full h-[2px] rounded-lg bg-customDark" />
              </div>

              <h2
                className="text-[80px] xm:text-[40px] sm:text-[40px]
                 xm:leading-none sm:leading-none font-bold leading-[80px]
                  tracking-tighter text-gray-600  mt-5"
              >
                Custom Software Development
                <br />
              </h2>
              <h4
                className="text-[20px] sm:text-lg xm:text-lg leading-normal
                 tracking-tighter text-gray-900 text-justify mt-5"
              >
                We specialize in developing custom web and mobile applications
                that cater specifically to your business needs. Our tailored
                solutions ensure that every feature is designed to enhance your
                operations and drive growth, setting you apart from the
                competition.
              </h4>
            </div>
            <div className="w-fit  mt-10">
              <div
                className="flex items-center justify-center
               bg-btn_clr/80 cursor-pointer rounded-full group "
              >
                <RoundButton
                  href="/case-studies"
                  title="view all case studies"
                  bgcolor="#00B4D8"
                  className="bg-white text-customDark"
                  style={{ color: "#fff" }}
                />
              </div>
            </div>
          </div>
          <motion.div
            className="w-1/2 xm:w-full sm:w-full h-full flex items-center justify-center"
            style={{ scale: imageScale1 }}
          >
            <Image
              width={300}
              height={300}
              src={customSoftware}
              alt="whatwedoImg"
              className="w-full object-cover rounded-md"
            />
          </motion.div>
        </motion.div>
      </div>

      <div
        ref={container1}
        className="font-NeueMontreal h-auto flex items-center justify-center sticky
         top-20 xm:top-[10%] sm:top-[10%] text-gray-600"
      >
        <motion.div
          style={{
            backgroundColor: "#e7f5f7", // Example color
            top: `calc(-5vh + ${1 * 25}px)`,
          }}
          className="w-full p-20 xm:p-7 sm:p-7 flex justify-between rounded-[30px] gap-10 relative -top-[45%] 
          h-auto transform origin-top xm:flex-col sm:flex-col"
        >
          <div className="w-1/2 xm:w-full sm:w-full h-full flex flex-col gap-14 pt-10 xm:pt-5 sm:pt-5 xm:gap-5 sm:gap-5">
            <div className="flex flex-col gap-2">
              <div className="w-fit flex flex-col gap-1 ml-3">
                <h2 className="text-[18px] font-normal leading-tight tracking-tight">
                  User-Centric Design
                </h2>
                <div className="w-full h-[2px] rounded-lg bg-customDark" />
              </div>

              <h2
                className="text-[80px] xm:text-[40px] sm:text-[40px]
                 xm:leading-none sm:leading-none font-bold leading-[80px]
                  tracking-tighter text-gray-600  mt-5"
              >
                Niche Design Expertise
                <br />
              </h2>
              <h4
                className="text-[20px] sm:text-lg xm:text-lg leading-normal
                 tracking-tighter text-gray-900 text-justify mt-5"
              >
                Our design philosophy centers around the user experience. We
                create intuitive and visually appealing interfaces that engage
                users and facilitate seamless interactions, ensuring that your
                applications are not only functional but also enjoyable to use.
              </h4>
            </div>
            <div className="w-fit  mt-10">
              <div
                className="flex items-center justify-center
               bg-btn_clr/80 cursor-pointer rounded-full group "
              >
                <RoundButton
                  href="/case-studies"
                  title="view all case studies"
                  bgcolor="#00B4D8"
                  className="bg-white text-customDark"
                  style={{ color: "#fff" }}
                />
              </div>
            </div>
          </div>
          <motion.div
            className="w-1/2 xm:w-full sm:w-full h-full flex items-center justify-center"
            style={{ scale: imageScale2 }}
          >
            <Image
              width={300}
              height={300}
              src={nicheDesign}
              alt="whatwedoImg"
              className="w-[80%] object-cover rounded-md"
            />
          </motion.div>
        </motion.div>
      </div>

      <div
        ref={container1}
        className="font-NeueMontreal h-auto flex items-center justify-center sticky
         top-20 xm:top-[10%] sm:top-[10%] text-gray-600"
      >
        <motion.div
          style={{
            backgroundColor: "#def5fa", // Example color
            top: `calc(-5vh + ${1 * 25}px)`,
          }}
          className="w-full p-20 xm:p-7 sm:p-7 flex justify-between rounded-[30px] gap-10 relative -top-[45%] 
          h-auto transform origin-top xm:flex-col sm:flex-col"
        >
          <div className="w-1/2 xm:w-full sm:w-full h-full flex flex-col gap-14 pt-10 xm:pt-5 sm:pt-5 xm:gap-5 sm:gap-5">
            <div className="flex flex-col gap-2">
              <div className="w-fit flex flex-col gap-1 ml-3">
                <h2 className="text-[18px] font-normal leading-tight tracking-tight">
                  Precision and Quality
                </h2>
                <div className="w-full h-[2px] rounded-lg bg-customDark" />
              </div>

              <h2
                className="text-[80px] xm:text-[40px] sm:text-[40px]
                 xm:leading-none sm:leading-none font-bold leading-[80px]
                  tracking-tighter text-gray-600  mt-5"
              >
                Attention to Detail
                <br />
              </h2>
              <h4
                className="text-[20px] sm:text-lg xm:text-lg leading-normal
                 tracking-tighter text-gray-900 text-justify mt-5"
              >
                Quality is at the heart of everything we do. With meticulous
                attention to detail, we deliver robust and reliable software
                solutions that are thoroughly tested and optimized for
                performance. Our commitment to excellence ensures that your
                projects meet the highest standards.
              </h4>
            </div>
            <div className="w-fit  mt-10">
              <div
                className="flex items-center justify-center
               bg-btn_clr/80 cursor-pointer rounded-full group "
              >
                <RoundButton
                  href="/case-studies"
                  title="view all case studies"
                  bgcolor="#00B4D8"
                  className="bg-white text-customDark"
                  style={{ color: "#fff" }}
                />
              </div>
            </div>
          </div>
          <motion.div
            className="w-1/2 xm:w-full sm:w-full h-full flex items-center justify-center"
            style={{ scale: imageScale3 }}
          >
            <Image
              width={300}
              height={300}
              src={attentionDetail}
              alt="whatwedoImg"
              className="w-[80%] object-cover rounded-md"
            />
          </motion.div>
        </motion.div>
      </div>

      <div
        ref={container1}
        className="font-NeueMontreal h-auto flex items-center justify-center sticky
         top-40 xm:top-[10%] sm:top-[10%] text-gray-600"
      >
        <motion.div
          style={{
            backgroundColor: "#f0fdff", // Example color
            top: `calc(-5vh + ${1 * 25}px)`,
          }}
          className="w-full p-20 xm:p-7 sm:p-7 flex justify-between rounded-[30px] gap-10 relative -top-[45%] 
          h-auto transform origin-top xm:flex-col sm:flex-col"
        >
          <div className="w-1/2 xm:w-full sm:w-full h-full flex flex-col gap-14 pt-10 xm:pt-5 sm:pt-5 xm:gap-5 sm:gap-5">
            <div className="flex flex-col gap-2">
              <div className="w-fit flex flex-col gap-1 ml-3">
                <h2 className="text-[18px] font-normal leading-tight tracking-tight">
                  Agile Collaboration
                </h2>
                <div className="w-full h-[2px] rounded-lg bg-customDark" />
              </div>

              <h2
                className="text-[80px] xm:text-[40px] sm:text-[40px]
                 xm:leading-none sm:leading-none font-bold leading-[80px]
                  tracking-tighter text-gray-600  mt-5"
              >
                Transparent and Responsive Partnership
                <br />
              </h2>
              <h4
                className="text-[20px] sm:text-lg xm:text-lg leading-normal
                 tracking-tighter text-gray-900 text-justify mt-5"
              >
                We believe in fostering strong partnerships through open
                communication and collaboration. Our agile approach allows us to
                quickly adapt to your changing needs, ensuring that your vision
                is realized at every stage of the project. Together, we can
                achieve exceptional results.
              </h4>
            </div>
            <div className="w-fit  mt-10">
              <div
                className="flex items-center justify-center
               bg-btn_clr/80 cursor-pointer rounded-full group "
              >
                <RoundButton
                  href="/case-studies"
                  title="view all case studies"
                  bgcolor="#00B4D8"
                  className="bg-white text-customDark"
                  style={{ color: "#fff" }}
                />
              </div>
            </div>
          </div>
          <motion.div
            className="w-1/2 xm:w-full sm:w-full h-full flex items-center justify-center"
            style={{ scale: imageScale4 }}
          >
            <Image
              width={300}
              height={300}
              src={transParentResponsive}
              alt="whatwedoImg"
              className="w-[80%] object-cover rounded-md"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Repeat for container3 and container4 */}
    </>
  );
}
