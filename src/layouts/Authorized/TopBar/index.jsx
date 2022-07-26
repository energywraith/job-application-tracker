import PropTypes from "prop-types";
import { Flex, IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import Notifications from "./Notifications";
import UserMenu from "./UserMenu";

const Topbar = ({ onLogout, onOpen, TopbarComponent, TopbarProps }) => {
  return (
    <Flex
      pos="relative"
      height="80px"
      alignItems="center"
      width="100%"
      justifyContent={{ base: "space-between", md: "unset" }}
    >
      <IconButton
        as={HamburgerIcon}
        variant="link"
        display={{ md: "none" }}
        onClick={onOpen}
        bg="transparent"
        color="whiteAlpha.900"
        cursor="pointer"
        p={3}
        ml={-3}
        height={14}
      />
      {TopbarComponent && <TopbarComponent {...TopbarProps} />}
      <Flex alignItems="center" ml={{ md: "auto" }}>
        <Notifications />
        <UserMenu onLogout={onLogout} />
      </Flex>
    </Flex>
  );
};

Topbar.propTypes = {
  onLogout: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired,
  TopbarComponent: PropTypes.elementType,
  TopbarProps: PropTypes.shape({}),
};

Topbar.defaultProps = {
  TopbarComponent: null,
  TopbarProps: {},
};

export default Topbar;
