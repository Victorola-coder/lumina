"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "1️⃣",
    title: "Sees for you",
    description: "Cameras scan surroundings",
  },
  {
    number: "2️⃣",
    title: "Thinks for you",
    description: "AI identifies obstacles, reads text, recognizes faces",
  },
  {
    number: "3️⃣",
    title: "Speaks to you",
    description: "Real-time audio guidance via conversational AI",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-50/80 via-white to-white opacity-60" />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-medium mb-6 text-dark-800">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-xl text-dark-600 max-w-2xl mx-auto">
            Experience the future of assistive technology in just 10 seconds
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-white shadow-md rounded-2xl overflow-hidden p-8 text-center border border-light-200 hover:border-primary-100 transition-colors"
            >
              <div className="text-4xl mb-4">{step.number}</div>
              <h3 className="text-2xl font-display font-medium mb-4 text-dark-800">
                {step.title}
              </h3>
              <p className="text-dark-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
