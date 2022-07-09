import PropTypes from "prop-types";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

import Avatar from "components/Avatar";

const UserMenu = ({ onLogout }) => {
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

UserMenu.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default UserMenu;
