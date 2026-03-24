//src/components/EventModal/EventModal.jsx
import { useEffect } from "react";
import Modal from "../Modal/Modal";
import "./EventModal.scss";

export default function EventModal({ event, isOpen, onClose }) {    

    useEffect(() => {
    if (isOpen) {
        const scrollY = window.scrollY;

        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollY}px`;
        document.body.style.left = "0";
        document.body.style.right = "0";
    } else {
        const scrollY = document.body.style.top;

        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";

        window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }

    return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
    };
    }, [isOpen]);
  if (!event) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>

      <h2 className="event-modal__title">{event.title}</h2>

      <p className="event-modal__time"><strong>{event.time}</strong></p>

      <p className="event-modal__location">{event.location}</p>

      <p className="event-modal__description">{event.description}</p>

      {event.requiresRegistration && (
        <a
          className="event-modal__button"
          href={event.registrationUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Inscribirse
        </a>
      )}

    </Modal>
  );
}