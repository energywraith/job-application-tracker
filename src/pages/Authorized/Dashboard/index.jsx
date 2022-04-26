import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";

import useToken from "hooks/useToken";
import useQuery from "hooks/useQuery";

const Dashboard = () => {
  const navigate = useNavigate();
  const { clearToken } = useToken();
  const { sendQuery } = useQuery();
  const [isLoading, setIsLoading] = useState(false);

  const onLogout = () => {
    setIsLoading(true);
    sendQuery("auth/sign-out", {
      method: "POST",
    })
      .then(() => {
        setIsLoading(false);
        clearToken();
        navigate("/sign-in", { replace: true });
      })
      .catch((error) => {
        console.log(error);
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
