"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/button";
import { useWaitlistModal } from "../../context/waitlist-context";

const features = [
  {
    title: "Vera - Vision Ally",
    description:
      "Your dedicated vision assistant that provides real-time object recognition, text reading, and spatial awareness guidance through natural voice interactions.",
    image: "/images/feature-1.png",
  },
  {
    title: "Aria - Emotional Ally",
    description:
      "A compassionate AI companion that offers emotional support, mood tracking, and mental well-being assistance, helping you navigate daily challenges with confidence.",
    image: "/images/feature-2.png",
  },
  {
    title: "Nova - Learning Ally",
    description:
      "An educational assistant that helps with reading comprehension, provides detailed descriptions of visual materials, and adapts to your learning preferences.",
    image: "/images/feature-3.png",
  },
  {
    title: "Trusted Human Allies",
    description:
      "Connect instantly with family, friends, or caregivers through voice commands. Share your location and context for immediate assistance when needed.",
    image: "/images/feature-4.png",
  },
  {
    title: "Privacy-First Technology",
    description:
      "All processing happens on-device with state-of-the-art encryption. Your data remains private and secure, giving you complete control over your information.",
    image: "/images/feature-6.png",
  },
];

export function Features() {
  const { openModal } = useWaitlistModal();

  return (
    <section id="features" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-50/80 via-white to-white opacity-60" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-medium mb-6 text-dark-800">
            Ready to Experience <span className="text-gradient">LensX</span>?
          </h2>
          <p className="text-xl text-dark-600">
            Discover how our AI-powered smart glasses can enhance your daily
            life.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-white shadow-lg rounded-2xl overflow-hidden group border border-light-300"
            >
              {/* Feature Content */}
              <div className="p-8">
                <h3 className="text-2xl font-display font-medium mb-4 text-dark-800">
                  {feature.title}
                </h3>
                <p className="text-dark-600">{feature.description}</p>
              </div>

              {/* Feature Image */}
              <div className="relative h-64">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-24"
        >
          <h3 className="text-2xl md:text-3xl font-display font-medium mb-6 text-dark-800">
            Ready to Experience LensX?
          </h3>
          <Button
            size="lg"
            variant="default"
            onClick={openModal}
            className="px-8"
          >
            Join Waitlist
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
