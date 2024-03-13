
import React from 'react'
import { Metadata } from "next";
import { Sidebar } from "@/components/SideBar"
import { Roboto } from 'next/font/google'



const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})


export const metadata: Metadata = {
  title: 'Water plus',

}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" >

      <body className={roboto.className}>
  
        <Sidebar />
        <div style={{ width: '81%', height: '80%', marginLeft: '19%' }}>
          {children}
        </div>

      </body>
    </html>
  )
}
