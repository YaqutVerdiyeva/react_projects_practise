import React from "react";
import { useGlobalContext } from "../context";
import { FaTimes } from "react-icons/fa";
const Modal = () => {
  const { modal, closeModal } = useGlobalContext();
  return (
    <div className="modal-page">
      <div className={`${modal ? "modal show-modal" : "modal"}`}>
        <div className="context">
          <FaTimes className="close-modal" onClick={closeModal} />
          <h1>Modal Content</h1>
        </div>
      </div>
    </div>
  );
};

export default Modal;
