import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "lab-x",
  description: "Lab-X: A Non-Profit Open Source Organization",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-screen-md mx-auto px-4 prose prose-headings:mt-8  prose-a:text-blue-600 prose-headings:text-white prose-headings:font-semibold bg-black text-slate-200 prose-code::text-blue-500  `}
      >
        {children}
      </body>
    </html>
  );
}
