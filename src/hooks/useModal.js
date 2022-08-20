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

  const setPromiseResolvers = (payload) =>
    context.dispatch({
      type: actions.SET_PROMISE_RESOLVERS,
      payload,
    });

  const close = () => setIsOpen(false);

  const open = async ({ header, body, footer }) => {
    return new Promise((resolve, reject) => {
      setContent({
        header,
        body:
          typeof body === "function" ? body({ resolve, reject, close }) : body,
        footer: footer,
      });
      setPromiseResolvers({ resolve, reject });
      setIsOpen(true);
    });
  };

  return {
    open,
    close,
  };
};

export default useModal;
