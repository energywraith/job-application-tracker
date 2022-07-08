import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

import reducer from "./reducer";

const initialState = {
  Component: null,
  props: {},
};

const TopbarContext = createContext();

const propTypes = {
  children: PropTypes.node.isRequired,
};

const TopbarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };

  return (
    <TopbarContext.Provider value={value}>{children}</TopbarContext.Provider>
  );
};

TopbarProvider.propTypes = propTypes;

export default TopbarProvider;

export { TopbarContext, initialState };
