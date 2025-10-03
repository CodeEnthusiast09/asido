import type { Metadata } from "next";
import { plusJakartaSans } from "./font";
import "./globals.css";

export const metadata: Metadata = {
  title: "Asido",
  description:
    "Making mental health support accessible through advocacy and action",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.className}  antialiased`}>
        {children}
      </body>
    </html>
  );
}
