import React from "react";
import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";

const Modal = ({ title, isOpen, handleClose, children }) => {
  return (
    <Dialog aria-labelledby="Modal" open={isOpen} onClose={handleClose}>
      <DialogTitle id="Modal-title">{title}</DialogTitle>
      {children}
    </Dialog>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func,
  children: PropTypes.element,
};

export default Modal;
