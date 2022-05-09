import { Button, Icon } from "@chakra-ui/react";

import { LogoutIcon } from "components/Icons";

import { logoutButtonShape } from "./index.shape";

const LogoutButton = ({ isLoading, onLogout }) => (
  <Button
    isLoading={isLoading}
    onClick={onLogout}
    leftIcon={
      <Icon as={LogoutIcon} width={6} height={6} stroke="slateBlue.600" />
    }
    alignSelf="center"
    variant="outline"
    color="white"
    borderColor="slateBlue.600"
    width="100%"
    mt="12"
    maxWidth={200}
    borderWidth={2}
    borderRadius={20}
    py={5}
    _hover={{
      background: "slateBlue.100",
    }}
    _active={{
      background: "slateBlue.200",
    }}
  >
    Log out
  </Button>
);

LogoutButton.propTypes = logoutButtonShape;

LogoutButton.defaultProps = {
  isLoading: false,
};

export default LogoutButton;
