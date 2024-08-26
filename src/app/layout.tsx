import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'

const Bomstad = localFont({
  src:[{
    path:'../fonts/BomstadDisplay-Regular.woff2',
    weight:'400',
    style:'normal'
  }]
})

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zavier Lowe",
  description: "Zavier Lowe Porfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
