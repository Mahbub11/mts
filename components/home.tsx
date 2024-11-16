import TextBannarSection from "@/container/home-page/TextBannar/about";
import AboutSection from "@/container/home-page/about/about";
import AnimatedText from "@/container/home-page/hero/hero";
import NavBar from "@/components/nav/navBar";
import Project from "@/container/home-page/project/project";
import Image from "next/image";
import Process from "../container/home-page/process/Process";
import SvgComponent from "../container/home-page/svg-section/svgComponent";
import Whatwedo from "../container/home-page/mission/whatwedo";
import Clients from "../container/home-page/review/Clients";
import Ready from "../container/home-page/ready/Ready";
import TransactionWrapper from "./Transaction-wrapper";
import Curve from "./Curve/Curve";
import HorizontalScrollCarousel from "./h-scroll/horizontal-slider";
import { AnimatePresence } from "framer-motion";
import SvgContainer from "@/container/home-page/svg-section/svg-container";

export default function Home() {
  return (
    <>
      {/* <Curve> */}
        <TransactionWrapper>
          <AnimatedText></AnimatedText>
        </TransactionWrapper>

      {/* <SvgContainer></SvgContainer> */}
        <TextBannarSection></TextBannarSection>

        <TransactionWrapper>
          <Whatwedo></Whatwedo>
        </TransactionWrapper>

        {/* <TransactionWrapper>
          <Process />
        </TransactionWrapper> */}

        <div >
          <HorizontalScrollCarousel></HorizontalScrollCarousel>
        </div>

        <TransactionWrapper>
          <Project />
        </TransactionWrapper>

        <TransactionWrapper>
          <Clients />
        </TransactionWrapper>

        <TransactionWrapper>
          <Ready />
        </TransactionWrapper>
      {/* </Curve> */}
    </>
  );
}
