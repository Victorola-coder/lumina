"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { useWaitlistModal } from "../../context/waitlist-context";

const plans = [
  {
    name: "Lumina App",
    price: "25",
    description:
      "Experience the power of AI assistance through your smartphone",
    features: [
      "Real-time object recognition",
      "Text reading capabilities",
      "Face recognition",
      "Voice navigation",
      "Emergency contacts",
      "Regular updates",
    ],
  },
  {
    name: "Lumina Smart Glasses",
    price: "1,000",
    description:
      "Complete hands-free experience with our cutting-edge smart glasses",
    features: [
      "All Lumina App features",
      "Hands-free operation",
      "Built-in cameras",
      "Bone conduction audio",
      "All-day battery life",
      "Premium carrying case",
      "1-year warranty",
    ],
  },
];

export function Pricing() {
  const { openModal } = useWaitlistModal();

  return (
    <section id="pricing" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-medium mb-6">
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-xl text-dark/60 max-w-2xl mx-auto">
            Choose the solution that best fits your needs
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-light-100/50 backdrop-blur rounded-2xl overflow-hidden p-8 border border-dark/10"
            >
              <h3 className="text-2xl font-display font-medium mb-2">
                {plan.name}
              </h3>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-display font-medium">$</span>
                <span className="text-5xl font-display font-medium">
                  {plan.price}
                </span>
              </div>
              <p className="text-dark/60 mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-dark/80"
                  >
                    <svg
                      className="w-5 h-5 text-primary mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                variant="default"
                onClick={openModal}
                className="w-full"
              >
                Pre-order Now
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
