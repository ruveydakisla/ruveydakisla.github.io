"use client";
import Navbar from "@/components/navbar";
import About from "./about/page";
import Education from "./education/page";
import Experience from "./experience/page";
import Projects from "./projects/page";
import Skills from "./skills/page";

import Homee from "./home/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <main className="flex min-h-screen px-12 bg-primary-bg  flex-col  w-full  ">
      <Navbar />
      <div className="flex flex-1 flex-col   w-full ">
        <Homee />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </main>
  );
}
