"use client"

import { motion } from "framer-motion"
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ContactForm() {
  return (
    <section className="py-20 px-6 relative z-10">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Trabajemos Juntos
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y ayudarte a convertirlas en realidad.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 px-12 py-4 text-xl"
              >
                <Mail className="w-6 h-6 mr-3" />
                Contáctame
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
