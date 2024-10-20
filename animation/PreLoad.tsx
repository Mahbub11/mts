"use client";
import { motion } from "framer-motion";
import { opacity, slideUp } from "@/motion";
import { useEffect, useState } from "react";

export default function PreLoad({ title }: { title: string }) {
	const [dimension, setDimension] = useState({ width: 0, height: 0 });

	useEffect(() => {
		const handleResize = () => {
			setDimension({ width: window.innerWidth, height: window.innerHeight });
		};

		handleResize(); // Set initial dimensions
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const initialPath = `M0 ${dimension.height} L${dimension.width} ${dimension.height} L${dimension.width} 0 Q${dimension.width / 2} -300 0 0 L0 ${dimension.height}`;
	const targetPath = `M0 ${dimension.height} L${dimension.width} ${dimension.height} L${dimension.width} 0 Q${dimension.width / 2} 0 0 0 L0 ${dimension.height}`;

	const curve = {
		initial: {
			d: initialPath,
			transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
		},
		exit: {
			d: targetPath,
			transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
		},
	};

	return (
		<motion.div
			variants={slideUp}
			initial="initial"
			exit="exit"
			className="h-screen w-screen flex items-center justify-center fixed z-20 bg-[#000000]">
			{dimension.width > 0 && (
				<>
					<motion.p
						className="flex text-white text-[42px] items-center absolute z-10"
						variants={opacity}
						initial="initial"
						animate="enter">
						<span className="block w-[10px] h-[10px] bg-white rounded-full mr-[10px]" />
						{title}
					</motion.p>
					
				</>
			)}
		</motion.div>
	);
}
