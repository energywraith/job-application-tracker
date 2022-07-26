import PropTypes from "prop-types";
import { Box, IconButton } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import noop from "utils/noop";

import Brand from "components/Brand";

import { menuItemsShape } from "layouts/Authorized/index.shapes";
import Menu from "./Menu";
import LogoutButton from "./LogoutButton";

const Sidebar = ({ menuItems, isLoading, onLogout, onClose, ...rest }) => {
  return (
    <Box
      transition="0s"
      w={{ base: "full", md: 260 }}
      h="full"
      bg="blackAlpha.700"
      {...rest}
    >
      <Box display="flex" flexDirection="column" pt={{ md: 3 }} height="full">
        <Box h={100} position="relative">
          <IconButton
            as={CloseIcon}
            variant="link"
            display={{ md: "none" }}
            position="absolute"
            transform="translateY(-50%)"
            top="50%"
            right={6}
            onClick={onClose}
            bg="transparent"
            color="whiteAlpha.900"
            cursor="pointer"
            p={4}
            height={14}
          />
          <Brand />
        </Box>
        <Menu items={menuItems} closeSidebar={onClose} />
        <LogoutButton isLoading={isLoading} onLogout={onLogout} />
      </Box>
    </Box>
  );
};

Sidebar.propTypes = {
  onLogout: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  menuItems: menuItemsShape,
  rest: PropTypes.shape({}),
  onClose: PropTypes.func,
};

Sidebar.defaultProps = {
  isLoading: false,
  menuItems: [],
  rest: {},
  onClose: noop,
};

export default Sidebar;
