import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../styles/globals.css"
import Navbar from "@/components/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mi Portfolio - Desarrollador Full Stack",
  description: "Portfolio personal de desarrollador full stack especializado en tecnologías modernas",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-black text-white`}>
        <Navbar />
        <main className="pt-20 bg-black min-h-screen text-white">{children}</main>
      </body>
    </html>
  )
}
