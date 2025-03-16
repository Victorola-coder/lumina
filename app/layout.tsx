import "./global.css";
import { Inter, Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import type { Metadata, Viewport } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const clashDisplay = localFont({
  src: "./fonts/clash/ClashDisplay-Medium.otf",
  variable: "--font-clash-display",
});

export const viewport: Viewport = {
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://nextapptemplate.xyz"),
  icons: {
    icon: "/icon.png",
  },
  title: "Lumina - AI-Powered Smart Glasses",
  description:
    "Empowering visually impaired individuals through innovative AI technology.",
  applicationName: "Lumina",
  authors: [{ name: "Lumina Team" }],
  keywords: [
    "AI",
    "Smart Glasses",
    "Visual Assistance",
    "Accessibility",
    "Technology",
  ],
  creator: "Lumina",
  publisher: "Lumina",
  generator: "Next.js",
  referrer: "origin",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "https://lumina.ai",
    title: "Lumina",
    siteName: "Lumina",
    locale: "en_US",
    images: [
      {
        url: "https://lumina.ai/opengraph.png",
        width: 1200,
        height: 630,
        alt: "Lumina OG Image",
      },
    ],
  },
  twitter: {
    site: "lumina.ai",
    creator: "@lumnina_ai",
    title:
      "Lumina - Empowering visually impaired individuals through innovative AI technology.",
    description:
      "Empowering visually impaired individuals through innovative AI technology.",
    card: "summary_large_image",
    images: ["https://lumina.ai/opengraph.png"],
  },
  appleWebApp: {
    capable: true,
    title: "Lumina",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  abstract:
    "Empowering visually impaired individuals through innovative AI technology.",
  category: "Social",
  classification: "Social",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${clashDisplay.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0A0A0A" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen bg-dark text-light antialiased">
        <main className="relative flex min-h-screen flex-col">{children}</main>
      </body>
    </html>
  );
}
