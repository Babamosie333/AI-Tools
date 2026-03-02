import type { Metadata } from "next";

export const meta: Metadata = {
  title: {
    default: "AI Tools Hub | 100+ AI tools for developers & creators",
    template: "%s | AI Tools Hub"
  },
  description: "Curated 100+ AI tools for developers & creators. Instant links, pricing & use cases. Created by Babamosie333",
  
  openGraph: {
    title: "AI Tools Hub | 100+ AI tools for developers & creators",
    description: "Curated 100+ AI tools for developers & creators. Instant links, pricing & use cases. Created by Babamosie333",
    url: "https://ai-tools-ecru-theta.vercel.app/", // ← Replace with your domain
    siteName: "AI Tools Hub",
    images: [
      {
        url: "/opengraph-image.png", // ← Add this 1200x630 PNG to public/
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
    title: "AI Tools Hub | 100+ AI tools for developers & creators",
    description: "Curated 100+ AI tools for developers & use cases. Created by Babamosie333",
    images: ["/opengraph-image.png"],
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
};
