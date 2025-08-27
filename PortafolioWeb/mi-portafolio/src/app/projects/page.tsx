"use client"

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Calendar, Tag, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const projects = [
  {
    title: "Club Active Center",
    description: "Plataforma para gestión de centros deportivos y carrito de compras.",
    fullDescription: `
Formé parte de un equipo de desarrollo en la creación de la plataforma Club Active Center, 
una solución para la gestión de centros deportivos.

En el backend, trabajé junto a un gran equipo en diversas funcionalidades. 
Fui responsable de la integración del sistema de pagos con Stripe, implementando 
el proceso de checkout y configurando los webhooks para recibir notificaciones de 
pagos y actualizaciones.

Además, desarrollé la lógica detrás de la gestión del carrito de compras y 
las órdenes de los usuarios, lo que permitió un flujo de compras eficiente.

También apoyé en la integración de Cloudinary para la carga de imágenes, 
mejorando la gestión de contenido visual.

En el frontend, colaboré en la implementación de la funcionalidad del carrito de 
compras, permitiendo una experiencia de usuario más fluida para gestionar 
productos y realizar compras.
    `,
    image: "https://res.cloudinary.com/dqkw7gsek/image/upload/v1753552539/144_zuowuw.jpg",
    tech: ["Node.js","NestJs","PostgreSQL","Stripe","TypeScript","JavaScript","NextJs"],
    github: "https://github.com/Richirix/ClubActiveCenter",
    demo: "https://club-active-center.vercel.app",
    date: "2024",
    category: "Web App",
  },
  {
    title: "Sistema de e-commerce",
    description: "Backend para un sistema de e-commerce con NestJS y PostgreSQL.",
    fullDescription: `
Backend para un sistema de e-commerce, desarrollado con NestJS, PostgreSQL, TypeORM y otras herramientas modernas. 
Incluye gestión de usuarios, productos y pedidos, autenticación con JWT, documentación con Swagger y carga de imágenes con Cloudinary.
    `,
    image: "https://res.cloudinary.com/dqkw7gsek/image/upload/v1756181136/DocumentacionApiRender_xvfwhh.jpg",
    tech: ["NestJS","JavaScript","Node.js","PostgreSQL","TypeORM","Auth"],
    github: "https://github.com/Richirix/EcommercePM4/tree/main",
    demo: "https://ecommercepm4-5bem.onrender.com/API",
    date: "2024",
    category: "Backend REST API",
  },
  {
    title: "Gestión de Turnos - C-A-T-A-R-S-I-S",
    description: "Aplicación web para gestionar turnos en el salón de belleza C-A-T-A-R-S-I-S.",
    fullDescription: `
Aplicación web desarrollada para el salón de belleza C-A-T-A-R-S-I-S que permite a los usuarios gestionar sus turnos de manera eficiente. 
Incluye funciones para agendar, cancelar y consultar citas, optimizando la experiencia del cliente y facilitando la administración interna.

Features:
- Registro e inicio de sesión seguros
- Agendamiento de turnos con validaciones específicas
- Consulta de historial de citas
- Notificaciones por correo electrónico para confirmaciones y recordatorios
    `,
    image: "https://res.cloudinary.com/dqkw7gsek/image/upload/v1756187532/413716129-bd109225-8b03-4b26-bcc7-b544088acc43_uhytkg.jpg",
    tech: ["Node.js","Express","React con Vite","PostgreSQL con TypeORM","Moment.js"],
    github: "https://github.com/Richirix/GestionDeTurnosPM3",
    demo: "#",
    date: "2024",
    category: "Web App",
  },
  {
    title: "AllPlay",
    description: "App web para explorar y gestionar películas en tiempo real.",
    fullDescription: `
AllPlay es una aplicación web para la gestión dinámica de películas. Permite a los usuarios explorar, agregar y consultar películas en tiempo real. 
Desarrollado con Node.js, Express y MongoDB en el backend y un frontend interactivo que mejora la experiencia del usuario.

Features:
- Explorar películas: Listado de películas disponibles
- Agregar nuevas películas: Formulario para agregar películas
- API RESTful: Rutas protegidas para manejar películas

Usage:
- Accede a la página principal para explorar las películas
- Agrega nuevas películas a la base de datos mediante el formulario
- Realiza peticiones a la API RESTful para interactuar con los datos
    `,
    image: "https://res.cloudinary.com/dqkw7gsek/image/upload/v1756237114/Home_AllPlay_rzxjbz.jpg",
    tech: ["Node.js","Express","MongoDB","JavaScript","HTML5","Bootstrap","CSS"],
    github: "https://github.com/Richirix/AllPlayPM2",
    demo: "#",
    date: "2023",
    category: "Web App",
  },
];


  return (
    <div className="min-h-screen bg-black text-white relative">
  <div className="container mx-auto py-20 px-6">
    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">
      <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent text-center">
        Proyectos
      </span>
    </h1>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          onClick={() => setSelectedProject(project)}
          className="cursor-pointer"
        >
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 overflow-hidden group h-full">
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <CardContent className="p-4 flex flex-col">
              <h3 className="text-xl font-semibold mb-2 text-center">{project.title}</h3>
              <p className="text-gray-300 text-sm">{project.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>

  {/* MODAL */}
  {selectedProject && (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={() => setSelectedProject(null)} // click fuera cierra
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-gray-900 rounded-xl max-w-2xl w-full overflow-y-auto max-h-[80vh] relative p-6"
        onClick={(e) => e.stopPropagation()} // evita que click dentro cierre
      >
        <button
          onClick={() => setSelectedProject(null)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={24} />
        </button>

        <img
          src={selectedProject.image}
          alt={selectedProject.title}
          className="w-full max-h-64 object-contain rounded-md mb-4"
        />
        <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
        <p className="text-gray-300 mb-4 whitespace-pre-line">{selectedProject.fullDescription}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {selectedProject.tech.map((tech: string) => (
            <Badge key={tech} variant="secondary" className="bg-cyan-500/20 text-cyan-300 text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-4">
          <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button
              size="sm"
              variant="outline"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black w-full"
            >
              <Github className="w-4 h-4 mr-2" /> Código
            </Button>
          </a>
          <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button
              size="sm"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 w-full"
            >
              <ExternalLink className="w-4 h-4 mr-2" /> Demo
            </Button>
          </a>
        </div>
      </motion.div>
    </div>
  )}
</div>
  );
}
