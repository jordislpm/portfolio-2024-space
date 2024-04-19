import Hero from "@/components/main/Hero";
import Projects from "@/screens/Projects/Projects";
import Skills from "@/screens/Skills/Skills";

import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
      <Hero/>
     <Skills/>
     <Projects/>
      </div>
    </main>
  );
}
