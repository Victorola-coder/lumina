import { motion } from "framer-motion";
import { Accordion } from "../ui/accordion";

const faqItems = [
  {
    title: "How does Lumina work?",
    content:
      "Lumina uses advanced AI and computer vision to analyze your surroundings and provide audio feedback through bone conduction technology. It can recognize objects, read text, and help with navigation in real-time.",
  },
  {
    title: "What's the battery life?",
    content:
      "Lumina typically lasts up to 8 hours on a single charge with normal use. The included charging case provides an additional 16 hours of battery life, ensuring you stay connected throughout your day.",
  },
  {
    title: "Is Lumina water-resistant?",
    content:
      "Yes, Lumina is designed to be weather-resistant with an IPX5 rating. It can handle light rain and splashes, making it suitable for everyday use in various weather conditions. However, it's not recommended for swimming or submersion.",
  },
  {
    title: "How does the AI assistance work?",
    content:
      "Lumina's AI system processes visual information in real-time using on-device machine learning models. It can identify objects, read text, recognize faces, and provide spatial awareness through natural voice interactions.",
  },
  {
    title: "Is my privacy protected?",
    content:
      "Absolutely. Privacy is our top priority. All processing happens on-device, and personal data never leaves your device without your explicit consent. You have complete control over what information is stored and shared.",
  },
  {
    title: "What kind of support do you offer?",
    content:
      "We provide 24/7 customer support through multiple channels, including phone, email, and chat. Our team of experts is always ready to help you get the most out of your Lumina device.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-medium mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-xl text-light/60 max-w-2xl mx-auto">
              Everything you need to know about Lumina and how it can enhance
              your daily life.
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Accordion items={faqItems} />
          </motion.div>

          {/* Support Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-16"
          >
            <p className="text-light/60">
              Still have questions?{" "}
              <a
                href="#contact"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                Contact our support team
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
