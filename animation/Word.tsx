"use client";
import React, { useRef } from "react";
import { TParagraphProps, TWordProps } from "@/types";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Paragraph({ paragraph }: TParagraphProps) {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start 0.6", "start 0.25"],
	});

	const words = paragraph.split(" ");
	return (
		<>
			<p
				ref={container}
				className="mt-[1rem] flex 
				 flex-wrap text-[40rem]">
				{words.map((word, i) => {
					const start = i / words.length;
					const end = start + 1 / words.length;
					return (
						<Word
							key={i}
							progress={scrollYProgress}
							range={[start, end]}>
							{word}
						</Word>
					);
				})}
			</p>
		</>
	);
}

const Word = ({ children, progress, range }: TWordProps) => {
	const opacity = useTransform(progress, range, [0, 1]);
	return (
		<p className="relative mr-[1rem] mt-[1rem] ">
			<p className="absolute opacity-[20%]">{children}</p>
			<motion.p style={{ opacity: opacity }}>{children}</motion.p>
		</p>
	);
};

