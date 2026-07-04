import type { Metadata } from "next";
import { Geist, Inter, Montserrat } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/nav";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CineStream",
  description: "A cinematic movie browsing and reviews experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${inter.variable} ${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <div className="min-h-screen bg-background text-foreground">
          <TopNav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
