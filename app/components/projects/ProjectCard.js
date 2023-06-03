import React, { useState } from "react";
import styles from "../../scss/globals.module.scss";
import { GitHub } from "iconoir-react";
import Image from "next/image";
import Modal from "react-modal";

const {
  project_card__image,
  project_card__title,
  project_card__content,
  project_card__description,
  project_card,
  modalContent,
  project_card__image_modal,
} = styles;

export default function ProjectCard(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  function openModal(e) {
    e.stopPropagation();
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }
  return (
    <div className={project_card} onClick={openModal}>
      <Image
        alt={props.nombre}
        src={props.image}
        className={project_card__image}
        width={100}
        height={100}
      />

      <div className={project_card__content}>
        <h3 className={project_card__title}>{props.nombre}</h3>
        <p className={project_card__description}>{props.desc}</p>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Project Details"
        style={customStyles}
        // overlayClassName={style.modalOverlay}
      >
        <div onClick={(e) => e.stopPropagation()}>
          {" "}
          {/* Detener la propagación del evento */}
          <Image
            alt={props.nombre}
            src={props.image}
            className={project_card__image_modal}
            width={100}
            height={100}
          />
          <h2>{props.nombre}</h2>
          <p>{props.desc}</p>
          <button onClick={closeModal}>Cerrar</button>
        </div>
      </Modal>
    </div>
  );
}
