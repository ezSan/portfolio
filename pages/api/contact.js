import nodemailer from "nodemailer";
import fs from "fs";
import path from "path"; // Importa el módulo 'path' de Node.js

// Configura el transporte de correo
const transporter = nodemailer.createTransport({
  service: "Gmail", // Cambia esto según tu proveedor de correo electrónico
  auth: {
    user: "ezsan.mailing@gmail.com", // Cambia esto a tu dirección de correo
    pass: "lkcd pdnn muhp gnek", // Cambia esto a tu contraseña
  },
});

const autoReplyTransporter = nodemailer.createTransport({
  service: "Gmail", // Cambia esto según tu proveedor de correo electrónico
  auth: {
    user: "ezsan.mailing@gmail.com", // Cambia esto a tu dirección de correo
    pass: "lkcd pdnn muhp gnek", // Cambia esto a tu contraseña
  },
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { fullName, email, mensaje } = req.body;

      // Construye la ruta absoluta al archivo de plantilla
      const emailTemplatePath = path.resolve("./app/emailTemplates/autoreply.html");

      // Imprime la ruta del archivo de plantilla en la consola
      console.log("Ruta del archivo de plantilla:", emailTemplatePath);

      // Lee el contenido del archivo de plantilla
      const emailTemplate = fs.readFileSync(emailTemplatePath, "utf8");

      const mailOptions = {
        from: "ezequiel.sanchez.7391@gmail.com",
        to: "ezsandev@gmail.com",
        subject: "Mensaje desde el porfolio",
        html: `
    <html>
      <body>
        <h1 style="color: #0048ea;">Mensaje desde el sitio</h1>
        <p><strong>Nombre:</strong> ${fullName}</p>            
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong> ${mensaje}</p>
      </body>
    </html>
  `,
      };

      // enviar el mail a mi casilla
      await transporter.sendMail(mailOptions);
      console.log("Correo enviado a tu casilla con éxito");

      // Respuesta automática al cliente
      const autoReplyMailOptions = {
        from: "ezsan.mailing@gmail.com",
        to: email, // Usar la dirección de correo del cliente
        subject: "Gracias por tu mensaje",
        html: emailTemplate,
      };

      // devolver un mail confirmando recepción al cliente
      await autoReplyTransporter.sendMail(autoReplyMailOptions);

      return res.status(200).json({ message: "Mensaje enviado con éxito" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Error interno del servidor" });
    }
  } else {
    return res.status(405).end();
  }
}
