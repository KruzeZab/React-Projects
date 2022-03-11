import React, { createPortal } from 'react';
import ReactDOM from 'react-dom';

const OVERLAY_STYLE = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
};

const Modal = ({ open, handleOpen, title, children }) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay" style={OVERLAY_STYLE}>
      <div className="modal fade show d-block">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button
                type="button"
                className="btn-close"
                onClick={handleOpen}
              ></button>
            </div>
            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector('#modal-root')
  );
};

export default Modal;
