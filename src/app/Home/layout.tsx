
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
                <div className="flex flex-col min-h-screen">
                  {/* Adicionando classes para definir a altura mínima da tela e um layout de coluna flexível */}
                  <main className="flex-1 overflow-y-auto">
                    {/* Usando overflow-y-auto para adicionar uma barra de rolagem vertical apenas quando necessário */}
                    {children}
                  </main>
                  {/* Usando flex-1 para que o conteúdo principal ocupe o restante do espaço disponível */}
                </div>
              </Drawer>
            </DataFullProvider>
          </UserProvider>
        </Provider>
      </body>
    </html>
  );
}
