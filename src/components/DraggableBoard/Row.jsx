import PropTypes from "prop-types";
import { Box } from "@chakra-ui/react";

const Row = ({ children }) => {
  return (
    <Box
      display="grid"
      gridAutoFlow="column"
      gridTemplateColumns="repeat(auto-fill, 300px)"
      height="100%"
    >
      {children}
    </Box>
  );
};

Row.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Row;
