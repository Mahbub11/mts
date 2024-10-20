import Link from "next/link";
import { TButtonProps } from "@/types";
import { ArrowUpRight } from "lucide-react";

export default function Button({ href, title }: TButtonProps) {
	return (
		<div className="flex flex-col pb-[10px] w-fit">
			<div className="flex items-center gap-[5px] group">
				<div className="rounded-[50px] border border-[#21212199]
				hover:border-[#FFFF] group-hover:bg-customDark 
				 py-[3px] px-[12px] cursor-pointer">
					<Link
						className="small-text font-NeueMontreal text-secondry
						hover:text-white  uppercase group-hover:text-white transition-all duration-300 ease-in-out"
						href={href}>
						{title}
					</Link>
				</div>
				<div className="w-[33px] flex items-center justify-center h-[33px] border border-[#FFFF]
				 rounded-[50px] group-hover:bg-customLight transition-all duration-200 ease-in-out cursor-pointer 
				 scale-0 group-hover:scale-100 sm:hidden xm:hidden">
					<p className="small-text font-normal text-white group-hover:text-white">
						<ArrowUpRight
							strokeWidth={1.25}
							size={24}
						/>
					</p>
				</div>
			</div>
		</div>
	);
}
