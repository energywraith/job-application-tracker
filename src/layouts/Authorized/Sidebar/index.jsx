import PropTypes from "prop-types";
import { Box } from "@chakra-ui/react";

import Brand from "components/Brand";

import { menuItemsShape } from "layouts/Authorized/index.shapes";
import Menu from "./Menu";
import LogoutButton from "./LogoutButton";

const Sidebar = ({ menuItems, isLoading, onLogout }) => {
  return (
    <Box display="flex" flexDirection="column" pt={3}>
      <Brand />
      <Menu items={menuItems} />
      <LogoutButton isLoading={isLoading} onLogout={onLogout} />
    </Box>
  );
};

Sidebar.propTypes = {
  onLogout: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  menuItems: menuItemsShape,
};

Sidebar.defaultProps = {
  isLoading: false,
  menuItems: [],
};

export default Sidebar;
