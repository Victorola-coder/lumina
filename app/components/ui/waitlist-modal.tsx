"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./button";
import Image from "next/image";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Close modal with escape key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);

    // Prevent scrolling when modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Submitted:", { name, email });
    setSubmitted(true);

    // Reset form after 3 seconds and close modal
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setEmail("");
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-dark/90 backdrop-blur-md z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, type: "spring", bounce: 0.2 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-50 px-4 sm:px-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-dark-100/80 backdrop-blur-lg rounded-xl border border-light/10 p-8 shadow-2xl">
              {/* Logo */}
              <div className="flex justify-center mb-6">
                <div className="relative w-12 h-12">
                  <Image
                    src="/images/logo.svg"
                    alt="LensX Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-light/60 hover:text-light transition-colors"
                aria-label="Close modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="text-5xl mb-4">✓</div>
                  <h3 className="text-2xl font-display font-medium mb-2">
                    Thank You!
                  </h3>
                  <p className="text-light/60">
                    You've been added to our waitlist. We'll notify you when
                    LensX is ready.
                  </p>
                </div>
              ) : (
                <>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-display font-medium mb-3">
                      Join the <span className="text-gradient">Waitlist</span>
                    </h3>
                    <p className="text-light/60">
                      Be the first to experience LensX when it launches.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="block text-sm text-light/80"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 bg-dark-100/50 border border-light/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="block text-sm text-light/80"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 bg-dark-100/50 border border-light/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
                        placeholder="your@email.com"
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full mt-2" size="lg">
                      Join Waitlist
                    </Button>

                    <p className="text-xs text-light/40 text-center mt-4">
                      By joining, you agree to receive updates about LensX. We
                      respect your privacy and will never share your
                      information.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
