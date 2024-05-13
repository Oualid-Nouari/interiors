import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";

const CormorantGaramond = Cormorant_Garamond({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Design interior",
  description: "Website Template for design interior businesses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${CormorantGaramond.className} bg-bg-color  text-white overflow-x-hidden`}>
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
