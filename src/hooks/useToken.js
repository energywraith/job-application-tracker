import { useState } from "react";

const LS_TOKEN_NAME = "token";

const useToken = () => {
  const getToken = () => {
    const tokenString = localStorage.getItem(LS_TOKEN_NAME);
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };

  const [token, setToken] = useState(getToken());

  const hasToken = () => token !== null;

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
