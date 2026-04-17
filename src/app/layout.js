import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { GlobalProvider } from "@/context/GlobalContext";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <GlobalProvider>
          <Navbar />
          {children}
        </GlobalProvider>

      </body>
    </html>
  );
}
