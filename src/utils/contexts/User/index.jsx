import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

import getLocalStorageItem from "utils/getLocalStorageItem";
import { LS_USER_NAME } from "consts/localStorageItems";

import reducer from "./reducer";

const initialState = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  role: "",
};

const UserContext = createContext();

const propTypes = {
  children: PropTypes.node.isRequired,
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    reducer,
    getLocalStorageItem(LS_USER_NAME) || initialState
  );

  const value = { state, dispatch };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

UserProvider.propTypes = propTypes;

export default UserProvider;

export { UserContext, initialState };
