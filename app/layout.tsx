import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";
import MobileStickyBar from "@/components/common/MobileStickyBar";
import { ModalProvider } from "@/components/providers/ModalContext";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AS Education | Official Study Abroad & Student Visa Consultancy in Bangladesh",
  description: "Official British Council certified education consultancy in Dhanmondi, Dhaka. Fast-track admissions & student visas for UK, Australia, Canada, USA & Europe with 0 file opening fees.",
  keywords: [
    "AS Education",
    "Study Abroad Agency Dhaka",
    "British Council Certified Counselor Dhanmondi",
    "Study in UK from Bangladesh",
    "Australia Student Visa Dhaka",
    "Canada Study Visa Bangladesh",
    "USA F-1 Visa Consultancy Dhaka"
  ],
  authors: [{ name: "AS Education Global" }],
  creator: "AS Education Global",
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
  openGraph: {
    title: "AS Education | Fly With Your Dream",
    description: "British Council certified global education consultancy in Dhaka, Bangladesh. Zero file opening charges & fast-track visa processing.",
    url: "https://aseducationbd.com",
    siteName: "AS Education",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="antialiased bg-white text-slate-900 font-sans min-h-screen flex flex-col selection:bg-brand-blue selection:text-white pb-24 md:pb-0">
        <ModalProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <FloatingWhatsApp />
          <MobileStickyBar />
        </ModalProvider>
      </body>
    </html>
  );
}
