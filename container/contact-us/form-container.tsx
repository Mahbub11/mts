"use client";

import Rounded from "@/components/Rounded";
import { avaterContact, project2 } from "@/public";
import { ArrowUpRight, SendHorizonal } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import RoundedCustom from "./RoundedCustom";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <div
        className="flex sm:flex-col  justify-between
       items-center md:p-8 lg:p-8 font-NeueMontreal"
      >
        <div>
          <h2
            className="text-[40px] font-gvf font-bold text-gray-600
          "
          >
            Let’s talk
          </h2>
          <p
            className="font-montreal text-[18px] 
          font-[400]"
          >
            Fill in the form below, or contact us directly – and we will get
            back to you as soon as possible.{" "}
          </p>

          <form
            className="w-full 
           bg-white px-10 py-10 rounded mt-10"
          >
            <div className="mb-4">
              <label
                className="block 
              font-NeueMontreal text-[18px] tracking-tight
              font-[500] text-gray-700"
                htmlFor="name"
              >
                Name
              </label>
              <div className="">
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-transparent/5 border-b-2
                   border-white focus:border-btn_clr rounded-md
                    outline-none p-2 transition-colors duration-200"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block mb-2
              font-NeueMontreal text-[18px] tracking-tight
              font-[500] text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent/5 border-b-2
                border-white focus:border-btn_clr rounded-md
                 outline-none p-2 transition-colors duration-200"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2
              font-NeueMontreal text-[18px] tracking-tight
              font-[500] text-gray-700"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-transparent/5 border-b-2
                border-white focus:border-btn_clr rounded-md
                 outline-none p-2 transition-colors duration-200"
                required
              />
            </div>

            <div
              className="flex items-center justify-between bg-transparent cursor-pointer
               rounded-md group border 
          border-btn_clr
           hover:border-[#00d4ff] hover:text-customDark "
            >
              <div className="w-full xl:text-[18px] xl:leading-[28px] text-[14px] leading-[24px] uppercase font-normal font-NeueMontreal">
                <RoundedCustom
                  className="py-[6px] w-full"
                  backgroundColor="#00B4D8"
                >
                  <p
                    className="z-10 px-[10px] ml-[15px] py-[6px] font-[500]
                 group-hover:text-white text-black tracking-widest"
                  >
                    Submit
                  </p>
                  <div
                    className="bg-black group-hover:bg-white text-white
                p-[5px]
                 rounded-full scale-[0.3] mr-[10px] group-hover:scale-[0.9] 
                 transition-all z-10 transform duration-[0.3s] ease-[.215,.61,.355,1]"
                  >
                    <SendHorizonal
                      strokeWidth={1.5}
                      size={20}
                      className="scale-[0] group-hover:scale-[1] text-black"
                    />
                  </div>
                </RoundedCustom>
              </div>
            </div>
            {/* <button
              type="submit"
              className="w-full bg-btn_clr text-white
               p-2 rounded hover:bg-blue-700"
            >
              Send Message
            </button> */}
          </form>
        </div>

        <div>
          <h2
            className="sm:mt-10 font-gvf text-[20px] text-gray-800
          font-[500]"
          >
            Hi, I’m Karolina. I look forward to <br></br> discussing your
            project.
          </h2>
          <div>
            <Image
              src={avaterContact}
              alt="clientImg"
              className="w-[10rem] h-[10rem] object-cover
             rounded-[10px] mt-5"
            />

            <div className=" font-montreal mt-5 font-[500] text-gray-800">
              <h2>Karolina Brewczynska</h2>
              <p>Business Development Manager</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
