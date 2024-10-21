"use client";
import { useRef } from "react";


export default function Projectspresentation() {
	const container = useRef(null);
	return (
		<div
			className="w-full"
			ref={container}>
			<div className="w-full flex flex-col items-center justify-center
			 ">
				<div
					data-scroll
					data-scroll-speed="-.2"
					className="bg-transparent/10 w-[75%] py-[20px] rounded-t-[10px]	"
				/>
				<div
					className="bg-transparent/5 relative z-20 w-[90%] py-[20px] rounded-t-[10px]"
					data-scroll
					data-scroll-speed="-.1"
				/>
			</div>
			<section className="w-full relative 
			 z-30 padding-y rounded-t-[20px] bg-customLight/40 h-[50rem]">
				<div>
					<h2 className="sub-heading font-normal padding-x font-NeueMontreal text-secondry">
						Purpose driven, strategy-led presentations
						<br className="sm:hidden xm:hidden" />
						that people care about.
					</h2>
				</div>
				
			</section>
		</div>
	);
}
