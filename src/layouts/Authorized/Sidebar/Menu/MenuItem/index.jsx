import { Link } from "react-router-dom";
import { Box, Flex, Icon as ChakraIcon, Text } from "@chakra-ui/react";

import { menuItemShape } from "layouts/Authorized/index.shapes";

const MenuItem = ({ Icon, title, path, isActive }) => {
  const activeWrapperStyles = {
    cursor: "default",
    boxShadow: "sm",
  };

  const wrapperConditionalStyles = isActive && activeWrapperStyles;
  const backgroundConditionalStyles = isActive
    ? { opacity: 1 }
    : { _hover: { opacity: 0.5 } };

  return (
    <Link to={path}>
      <Flex
        py={5}
        alignItems="center"
        boxSizing="content-box"
        cursor="pointer"
        transition="border-width 0, border-color 200ms"
        position="relative"
        {...wrapperConditionalStyles}
      >
        <Box
          position="absolute"
          width="100%"
          height="100%"
          left="0"
          top="0"
          bgGradient="linear-gradient(to-r, transparent -20%, slateBlue.200 60%)"
          transition="opacity 300ms, border-color 200ms"
          opacity="0"
          {...backgroundConditionalStyles}
        />
        <Flex flexBasis="20%">
          <ChakraIcon
            as={Icon}
            color="slateBlue.900"
            fontSize={20}
            marginLeft="auto"
          />
        </Flex>
        <Text color="white" ml={3} fontWeight="500">
          {title}
        </Text>
      </Flex>
    </Link>
  );
};

MenuItem.propTypes = menuItemShape;

MenuItem.defaultProps = {
  id: "",
  title: "",
  Icon: undefined,
  match: "",
};

export default MenuItem;
