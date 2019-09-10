import React, { useState } from 'react';

const ModalOpenContext = React.createContext([{}, () => {}]);

const ModalContextProvider = props => {
  const [state, setState] = useState({});
  return <ModalOpenContext.Provider value={[state, setState]}>{props.children}</ModalOpenContext.Provider>;
};

export { ModalOpenContext, ModalContextProvider };
