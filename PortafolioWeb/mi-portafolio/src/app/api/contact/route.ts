"use server"
import type { NextRequest } from "next/server";
import sgMail from "@sendgrid/mail";

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const EMAIL_TO = process.env.EMAIL_TO;
const EMAIL_FROM = process.env.EMAIL_FROM;

// Validación
if (!SENDGRID_API_KEY) throw new Error("Falta la variable SENDGRID_API_KEY");
if (!EMAIL_TO) throw new Error("Falta la variable EMAIL_TO");
if (!EMAIL_FROM) throw new Error("Falta la variable EMAIL_FROM");

sgMail.setApiKey(SENDGRID_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, subject, message } = data;

    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ success: false, error: "Faltan campos" }), { status: 400 });
    }

    const msg = {
      to: EMAIL_TO!,      // <-- Aquí decimos a TS que nunca es undefined
      from: EMAIL_FROM!,  // <-- Aquí también
      subject: `[Formulario de Contacto] ${subject}`,
      text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
      html: `<p><strong>Nombre:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Mensaje:</strong><br/>${message}</p>`,
    };

    await sgMail.send(msg);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error al enviar email:", error);
    return new Response(JSON.stringify({ success: false, error: "Error al enviar email" }), { status: 500 });
  }
}
