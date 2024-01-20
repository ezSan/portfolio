import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import styles from "../../scss/globals.module.scss";

const {
  styledSection,
  contactTitle,
  channels,
  contactContainer,
  principalContact,
  contactForm,
  contactPar,
  additionalButton,

  iconContact,
  submitButton,
} = styles;
export default function Contact() {
  const initialValues = {
    fullName: "",
    email: "",
    mensaje: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("El nombre es obligatorio"),

    email: Yup.string()
      .email("Email no válido")
      .required("El email es obligatorio"),
    mensaje: Yup.string().required("El mensaje es obligatorio"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      // Enviar datos al servidor con fetch o axios
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        console.log("Mensaje enviado con éxito");
        resetForm();
      } else {
        console.log("Error al enviar el mensaje");
      }
    } catch (error) {
      console.error(error);
      console.log("Error interno del servidor");
    }
  };


  const handleDownloadCV = () => {
    // Puedes crear una función para descargar el archivo
    const downloadLink = document.createElement("a");
    downloadLink.href = "/cv/fullstack.pdf";
    downloadLink.download = "fullstack_cv.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div id="contact" className={styledSection}>
      <div className={contactContainer}>
        <div className={principalContact}>
          <h4 className={contactTitle}>CONTACTO</h4>
          <p className={contactPar}>
            ¡Gracias por visitar mi página! Si estás buscando un desarrollador,
            ¡estoy aquí para ayudarte! Deja tus datos y motivo, ¡y juntos vamos
            a hacer grandes proyectos!
          </p>
          <button className={submitButton} onClick={handleDownloadCV}>Descargar CV</button>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className={contactForm}>
            <Field type="text" name="fullName" placeholder="Nombre" />
            <ErrorMessage
              name="fullName"
              component="div"
              className="error-message"
            />

            <Field type="email" name="email" placeholder="Email" />
            <ErrorMessage
              name="email"
              component="div"
              className="error-message"
            />
            <Field
              as="textarea"
              name="mensaje"
              placeholder="Escribe tu mensaje..."
            />
            <ErrorMessage
              name="mensaje"
              component="div"
              className="error-message"
            />
            <button type="submit" className={submitButton}>
              Enviar
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
