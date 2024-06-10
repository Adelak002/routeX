import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RouteX",
  description: "Immigration and visa website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-primary">{children}</body>
    </html>
  );
}
