/* eslint-disable @next/next/no-img-element */
"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      {/* Mouse follower effect */}
      <div
        className="fixed w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl pointer-events-none z-0"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          transition: "all 0.3s ease-out",
        }}
      />

      <motion.div style={{ y }} className="text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse" />
            <img
              src="https://res.cloudinary.com/dqkw7gsek/image/upload/v1752872980/Imagen_de_WhatsApp_2025-07-18_a_las_15.08.30_40c2cf23_rvobtb.jpg"
              alt="Profile"
              className="w-28 h-28 rounded-full absolute top-2 left-2 border-2 border-white/20"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Desarrollador
          </span>
          <br />
          <span className="text-white">Full Stack</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          Creando experiencias digitales innovadoras con tecnologías de vanguardia
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/projects">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 px-8 py-3 text-lg"
            >
              Ver Proyectos
            </Button>
          </Link>
          <Button
  size="lg"
  variant="outline"
  className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-3 text-lg bg-transparent"
  onClick={() => window.open("https://drive.google.com/file/d/1V_gjzZpOFO8jTCKJO9BadrvLBvzSqSmM/view?usp=sharing", "_blank")}
>
  Descargar CV
</Button>

        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex justify-center space-x-6 mt-12"
        >
          {[
            { Icon: Github, href: "https://github.com/Richirix" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/ricardoedmundoruizcalderon/" },
            { Icon: Mail, href: "/contact" },
          ].map(({ Icon, href }, index) => (
            <motion.a
              key={index}
              href={href}
              whileHover={{ scale: 1.2, y: -5 }}
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
            >
              <Icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
