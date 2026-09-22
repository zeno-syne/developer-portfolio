import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zeno — Full-Stack Web Developer & AI Integration Specialist",
  description:
    "Portofolio profesional Zeno — Full-Stack Web Developer & AI Integration Specialist. Membangun web modern, cepat, dan bertenaga AI untuk mengembangkan bisnis Anda.",
  keywords: [
    "Full-Stack Developer",
    "AI Integration",
    "Next.js",
    "React",
    "Web Developer Indonesia",
    "Landing Page",
    "Web App",
  ],
  openGraph: {
    title: "Zeno — Full-Stack Web Developer & AI Integration Specialist",
    description:
      "Membangun web modern, cepat, dan bertenaga AI untuk mengembangkan bisnis Anda.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0f1e] text-slate-200">
        {children}
      </body>
    </html>
  );
}
