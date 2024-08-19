import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/ui/navigation";
import CustomCursor from "@/components/ui/CustomCursor";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sumit",
  description: "Hello This is Sumit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" scroll-smooth">
      <body className={inter.className}>
        {/* <CustomCursor /> */}
        {children}
      </body>
    </html>
  );
}
