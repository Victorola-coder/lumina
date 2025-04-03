"use client";

import { Navbar } from "./components/ui/navbar-fixed";
import { Hero } from "./components/sections/Hero";
import { Features } from "./components/sections/Features";
import { HowItWorks } from "./components/sections/HowItWorks";
import { Pricing } from "./components/sections/Pricing";
import { About } from "./components/sections/About";
import { FAQ } from "./components/sections/FAQ";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/ui/footer";
import { WaitlistModal } from "./components/ui/waitlist-modal";
import {
  WaitlistModalProvider,
  useWaitlistModal,
} from "./context/waitlist-context";

export default function Home() {
  return (
    <WaitlistModalProvider>
      <HomeContent />
    </WaitlistModalProvider>
  );
}

function HomeContent() {
  const { isOpen, closeModal } = useWaitlistModal();

  return (
    <div className="min-h-screen flex flex-col bg-light text-dark">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <HowItWorks />
        <Features />
        <Pricing />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />

      {/* Single instance of the waitlist modal */}
      <WaitlistModal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
}
