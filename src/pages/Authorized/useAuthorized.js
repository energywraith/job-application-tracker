import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import useErrorsHandling from "hooks/useErrorsHandling";
import useUser from "hooks/useUser";
import useToken from "hooks/useToken";
import useAuth from "services/auth";
import useUsers from "services/users";

const useAuthorized = () => {
  const navigate = useNavigate();
  const { handleResponseError } = useErrorsHandling();
  const { user, setUser, clearUser } = useUser();
  const { clearToken } = useToken();
  const { Logout } = useAuth();
  const { User } = useUsers();

  const [isLoggingOut, setIsLoggingOut] = useState(false);

  useMemo(() => {
    if (!user.id) return;

    const fetchUser = async () => {
      try {
        const response = await User({ id: user.id });
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
      await Logout();

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
