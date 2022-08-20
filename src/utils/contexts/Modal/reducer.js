const actions = {
  SET_IS_OPEN: "MODAL/SET_IS_OPEN",
  SET_CONTENT: "MODAL/SET_CONTENT",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_IS_OPEN: {
      return {
        ...state,
        isOpen: action.payload,
      };
    }
    case actions.SET_CONTENT: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case actions.SET_PROMISE_RESOLVERS: {
      return {
        ...state,
        promiseResolvers: action.payload,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export default reducer;

export { actions };
