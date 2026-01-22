import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/widgets/header/ui/Header";
import { Providers } from "./providers";
import { siteConfig } from "@/shared/config/site.config";
import Footer from "@/widgets/footer/ui/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <div className="flex flex-col h-dvh">
            <Header />
            <main className="flex-1 min-h-0">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
