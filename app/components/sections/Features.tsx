import { motion } from "framer-motion";
import Image from "next/image";

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
    title: "Sustainable Design",
    description:
      "Crafted from recycled PET plastic with a focus on durability and comfort. Our eco-friendly approach ensures both user satisfaction and environmental responsibility.",
    image: "/images/feature-5.png",
  },
  {
    title: "Privacy-First Technology",
    description:
      "All processing happens on-device with state-of-the-art encryption. Your data remains private and secure, giving you complete control over your information.",
    image: "/images/feature-6.png",
  },
];

export function Features() {
  return (
    <section id="features" className="py-32 relative overflow-hidden">
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
            Meet Your AI <span className="text-gradient">Allies</span>
          </h2>
          <p className="text-xl text-light/60 max-w-2xl mx-auto">
            Experience a new level of independence with our intelligent
            companions and innovative features.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-dark-100/50 backdrop-blur rounded-2xl overflow-hidden group"
            >
              {/* Feature Content */}
              <div className="p-8">
                <h3 className="text-2xl font-display font-medium mb-4">
                  {feature.title}
                </h3>
                <p className="text-light/60">{feature.description}</p>
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
              <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
