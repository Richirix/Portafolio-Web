"use client"

import { motion } from "framer-motion"
import { Code, Palette, Smartphone, Globe, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutSection() {
  const skills = [
    { name: "Lenguajes de Programación", icon: Code, items: ["Python", "JavaScript", "C++", "TypeScript"], subtitle: "Inglés: Nivel Intermedio B1" },
    { name: "Backend y Frameworks", icon: Globe, items: ["Node.js", "Express", "Django", "TypeORM", "NestJs", "API REST", "Swagger"] },
    { name: "Bases de Datos", icon: Smartphone, items: ["PostgreSQL (SQL)", "MongoDB (NoSQL)"] },
    { name: "Frontend", icon: Palette, items: ["React", "Angular", "Ajax", "Axios", "Bootstrap", "CSS", "Tailwind", "Next.js", "HTML5"] },
    { name: "Mobile", icon: Smartphone, items: ["React Native", "iOS", "Android", "Swift", "Android Studio"] },
    { name: "DevOps y Colaboración", icon: Code, items: ["Git", "Docker", "Vercel", "Render"] },
    { name: "Pruebas", icon: Globe, items: ["Jest", "Jasmine", "Postman", "Insomnia", "ThunderCli"] },
    { name: "Soporte Técnico", icon: Phone, items: ["Mantenimiento de hardware", "Instalación de software", "Resolución de incidencias", "Asistencia al usuario"] },
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
              Sobre Mí
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Egresado de Ingeniería en Sistemas Computacionales, con sólidos conocimientos en programación, análisis de sistemas y
desarrollo de soluciones tecnológicas. Cuenta con experiencia en soporte técnico, configuración de hardware y software, y se
desempeña como Desarrollador Full Stack, especializado en tecnologías de backend. Ha trabajado con herramientas de
desarrollo colaborativo y metodologías ágiles, lo que le ha permitido desarrollar una mentalidad orientada a la resolución de
problemas. Actualmente, se encuentra en la fase final de su carrera, próximo a realizar sus prácticas profesionales para
completar el proceso de titulación. Busca oportunidades para aplicar sus conocimientos, adquirir experiencia práctica y
contribuir al desarrollo de proyectos innovadores.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="flex"
            >
              <Card className="flex flex-col flex-grow bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center">
                    <skill.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{skill.name}</h3>
                  <div className="flex-grow">
                    {skill.subtitle && (
                      <p className="text-gray-300 mb-4">{skill.subtitle}</p>
                    )}
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map(item => (
                        <Badge key={item} variant="secondary" className="bg-white/10 text-gray-300 hover:bg-white/20">
                          {item}
                        </Badge>
                      ))}
                    </div>
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
