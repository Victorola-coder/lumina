import { motion } from "framer-motion";
import { Button } from "../ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-100/50 via-dark to-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Eyebrow text */}
            <p className="text-primary font-medium tracking-wide uppercase">
              The Future of Visual Assistance
            </p>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium leading-tight">
              Empowering Freedom Through{" "}
              <span className="text-gradient">Innovation</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-light/80 max-w-2xl mx-auto">
              AI-Powered Smart Glasses for Visually Impaired Individuals
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Button size="lg" className="w-full sm:w-auto">
                Join Waitlist
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Learn More
              </Button>
            </div>
          </motion.div>

          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-16 relative"
          >
            <div className="relative w-full max-w-2xl mx-auto aspect-[16/9]">
              <Image
                src="/product-hero.png"
                alt="Lumina Smart Glasses"
                fill
                className="object-cover rounded-xl glow"
                priority
              />
            </div>

            {/* Floating Elements */}
            <div className="absolute -left-4 top-1/2 w-24 h-24 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -right-4 top-1/3 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse delay-300" />
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { value: "99%", label: "Accuracy Rate" },
              { value: "24/7", label: "Assistance" },
              { value: "50ms", label: "Response Time" },
              { value: "100K+", label: "Beta Users" },
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <p className="text-3xl font-display font-medium text-primary">
                  {stat.value}
                </p>
                <p className="text-light/60">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-light/20 flex items-start justify-center p-2">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-1 h-1 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
