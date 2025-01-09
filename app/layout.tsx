import type { Metadata } from "next";
import { Syne} from "next/font/google";
import "./globals.css";
import React from "react";

const syne = Syne({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Azuknisianta",
    description: "Personal Portfolio",
    icons: {
        icon: '/assets/img/logo_square.png'
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} antialiasing`}
      >
        {children}
      </body>
    </html>
  );
}
