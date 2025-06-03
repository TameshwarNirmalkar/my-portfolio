import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import "../styles/rotating-card.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import HeaderComponent from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tameshwar Nirmalkar",
  description:
    "Frontend developer, tameshwar nirmalkar, React, Nextjs, Redux, Angular",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistMono.className}>
      {/* ${geistSans.variable} ${geistMono.variable} */}
      <body className={`antialiased bg-gray-900`}>
        <HeaderComponent />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
