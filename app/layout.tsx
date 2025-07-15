import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CartProvider } from "./context/CartContext"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "IC GoldHoney - Premium Natural Moroccan Honey",
  description:
    "Discover the finest natural Moroccan honey from IC GoldHoney. Pure, organic, and sustainably sourced from the Atlas Mountains.",
  keywords: "moroccan honey, natural honey, organic honey, atlas mountains honey, IC GoldHoney",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
