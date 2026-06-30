import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import "@/styles/globals.css";

// Loading typography with swap display for performance
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap'
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: 'swap'
});

export const metadata: Metadata = {
  // Mendefinisikan URL dasar untuk resolusi aset OpenGraph
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://xarvionex.com"),
  title: "XARVIONEX Ω∞ | Arifi Razzaq - Official Ecosystem",
  description: "Official digital ecosystem and technology architecture showcase by Arifi Razzaq. Exploring Software Engineering, AI, and Future Digital Infrastructure.",
  keywords: ["Arifi Razzaq", "XARVIONEX", "XARVIONEX Ω∞", "Software Engineer", "AI", "Bot WhatsApp", "Backend Architecture"],
  authors: [{ name: "Arifi Razzaq" }],
  creator: "Arifi Razzaq",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/", 
    title: "XARVIONEX Ω∞ | Digital Architecture by Arifi Razzaq",
    description: "Official technology showcase, research center, and project hub by Arifi Razzaq.",
    siteName: "XARVIONEX Ω∞",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased min-h-screen flex flex-col selection:bg-primary/30 selection:text-white`}>
        {/* Core Navigation Injection */}
        <Navbar />
        
        {/* Main Content Area */}
        <main className="flex-grow pt-24">
          {children}
        </main>

        {/* Global Footer Injection */}
        <Footer />
      </body>
    </html>
  );
}
