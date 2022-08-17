import { forwardRef } from "react";
import { PropTypes } from "prop-types";
import { Button as ChakraButton } from "@chakra-ui/react";
import noop from "utils/noop";

import variants from "./variants";

const Button = forwardRef(
  ({ type, color, variant, Icon, onClick, chakraProps, children }, ref) => (
    <ChakraButton
      {...variants[color][variant]}
      justifyContent={!!Icon ? "space-between" : "center"}
      alignItems="center"
      {...chakraProps}
      type={type}
      onClick={onClick}
      ref={ref}
    >
      {children}
      {Icon ? <Icon /> : null}
    </ChakraButton>
  )
);

Button.propTypes = {
  type: PropTypes.string,
  variant: PropTypes.oneOf(["default", "solid", "outline", "link"]),
  color: PropTypes.oneOf(["default", "gray", "lightblue"]),
  chakraProps: PropTypes.shape({}),
  Icon: PropTypes.shape({}),
  children: PropTypes.node,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: "button",
  color: "default",
  variant: "default",
  chakraProps: {},
  Icon: null,
  children: "",
  onClick: noop,
};

export default Button;
