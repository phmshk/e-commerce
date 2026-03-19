import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/src/widgets/header";
import { Footer } from "@/src/widgets/footer";

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-Commerce App",
  description: "Portfolio project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interFont.variable} ${interFont.className} min-h-screen antialiased pb-16 md:pb-0`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
