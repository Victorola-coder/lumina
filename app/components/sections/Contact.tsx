"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setSuccessMessage(data.message);
      setSuccess(true);

      // Reset form
      setName("");
      setEmail("");
      setMessage("");

      // Reset success message after delay
      setTimeout(() => {
        setSuccess(false);
        setSuccessMessage(null);
      }, 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message");
      console.error("Contact submission error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
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
              Get in <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-xl text-dark-600 max-w-2xl mx-auto">
              Have questions about Lumina? We're here to help you on your
              journey to enhanced vision.
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white shadow-lg rounded-2xl p-8 border border-light-200"
          >
            {success ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <div className="text-5xl mb-4 text-primary-500">✓</div>
                <h3 className="text-2xl font-display font-medium mb-3 text-dark-800">
                  Message Sent!
                </h3>
                <p className="text-dark-600 mb-6">
                  {successMessage ||
                    "Thank you for reaching out. We'll get back to you as soon as possible."}
                </p>
                <Button
                  onClick={() => setSuccess(false)}
                  variant="outline"
                  className="bg-white hover:bg-primary-50 border-primary-200 hover:border-primary-300 text-primary-500"
                >
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <>
                {error && (
                  <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="block text-dark-700 text-sm"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 bg-light-50 border border-light-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-colors"
                        placeholder="Your name"
                        required
                        disabled={isLoading}
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="block text-dark-700 text-sm"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 bg-light-50 border border-light-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-colors"
                        placeholder="Your email"
                        required
                        disabled={isLoading}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block text-dark-700 text-sm"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 bg-light-50 border border-light-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-colors resize-none"
                      placeholder="Tell us more about your inquiry..."
                      required
                      disabled={isLoading}
                    ></textarea>
                  </div>
                  <div className="flex justify-center">
                    <Button
                      type="submit"
                      size="lg"
                      variant="default"
                      className="px-8 bg-primary-500 hover:bg-primary-600 text-white"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <span className="flex items-center justify-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </div>
                </form>
              </>
            )}
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
              <h3 className="text-lg font-medium mb-2 text-dark-800">
                Address
              </h3>
              <p className="text-dark-600">
                123 Innovation Way
                <br />
                San Francisco, CA 94107
              </p>
            </div>
            <div className="p-6">
              <div className="text-2xl mb-4">📞</div>
              <h3 className="text-lg font-medium mb-2 text-dark-800">Phone</h3>
              <p className="text-dark-600">
                +1 (555) 123-4567
                <br />
                Mon-Fri, 9am-6pm PST
              </p>
            </div>
            <div className="p-6">
              <div className="text-2xl mb-4">✉️</div>
              <h3 className="text-lg font-medium mb-2 text-dark-800">Email</h3>
              <p className="text-dark-600">
                info@lumina.ai
                <br />
                support@lumina.ai
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
