import { Box, Text } from "@chakra-ui/react";

const Brand = () => (
  <Box
    h={100}
    display="flex"
    alignItems="center"
    justifyContent="center"
    color="white"
    fontSize="5xl"
    textShadow="1px 1px 3px rgba(0, 0, 0, 100%)"
  >
    <Text color="slateBlue.700">J</Text>
    <Text color="cyan.600">A</Text>
    <Text color="rose.800" transform="translateX(-10%)">
      T
    </Text>
  </Box>
);

export default Brand;
