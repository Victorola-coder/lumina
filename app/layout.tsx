import "./global.css";
import { Toaster } from "sonner";
import { AOS } from "./components/global";
import { Raleway } from "next/font/google";
import type { Metadata, Viewport } from "next";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://nextapptemplate.xyz"),
  icons: {
    icon: "/icon.png",
  },
  title: "Lumina",
  description:
    "Empowering visually impaired individuals through innovative AI technology.",
  applicationName: "Lumina",
  authors: [{ name: "Lumina", url: "https://lumina.ai" }],
  keywords: ["  Lumina", "AI", "technology", "visually impaired"],
  creator: "VickyJay",
  publisher: "VickyJay",
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
    telephone: false,
  },
  abstract:
    "Empowering visually impaired individuals through innovative AI technology.",
  category: "Social",
  classification: "Social",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.className} antialiased`}>
        <Toaster richColors />
        <AOS />
        {children}
      </body>
    </html>
  );
}
