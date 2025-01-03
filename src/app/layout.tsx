import React from 'react'
import { Roboto } from 'next/font/google'

import type { Metadata } from "next";
import "./globals.css";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Login",

  icons: [{ rel: "icon", url: "/logo1.jpg", sizes: "16x16" }],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <head>
        <meta name="google-adsense-account" content="ca-pub-8456313061598996" />
      </head>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
