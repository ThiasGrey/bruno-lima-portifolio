import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { Header } from "./components/header";
import { ContactForm } from "./components/contact-form";
import { Footer } from "./components/footer";
import { BackToTop } from "./components/back-to-top";
import { Toaster } from "./components/toaster";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: {
    default: "Bruno M. | DEV",
    template: "%s | BM Dev",
  },
  icons: [
    {
      url: "/favicon.svg",
    },
  ],
  description: "Bruno M. | Desenvolvedor Front-end e UI Designer",
  openGraph: {
    title: "Bruno M. | DEV",
    description: 'The Bruno Portifólio for the Web',
    url: 'https://brunomathias.dev',
    siteName: 'Bruno M. | DEV',
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: 'pt_BR',
    type: 'website'
  },
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plexMono.variable}`}>
      <body>
        <Toaster />
        <BackToTop />
        <Header></Header>
        {children}
        <ContactForm />
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
