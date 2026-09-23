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
  metadataBase: new URL("https://developer-portfolio-six-liart.vercel.app"),
  title: "Zeno — Full-Stack Web Developer & AI Integration Specialist",
  description:
    "Portofolio profesional Zeno — Full-Stack Web Developer & AI Integration Specialist. Membangun web modern, cepat, dan bertenaga AI untuk mengembangkan bisnis Anda.",
  keywords: [
    "Full-Stack Developer",
    "AI Integration",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Web Developer Indonesia",
    "Landing Page Modern",
    "Web App",
  ],
  authors: [{ name: "Zeno", url: "https://github.com/zeno-syne" }],
  creator: "Zeno",
  alternates: {
    canonical: "https://developer-portfolio-six-liart.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Zeno — Full-Stack Web Developer & AI Integration Specialist",
    description:
      "Membangun web modern, cepat, dan bertenaga AI untuk mengembangkan bisnis Anda.",
    url: "https://developer-portfolio-six-liart.vercel.app",
    siteName: "Zeno Portfolio",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zeno — Full-Stack Web Developer & AI Integration Specialist",
    description:
      "Membangun web modern, cepat, dan bertenaga AI untuk mengembangkan bisnis Anda.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://developer-portfolio-six-liart.vercel.app/#person",
      name: "Zeno",
      jobTitle: "Full-Stack Web Developer & AI Integration Specialist",
      url: "https://developer-portfolio-six-liart.vercel.app/",
      sameAs: ["https://github.com/zeno-syne"],
      knowsAbout: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "AI Integration",
        "Full-Stack Development",
        "UI/UX Design",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://developer-portfolio-six-liart.vercel.app/#website",
      url: "https://developer-portfolio-six-liart.vercel.app/",
      name: "Zeno Portfolio",
      description:
        "Portofolio profesional Zeno — Full-Stack Web Developer & AI Integration Specialist.",
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0a0f1e] text-slate-200">
        {children}
      </body>
    </html>
  );
}
