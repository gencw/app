import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/nav-bar";
import Followers from "@/components/followers";
import { Suspense } from "react";
import FollowsSkeleton from "@/components/skeleton/follows-skeleton";
import Logo from "@/components/logo";

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

export default async function RootLayout({
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
          <Logo />
          <NavBar />
          <Suspense fallback={<FollowsSkeleton />}>
            <Followers />
          </Suspense>
        </div>
        <main className="flex-1 sm:ml-14 md:ml-20 lg:ml-64">{children}</main>
      </body>
    </html>
  );
}
