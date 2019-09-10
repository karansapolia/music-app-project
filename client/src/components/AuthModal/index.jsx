import React, { useContext } from 'react';
import { Modal } from '../common/helpers';
import { ModalOpenContext } from '../../helpers/ModalOpenContext';
import Authentication from '../containers/Authentication';

const AuthModal = () => {
  const [state, setState] = useContext(ModalOpenContext);

  const close = () => setState(state => ({ ...state, open: false }));

  return (
    <Modal dimmer={state.dimmer} open={state.open} onClose={close}>
      <Authentication />
    </Modal>
  );
};

export default AuthModal;
