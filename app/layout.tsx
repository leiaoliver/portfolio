import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Leia Oliver | Analista de Software — Full-Stack & IA",
  description: "Analista de Software formada em ADS pela FIAP. Desenvolvedora Full-Stack — construo aplicações completas do desenvolvimento ao deploy, com projetos de IA e Prompt Engineering.",
  keywords: [
    "Analista de Software",
    "Desenvolvedora Full-Stack",
    "Engenharia de Prompt",
    "IA",
    "Inteligência Artificial",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Python",
    "RAG",
    "LangChain",
    "OpenAI",
  ],
  authors: [{ name: "Leia Oliver" }],
  creator: "Leia Oliver",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Leia Oliver | Analista de Software — Full-Stack & IA",
    description: "Desenvolvedora Full-Stack com projetos de IA, do desenvolvimento ao deploy.",
    siteName: "Leia Oliver Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leia Oliver | Analista de Software — Full-Stack & IA",
    description: "Desenvolvedora Full-Stack com projetos de IA, do desenvolvimento ao deploy.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
