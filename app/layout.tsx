import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SideNav from "./ui/navbar";
import "./ui/globals.css";
import SessionProvider from "./providers";
import { auth } from '../auth'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Class Code: Home",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <SessionProvider session={session}>
          <SideNav /> 
          <div className="flex justify-center pt-8">
            {children}
          </div>
        </SessionProvider>
        
      </body>
    </html>
  );
}
