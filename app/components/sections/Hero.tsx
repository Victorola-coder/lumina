"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { useWaitlistModal } from "../../context/waitlist-context";

const stats = [
  {
    value: "3",
    label: "AI Allies",
    description: "Vera, Aria & Nova",
  },
  {
    value: "90%",
    label: "User Satisfaction",
    description: "From Beta Testing",
  },
  {
    value: "24/7",
    label: "Support",
    description: "Human & AI Assistance",
  },
];

export function Hero() {
  const { openModal } = useWaitlistModal();

  return (
    <section className="relative pt-40 pb-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-100 via-transparent to-transparent" />
      <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-primary-50 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="relative z-10 max-w-3xl">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl font-display font-medium mb-8 text-dark-800">
              Empowering Vision Through{" "}
              <span className="text-gradient">AI Innovation</span>
            </h1>
            <p className="text-xl text-dark-600 mb-8 max-w-2xl">
              LensX combines cutting-edge AI technology with innovative design
              to create intelligent glasses that enhance visual perception and
              provide emotional support for the visually impaired community.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                variant="default"
                onClick={openModal}
                className="bg-primary-500 hover:bg-primary-600 text-white"
              >
                Pre-order Now
              </Button>
              <Link href="#features">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white hover:bg-light-100 text-dark-800 border border-light-300 hover:border-light-400"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="text-4xl font-display font-medium mb-2 text-dark-800">
                  {stat.value}
                </div>
                <div className="text-sm text-dark-500">
                  <div className="font-medium text-dark-700">{stat.label}</div>
                  {stat.description}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="absolute top-1/2 -translate-y-1/2 right-0 w-1/2 aspect-square"
        >
          <div className="relative w-full h-full">
            <Image
              src="/images/hero.png"
              alt="LensX AI-Powered Glasses"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
