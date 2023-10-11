import "../styles/globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const gothic = localFont({
  src: [
    {
      path: "../styles/fonts/ExtraLight.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../styles/fonts/Medium.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../styles/fonts/Bold.woff2",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-gothic",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={gothic.className}>{children}</body>
    </html>
  );
}
