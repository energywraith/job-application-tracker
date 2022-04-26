import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";

import useToken from "hooks/useToken";
import useQuery from "hooks/useQuery";
import useUser from "hooks/useUser";
import useErrorsHandling from "hooks/useErrorsHandling";

const Dashboard = () => {
  const navigate = useNavigate();
  const { clearToken } = useToken();
  const { clearUser } = useUser();
  const { sendQuery } = useQuery();
  const { handleResponseError } = useErrorsHandling;
  const [isLoading, setIsLoading] = useState(false);

  const onLogout = () => {
    setIsLoading(true);
    sendQuery("auth/sign-out", {
      method: "POST",
    })
      .then(() => {
        setIsLoading(false);
        clearToken();
        clearUser();
        navigate("/sign-in", { replace: true });
      })
      .catch((error) => {
        handleResponseError(error);
      });
  };
  return (
    <Button
      isLoading={isLoading}
      onClick={onLogout}
      colorScheme="blue"
      alignSelf="flex-end"
    >
      Logout
    </Button>
  );
};

export default Dashboard;
