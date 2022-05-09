import { useContext } from "react";

import { LS_USER_NAME } from "consts/localStorageItems";

import { UserContext, initialState } from "utils/contexts/User";
import { actions } from "utils/contexts/User/reducer";

const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useUser must be used within a UserContext");
  }

  const setUser = (payload) => {
    localStorage.setItem(LS_USER_NAME, JSON.stringify(payload));

    return context.dispatch({
      type: actions.SET_USER,
      payload,
    });
  };

  const clearUser = () => {
    localStorage.setItem(LS_USER_NAME, null);

    return context.dispatch({
      type: actions.SET_USER,
      payload: initialState,
    });
  };

  return { user: context.state, setUser, clearUser };
};

export default useUser;
