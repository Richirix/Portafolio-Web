"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 backdrop-blur-none bg-black/20 "
    >
      {/* Overlay adicional para asegurar cobertura completa */}

      <div className="container mx-auto px-6 py-4 flex justify-between items-center relative z-10">
        <motion.div
          className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          <Link href="/">Ing.Ricardo Edmundo Ruiz Calderon</Link>
        </motion.div>
        <div className="hidden md:flex space-x-8">
          {[
            { name: "Inicio", href: "/" },
            { name: "Sobre mí", href: "/about" },
            { name: "Proyectos", href: "/projects" },
            { name: "Contacto", href: "/contact" },
          ].map((item) => (
            <motion.div key={item.name} whileHover={{ y: -2 }}>
              <Link href={item.href} className="hover:text-cyan-400 transition-colors relative group">
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}
