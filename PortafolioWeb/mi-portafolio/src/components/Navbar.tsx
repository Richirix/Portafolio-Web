"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { name: "Inicio", href: "/" },
    { name: "Sobre mí", href: "/about" },
    { name: "Proyectos", href: "/projects" },
    { name: "Contacto", href: "/contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md"
    >
      <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="text-lg sm:text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          <Link href="/">Ing. Ricardo E. Ruiz Calderon</Link>
        </motion.div>

        {/* Links desktop */}
        <div className="hidden md:flex space-x-8">
          {links.map((item) => (
            <motion.div key={item.name} whileHover={{ y: -2 }}>
              <Link href={item.href} className="hover:text-cyan-400 transition-colors relative group">
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Botón hamburguesa en móvil */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú mobile */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/90 backdrop-blur-md px-6 py-4 space-y-4"
        >
          {links.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block text-white hover:text-cyan-400"
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}
