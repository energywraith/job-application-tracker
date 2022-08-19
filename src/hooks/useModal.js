import { useContext } from "react";

import { ModalContext } from "utils/contexts/Modal";
import { actions } from "utils/contexts/Modal/reducer";

const useModal = () => {
  const context = useContext(ModalContext);

  if (context === undefined) {
    throw new Error("useModal must be used within a ModalContext");
  }

  const setIsOpen = (payload) =>
    context.dispatch({
      type: actions.SET_IS_OPEN,
      payload,
    });

  const setContent = (payload) =>
    context.dispatch({
      type: actions.SET_CONTENT,
      payload,
    });

  const open = ({ header, body, footer }) => {
    setContent({ header, body, footer });
    setIsOpen(true);
  };

  const close = () => setIsOpen(false);

  return {
    open,
    close,
  };
};

export default useModal;
