import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="modal" onClick={props.onDismiss}>
      <div className="inner-modal " onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title"> {props.title}</h3>
        </div>
        <div className="modal-body">
          <p>{props.content}</p>
        </div>
        <div className="modal-footer">{props.footer}</div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};
export default Modal;
