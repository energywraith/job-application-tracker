import { createContext, useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import { useDisclosure } from "@chakra-ui/react";

import ModalComponent from "components/Modal";

import reducer, { actions } from "./reducer";

const initialState = {
  isOpen: false,
  header: null,
  body: null,
  footer: null,
  promiseResolvers: {},
};

const ModalContext = createContext();

const propTypes = {
  children: PropTypes.node.isRequired,
};

const ModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isOpen, onClose, onOpen } = useDisclosure();

  const value = { state, dispatch };

  useEffect(() => {
    if (state.isOpen) {
      onOpen();
      return;
    }

    onClose();
  }, [state.isOpen]);

  const setIsOpen = (payload) =>
    dispatch({ type: actions.SET_IS_OPEN, payload });

  return (
    <ModalContext.Provider value={value}>
      {children}
      <ModalComponent
        isOpen={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => {
          setIsOpen(false);
          state.promiseResolvers?.resolve(false);
        }}
        header={state.header}
        body={state.body}
        footer={state.footer}
      />
    </ModalContext.Provider>
  );
};

ModalProvider.propTypes = propTypes;

export default ModalProvider;

export { ModalContext, initialState };
