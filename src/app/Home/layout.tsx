
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
import { EventsProvider } from "@/context/eventContext";
import { ChemistProvider } from "@/context/useChermist";
import { DoctortProvider } from "@/context/useDoctor";
import { OperatorProvider } from "@/context/useOperator";
import { AuthProvider } from "@/components/Providers/nextProviser";

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
        <AuthProvider>
          <Provider>
            <UserProvider>
              <OperatorProvider>
                <DoctortProvider>
                  <ChemistProvider>
                    <DataFullProvider>
                      <EventsProvider>
                        <Drawer>{children}</Drawer>
                      </EventsProvider>
                    </DataFullProvider>
                  </ChemistProvider>
                </DoctortProvider>
              </OperatorProvider>
            </UserProvider>
          </Provider>
        </AuthProvider>
      </body>
    </html>
  );
}
