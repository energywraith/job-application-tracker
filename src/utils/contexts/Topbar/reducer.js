const actions = {
  SET_TOPBAR: "TOPBAR/SET_TOPBAR",
};

const reducer = (state, action) => {
  if (action.type === actions.SET_TOPBAR) {
    return {
      state,
      ...action.payload,
    };
  }

  throw new Error(`Unhandled action type: ${action.type}`);
};

export default reducer;

export { actions };
