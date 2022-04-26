import { useContext, useEffect } from "react";

import useQuery from "hooks/useQuery";
import { LS_USER_NAME } from "consts/localStorageItems";

import { UserContext, initialState } from "utils/contexts/User";
import { actions } from "utils/contexts/User/reducer";

const useUser = () => {
  const context = useContext(UserContext);
  const { sendQuery } = useQuery();

  const userID = context.state.id;

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

  const fetchUser = () => {
    if (userID !== "") {
      sendQuery(`users/${userID}`).then((response) => {
        setUser(response);
      });
    }
  };

  const clearUser = () => {
    localStorage.setItem(LS_USER_NAME, null);

    return context.dispatch({
      type: actions.SET_USER,
      payload: initialState,
    });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return { user: context.state, setUser, clearUser };
};

export default useUser;
