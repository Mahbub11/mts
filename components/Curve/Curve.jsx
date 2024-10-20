"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { text, curve, translate } from "@/motion";
import './style.scss'; // Ensure the SCSS file is imported

const routes = {
	"/": "Home",
	"/services": "Services",
	"/presentation": "Our Work",
	"/ochi-team": "About Us",
	"/insights": "Insights",
	"/contact": "Contact Us",
	"/case": "Workiz Easy",
};

const anim = (variants) => {
	return {
		variants,
		initial: "initial",
		animate: "enter",
		exit: "exit",
	};
};

export default function Curve({ children }) {
	const router = useRouter();
	const [dimensions, setDimensions] = useState({
		width: null,
		height: null,
	});

	useEffect(() => {
		function resize() {
			setDimensions({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}
		resize();
		window.addEventListener("resize", resize);
		return () => {
			window.removeEventListener("resize", resize);
		};
	}, []);

	return (
		<div id="curve-container" className="page relative">
			<div
				style={{ opacity: dimensions.width == null ? 1 : 0 }}
				id="curve-background"
				className="z-50 pointer-events-none"
			/>
			<motion.p
				id="curve-route"
				className="absolute left-1/2 top-[40%] text-white text-[50px] z-[60] -translate-x-1/2 text-center"
				{...anim(text)}>
				{routes[router.route]}
			</motion.p>
			{dimensions.width != null && <SVG {...dimensions} />}
			{children}
		</div>
	);
}

const SVG = ({ height, width }) => {
	const initialPath = `
        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 0
    `;

	const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0
    `;

	return (
		<motion.svg
			id="curve-svg"
			className="fixed inset-0 z-50 pointer-events-none"
			{...anim(translate)}>
			<motion.path {...anim(curve(initialPath, targetPath))} />
		</motion.svg>
	);
};
