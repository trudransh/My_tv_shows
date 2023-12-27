// Modal.js
import React from 'react';

const Modal = ({ children, onClose }) => {
  return (
    <div className="modal-backdrop">
        {children}
    </div>
  );
};

export default Modal;
