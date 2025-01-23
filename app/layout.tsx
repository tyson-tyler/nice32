import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { Navbar } from "./components/layout/navbar";
import { ThemeProvider } from "./components/layout/themeprovider";

// Import the Google Fonts using next/font/google
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"], // You can specify additional subsets if needed
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Define metadata for the page
export const metadata: Metadata = {
  title: "Myaimix",
  description: "Generated anything",
};

// Define the RootLayout component
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth(); // Authenticate user session

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
