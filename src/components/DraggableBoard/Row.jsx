import PropTypes from "prop-types";
import { Box } from "@chakra-ui/react";

const Row = ({ children }) => {
  return <Box display="flex">{children}</Box>;
};

Row.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Row;
