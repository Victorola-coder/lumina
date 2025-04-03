import { motion } from "framer-motion";
import { Accordion } from "../ui/accordion";

const faqItems = [
  {
    title: "What are LensX AI Allies?",
    content:
      "LensX introduces personalized AI Allies that provide real-time assistance through natural voice interactions. Our ecosystem includes Vera (Vision Ally) for real-time guidance and vision support, Aria (Emotional Ally) for emotional support and mental well-being, and Nova (Learning Ally) for educational support. Each AI Ally is designed to become an integral part of users' everyday lives.",
  },
  {
    title: "How much does LensX cost?",
    content:
      "The LensX app is available for $25, providing essential AI assistance features through your smartphone. Our advanced LensX Smart Glasses are priced at $1,000, offering a complete hands-free experience with built-in cameras, bone conduction audio, and all-day battery life. Both options include regular updates and 24/7 support.",
  },
  {
    title: "How does the Trusted Human Allies feature work?",
    content:
      "LensX enables seamless communication with trusted individuals like family, friends, or caregivers. Users can quickly call or message their trusted allies, share their real-time location, and provide audio context to help allies provide effective assistance when needed.",
  },
  {
    title: "What makes LensX different from other assistive devices?",
    content:
      "LensX goes beyond traditional assistive devices by combining cutting-edge AI with intuitive human interaction. Our unique approach includes personalized AI companions (Vera, Aria, and Nova), seamless connection with trusted human allies, and innovative design. Additionally, our focus on emotional support and learning assistance creates a comprehensive support system.",
  },
  {
    title: "What kind of support do you offer?",
    content:
      "We provide comprehensive support through multiple channels. This includes 24/7 customer service, regular software updates, and access to our companion app where users or caregivers can customize AI Ally behavior, manage trusted contacts, and access advanced settings. We also offer training and onboarding support.",
  },
  {
    title: "How does the voice control system work?",
    content:
      "LensX ensures complete accessibility with voice-controlled operations. Users can interact with their AI Allies, make calls, or access features without needing to use their hands. The system uses advanced natural language processing to understand context and intent, making interactions feel natural and intuitive.",
  },
  {
    title: "Is my data secure with LensX?",
    content:
      "Absolutely. Privacy and security are fundamental to LensX. All processing happens on-device with state-of-the-art encryption, ensuring your data remains private and secure. You have complete control over your information and can manage privacy settings through our app.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-50/80 via-white to-white opacity-60" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-medium mb-6 text-dark-800">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-xl text-dark-600 max-w-2xl mx-auto">
              Learn more about LensX and how our AI-powered glasses can enhance
              your daily life.
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <Accordion items={faqItems} defaultOpen={0} />
          </motion.div>

          {/* Support Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-16"
          >
            <p className="text-dark-600">
              Still have questions?{" "}
              <a
                href="#contact"
                className="text-primary-500 hover:text-primary-600 transition-colors"
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
