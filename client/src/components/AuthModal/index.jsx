import React, { useContext } from "react";
// import Modal from "../common/Modal";
import GlobalContext from "../../contexts/GlobalContext";
import { MODAL_STATE } from "../../contexts/constants";
// import Authentication from "../containers/Authentication";
// import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
// import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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
    // <Modal
    //   // dimmer={state.modalState.dimmer}
    //   isOpen={state.modalState.open}
    //   onClose={close}
    //   title="Auth Modal"
    // >
    //   {/* <Authentication /> */}
    // </Modal>
    <Dialog
      fullscreen
      open={state.modalState.open}
      onClose={close}
      TransitionComponent={Transition}
    >
      <AppBar>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={close}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          This is toolbar
        </Toolbar>
      </AppBar>
      <p>This is more content</p>
    </Dialog>
  );
};

export default AuthModal;
