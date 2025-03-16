import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "About", href: "#about" },
    { name: "FAQ", href: "#faq" },
    { name: "Pricing", href: "#pricing" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Press", href: "/press" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
  social: [
    { name: "Twitter", href: "https://twitter.com" },
    { name: "LinkedIn", href: "https://linkedin.com" },
    { name: "Instagram", href: "https://instagram.com" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-dark border-t border-light/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Image
                src="/logo.svg"
                alt="Lumina Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="font-display text-xl font-medium">Lumina</span>
            </Link>
            <p className="text-light/60 max-w-sm">
              Empowering visually impaired individuals through innovative AI
              technology. Join us in creating a more accessible world.
            </p>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="font-display text-sm uppercase tracking-wider mb-6">
              Product
            </h3>
            <ul className="space-y-4">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-light/60 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm uppercase tracking-wider mb-6">
              Company
            </h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-light/60 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm uppercase tracking-wider mb-6">
              Legal
            </h3>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-light/60 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-light/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-light/60 text-sm">
              © {new Date().getFullYear()} Lumina. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              {footerLinks.social.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light/60 hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
