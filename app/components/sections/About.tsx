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

const stats = [
  {
    value: "250+",
    label: "Beta Users",
    description: "Active Participants",
  },
  {
    value: "95%",
    label: "Independence",
    description: "User Reported",
  },
  {
    value: "80%",
    label: "Recycled",
    description: "Materials Used",
  },
];

export function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-medium mb-6">
              Empowering Independence Through{" "}
              <span className="text-gradient">Innovation</span>
            </h2>
            <div className="space-y-6 text-lg text-light/60">
              <p>
                At LensX, we believe that technology should enhance human
                capabilities while preserving dignity and independence. Our
                mission is to revolutionize the way visually impaired
                individuals interact with the world through AI-powered
                assistance.
              </p>
              <p>
                Through our innovative AI Allies - Vera, Aria, and Nova - we
                provide comprehensive support that goes beyond traditional
                assistive devices. Our approach combines visual assistance with
                emotional support and educational tools, creating a holistic
                solution for our users.
              </p>
              <p>
                We're committed to sustainability and accessibility. By using
                recycled materials and maintaining affordable pricing, we ensure
                our technology reaches those who need it most while minimizing
                environmental impact.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-3xl font-display font-medium mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-light/60">
                    <div className="font-medium text-light">{stat.label}</div>
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative aspect-square">
              <Image
                src="/images/about.png"
                alt="LensX Impact"
                fill
                className="object-cover rounded-2xl"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 -inset-4 bg-primary/5 rounded-2xl blur-xl" />
            <div className="absolute -z-10 inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
