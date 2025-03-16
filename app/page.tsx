"use client";

import { useState } from "react";
import { Navbar } from "./components/ui/navbar";
import { Hero } from "./components/sections/Hero";
import { Features } from "./components/sections/Features";
import { About } from "./components/sections/About";
import { FAQ } from "./components/sections/FAQ";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/ui/footer";
import { WaitlistModal } from "./components/ui/waitlist-modal";

// Create a context for the waitlist modal
import { createContext, useContext } from "react";

// Define the context type
interface WaitlistModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

// Create the context with a default value
export const WaitlistModalContext = createContext<WaitlistModalContextType>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

// Custom hook to use the waitlist modal context
export const useWaitlistModal = () => useContext(WaitlistModalContext);

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <WaitlistModalContext.Provider
      value={{
        isOpen: isModalOpen,
        openModal,
        closeModal,
      }}
    >
      <Navbar />
      <main className="flex min-h-screen flex-col">
        <Hero />
        <Features />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />

      {/* Single instance of the waitlist modal */}
      <WaitlistModal isOpen={isModalOpen} onClose={closeModal} />
    </WaitlistModalContext.Provider>
  );
}
