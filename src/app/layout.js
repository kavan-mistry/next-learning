"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./common/navbar/Navbar";
import Footer from "./common/footer/Footer";
import { Providers } from "./redux/providers";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <Navbar />
        <Providers>
          {children}
        </Providers>

      </body>
    </html>
  );
}
