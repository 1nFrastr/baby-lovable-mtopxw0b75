import type { Metadata } from "next";

import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CompareTray from "@/components/CompareTray";

export const metadata: Metadata = {
  title: "Wing & Steel — Aviation & Military Tech",
  description:
    "A hub for aviation and military weapon enthusiasts: aircraft specs, arms guides, history, and top picks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <CompareTray />
        <Footer />
      </body>
    </html>
  );
}