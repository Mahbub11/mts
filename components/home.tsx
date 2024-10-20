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

export default function Home() {
  return (
    <>
      <Curve>
        <TransactionWrapper>
          <AnimatedText></AnimatedText>
        </TransactionWrapper>

        <SvgComponent></SvgComponent>
        <TextBannarSection></TextBannarSection>

        <TransactionWrapper>
          <Whatwedo></Whatwedo>
        </TransactionWrapper>

        <TransactionWrapper>
          <Process />
        </TransactionWrapper>

        <TransactionWrapper>
          <Project />
        </TransactionWrapper>

        <TransactionWrapper>
          <Clients />
        </TransactionWrapper>

        <TransactionWrapper>
          <Ready />
        </TransactionWrapper>
      </Curve>
    </>
  );
}