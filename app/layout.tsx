import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/StarBackground/StarBackground";
import Header from "@/components/Layout/Header/Header";
import Footer from "@/components/Layout/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://jordisdev.com'),
  title: {
    default: 'Jordi\'s Dev Portfolio - Fullstack Web Developer specializing in MERN with TypeScript and Next.js',
    template: '%s | Jordi\'s Dev Portfolio - Fullstack Web Developer specializing in MERN with TypeScript and Next.js',
  },
  description: 'Explore Jordi\'s portfolio, a fullstack web developer specializing in MERN with TypeScript and Next.js. Discover standout projects and professional experience.',
  applicationName: 'Jordi\'s Dev Portfolio',
  keywords: ['web developer', 'fullstack', 'MERN', 'TypeScript', 'Next.js', 'standout projects', 'professional experience'],
  authors: [{ name: 'Jordi', url: 'https://jordisdev.com' }],
  creator: 'Jordi',
  publisher: 'Jordi',
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
    },
  },
  openGraph: {
    title: 'Jordi\'s Dev Portfolio - Fullstack Web Developer specializing in MERN with TypeScript and Next.js',
    description: 'Explore Jordi\'s portfolio, a fullstack web developer specializing in MERN with TypeScript and Next.js. Discover standout projects and professional experience.',
    url: 'https://jordisdev.com',
    siteName: 'Jordi\'s Dev Portfolio',
    type: 'website',
    locale: 'en-US',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <StarsCanvas/>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
