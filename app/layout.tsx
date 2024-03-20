import type { Metadata } from "next";
import "./globals.css";
import { Satoshi, Integral } from "@/assets/fonts/font";
import { Navbar } from "./_components/navbar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Satoshi.variable} ${Integral.variable}`}>
        {children}
      </body>
    </html>
  );
}
