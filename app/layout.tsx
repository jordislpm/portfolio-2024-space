import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "../components/StarBackground/StarBackground"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "jordisdev-portfolio",
  description: "new portfolio for 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <StarsCanvas/>
        {children}
      </body>
    </html>
  );
}
