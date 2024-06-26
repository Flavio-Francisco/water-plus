import React from 'react'
import { Roboto } from 'next/font/google'
import "./globals.css";
// import Provider from "@/components/Providers";
// import { UserProvider } from "@/context/userContext";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Login",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
