"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Accordion, Button } from "@/app/components/ui";
import { AIO, Glow } from "@/app/components/global";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg" // You'll need to add this image
            alt="Background"
            fill
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f0f0f]" />
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Empowering Freedom Through Innovation
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Lumina: AI-Powered Smart Glasses for Visually Impaired Individuals
          </motion.p>

          <Button variant="primary" size="lg" className="animate-float">
            Join the Waitlist
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-dark">
        <div className="container mx-auto px-4">
          <Glow className="p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              What Is Lumina?
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-300 mb-6">
                  Lumina is an AI-powered smart glasses solution designed to
                  empower individuals with visual impairments. By combining
                  cutting-edge technology and user-centric design, Lumina
                  enables users to navigate the world independently and
                  experience life without limitations.
                </p>
                <p className="text-gray-300">
                  More than just an assistive tool, Lumina is also a companion—a
                  friend that understands you, interacts with you, and guides
                  you.
                </p>
              </div>
              <div className="relative h-[400px]">
                <Image
                  src="/about-image.jpg" // add thi image later on
                  alt="Lumina Smart Glasses"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
          </Glow>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-dark/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            How Lumina Works
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <AIO
                key={index}
                show={true}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Glow className="p-6 text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </Glow>
              </AIO>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Benefits of Lumina
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <AIO
                key={index}
                show={true}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Glow className="p-6">
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </Glow>
              </AIO>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-dark">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/demo-image.jpg" // Add this image
                alt="Lumina Demo"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Experience the Future
              </h2>
              <div className="space-y-6">
                <p className="text-gray-300">
                  Lumina's powerful AI technology enables seamless interaction
                  with the world through advanced computer vision, voice
                  recognition, and intuitive feedback systems.
                </p>
                <p className="text-gray-300">
                  Whether you're navigating busy streets, attending classes, or
                  connecting with friends, Lumina provides the support and
                  confidence you need.
                </p>
                <Button variant="primary" size="lg">
                  Watch Demo Video
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            What Our Users Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AIO
                key={index}
                show={true}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Glow className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-gray-300 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300">{testimonial.quote}</p>
                </Glow>
              </AIO>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-dark/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Accordion
                key={index}
                title={faq.question}
                content={faq.answer}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Embrace a Life of Freedom?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the waitlist to be the first to experience Lumina, a
            groundbreaking assistive technology for visually impaired
            individuals.
          </p>
          <Button variant="primary" size="lg">
            Sign Up Now
          </Button>
        </div>
      </section>
    </main>
  );
}

const benefits = [
  {
    title: "Empowering Independence",
    description:
      "Navigate confidently, access information, and engage in daily tasks without relying on others.",
  },
  {
    title: "Revolutionizing Education",
    description:
      "In the classroom, Lumina ensures students with vision impairments have the tools they need to succeed.",
  },
  {
    title: "Fostering Social Connectivity",
    description:
      "Connect with your community through facial recognition and advanced navigation aids, building stronger relationships.",
  },
  {
    title: "Breaking Down Barriers",
    description:
      "Complete everyday tasks confidently, from shopping to traveling, with enhanced autonomy and freedom.",
  },
  {
    title: "AI Companionship",
    description:
      "Engage with Lumina through voice chat for guidance, reminders, or friendly conversation - your digital companion.",
  },
  {
    title: "Call an Ally",
    description:
      "Connect instantly with trusted family or friends when you need additional support or guidance.",
  },
];

const features = [
  {
    title: "Object Recognition",
    description:
      "Real-time scanning and identification of objects, people, and obstacles.",
    icon: "🔍",
  },
  {
    title: "Text-to-Speech",
    description: "Instant reading of printed text, from books to street signs.",
    icon: "📖",
  },
  {
    title: "Voice Navigation",
    description:
      "Clear, precise voice guidance for indoor and outdoor navigation.",
    icon: "🗺️",
  },
  {
    title: "Social Recognition",
    description:
      "Advanced facial recognition to identify friends and acquaintances.",
    icon: "👥",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Student",
    quote:
      "Lumina has transformed my university experience. I can now participate fully in classes and navigate campus independently.",
    avatar: "/testimonials/sarah.jpg", // Add this image
  },
  {
    name: "Michael Chen",
    role: "Software Developer",
    quote:
      "As a developer with visual impairment, Lumina helps me read code and collaborate with my team effectively.",
    avatar: "/testimonials/michael.jpg", // Add this image
  },
  {
    name: "Emily Rodriguez",
    role: "Teacher",
    quote:
      "The 'Call an Ally' feature gives me peace of mind, knowing help is just a button press away.",
    avatar: "/testimonials/emily.jpg", // Add this image
  },
];

const faqs = [
  {
    question: "How does Lumina work?",
    answer:
      "Lumina uses advanced AI and computer vision to analyze your surroundings and provide audio feedback through bone conduction technology. It can recognize objects, read text, and help with navigation.",
  },
  {
    question: "Is Lumina water-resistant?",
    answer:
      "Yes, Lumina is designed to be weather-resistant and can handle light rain and splashes. However, it's not recommended for swimming or submersion.",
  },
  {
    question: "What's the battery life?",
    answer:
      "Lumina typically lasts up to 8 hours on a single charge with normal use. The included charging case provides an additional 16 hours of battery life.",
  },
  // Add more FAQs...
];
