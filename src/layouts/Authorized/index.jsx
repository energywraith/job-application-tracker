import PropTypes from "prop-types";
import {
  Drawer,
  DrawerContent,
  Box,
  Flex,
  Divider,
  useDisclosure,
} from "@chakra-ui/react";

import noop from "utils/noop";

import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import { menuItemsShape } from "./index.shapes";

const Authorized = ({
  TopbarComponent,
  TopbarProps,
  children,
  menuItems,
  isLoading,
  onLogout,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex h="100vh" bg="solidBlue.800" overflow="hidden">
      <Box
        width="100%"
        height="100%"
        position="absolute"
        bgGradient="linear-gradient(to-tr, solidBlue.0, slateBlue.0)"
        left="0"
        top="0"
        zIndex={-1}
      />

      {/* DESKTOP SIDEBAR */}
      <Sidebar
        menuItems={menuItems}
        isLoading={isLoading}
        onLogout={onLogout}
        display={{ base: "none", md: "block" }}
        pos="relative"
        boxShadow="0 0.3px 0.3px black"
      />

      {/* MOBILE SIDEBAR */}
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent transition="0.1s linear" display={{ md: "none" }}>
          <Sidebar
            menuItems={menuItems}
            isLoading={isLoading}
            onLogout={onLogout}
            onClose={onClose}
            pos="fixed"
            bg="blackAlpha.900"
          />
        </DrawerContent>
      </Drawer>

      {/* BODY */}
      <Flex
        direction="column"
        bg="blackAlpha.500"
        overflow="auto"
        flex="1"
        px={9}
      >
        <Topbar
          onLogout={onLogout}
          TopbarComponent={TopbarComponent}
          TopbarProps={TopbarProps}
          onOpen={onOpen}
        />
        <Divider orientation="horizontal" borderColor="whiteAlpha.300" mb={6} />
        <Box color="white">{children}</Box>
      </Flex>
    </Flex>
  );
};

Authorized.propTypes = {
  TopbarComponent: PropTypes.elementType,
  TopbarProps: PropTypes.shape({}),
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  menuItems: menuItemsShape,
  onLogout: PropTypes.func,
};

Authorized.defaultProps = {
  TopbarComponent: null,
  TopbarProps: {},
  children: null,
  isLoading: false,
  menuItems: [],
  onLogout: noop,
};

export default Authorized;
