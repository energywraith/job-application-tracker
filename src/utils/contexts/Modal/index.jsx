import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
} from "@chakra-ui/react";

import reducer from "./reducer";
import { actions } from "./reducer";
import { useEffect } from "react";

const initialState = {
  isOpen: false,
  header: null,
  body: null,
  footer: null,
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
      <Modal
        isOpen={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
        closeOnOverlayClick
        closeOnEsc
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{state.header}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{state.body}</ModalBody>
          <ModalFooter>{state.footer}</ModalFooter>
        </ModalContent>
      </Modal>
    </ModalContext.Provider>
  );
};

ModalProvider.propTypes = propTypes;

export default ModalProvider;

export { ModalContext, initialState };
