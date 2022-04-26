const actions = {
  SET_USER: "USER/SET_USER",
};

const reducer = (state, action) => {
  if (action.type === actions.SET_USER) {
    return {
      ...state,
      ...action.payload,
    };
  }

  throw new Error(`Unhandled action type: ${action.type}`);
};

export default reducer;

export { actions };
