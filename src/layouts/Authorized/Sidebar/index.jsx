import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import useToken from "hooks/useToken";
import useQuery from "hooks/useQuery";
import useUser from "hooks/useUser";
import useErrorsHandling from "hooks/useErrorsHandling";
import Brand from "components/Brand";

import Menu from "./Menu";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
  const navigate = useNavigate();
  const { clearToken } = useToken();
  const { clearUser } = useUser();
  const { sendQuery } = useQuery();
  const { handleResponseError } = useErrorsHandling();
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
    <Box display="flex" flexDirection="column" pt={3}>
      <Brand />
      <Menu />
      <LogoutButton isLoading={isLoading} onLogout={onLogout} />
    </Box>
  );
};

export default Sidebar;
