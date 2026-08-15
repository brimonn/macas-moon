import type { Metadata } from "next";
import { Lora, Nunito_Sans } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { site } from "@/lib/site";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-lora",
  display: "swap",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-nunito",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Macas Moon Glamping | Domos en Monteverde",
    template: "%s | Macas Moon Glamping",
  },
  description:
    "Descubre una forma diferente de vivir Monteverde en los domos de Macas Moon Glamping, rodeados de naturaleza, tranquilidad y comodidad.",
  openGraph: {
    title: "Macas Moon Glamping | Domos en Monteverde",
    description:
      "Descubre una forma diferente de vivir Monteverde en los domos de Macas Moon Glamping, rodeados de naturaleza, tranquilidad y comodidad.",
    type: "website",
    locale: "es_CR",
    siteName: site.name,
  },
  icons: {
    icon: site.logo,
    apple: site.logo,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${lora.variable} ${nunito.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-warm-white font-sans text-main antialiased">
        <Navbar />
        <main id="contenido" className="flex-1 pb-16 md:pb-0">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
