"use client";

import { project2 } from "@/public";
import Image from "next/image";
import React, { useState } from "react";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <div className="flex  justify-between items-center p-8 font-NeueMontreal">
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

          <form className="w-full bg-transparent border-2
          border-btn_clr/20 px-10 py-10 rounded mt-10">
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
                  className="w-full bg-transparent border-b-2
                   border-white focus:border-btn_clr 
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
                className="w-full bg-transparent border-b-2
                border-white focus:border-btn_clr 
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
                className="w-full bg-transparent border-b-2
                border-white focus:border-btn_clr 
                 outline-none p-2 transition-colors duration-200"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-btn_clr text-white
               p-2 rounded hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>

        <div>
          <h2
            className="font-gvf text-[20px] text-gray-800
          font-[500]"
          >
            Hi, I’m Karolina. I look forward to <br></br> discussing your
            project.
          </h2>
          <div>
            <Image
              src={project2}
              alt="clientImg"
              className="w-[10rem] h-[10rem] object-cover
             rounded-[10px] mt-5"
            />

            <div className="font-montreal mt-5 font-[500] text-gray-800">
              <h2>Karolina Brewczynska</h2>
              <p>Business Development Manager</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
