"use client";

import Link from "next/link";
import Image from "next/image";
import { useWaitlistModal } from "../../context/waitlist-context";

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "About", href: "#about" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Mission", href: "#about" },
    { name: "Team", href: "#about" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Accessibility", href: "/accessibility" },
  ],
  social: [
    { name: "Twitter", href: "https://twitter.com", icon: "twitter" },
    { name: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
    { name: "Instagram", href: "https://instagram.com", icon: "instagram" },
  ],
};

export function Footer() {
  const { openModal } = useWaitlistModal();

  return (
    <footer className="bg-white border-t border-light-200 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="relative w-8 h-8">
                <Image
                  src="/images/logo.svg"
                  alt="LensX Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-display text-xl font-medium text-dark-800">
                LensX
              </span>
            </Link>
            <p className="text-dark-600 max-w-sm mb-6">
              Empowering visually impaired individuals through innovative AI
              technology and cutting-edge design.
            </p>
            <button
              onClick={openModal}
              className="text-primary-500 hover:text-primary-600 transition-colors font-medium"
            >
              Join Waitlist →
            </button>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-sm uppercase tracking-wider mb-6 text-dark-700">
              Product
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-dark-500 hover:text-primary-500 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display text-sm uppercase tracking-wider mb-6 text-dark-700">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-dark-500 hover:text-primary-500 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display text-sm uppercase tracking-wider mb-6 text-dark-700">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-dark-500 hover:text-primary-500 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display text-sm uppercase tracking-wider mb-6 text-dark-700">
              Connect
            </h3>
            <ul className="space-y-3">
              {footerLinks.social.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark-500 hover:text-primary-500 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="mailto:info@lensx.com"
                  className="text-dark-500 hover:text-primary-500 transition-colors text-sm"
                >
                  info@lensx.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-light-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-dark-400 text-sm">
              © {new Date().getFullYear()} LensX. All rights reserved.
            </p>
            <p className="text-dark-400 text-sm">
              Designed with ❤️ by VickyJay
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
