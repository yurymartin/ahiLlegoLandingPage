import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function GET(request) {
  return NextResponse.json({ message: "Correo electrónico enviado" });
}

export async function POST(req) {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.example.com",
    port: 587,
    auth: {
      user: "your_email@example.com",
      pass: "your_email_password",
    },
  });

  const mailOptions = {
    from: "your_email@example.com",
    to: "developer.ahillego@gmail.com",
    subject: `Nuevo mensaje de ${name}`,
    text: message,
    replyTo: email,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Correo electrónico enviado" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al enviar el correo electrónico" });
  }
}
