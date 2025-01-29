"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from ".";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-lg border-b border-gray-800"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">Lumina</div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2"
                onClick={toggleMenu}
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-6">
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

            {/* Mobile Menu */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="md:hidden"
                >
                  <div className="flex flex-col gap-4 py-4">
                    <a
                      href="#features"
                      className="text-gray-300 hover:text-white py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Features
                    </a>
                    <a
                      href="#benefits"
                      className="text-gray-300 hover:text-white py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Benefits
                    </a>
                    <a
                      href="#demo"
                      className="text-gray-300 hover:text-white py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Demo
                    </a>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Join Waitlist
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
