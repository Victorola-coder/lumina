"use client";

import { Navbar } from "./components/ui/navbar";
import { Hero } from "./components/sections/Hero";
import { Features } from "./components/sections/Features";
import { About } from "./components/sections/About";
import { FAQ } from "./components/sections/FAQ";
import { Footer } from "./components/ui/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col">
        <Hero />
        <Features />
        <About />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
