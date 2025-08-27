"use client"

import { motion } from "framer-motion"
import { Code, Palette, Smartphone, Globe, Award, Users, Coffee, Heart, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  const skills = [
    { name: "Lenguajes de Programación", icon: Code, items: ["Python", "JavaScript", "C++", "TypeScript"], subtitle: "Inglés: Nivel Intermedio B1" },
    { name: "Backend y Frameworks", icon: Globe, items: ["Node.js", "Express", "Django", "TypeORM", "NestJs", "API REST", "Swagger"] },
    { name: "Bases de Datos", icon: Smartphone, items: ["PostgreSQL (SQL)", "MongoDB (NoSQL)"] },
    { name: "Frontend", icon: Palette, items: ["React", "Angular", "Ajax", "Axios", "Bootstrap", "CSS", "Tailwind", "Next.js", "HTML5"] },
    { name: "Mobile", icon: Smartphone, items: ["React Native", "iOS", "Android", "Swift", "Android Studio"] },
    { name: "DevOps y Colaboración", icon: Code, items: ["Git", "Docker", "Vercel", "Render"] },
    { name: "Pruebas", icon: Globe, items: ["Jest", "Jasmine", "Postman", "Insomnia", "ThunderCli"] },
    { name: "Soporte Técnico", icon: Phone, items: ["Mantenimiento de hardware", "Instalación de software", "Resolución de incidencias", "Asistencia al usuario"] },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Fondo */}
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
        <div className="container mx-auto max-w-6xl">

          {/* INTRO */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Sobre Mí
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Desarrollador Full Stack apasionado por crear experiencias digitales excepcionales
            </p>
          </motion.div>

          {/* MI HISTORIA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20"
          >
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardContent className="p-8">
                <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
                  <p>
                    Hace 3 años inicié este camino en el mundo del desarrollo junto a dos amigos, 
                    con ideas completamente diferentes pero unidos por la misma pasión: crear. 
                    Aunque no teníamos noción de cómo comenzar, nos movía la actitud de hacerlo 
                    realidad. Gracias a un amigo con gran conocimiento que se convirtió en nuestro 
                    mentor, empezamos a tomar cursos, invertir días, noches y muchos cafés para 
                    adentrarnos en la programación.
                  </p>
                  <p>
                    Esa motivación me llevó a estudiar Ingeniería en Sistemas Computacionales, 
                    decidido a empaparme de la tecnología que hoy mueve al mundo. Durante la carrera 
                    aprendí sobre redes, arquitectura, flujos, lenguajes de programación y realicé 
                    proyectos escolares que, aunque no siempre fueron perfectos, me impulsaron a 
                    seguir mejorando constantemente.
                  </p>
                  <p>
                    Con el tiempo, cada uno de mis amigos tomó su propio rumbo, pero nunca dejamos atrás 
                    el sueño que nos unió. Empezaron a surgir proyectos pequeños y más tarde decidí dar 
                    un paso firme al tomar un bootcamp de desarrollo Full Stack, donde descubrí mi pasión 
                    por el backend. Aunque el frontend no es mi mayor fortaleza, he desarrollado proyectos 
                    completos que me respaldan como desarrollador Full Stack, y sigo aprendiendo y 
                    actualizándome constantemente para mejorar en ambos lados y crecer profesionalmente.
                  </p>
                  <p>
                    Tras concluir mi bootcamp y finalizar la carrera, realicé mis prácticas 
                    profesionales en una universidad en el área de soporte técnico. Aunque no era 
                    mi rol soñado, lo vi como una oportunidad más de aprendizaje. Hoy en día, sigo 
                    colaborando con colegas en el desarrollo de aplicaciones y sistemas, con muchas 
                    ganas de aportar en el mundo tech, ya sea dentro de una empresa o impulsando 
                    nuevos proyectos que me permitan seguir creciendo y aprendiendo cada día.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* HABILIDADES */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Habilidades Técnicas
              </span>
            </h2>
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
          </motion.div>
        </div>
      </div>
    </div>
  )
}
