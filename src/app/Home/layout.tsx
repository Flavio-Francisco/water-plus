
import React from 'react'
import { Metadata } from "next";
//import { Sidebar } from "@/components/SideBar"
import { Roboto } from 'next/font/google'
import '@/style/global.css'
import './style.css'
import Drawer from '@/components/Drawer';
import Provider from "@/components/Providers";
import { UserProvider } from "@/context/userContext";
import { DataFullProvider } from "@/context/userDataFull";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Water plus",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>
        <Provider>
          <UserProvider>
            <DataFullProvider>
              <Drawer>
                <div className="">{children}</div>
              </Drawer>
            </DataFullProvider>
          </UserProvider>
        </Provider>
      </body>
    </html>
  );
}
