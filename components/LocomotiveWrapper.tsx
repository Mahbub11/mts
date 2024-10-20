"use client";
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

export default function LocomotiveWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current as HTMLElement,
      smooth: true,
     
    });

    // Correct cleanup function
    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div data-scroll-container data-scroll-speed="1" ref={scrollRef}>
      {children}
    </div>
  );
}
