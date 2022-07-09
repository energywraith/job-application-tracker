import { forwardRef } from "react";
import { PropTypes } from "prop-types";
import { Button as ChakraButton } from "@chakra-ui/react";
import noop from "utils/noop";

import variants from "./variants";

const Button = forwardRef(
  ({ type, color, variant, onClick, chakraProps, children }, ref) => (
    <ChakraButton
      {...variants[color][variant]}
      {...chakraProps}
      type={type}
      onClick={onClick}
      ref={ref}
    >
      {children}
    </ChakraButton>
  )
);

Button.propTypes = {
  type: PropTypes.string,
  variant: PropTypes.oneOf(["default", "solid", "outline"]),
  color: PropTypes.oneOf(["default", "gray"]),
  chakraProps: PropTypes.shape({}),
  children: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: "button",
  color: "default",
  variant: "default",
  chakraProps: {},
  children: "",
  onClick: noop,
};

export default Button;
