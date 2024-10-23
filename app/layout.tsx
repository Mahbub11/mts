import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/nav/navBar";

import { AnimatePresence } from "framer-motion";
import Footer from "@/container/home-page/footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "mT",
  description: "mTch LTD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased 
       
         `}
      >
        <NavBar></NavBar>

        <div className="md:py-10 ">
          <div
            className="sm:hidden md:fixed lg:fixed z-50 right-0 top-1/2 transform 
              -translate-y-1/2 w-10 h-[15rem] rounded-sm bg-btn_clr
              flex flex-col items-center space-y-10 justify-center rotate-180 
              animate-rotate"
          >
            <div className="text-white font-gvf text-center rotate-90 whitespace-nowrap">
              Contact US
            </div>
          </div>

          {/* <TransactionWrapper></TransactionWrapper> */}

          <AnimatePresence>{children}</AnimatePresence>
        </div>

        <Footer></Footer>
      </body>
    </html>
  );
}
