import { Flex } from "@chakra-ui/react";

import Notifications from "./Notifications";
import UserMenu from "./UserMenu";

const TopBar = () => {
  return (
    <Flex height="80px" alignItems="center" px={4}>
      <Flex alignItems="center" marginLeft="auto">
        <Notifications />
        <UserMenu />
      </Flex>
    </Flex>
  );
};

export default TopBar;
