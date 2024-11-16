import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/nav/navBar";

import { AnimatePresence } from "framer-motion";
import Footer from "@/container/home-page/footer/Footer";
import Link from "next/link";

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
        

          {/* <TransactionWrapper></TransactionWrapper> */}

          <AnimatePresence>{children}</AnimatePresence>
        </div>

        <Footer></Footer>
      </body>
    </html>
  );
}
