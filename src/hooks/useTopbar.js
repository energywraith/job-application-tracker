import { useEffect, useContext } from "react";

import { TopbarContext, initialState } from "utils/contexts/Topbar";
import { actions } from "utils/contexts/Topbar/reducer";

const useTopbar = (Component, props) => {
  const context = useContext(TopbarContext);

  if (context === undefined) {
    throw new Error("useTopbar must be used within a TopbarContext");
  }

  const setTopbar = (payload) => {
    return context.dispatch({
      type: actions.SET_TOPBAR,
      payload,
    });
  };

  const clearTopbar = () => {
    return context.dispatch({
      type: actions.SET_TOPBAR,
      payload: initialState,
    });
  };

  useEffect(() => {
    if (!Component) return;

    setTopbar({ Component, props });
    return () => clearTopbar();
  }, []);

  return {
    Topbar: context.state.Component,
    TopbarProps: context.state.props,
    setTopbar,
    clearTopbar,
  };
};

export default useTopbar;
