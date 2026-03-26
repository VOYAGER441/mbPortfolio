import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Your Name | Backend Engineer",
  description: "Backend-first full stack engineer. Explore my work via terminal.",
  openGraph: {
    title: "Your Name | Developer Portfolio",
    description: "An interactive terminal portfolio.",
    type: "website",
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