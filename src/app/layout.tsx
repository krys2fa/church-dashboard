"use client";
import Sidebar from "@/components/Sidebar";
import "./globals.css";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const showSidebar = !["/login", "/signup"].includes(pathname);

  return (
    <html lang='en'>
      <body className='flex h-screen bg-gray-100'>
        {showSidebar && <Sidebar />}
        <main className='flex-1 p-6'>{children}</main>
      </body>
    </html>
  );
}
