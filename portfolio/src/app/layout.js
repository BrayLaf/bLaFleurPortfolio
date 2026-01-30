import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Braydon Lafleur | Full-stack Developer",
    template: "%s | Braydon Lafleur",
  },
  description: "Full-stack developer with a passion for tech.",
  keywords: [
    "Braydon Lafleur",
    "Full-stack Developer",
    "Web Developer",
    "Software Engineer",
    "JavaScript Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Azure Developer",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio",
    "C#",
    "C++",
    ".NET",
    "Express.js",
    "Supabase",
    "Git",
    "GitHub",
  ],
  authors: [{ name: "Braydon Lafleur" }],
  creator: "Braydon Lafleur",
  publisher: "Braydon Lafleur",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: "cu40yGEFIVSPC8HpnnmG573_jdN91bL0EseJ0WIR2QM",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Braydon Lafleur | Full-stack Developer",
    description: "Full-stack developer with a passion for tech.",
    siteName: "Braydon Lafleur Portfolio",
    images: [
      {
        url: "/mainImg.jpg",
        width: 1200,
        height: 630,
        alt: "Braydon Lafleur - Full-stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Braydon Lafleur | Full-stack Developer",
    description: "Full-stack developer with a passion for tech.",
    images: ["/mainImg.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
