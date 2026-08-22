import { Footer, Header } from "@/components/layout";
import type { Metadata, Viewport } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL =
  "https://bookmark-landing-page.abdelrhman-ahmed8881.workers.dev";

const name = "Bookmark";
const title = `${name} | A simple bookmark manager`;
const description =
  "A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly.";

const shareImage = {
  url: "/opengraph-image.jpg",
  width: 1200,
  height: 630,
  alt: "Bookmark, a browser extension that organizes your favourite websites.",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: name,
    locale: "en_US",
    type: "website",
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [shareImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rubik.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
