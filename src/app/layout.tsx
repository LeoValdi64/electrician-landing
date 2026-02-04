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
  title: "PowerFlow Electric | Licensed Electrician Services in Seattle, WA",
  description:
    "Professional electrician services in Seattle, WA. 24/7 emergency service, residential & commercial electrical, EV charger installation. Licensed, bonded & insured. Call (206) 555-0187.",
  keywords:
    "electrician seattle, electrical services, emergency electrician, EV charger installation, residential electrician, commercial electrician",
  openGraph: {
    title: "PowerFlow Electric | Licensed Electrician Services in Seattle, WA",
    description:
      "Professional electrician services in Seattle, WA. 24/7 emergency service. Licensed, bonded & insured.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
