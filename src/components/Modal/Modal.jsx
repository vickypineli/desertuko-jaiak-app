//src/components/Modal/Modal.jsx

import "./Modal.scss";

export default function Modal({ isOpen, onClose, children }) {

  if (!isOpen) return null;

  return (
    <div className="modal">

      <div
        className="modal__overlay"
        onClick={onClose}
      />

      <div className="modal__content">

        {children}

      </div>

    </div>
  );
}