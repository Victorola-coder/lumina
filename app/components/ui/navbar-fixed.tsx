"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./button";
import { useWaitlistModal } from "../../context/waitlist-context";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { openModal } = useWaitlistModal();
  const navRef = useRef<HTMLElement>(null);

  // Handle scroll event and section detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Detect active section
      const sections = ["features", "about", "faq", "contact"];
      const scrollPosition = window.scrollY + 100;

      if (scrollPosition < 300) {
        setActiveSection("home");
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  // Handle smooth scrolling for navigation links
  const scrollToSection = (sectionId: string, event?: React.MouseEvent) => {
    if (event) event.preventDefault();

    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = navRef.current?.offsetHeight || 0;
      const offsetTop = element.offsetTop - navHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });

      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { href: "#features", label: "Features", id: "features" },
    { href: "#about", label: "About", id: "about" },
    { href: "#faq", label: "FAQ", id: "faq" },
    { href: "#contact", label: "Contact", id: "contact" },
  ];

  return (
    <motion.header
      ref={navRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-dark-100/90 backdrop-blur-lg py-3 shadow-xl border-b border-light/5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="relative z-10 flex items-center group"
            onClick={(e) => scrollToSection("home", e)}
          >
            <div className="relative w-8 h-8 mr-2 transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/images/logo.svg"
                alt="LensX Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-display font-medium bg-clip-text text-transparent bg-gradient-to-r from-light to-light/90 group-hover:from-primary group-hover:to-primary/80 transition-all duration-300">
              LensX
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={(e) => scrollToSection(link.id, e)}
                className={`relative text-sm font-medium transition-colors duration-300 py-1 ${
                  activeSection === link.id
                    ? "text-primary"
                    : "text-light/70 hover:text-light"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.span
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={openModal}
              className="ml-2 bg-dark-100/50 backdrop-blur-sm hover:bg-primary/10 border-light/10 hover:border-primary/30 text-white"
            >
              Join Waitlist
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-10 text-light p-2 rounded-full hover:bg-light/5 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "rotate-45 translate-y-0.5"
                    : "-translate-y-1"
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "-rotate-45 -translate-y-0.5"
                    : "translate-y-1"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 top-0 z-0 bg-dark-100/95 backdrop-blur-lg"
          >
            <div className="flex flex-col items-center justify-center h-full">
              <nav className="flex flex-col items-center space-y-8 text-xl">
                {navLinks.map((link) => (
                  <Link
                    key={link.id}
                    href={link.href}
                    onClick={(e) => scrollToSection(link.id, e)}
                    className={`relative text-xl font-medium transition-colors duration-300 ${
                      activeSection === link.id
                        ? "text-primary"
                        : "text-light/70 hover:text-light"
                    }`}
                  >
                    {link.label}
                    {activeSection === link.id && (
                      <motion.span
                        layoutId="activeMobileSection"
                        className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary rounded-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                ))}
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openModal();
                  }}
                  className="mt-4 bg-dark-100/50 backdrop-blur-sm hover:bg-primary/10 border-light/10 hover:border-primary/30"
                >
                  Join Waitlist
                </Button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
