"use client"

import { motion } from "framer-motion"
import { Code, Palette, Smartphone, Globe, Award, Users, Coffee, Heart, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"


export default function AboutPage() {
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

  const stats = [
    { icon: Award, number: "50+", label: "Proyectos Completados" },
    { icon: Users, number: "30+", label: "Clientes Satisfechos" },
    { icon: Coffee, number: "1000+", label: "Tazas de Café" },
    { icon: Heart, number: "5+", label: "Años de Experiencia" },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
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

          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 text-center">
                  <CardContent className="p-6">
                    <stat.icon className="w-8 h-8 mx-auto mb-4 text-cyan-400" />
                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20"
          >
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-white">Mi Historia</h2>
                <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
                  <p>
                    Comencé mi viaje en el desarrollo web hace más de 5 años, cuando descubrí mi pasión por crear
                    soluciones digitales que realmente impacten en la vida de las personas. Desde entonces, he trabajado
                    con una amplia variedad de tecnologías y he tenido la oportunidad de colaborar en proyectos
                    fascinantes.
                  </p>
                  <p>
                    Mi enfoque se centra en escribir código limpio, escalable y mantenible, siempre buscando las mejores
                    prácticas y manteniéndome actualizado con las últimas tendencias tecnológicas. Creo firmemente en la
                    importancia del diseño centrado en el usuario y la experiencia de usuario.
                  </p>
                  <p>
                    Cuando no estoy programando, me gusta contribuir a proyectos de código abierto, escribir artículos
                    técnicos y mentorizar a desarrolladores junior. También disfruto de la fotografía, los videojuegos y
                    explorar nuevas tecnologías emergentes.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          
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
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center">
                        <skill.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-4 text-white">{skill.name}</h3>
                      <div className="space-y-2">
                        {skill.items.map((item) => (
                          <Badge
                            key={item}
                            variant="secondary"
                            className="bg-white/10 text-gray-300 hover:bg-white/20 m-1"
                          >
                            {item}
                          </Badge>
                        ))}
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
