import "./globals.css";


import type { Metadata } from "next";
import {Open_Sans} from "next/font/google";

import cn from 'classnames';

import AppContext from "@/context/AppContext";
import { Header } from "@/components";

const OpenSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "700"]
})

export const metadata: Metadata = {
  title: "My Blog",
  description: "Мой блог",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={cn(OpenSans.className)}>
        <AppContext>
          <Header title={"Perfect BLOG"}/>
        </AppContext>
        {children}
      </body>
    </html>
  );
}
