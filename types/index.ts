import { MotionValue } from "framer-motion";
import { StaticImageData } from "next/image";

export type TParagraphProps = {
    paragraph: string;
};

export type TWordProps = {
    children: string;
    progress: MotionValue<number>;
    range: number[];
};

export type TperspectiveTextProps = {
    children: React.ReactNode;
};


export type TmodalProps = {
    modal: {
        active: boolean;
        index: number;
    };
    projects: {
        img: StaticImageData;
        color: string;
    }[];
};

export type TprojectProps = {
    title: string,
    index: number,
    setModal: (modal: { active: boolean; index: number; }) => void;
    href: string;
};

export type TlogoMarqueeProps = {
    children: React.ReactNode;
    baseVelocity: number;
};

export type TtextHoverProps = {
    classname?:string,
    title1: string;
    subTitle1: string;
    title2: string;
    subTitle2: string;
};

export type TparallaxProps = {
    images: string[];
    y: MotionValue<number>;
};

export type TbuttonProps = {
    toggleMenu: () => void,
    isActive: boolean;
};

export type TnavProps = {
    toggleMenu: () => void,
};

export type TperspectiveTextMenuProps = {
    label: string;
};

export type TRoundedProps = {
    children: React.ReactNode;
    className?: string;
    backgroundColor: string;
 };
 export type TButtonProps = {
    title: string;
    href: string;
 };

 export type TLinkHoverProps = {
    title: string;
    href: string;
    className?: string;
 };
 export type TpageSkillsProps = {
    skillNo?:string
    heading?:string
    id: string;
    title: string;
    heading1: string;
    heading2: string;
    heading3: string;
    heading4: string;
    heading5: string;
    heading6?:string,
    skillNo1: string;
    skillNo2: string;
    skillNo3: string;
    skillNo4: string;
    skillNo5: string;
    skillNo6?:string,
    images: string[];
 };