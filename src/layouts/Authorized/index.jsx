import { Box, Grid, GridItem, Divider } from "@chakra-ui/react";

import TopBar from "./TopBar";
import Sidebar from "./Sidebar";

const Authorized = ({ children }) => {
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
        <Sidebar />
      </GridItem>
      <GridItem
        overflowY="scroll"
        px={9}
        pb={3}
        height="100%"
        bg="blackAlpha.500"
      >
        <TopBar />
        <Divider orientation="horizontal" borderColor="whiteAlpha.300" mb={6} />
        <Box color="white">{children}</Box>
      </GridItem>
    </Grid>
  );
};

export default Authorized;
