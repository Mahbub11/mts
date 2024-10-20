import Word from "@/animation/Word";
import { paragraph } from "@/constants";
import { motion } from "framer-motion";
import ParagraphOne from "./one";

export default function AboutText() {
	return (
		<section className="w-full"  >
			<h1   className="text-[#35bbe4] uppercase leading-none 
                sm:text-[8rem] md:text-[10rem] text-[130rem] font-semibold overflow-hidden -z-10">
				{"megh".split("").map((item: string, i: number) => (
					<motion.span
						initial={{ y: "100%" }}
						whileInView={{ y: 0 }}
						viewport={{ once: true }}
						transition={{
							delay: i * 0.1,
							duration: 0.5,
							ease: [0.4, 0, 0.2, 1],
						}}
						className="inline-block"
						key={i}
						style={{
							opacity: 1 - (i / 10), // Dynamic fading effect
						}}>
						{item}
					</motion.span>
				))}
			</h1>
			
            <ParagraphOne paragraph={paragraph}></ParagraphOne>
			{/* <div className="w-full z-10 relative">
				<div className="w-[90%] text-justify leading-loose tracking-wider ml-5  px-10 py-10
                    rounded-md mt-[-3rem] text-[25px]">
					<h2>{paragraph}</h2>
				</div>
			</div> */}
		</section>
	);
}
