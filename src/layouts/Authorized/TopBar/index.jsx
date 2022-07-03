import PropTypes from "prop-types";
import { Flex } from "@chakra-ui/react";

import Notifications from "./Notifications";
import UserMenu from "./UserMenu";

const TopBar = ({ onLogout }) => {
  return (
    <Flex height="80px" alignItems="center" px={4}>
      <Flex alignItems="center" marginLeft="auto">
        <Notifications />
        <UserMenu onLogout={onLogout} />
      </Flex>
    </Flex>
  );
};

TopBar.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default TopBar;
