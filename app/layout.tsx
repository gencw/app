import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/nav-bar";
import Logo from "@/public/logo.svg";
import Link from "next/link";
import Image from "next/image";
import Follows from "@/components/follows";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "群峰之巅",
  description: "群峰之巅",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full sm:px-4 md:w-3xl lg:w-5xl xl:w-7xl min-h-screen mx-auto flex flex-col sm:flex-row`}
      >
        <div className="w-full sm:w-14 md:w-20 gap-4  lg:w-64  fixed bottom-0 sm:top-0 lg:mt-10 flex flex-row sm:flex-col items-center lg:items-start  justify-center lg:justify-start">
          <Link href="/" className="lg:px-4 hidden sm:block">
            <Image
              src={Logo}
              alt="logo"
              width={32}
              height={32}
              className="lg:hidden"
            />
            <div className="lg:block hidden ml-2 font-bold text-lg">
              群峰之巅
            </div>
          </Link>
          <NavBar />
          <Follows />
        </div>
        <main className="flex-1 sm:ml-14 md:ml-20 lg:ml-64">{children}</main>
      </body>
    </html>
  );
}
