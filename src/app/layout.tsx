import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Donuts - Fresh & Delicious",
  description: "Experience the finest artisan donuts with our interactive 3D showcase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
