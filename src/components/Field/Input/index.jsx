import { forwardRef } from "react";
import PropTypes from "prop-types";
import {
  InputGroup,
  Input as InputCore,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";

import noop from "utils/noop";

import { inputShape } from "./index.shape";

const Input = forwardRef(({ startAdornment, endAdornment, ...rest }, ref) => {
  const adornmentProps = {
    pointerEvents: "none",
    height: "100%",
  };

  return (
    <InputGroup>
      {startAdornment && (
        <InputLeftElement {...adornmentProps} children={startAdornment} />
      )}
      <InputCore {...rest} ref={ref} />
      {endAdornment && (
        <InputRightElement {...adornmentProps} children={endAdornment} />
      )}
    </InputGroup>
  );
});

Input.propTypes = inputShape;

Input.defaultProps = {
  startAdornment: null,
  endAdornment: null,
  rest: {
    id: "",
    type: "text",
    name: "",
    onBlur: noop,
    onChange: noop,
  },
};

export default Input;
