import { Box } from "@chakra-ui/react";

import { backgroundShape } from "./index.shape";

const Background = ({ image }) => (
  <Box
    width="100%"
    minHeight="100vh"
    height="100%"
    bgImage={image}
    bgSize="cover"
    bgRepeat="no-repeat"
    opacity={0.5}
    position="absolute"
    filter="brightness(0.75)"
  />
);

Background.propTypes = backgroundShape;

export default Background;
