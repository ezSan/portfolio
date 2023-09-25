import nodemailer from "nodemailer";

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

      // Respuesta automática al cliente

      const autoReplyMailOptions = {
        from: "ezsan.mailing@gmail.com",
        to: email, // Usar la dirección de correo del cliente
        subject: "Gracias por tu mensaje",
        html: `
                <html>
                  <body>
                    <h1 style="color: #0048ea;">¡Gracias por ponerte en contacto!</h1>
                    <p>Hemos recibido tu mensaje y te responderemos lo antes posible.</p>
                    <p>Este es un mensaje automático para confirmar que hemos recibido tu consulta.</p>
                  </body>
                </html>
              `,
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
