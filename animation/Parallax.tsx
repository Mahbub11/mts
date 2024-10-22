"use client";

import { useEffect, useRef, useState } from "react";
import { useTransform, useScroll } from "framer-motion";
import SvgComponent from "@/container/home-page/svg-section/svgComponent";

export default function ParaLax() {
	const gallery = useRef(null);
	const [dimension, setDimension] = useState({ width: 0, height: 0 });

	const { scrollYProgress } = useScroll({
		target: gallery,
		offset: ["start end", "end start"],
	});

	const { height } = dimension;
	const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
	const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
	const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
	const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

	useEffect(() => {
		const resize = () => {
			setDimension({ width: window.innerWidth, height: window.innerHeight });
		};

		window.addEventListener("resize", resize);
		resize();

		return () => {
			window.removeEventListener("resize", resize);
		};
	}, []);

	return (
		<main className=" w-full">
			<div
				ref={gallery}
				className="h-[30rem] bg-transparent
				 relative flex gap-[2vw] p-[2vw] overflow-hidden">
				<SvgComponent></SvgComponent>
			</div>
		</main>
	);
}
