"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/app/components/ui";
import { AIO, Glow } from "@/app/components/global";
export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg" // You'll need to add this image
            alt="Background"
            fill
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f0f0f]" />
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Empowering Freedom Through Innovation
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Lumina: AI-Powered Smart Glasses for Visually Impaired Individuals
          </motion.p>

          <Button variant="primary" size="lg" className="animate-float">
            Join the Waitlist
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-dark">
        <div className="container mx-auto px-4">
          <Glow className="p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              What Is Lumina?
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-300 mb-6">
                  Lumina is an AI-powered smart glasses solution designed to
                  empower individuals with visual impairments. By combining
                  cutting-edge technology and user-centric design, Lumina
                  enables users to navigate the world independently and
                  experience life without limitations.
                </p>
                <p className="text-gray-300">
                  More than just an assistive tool, Lumina is also a companion—a
                  friend that understands you, interacts with you, and guides
                  you.
                </p>
              </div>
              <div className="relative h-[400px]">
                <Image
                  src="/about-image.jpg" // add thi image later on
                  alt="Lumina Smart Glasses"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
          </Glow>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Benefits of Lumina
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <AIO
                key={index}
                show={true}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Glow className="p-6">
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </Glow>
              </AIO>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Embrace a Life of Freedom?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the waitlist to be the first to experience Lumina, a
            groundbreaking assistive technology for visually impaired
            individuals.
          </p>
          <Button variant="primary" size="lg">
            Sign Up Now
          </Button>
        </div>
      </section>
    </main>
  );
}

const benefits = [
  {
    title: "Empowering Independence",
    description:
      "Navigate confidently, access information, and engage in daily tasks without relying on others.",
  },
  {
    title: "Revolutionizing Education",
    description:
      "In the classroom, Lumina ensures students with vision impairments have the tools they need to succeed.",
  },
];
