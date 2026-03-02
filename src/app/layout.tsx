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

// Metadata export (STAYS HERE)
export const metadata: Metadata = {
  title: {
    default: "AI Tools Hub | 100+ AI tools for developers & creators",
    template: "%s | AI Tools Hub"
  },
  description: "Curated 100+ AI tools for developers & creators. Instant links, pricing & use cases. Created by Babamosie333",
  
  openGraph: {
    title: "AI Tools Hub | 100+ AI tools for developers & creators",
    description: "Curated 100+ AI tools for developers & creators. Instant links, pricing & use cases. Created by Babamosie333",
    url: "https://your-app.vercel.app",
    siteName: "AI Tools Hub",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "AI Tools Hub"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image.png"],
  },
};

// DEFAULT EXPORT: Layout Component (REQUIRED)
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
