import React, { useContext } from 'react';
import { Modal } from '../common/helpers';
import GlobalContext from '../../contexts/GlobalContext';
import { MODAL_STATE } from '../../contexts/constants';
import Authentication from '../containers/Authentication';

const AuthModal = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const close = () =>
    dispatch({ type: MODAL_STATE, payload: { ...state.modalState, open: false } });

  return (
    <Modal dimmer={state.modalState.dimmer} open={state.modalState.open} onClose={close}>
      <Authentication />
    </Modal>
  );
};

export default AuthModal;
