import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GlobalProvider } from "@/context/GlobalContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <GlobalProvider>
          <Navbar />
          <div className="min-h-screen">
            {children}
            <ToastContainer position="top-right" autoClose={2000} />
          </div>

          <Footer></Footer>
        </GlobalProvider>

      </body>
    </html>
  );
}
