import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/button";

const features = [
  {
    title: "Object Recognition",
    description:
      "Real-time scanning and identification of objects, people, and obstacles.",
    icon: "🔍",
    image: "/features/object-recognition.png",
  },
  {
    title: "Text-to-Speech",
    description: "Instant reading of printed text, from books to street signs.",
    icon: "📖",
    image: "/features/text-to-speech.png",
  },
  {
    title: "Voice Navigation",
    description:
      "Clear, precise voice guidance for indoor and outdoor navigation.",
    icon: "🗺️",
    image: "/features/navigation.png",
  },
];

export function Features() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-display font-medium mb-6">
              Experience the Future of{" "}
              <span className="text-gradient">Visual Assistance</span>
            </h2>
            <p className="text-xl text-light/60 max-w-2xl mx-auto">
              Cutting-edge AI technology that adapts to your needs and enhances
              your daily life.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="space-y-32">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-12`}
              >
                {/* Feature Content */}
                <div className="flex-1 space-y-6">
                  <div className="inline-block text-4xl mb-4 bg-primary/10 p-4 rounded-2xl">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-medium">
                    {feature.title}
                  </h3>
                  <p className="text-light/60 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                  <Button variant="outline" size="lg" className="mt-8">
                    Learn More
                  </Button>
                </div>

                {/* Feature Image */}
                <div className="flex-1 relative">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover rounded-xl glow"
                    />
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -z-10 -inset-4 bg-primary/5 rounded-xl blur-xl" />
                  <div className="absolute -z-10 inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-xl" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mt-32"
          >
            <h3 className="text-2xl md:text-4xl font-display font-medium mb-8">
              Ready to Experience Lumina?
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg">Join Waitlist</Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
