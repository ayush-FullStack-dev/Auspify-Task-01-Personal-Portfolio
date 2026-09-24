import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/style/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { AppName } from "@/constants/constants";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),

  title: {
    default: "Ayush Kumar — Full-Stack Developer & Motion Designer",
    template: "%s | Ayush Kumar",
  },

  description:
    "Ayush Kumar is a Full-Stack Developer and Motion Designer building modern digital experiences, scalable web applications, and polished interactive interfaces.",

  applicationName: AppName,

  authors: [
    {
      name: "Ayush Kumar",
      url: process.env.NEXT_PUBLIC_APP_URL!,
    },
  ],

  creator: "Ayush Kumar",
  publisher: "Ayush Kumar",

  keywords: [
    "Ayush Kumar",
    "Full-Stack Developer",
    "Full Stack Developer",
    "Web Developer",
    "Software Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "Motion Designer",
    "Motion Design",
    "Frontend Developer",
    "Backend Developer",
    "Web Development",
    "Portfolio",
  ],

  category: "technology",

  alternates: {
    canonical: "/",
  },

  verification: {
    google: "5fEDdZ0mAA-gdG_mmBnVWRO-YN-hxjsUFc5TH6B86B8",
  },

  icons: {
    icon: "/brand/favicon/favicon.ico",
    shortcut: "/brand/favicon/favicon.ico",
    apple: "/brand/favicon/apple-touch-icon.webp",
  },

  openGraph: {
    type: "website",
    siteName: AppName,
    locale: "en_US",

    title: "Ayush Kumar — Full-Stack Developer & Motion Designer",

    description:
      "Portfolio of Ayush Kumar — a Full-Stack Developer and Motion Designer creating modern web experiences, scalable applications, and refined digital products.",

    url: process.env.NEXT_PUBLIC_APP_URL!,

    images: [
      {
        url: "/brand/social/og.webp",
        width: 1200,
        height: 630,
        alt: "Ayush Kumar — Full-Stack Developer & Motion Designer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Ayush Kumar — Full-Stack Developer & Motion Designer",

    description:
      "Full-Stack Developer & Motion Designer building modern web experiences, scalable applications, and polished digital products.",

    images: ["/brand/social/og.webp"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
