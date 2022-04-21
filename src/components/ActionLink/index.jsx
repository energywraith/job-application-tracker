import { Link as RouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { actionLinkShape } from "./index.shape";

const ActionLink = ({ textContent, to }) => (
  <ChakraLink
    as={RouterLink}
    to={to}
    color="discoCyan.800"
    _hover={{
      textDecoration: "none",
      color: "discoCyan.600",
    }}
  >
    {textContent}
  </ChakraLink>
);

ActionLink.propTypes = actionLinkShape;

export default ActionLink;
