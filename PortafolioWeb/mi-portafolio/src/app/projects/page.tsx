"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink, Calendar, Tag } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function ProjectsPage() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Plataforma completa de comercio electrónico con carrito de compras, pagos integrados, panel de administración y sistema de inventario en tiempo real.",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Express"],
      github: "#",
      demo: "#",
      date: "2024",
      category: "Web App",
    },
    {
      title: "AI Dashboard",
      description:
        "Dashboard inteligente con análisis de datos, visualizaciones interactivas, predicciones con machine learning y reportes automatizados.",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["Next.js", "Python", "TensorFlow", "D3.js", "PostgreSQL", "FastAPI"],
      github: "#",
      demo: "#",
      date: "2024",
      category: "AI/ML",
    },
    {
      title: "Mobile Banking App",
      description:
        "Aplicación móvil de banca digital con autenticación biométrica, transferencias, historial de transacciones y notificaciones push.",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["React Native", "Firebase", "Biometrics", "Redux", "Expo", "Node.js"],
      github: "#",
      demo: "#",
      date: "2023",
      category: "Mobile",
    },
    {
      title: "Task Management System",
      description:
        "Sistema de gestión de tareas colaborativo con equipos, proyectos, calendario integrado y seguimiento de tiempo en tiempo real.",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["Vue.js", "Laravel", "MySQL", "Socket.io", "Vuex", "PHP"],
      github: "#",
      demo: "#",
      date: "2023",
      category: "Web App",
    },
    {
      title: "Real Estate Platform",
      description:
        "Plataforma inmobiliaria con búsqueda avanzada, mapas interactivos, tours virtuales y sistema de citas con agentes.",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["Angular", "Spring Boot", "PostgreSQL", "Google Maps", "AWS", "Java"],
      github: "#",
      demo: "#",
      date: "2023",
      category: "Web App",
    },
    {
      title: "Social Media Analytics",
      description:
        "Herramienta de análisis de redes sociales con métricas en tiempo real, reportes personalizados y integración con múltiples plataformas.",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["React", "Python", "Django", "Redis", "Celery", "Chart.js"],
      github: "#",
      demo: "#",
      date: "2022",
      category: "Analytics",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%239C92AC' fillOpacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="relative z-10 py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Mis Proyectos
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Una colección de proyectos que demuestran mis habilidades y experiencia en desarrollo full stack
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 overflow-hidden group h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-300">
                        <Calendar className="w-3 h-3 mr-1" />
                        {project.date}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">
                        <Tag className="w-3 h-3 mr-1" />
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
                    <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-cyan-500/20 text-cyan-300 text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-3 mt-auto">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black bg-transparent flex-1"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Código
                      </Button>
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 flex-1"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
