import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Mainak Banduri (VOYAGER441) | Full Stack & Embedded Engineer",
  description: "I ship AI chatbots, drone flight systems, BI dashboards & embedded firmware. Full stack developer and embedded firmware engineer.",
  keywords: [
    "Mainak Banduri",
    "VOYAGER441",
    "Full Stack Developer",
    "Embedded Systems",
    "Software Engineer",
    "Next.js",
    "Node.js",
    "C++",
    "Drone Flight Systems"
  ],
  authors: [{ name: "Mainak Banduri" }],
  creator: "Mainak Banduri",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/VOYAGER441",
    title: "Mainak Banduri | Full Stack & Embedded Engineer",
    description: "I ship AI chatbots, drone flight systems, BI dashboards & embedded firmware. Explore my interactive terminal portfolio.",
    siteName: "Mainak Banduri Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mainak Banduri | Full Stack & Embedded Engineer",
    description: "I ship AI chatbots, drone flight systems, BI dashboards & embedded firmware. Explore my interactive terminal portfolio.",
    creator: "@voyager_mainak",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} font-mono bg-[#0d1117] text-[#e6edf3]`}>
        <noscript>
          <div style={{ padding: "2rem", fontFamily: "monospace", color: "#e6edf3" }}>
            <h1>Developer Portfolio</h1>
            <p>Please enable JavaScript to view the interactive terminal experience.</p>
            <p>Email: contact@example.com</p>
          </div>
        </noscript>
        {children}
      </body>
    </html>
  );
}