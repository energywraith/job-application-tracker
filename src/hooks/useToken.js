import { useState } from "react";

import getLocalStorageItem from "utils/getLocalStorageItem";
import { LS_TOKEN_NAME } from "consts/localStorageItems";

const useToken = () => {
  const LS_TOKEN = getLocalStorageItem(LS_TOKEN_NAME)?.token;

  const [token, setToken] = useState(LS_TOKEN);

  const hasToken = () => token !== null && token !== undefined;

  const saveToken = (userToken) => {
    localStorage.setItem(LS_TOKEN_NAME, JSON.stringify(userToken));
    setToken(userToken);
  };

  const clearToken = () => {
    localStorage.setItem(LS_TOKEN_NAME, null);
    setToken(null);
  };

  return {
    setToken: saveToken,
    hasToken,
    clearToken,
    token,
  };
};

export default useToken;
