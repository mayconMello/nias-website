import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Using Playfair Display as a serif alternative (similar elegance to Domaine)
const domaine = Playfair_Display({
  variable: "--font-domaine",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Nias | Planilhamento com IA",
    template: "%s | Nias AI",
  },
  description:
    "Planilhamento de balanços em segundos com IA. Decisões mais rápidas, precisas e eficientes para crédito atacado.",
  keywords: [
    "planilhamento de balanços",
    "planilhamento de demonstrações financeiras",
    "análise de crédito",
    "inteligência artificial",
    "IA para crédito",
    "automação de crédito",
    "decisão de crédito",
    "spread com IA",
    "análise financeira com IA",
  ],
  authors: [{ name: "Nias AI" }],
  creator: "Nias AI",
  publisher: "Nias AI",
  metadataBase: new URL("https://nias.com.br"), // Altere para seu domínio real
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://nias.com.br",
    title: "Nias - Planilhamento de balanços com IA",
    description:
      "Planilhamento de balanços em segundos com IA. Decisões mais rápidas, precisas e eficientes para crédito atacado.",
    siteName: "Nias AI",
    images: [
      {
        url: "/og-image.png", // Você vai criar essa imagem depois
        width: 1200,
        height: 630,
        alt: "Nias AI - Análise de Crédito Inteligente",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nias AI - Análise de Crédito Inteligente com IA",
    description:
      "Automatize sua análise de crédito com Inteligência Artificial.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: "seu-codigo-google-search-console", // Adicionar depois
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${domaine.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
