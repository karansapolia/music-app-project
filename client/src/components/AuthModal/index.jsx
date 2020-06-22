import React, { useContext } from "react";
import Modal from "../common/Modal";
import GlobalContext from "../../contexts/GlobalContext";
import { MODAL_STATE } from "../../contexts/constants";
// import Authentication from "../containers/Authentication";

const AuthModal = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const close = () => {
    console.log("Modal closed");
    dispatch({
      type: MODAL_STATE,
      payload: { ...state.modalState, open: false },
    });
  };

  return (
    <Modal
      // dimmer={state.modalState.dimmer}
      isOpen={state.modalState.open}
      onClose={close}
      title="Auth Modal"
    >
      {/* <Authentication /> */}
    </Modal>
  );
};

export default AuthModal;
