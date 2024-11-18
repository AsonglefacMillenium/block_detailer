import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from "./lib/register";
import { PT_Sans } from 'next/font/google';



const ptSans = PT_Sans({
  weight: ['400', '700'],  
  subsets: ['latin'],      
  display: 'swap',
});

export const metadata: Metadata = {
  title: "History facts",
  description: "A site that shows history facts within a period of years",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ptSans.className}`}>
        <StyledComponentsRegistry> {children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
