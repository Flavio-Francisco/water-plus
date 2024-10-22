import React from "react";
import { Metadata } from "next";
//import { Sidebar } from "@/components/SideBar"
import { Roboto } from "next/font/google";
import "@/style/global.css";
import Drawer from "@/components/Drawer";
import Provider from "@/components/Providers";
import { UserProvider } from "@/context/userContext";

import { EventsProvider } from "@/context/eventContext";
import { ChemistProvider } from "@/context/useChermist";
import { DoctortProvider } from "@/context/useDoctor";
import { OperatorProvider } from "@/context/useOperator";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dados de Produção",
  icons: [{ rel: "icon", url: "/logo1jpg", sizes: "16x16" }],
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
            <OperatorProvider>
              <DoctortProvider>
                <ChemistProvider>
                  <EventsProvider>
                    <Drawer>{children}</Drawer>
                  </EventsProvider>
                </ChemistProvider>
              </DoctortProvider>
            </OperatorProvider>
          </UserProvider>
        </Provider>
      </body>
    </html>
  );
}
