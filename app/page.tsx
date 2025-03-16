"use client";

import { Navbar } from "./components/ui/navbar";
import { Hero } from "./components/sections/Hero";
import { Features } from "./components/sections/Features";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col">
        <Hero />
        <Features />
      </main>
    </>
  );
}
