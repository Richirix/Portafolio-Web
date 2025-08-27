"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Swal from "sweetalert2" 
import { Mail, Phone, MapPin, Send, Github, Linkedin, X } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [callFormOpen, setCallFormOpen] = useState(false)
  const [callData, setCallData] = useState({ name: "", phone: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleCallChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCallData({ ...callData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json()
      if (data.success) {
        Swal.fire({
          icon: "success",
          title: "¡Mensaje enviado!",
          text: "Gracias por contactarme. Te responderé pronto.",
          confirmButtonColor: "#06b6d4"
        })
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No se pudo enviar el mensaje. Intenta de nuevo."
        })
      }
    } catch (err) {
      console.error(err)
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Ocurrió un error al enviar el mensaje."
      })
    }
  }

  const handleCallSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!callData.name || !callData.phone) {
      return Swal.fire({
        icon: "warning",
        title: "Campos incompletos",
        text: "Debes completar ambos campos"
      })
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: callData.name,
          email: "N/A",
          subject: "Solicitud de llamada",
          message: `Nombre: ${callData.name}\nTeléfono: ${callData.phone}`,
        }),
      })

      const data = await res.json()
      if (data.success) {
        Swal.fire({
          icon: "success",
          title: "¡Solicitud enviada!",
          text: "Te contactaré pronto para la llamada.",
          confirmButtonColor: "#9333ea"
        })
        setCallData({ name: "", phone: "" })
        setCallFormOpen(false)
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No se pudo enviar la solicitud."
        })
      }
    } catch (err) {
      console.error(err)
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Ocurrió un error al enviar la solicitud."
      })
    }
  }

  const contactInfo = [
    { icon: Mail, title: "Email", value: "ruizcalderonricardoed@gmail.com", href: "mailto:ruizcalderonricardoed@gmail.com" },
    { icon: Phone, title: "Teléfono", value: "+52 (246) 120-6038", href: "tel:+522461206038" },
    { icon: MapPin, title: "Ubicación", value: "Tlaxcala, Tlax. Mexico", href: "#" },
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/Richirix", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ricardoedmundoruizcalderon", label: "LinkedIn" },
  ]

  return (
    <div className="min-h-screen bg-black text-white relative">
    
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20" />
      </div>

   
     <div className="relative z-10 py-10 px-4 md:py-20 md:px-6">
  <div className="container mx-auto max-w-6xl">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-10 md:mb-16"
    >
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
        <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Contáctame
        </span>
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
        ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y ayudarte a convertirlas en realidad
      </p>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
         
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6 text-white">Envíame un mensaje</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-gray-300">Nombre</Label>
                        <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Tu nombre" className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400" required />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-gray-300">Email</Label>
                        <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="tu@email.com" className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400" required />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="subject" className="text-gray-300">Asunto</Label>
                      <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Asunto del mensaje" className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400" required />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-gray-300">Mensaje</Label>
                      <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Cuéntame sobre tu proyecto..." rows={6} className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400 resize-none" required />
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0">
                      <Send className="w-5 h-5 mr-2" /> Enviar Mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

           
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">Información de contacto</h2>
                <div className="space-y-4">
                  {contactInfo.map(info => (
                    <motion.a key={info.title} href={info.href} whileHover={{ scale: 1.02 }} className="block">
                      <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                        <CardContent className="p-6 flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center">
                            <info.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white">{info.title}</h3>
                            <p className="text-gray-300">{info.value}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">Sígueme en redes</h3>
                <div className="flex space-x-4">
                  {socialLinks.map(social => (
                    <motion.a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1, y: -2 }} className="p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all">
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>

              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-white">¿Prefieres una llamada?</h3>
                  <p className="text-gray-300 mb-4">Si prefieres hablar directamente, puedes agendar una llamada conmigo. Estaré encantado de discutir tu proyecto en detalle.</p>
                  <Button variant="outline" onClick={() => setCallFormOpen(true)} className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black bg-transparent">Agendar Llamada</Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      
      {callFormOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 w-full max-w-md p-6 relative">
            <Button variant="ghost" onClick={() => setCallFormOpen(false)} className="absolute top-2 right-2">
              <X className="w-5 h-5 text-white" />
            </Button>
            <h2 className="text-2xl font-bold mb-4 text-white">Agendar llamada</h2>
            <form onSubmit={handleCallSubmit} className="space-y-4">
              <div>
                <Label htmlFor="call-name" className="text-gray-300">Nombre</Label>
                <Input id="call-name" name="name" value={callData.name} onChange={handleCallChange} placeholder="Tu nombre" required className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400" />
              </div>
              <div>
                <Label htmlFor="call-phone" className="text-gray-300">Teléfono</Label>
                <Input id="call-phone" name="phone" value={callData.phone} onChange={handleCallChange} placeholder="+52 123 456 7890" required className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400" />
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0">Enviar Solicitud</Button>
            </form>
          </Card>
        </div>
      )}
    </div>
  )
}
