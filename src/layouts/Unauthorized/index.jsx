import { Box } from "@chakra-ui/react";
import Page from "components/Page";
import backgroundJPEG from "assets/login-form-bg.jpg";
import { unauthorizedShape } from "./index.shape";

const Unauthorized = ({ children }) => (
  <Page bgImage={backgroundJPEG}>
    <Box
      h="100vh"
      bgGradient="linear(to-tr, solidBlue.900, solidBlue.900)"
      justifyContent="left"
    >
      <Box
        display="flex"
        flexDirection="column"
        position="relative"
        justifyContent="center"
        paddingX={{ base: 6, md: 9 }}
        paddingTop={16}
        h="100%"
        paddingBottom={16}
        boxShadow="0px 0px 3px rgba(0, 0, 0, 0.2)"
        width={{ base: "100%", md: "50%", xl: "40%", "2xl": "30%" }}
        bgGradient="linear(to-br, rose.100, solidBlue.0)"
        backdropFilter="blur(4px)"
        color="white"
      >
        {children}
      </Box>
    </Box>
  </Page>
);

Unauthorized.propTypes = unauthorizedShape;

export default Unauthorized;
