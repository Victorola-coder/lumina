"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from ".";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-lg border-b border-gray-800"
        >
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="text-2xl font-bold">Lumina</div>
            <div className="flex items-center gap-6">
              <a href="#features" className="text-gray-300 hover:text-white">
                Features
              </a>
              <a href="#benefits" className="text-gray-300 hover:text-white">
                Benefits
              </a>
              <a href="#demo" className="text-gray-300 hover:text-white">
                Demo
              </a>
              <Button variant="primary" size="sm">
                Join Waitlist
              </Button>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
