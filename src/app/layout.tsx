import type { Metadata, Viewport } from "next";
import { Rubik } from "next/font/google";
import { Footer } from "@/components/layout";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bookmark landing page",
  description:
    "A clean bookmark manager landing page — Frontend Mentor challenge built with Next.js, TypeScript, and Tailwind CSS.",
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
