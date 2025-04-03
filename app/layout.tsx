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
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
  title: "LensX - AI-Powered Smart Glasses",
  description:
    "Empowering visually impaired individuals through innovative AI technology.",
  applicationName: "LensX",
  authors: [{ name: "LensX Team" }],
  keywords: [
    "AI glasses",
    "assistive technology",
    "visual impairment",
    "accessibility",
    "artificial intelligence",
    "smart glasses",
  ],
  creator: "LensX",
  publisher: "LensX",
  generator: "Next.js",
  referrer: "origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    url: "https://lensx.com",
    title: "LensX",
    siteName: "LensX",
    description:
      "Empowering visually impaired individuals through innovative AI technology.",
    images: [
      {
        url: "https://lensx.com/opengraph.png",
        width: 1200,
        height: 630,
        alt: "LensX OG Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "lensx.com",
    creator: "@LensXAI",
    description:
      "LensX - Empowering visually impaired individuals through innovative AI technology.",
    title:
      "LensX - AI-Powered Smart Glasses for Enhanced Vision and Independence",
    images: ["https://lensx.com/opengraph.png"],
  },
  appleWebApp: {
    capable: true,
    title: "LensX",
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
      <body className="min-h-screen bg-light text-dark antialiased">
        <main className="relative flex min-h-screen flex-col">{children}</main>
      </body>
    </html>
  );
}
