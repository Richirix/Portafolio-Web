"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProjectsSection() {
  const projects = [
    {
      title: "Club Active Center",
      description: "Plataforma para gestión de centros deportivos.",
      image: "https://res.cloudinary.com/dqkw7gsek/image/upload/v1753552539/144_zuowuw.jpg",
      tech: ["Node.js","NestJs", "PostgreSQL", "Stripe", "TypeScript", "JavaScript", "NextJs"],
      github: "https://github.com/Richirix/ClubActiveCenter",
      demo: "https://club-active-center.vercel.app",
    },
    {
      title: "Sistema de e-commerce",
      description: "Backend para un sistema de e-commerce",
      image: "https://res.cloudinary.com/dqkw7gsek/image/upload/v1756181136/DocumentacionApiRender_xvfwhh.jpg",
      tech: ["NestJS", "JavaScript", "Node.js","NestJs", "PostgreSQL", "Cloudinary ", "TypeScript", "JavaScript", "TypeORM", "Auth"],
      github: "https://github.com/Richirix/EcommercePM4/tree/main",
      demo: "https://ecommercepm4-5bem.onrender.com/API",
    },
    {
      title: "Gestión de Turnos - C-A-T-A-R-S-I-S",
      description: "Aplicación de gestión de turnos para el salón de belleza C-A-T-A-R-S-I-S",
      image: "https://res.cloudinary.com/dqkw7gsek/image/upload/v1756187532/413716129-bd109225-8b03-4b26-bcc7-b544088acc43_uhytkg.jpg",
      tech: ["Node.js", "Express", "React con Vite", "PostgreSQL con TypeORM", "Moment.js"],
      github: "https://github.com/Richirix/GestionDeTurnosPM3",
      demo: "#",
    },
  ]

  return (
    <section className="py-20 px-6 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Proyectos Destacados
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Una selección de mis trabajos más recientes y significativos
          </p>
          <Link href="/projects">
            <Button
              variant="outline"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black bg-transparent"
            >
              Ver Todos los Proyectos
            </Button>
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {projects.map((project, index) => (
    <motion.div
      key={project.title}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
    >
      <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 overflow-hidden group h-full flex flex-col">
      
        <div className="relative w-full h-48 overflow-hidden">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        <CardContent className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
        
          <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-cyan-500/20 text-cyan-300">
                {tech}
              </Badge>
            ))}
          </div>

          
          <div className="flex space-x-4 mt-auto">
            <Link href={project.github} target="_blank" rel="noopener noreferrer">
              <Button
                size="sm"
                variant="outline"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black bg-transparent"
              >
                <Github className="w-4 h-4 mr-2" />
                Código
              </Button>
            </Link>
            <Link href={project.demo} target="_blank" rel="noopener noreferrer">
              <Button
                size="sm"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Demo
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  ))}
</div>
      </div>
    </section>
  )
}
