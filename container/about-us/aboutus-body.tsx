"use client";
import { useRef } from "react";
import ProjectCard from "../home-page/project/project-card";
import Tags from "@/components/Tags";
import { presentationProjectItem } from "@/constants";
import Ready from "../home-page/ready/Ready";
import Icon345MakeGroup from "@/public/SVG/IconMakeGroup";
import IconBxSearchAlt from "@/public/SVG/IconBxSearchAlt";
import Image from "next/image";
import {
  abts1,
  abts2,
  abts3,
  abts4,
  abts5,
  abts6,
  abts7,
  abts8,
} from "@/public";

export default function AboutUsBody() {
  const container = useRef(null);
  return (
    <div className="w-full " ref={container}>
      <div
        className="w-full flex flex-col items-center justify-center 
	  bg-transparent"
      >
        <div
          data-scroll
          data-scroll-speed="-.2"
          className="bg-gradient-to-b from-[#96b9c670] to-[#FFFF]
           w-full py-[0px]	z-10 h-[8rem] "
        >
          <h2
            className="px-5 py-5 text-center
            text-[40px] sm:text-[30px] font-gvf font-[800]
             text-gray-800 drop-shadow-sm
            "
          >
            Our dream team,your success
          </h2>
        </div>
      </div>
      <section
        className="w-full relative z-30 
        bg-gradient-to-b bg-white"
      >
        <div className="md:w-[70%] lg:w-[70%] sm:w-full sm:px-5 mx-auto">
          <div className="h-[5rem]"></div>

          <div className="h-auto w-full py-10 mx-auto">
            <div>
              <h2
                className="text-[35px]
                font-gvf font-[700] text-gray-800"
              >
                {" "}
                How MeghTech acclerate the
                <span className="text-purple"> startups</span> economy<br></br>
                and built trust over a decade.
              </h2>

              <div className="mt-[5rem]">
                <div className="md:w-full sm:w-full w-[85%] sm:h-auto h-[7rem]">
                  <div
                    className="w-full space-x-[-3rem] flex flex-wrap 
                   justify-between h-full"
                  >
                    <div className="flex justify-center">
                      <span>
                        <Image
                          className="sm:h-[2rem] sm:w-[2rem] md:h-[4rem] md:w-[4rem] h-[5rem] w-[5rem] object-cover"
                          alt="mtl"
                          src={abts1}
                        ></Image>
                      </span>
                    </div>
                    <div className="self-end">
                      <span>
                        <Image
                          className="sm:h-[2rem] sm:w-[2rem] md:h-[4rem] md:w-[4rem] h-[5rem] w-[5rem] object-cover"
                          alt="mtl"
                          src={abts2}
                        ></Image>
                      </span>
                    </div>
                    <div className="self-start">
                      <span>
                        <Image
                          className="sm:h-[2rem] sm:w-[2rem] md:h-[4rem] md:w-[4rem] h-[5rem] w-[5rem] object-cover"
                          alt="mtl"
                          src={abts3}
                        ></Image>
                      </span>
                    </div>
                    <div className="self-end">
                      <span>
                        <Image
                          className="sm:h-[2rem] sm:w-[2rem] md:h-[4rem] md:w-[4rem] h-[5rem] w-[5rem] object-cover"
                          alt="mtl"
                          src={abts4}
                        ></Image>
                      </span>
                    </div>

                    <div className="self-start">
                      <span>
                        <Image
                          className="sm:h-[2rem] sm:w-[2rem] md:h-[4rem] md:w-[4rem] h-[5rem] w-[5rem] object-cover"
                          alt="mtl"
                          src={abts5}
                        ></Image>
                      </span>
                    </div>

                    <div className="self-end">
                      <span>
                        <Image
                          className="sm:h-[2rem] sm:w-[2rem] md:h-[4rem] md:w-[4rem] h-[5rem] w-[5rem] object-cover"
                          alt="mtl"
                          src={abts6}
                        ></Image>
                      </span>
                    </div>

                    <div className="self-start">
                      <span>
                        <Image
                          className="sm:h-[2rem] sm:w-[2rem] md:h-[4rem] md:w-[4rem] h-[5rem] w-[5rem] object-cover"
                          alt="mtl"
                          src={abts7}
                        ></Image>
                      </span>
                    </div>

                    <div className="self-end">
                      <span>
                        <Image
                          className="sm:h-[2rem] sm:w-[2rem] md:h-[4rem] md:w-[4rem] h-[5rem] w-[5rem] object-cover"
                          alt="mtl"
                          src={abts8}
                        ></Image>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-[5rem]">
              <div>
                <h2
                  className="text-[40px] font-gvf font-bold
                text-btn_clr"
                >
                  Work Hard,play hard{" "}
                </h2>
                <div className="mt-10">
                  <ul
                    className="font-montreal ml-10 text-[20px] text-gray-700
                  list-disc space-y-5"
                  >
                    <li>
                      <span
                        className="font-bold text-[25px] text-gray-700
                      "
                      >
                        Passionate Collaboration:{" "}
                      </span>{" "}
                      Our dedicated team combines a genuine passion for
                      technology with a collaborative spirit. We tackle
                      challenges together, leveraging diverse perspectives to
                      deliver high-quality, client-focused solutions.
                    </li>

                    <li>
                      <span
                        className="font-bold text-[25px] text-gray-700
                      "
                      >
                        Continuous Growth:{" "}
                      </span>{" "}
                      We prioritize professional development and lifelong
                      learning, ensuring our team stays ahead of industry
                      trends. This commitment empowers us to innovate and adapt
                      in a constantly evolving tech landscape.
                    </li>

                    <li>
                      <span
                        className="font-bold text-[25px] text-gray-700
                      "
                      >
                        Balance and Celebration:{" "}
                      </span>{" "}
                      We foster a positive work environment that emphasizes
                      work-life balance and team bonding. By celebrating
                      successes—big and small—and incorporating fun into our
                      routine, we create a vibrant culture that inspires
                      creativity and motivation.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-[5rem]">
              <div>
                <h2
                  className="text-[40px] font-gvf font-bold
                text-btn_clr"
                >
                  Visionary team{" "}
                </h2>
                <div className="mt-10">
                  <ul
                    className="font-montreal ml-10 text-[20px] text-gray-700
                  list-disc space-y-5"
                  >
                    <li>
                      <span
                        className="font-bold text-[25px] text-gray-700
                      "
                      >
                        Innovative Collaboration:{" "}
                      </span>{" "}
                      At MeghTech, our team thrives on creativity and
                      collaboration. We encourage forward-thinking ideas and
                      diverse perspectives, fostering an environment where
                      innovative solutions can flourish.
                    </li>

                    <li>
                      <span
                        className="font-bold text-[25px] text-gray-700
                      "
                      >
                        Expertise and Excellence:{" "}
                      </span>{" "}
                      Our diverse team brings a wealth of expertise, enabling us
                      to tackle complex challenges effectively. We uphold a
                      commitment to excellence, delivering top-quality products
                      through meticulous processes and proactive
                      problem-solving.
                    </li>

                    <li>
                      <span
                        className="font-bold text-[25px] text-gray-700
                      "
                      >
                        Continuous Learning and Growth:{" "}
                      </span>{" "}
                      We are dedicated to professional development, ensuring our
                      team stays ahead in the ever-evolving tech landscape. By
                      embracing lifelong learning and empowering collaboration,
                      we build strong relationships and drive impactful results.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-[5rem]">
              <div>
                <h2
                  className="text-[40px] font-gvf font-bold
                text-btn_clr"
                >
                  Commitment to Client Success{" "}
                </h2>
                <div className="mt-10">
                  <ul
                    className="font-montreal ml-10 text-[20px] text-gray-700
                  list-disc space-y-5"
                  >
                    <li>
                      <span
                        className="font-bold text-[25px] text-gray-700
                      "
                      >
                        End-to-End Support{" "}
                      </span>{" "}
                      From initial consultation to post-launch support, we’re
                      with you every step of the way. Our commitment to client
                      success means we provide ongoing maintenance and
                      assistance to ensure your software continues to perform
                      optimally.
                    </li>

                    <li>
                      <span
                        className="font-bold text-[25px] text-gray-700
                      "
                      >
                        Success Stories
                      </span>{" "}
                      We take pride in our track record of successful projects
                      across various industries. Our portfolio showcases our
                      ability to deliver results that drive growth and
                      efficiency for our clients. Let us help you write your
                      success story!
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[80%] mx-auto">
          <Ready></Ready>
        </div>
      </section>
    </div>
  );
}
