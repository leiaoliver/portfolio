import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const title = "Léia Oliveira | Desenvolvedora Full Stack";
const description =
  "Desenvolvedora Full Stack com quase 5 anos de experiência em produtos web e mobile com React, Next.js, React Native, Node.js e TypeScript. Experiência em banco, fintech e projetos internacionais com IA.";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-ebon-omega-6ncuazwu9p.vercel.app"),
  title,
  description,
  keywords: [
    "Desenvolvedora Full Stack",
    "React",
    "Next.js",
    "React Native",
    "Node.js",
    "TypeScript",
    "GraphQL",
    "IA",
    "Léia Oliveira",
  ],
  authors: [{ name: "Léia Oliveira" }],
  creator: "Léia Oliveira",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title,
    description,
    siteName: "Léia Oliveira",
    images: ["/perfil.jpg"],
  },
  twitter: { card: "summary", title, description },
};

// Applies the saved (or system) theme before the first paint, so there is no flash.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme='dark'}})()`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${bricolage.variable} ${instrument.variable} ${jetbrains.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
