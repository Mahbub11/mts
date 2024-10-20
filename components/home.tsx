import TextBannarSection from "@/components/TextBannar/about";
import AboutSection from "@/components/about/about";
import AnimatedText from "@/components/hero/hero";
import NavBar from "@/components/nav/navBar";
import Project from "@/components/project/project";
import Image from "next/image";
import Process from "./process/Process";
import SvgComponent from "./svg-section/svgComponent";
import Whatwedo from "./mission/whatwedo";
import Clients from "./review/Clients";
import Ready from "./ready/Ready";
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
