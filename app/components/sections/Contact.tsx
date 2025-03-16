import { motion } from "framer-motion";
import { Button } from "../ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
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
              Get in <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-xl text-light/60 max-w-2xl mx-auto">
              Have questions about LensX? We're here to help you on your journey
              to enhanced vision.
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-dark-100/50 backdrop-blur rounded-2xl p-8 border border-light/5"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-light/80 text-sm">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-dark-100/50 border border-light/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-light/80 text-sm"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-dark-100/50 border border-light/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="block text-light/80 text-sm"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-dark-100/50 border border-light/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
                  placeholder="How can we help?"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-light/80 text-sm"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-100/50 border border-light/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors resize-none"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>
              <div className="flex justify-center">
                <Button size="lg" variant="default" className="px-8">
                  Send Message
                </Button>
              </div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <div className="p-6">
              <div className="text-2xl mb-4">📍</div>
              <h3 className="text-lg font-medium mb-2">Address</h3>
              <p className="text-light/60">
                123 Innovation Way
                <br />
                San Francisco, CA 94107
              </p>
            </div>
            <div className="p-6">
              <div className="text-2xl mb-4">📞</div>
              <h3 className="text-lg font-medium mb-2">Phone</h3>
              <p className="text-light/60">
                +1 (555) 123-4567
                <br />
                Mon-Fri, 9am-6pm PST
              </p>
            </div>
            <div className="p-6">
              <div className="text-2xl mb-4">✉️</div>
              <h3 className="text-lg font-medium mb-2">Email</h3>
              <p className="text-light/60">
                info@lensx.com
                <br />
                support@lensx.com
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
