import fs from "fs";
import path from "path";
import type { ExperienceEntry } from "@/lib/experience.types";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function loadExperience(): ExperienceEntry[] {
  try {
    const filePath = path.join(process.cwd(), "data", "experience.json");
    const raw = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(raw) as ExperienceEntry[];
  } catch (err) {
    console.error("[page] Failed to load experience.json:", err);
    return [];
  }
}

export default function Home() {
  const entries = loadExperience();

  return (
    <main>
      <Navbar />
      <Hero />
      <Ticker />
      <About />
      <Experience entries={entries} />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
