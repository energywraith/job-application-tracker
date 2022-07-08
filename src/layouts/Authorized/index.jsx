import PropTypes from "prop-types";
import { Box, Grid, GridItem, Divider } from "@chakra-ui/react";

import noop from "utils/noop";

import { menuItemsShape } from "./index.shapes";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

const Authorized = ({
  TopbarComponent,
  TopbarProps,
  children,
  menuItems,
  isLoading,
  onLogout,
}) => {
  return (
    <Grid
      h="100vh"
      templateColumns="auto 1fr"
      templateRows="1fr"
      bg="solidBlue.800"
      position="relative"
    >
      <Box
        width="100%"
        height="100%"
        position="absolute"
        bgGradient="linear-gradient(to-tr, solidBlue.0, slateBlue.0)"
        left="0"
        top="0"
        zIndex={-1}
      />
      <GridItem
        rowSpan={2}
        w={260}
        bg="blackAlpha.700"
        overflowY="auto"
        boxShadow="0 0.3px 0.3px black"
      >
        <Sidebar
          menuItems={menuItems}
          isLoading={isLoading}
          onLogout={onLogout}
        />
      </GridItem>
      <GridItem
        overflowY="scroll"
        px={9}
        pb={3}
        height="100%"
        bg="blackAlpha.500"
      >
        <Topbar
          onLogout={onLogout}
          TopbarComponent={TopbarComponent}
          TopbarProps={TopbarProps}
        />
        <Divider orientation="horizontal" borderColor="whiteAlpha.300" mb={6} />
        <Box color="white">{children}</Box>
      </GridItem>
    </Grid>
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
