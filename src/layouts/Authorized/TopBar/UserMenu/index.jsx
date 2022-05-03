import { useNavigate } from "react-router-dom";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

import useToken from "hooks/useToken";
import useUser from "hooks/useUser";
import useQuery from "hooks/useQuery";
import useErrorsHandling from "hooks/useErrorsHandling";
import Avatar from "components/Avatar";

const UserMenu = () => {
  const navigate = useNavigate();
  const { clearToken } = useToken();
  const { clearUser } = useUser();
  const { sendQuery } = useQuery();
  const { handleResponseError } = useErrorsHandling();

  const onLogout = () =>
    sendQuery("auth/sign-out", {
      method: "POST",
    })
      .then(() => {
        clearToken();
        clearUser();
        navigate("/sign-in", { replace: true });
      })
      .catch((error) => {
        handleResponseError(error);
      });
  return (
    <Menu>
      <MenuButton>
        <Avatar />
      </MenuButton>
      <MenuList>
        <MenuItem closeOnSelect isDisabled>
          Account settings
        </MenuItem>
        <MenuItem closeOnSelect onClick={onLogout}>
          Log out
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserMenu;
