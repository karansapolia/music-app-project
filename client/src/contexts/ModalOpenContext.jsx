import React, { useState } from "react";
import PropTypes from "prop-types";

const ModalOpenContext = React.createContext([{}, () => {}]);

const ModalContextProvider = ({ children }) => {
  const [state, setState] = useState({});
  return (
    <ModalOpenContext.Provider value={[state, setState]}>
      {children}
    </ModalOpenContext.Provider>
  );
};

ModalContextProvider.propTypes = {
  children: PropTypes.element,
};

export { ModalOpenContext, ModalContextProvider };
