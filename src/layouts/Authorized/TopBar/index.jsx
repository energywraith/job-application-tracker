import PropTypes from "prop-types";
import { Flex } from "@chakra-ui/react";

import Notifications from "./Notifications";
import UserMenu from "./UserMenu";

const Topbar = ({ onLogout, TopbarComponent, TopbarProps }) => {
  return (
    <Flex height="80px" alignItems="center">
      {TopbarComponent && <TopbarComponent {...TopbarProps} />}
      <Flex alignItems="center" marginLeft="auto">
        <Notifications />
        <UserMenu onLogout={onLogout} />
      </Flex>
    </Flex>
  );
};

Topbar.propTypes = {
  onLogout: PropTypes.func.isRequired,
  TopbarComponent: PropTypes.elementType,
  TopbarProps: PropTypes.shape({}),
};

Topbar.defaultProps = {
  TopbarComponent: null,
  TopbarProps: {},
};

export default Topbar;
