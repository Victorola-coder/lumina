import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/button";

const benefits = [
  {
    title: "AI-Powered Vision",
    description:
      "Advanced computer vision and machine learning algorithms provide real-time assistance.",
    icon: "🤖",
  },
  {
    title: "Natural Interaction",
    description:
      "Intuitive voice commands and haptic feedback for seamless control.",
    icon: "👋",
  },
  {
    title: "Personalized Experience",
    description:
      "Adaptive learning system that understands and anticipates your needs.",
    icon: "✨",
  },
  {
    title: "Privacy First",
    description:
      "Secure, on-device processing ensures your data stays private.",
    icon: "🔒",
  },
];

export function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-50 to-dark pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-5xl font-display font-medium leading-tight">
                Redefining Visual{" "}
                <span className="text-gradient">Assistance</span>
              </h2>
              <p className="text-xl text-light/60 leading-relaxed">
                Lumina combines cutting-edge AI technology with elegant design
                to create a revolutionary visual assistance device that adapts
                to your needs.
              </p>
              <div className="space-y-4 text-light/60">
                <p>
                  Our mission is to empower visually impaired individuals with
                  greater independence and confidence in their daily lives.
                </p>
                <p>
                  Through advanced computer vision and natural language
                  processing, Lumina provides real-time assistance that feels
                  natural and intuitive.
                </p>
              </div>
              <Button size="lg" variant="outline" className="mt-8">
                Learn More About Our Mission
              </Button>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square w-full">
                <Image
                  src="/about-product.png"
                  alt="Lumina Smart Glasses Detail"
                  fill
                  className="object-cover rounded-2xl glow"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent rounded-2xl" />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 -inset-4 bg-primary/5 rounded-2xl blur-2xl" />
              <div className="absolute top-1/2 -right-8 w-16 h-16 bg-primary/30 rounded-full blur-2xl" />
              <div className="absolute bottom-1/4 -left-8 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            </motion.div>
          </div>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-xl bg-dark-50/50 backdrop-blur-sm border border-light/5 hover:border-primary/20 transition-colors"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-display font-medium mb-2">
                  {benefit.title}
                </h3>
                <p className="text-light/60">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-32 text-center"
          >
            <h3 className="text-2xl md:text-4xl font-display font-medium mb-16">
              Trusted by Thousands
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "15+", label: "Countries" },
                { value: "50K+", label: "Active Users" },
                { value: "99.9%", label: "Uptime" },
                { value: "24/7", label: "Support" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-dark-50/50 backdrop-blur-sm border border-light/5"
                >
                  <div className="text-3xl font-display font-medium text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-light/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
