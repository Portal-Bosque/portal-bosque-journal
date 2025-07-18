import { Toolbar } from "basehub/next-toolbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Footer from "./components/footer";
import "./globals.css";

// Configuración de la fuente Inter desde Google Fonts para texto general
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Configuración de la fuente PP Editorial New para headings
const ppEditorialNew = localFont({
  src: [
    {
      path: "../fonts/PPEditorialNew-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/PPEditorialNew-Ultrabold (1).otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-pp-editorial",
  display: "swap",
});

export const metadata: Metadata = {
  title: `Portal Bosque Lab`,
  description: `Aprendizajes educativos experimentando con naturaleza, tecnología y artes en Portal Bosque`,
  openGraph: {
    title: `Portal Bosque Lab`,
    description: `Aprendizajes educativos experimentando con naturaleza, tecnología y artes en Portal Bosque`,
    images: [
      {
        url: '/hero-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Portal Bosque Lab',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Portal Bosque Lab`,
    description: `Aprendizajes educativos experimentando con naturaleza, tecnología y artes en Portal Bosque`,
    images: ['/hero-og.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${ppEditorialNew.variable}`}>
      <body>
        <Toolbar />
        <main className="min-h-screen">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
