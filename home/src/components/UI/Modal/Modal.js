import React, { Fragment } from "react";
import BackDrop from "../BackDrop/BackDrop";
import "./Modal.scss";
function Modal({ show, clicked, children }) {
  return (
    <Fragment>
      <BackDrop show={show} clicked={clicked} />
      {show ? (
        <div className="Modal">
          <div>{children}</div>
        </div>
      ) : null}
    </Fragment>
  );
}

export default Modal;
