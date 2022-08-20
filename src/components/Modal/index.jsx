import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
} from "@chakra-ui/react";

const Modal = ({ header, body, footer, isOpen, onOpen, onClose }) => {
  return (
    <ChakraModal
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      closeOnOverlayClick
      closeOnEsc
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{header}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{body}</ModalBody>
        <ModalFooter>{footer}</ModalFooter>
      </ModalContent>
    </ChakraModal>
  );
};

export default Modal;
