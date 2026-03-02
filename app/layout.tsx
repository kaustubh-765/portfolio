import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kaustubh Mishra | Associate Software Engineer",
  description: "Associate Software Engineer specializing in AI orchestration, cloud infrastructure, and microservices. Reducing development cycles by 10x using Claude Code, Kilo Code, and strategic automation.",
  keywords: ["Software Engineer", "AI Orchestration", "Cloud Infrastructure", "Kubernetes", "Python", "Django", "React", "Portfolio"],
  authors: [{ name: "Kaustubh Mishra" }],
  openGraph: {
    title: "Kaustubh Mishra | Associate Software Engineer",
    description: "Associate Software Engineer at E2E Networks. Expert in AI orchestration, cloud infrastructure, and microservices architecture.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}