import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/nav/navBar";
import Footer from "@/components/footer/Footer";
import { AnimatePresence } from "framer-motion";

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
        bg-gradient-to-r from-customLight/5 to-customDark/10 `}
      >
        <NavBar></NavBar>

        <div className="md:py-10">
          <div
            className="hidden z-100 right-0 top-1/2 transform -translate-y-1/2 w-10 h-[15rem]
             bg-customDark/80  items-center justify-center rotate-180 animate-rotate"
          >
            <div className="text-white text-center rotate-90  whitespace-nowrap">
              Contact Us
            </div>
          </div>
          {/* <TransactionWrapper></TransactionWrapper> */}

          <AnimatePresence>
             {children}
          </AnimatePresence>
         
        </div>

        <Footer></Footer>
      </body>
    </html>
  );
}
