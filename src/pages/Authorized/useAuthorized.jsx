import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import useQuery from "hooks/useQuery";
import useErrorsHandling from "hooks/useErrorsHandling";
import useUser from "hooks/useUser";
import useToken from "hooks/useToken";

const useAuthorized = () => {
  const navigate = useNavigate();
  const { sendQuery } = useQuery();
  const { handleResponseError } = useErrorsHandling();
  const { user, setUser, clearUser } = useUser();
  const { clearToken } = useToken();

  const [isLoggingOut, setIsLoggingOut] = useState(false);

  useMemo(() => {
    if (!user.id) return;

    const fetchUser = async () => {
      try {
        const response = await sendQuery(`users/${user.id}`);
        setUser(response);
      } catch (error) {
        handleResponseError(error);
      }
    };

    fetchUser();
  }, [user.id]);

  const onLogout = async () => {
    setIsLoggingOut(true);

    try {
      await sendQuery("auth/sign-out", {
        method: "POST",
      });

      clearToken();
      clearUser();
      setIsLoggingOut(false);
      navigate("/sign-in", { replace: true });
    } catch (error) {
      handleResponseError(error);
    }
  };

  return { isLoggingOut, onLogout };
};

export default useAuthorized;
