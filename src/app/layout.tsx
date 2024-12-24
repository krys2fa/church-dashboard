import type { Metadata } from "next";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thrive Family Chapel",
  description: "A transforming experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='flex h-screen bg-gray-100'>
        <Sidebar />
        <main className='flex-1 p-6'>{children}</main>
      </body>
    </html>
  );
}
