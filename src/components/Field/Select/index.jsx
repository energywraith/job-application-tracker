import PropTypes from "prop-types";
import { Select as ChakraSelect } from "@chakra-ui/react";
import { forwardRef } from "react";

const Select = forwardRef(({ placeholder, options, ...rest }, ref) => (
  <ChakraSelect placeholder={placeholder} ref={ref} {...rest} color="white">
    {options.map(({ value, label }) => (
      <option key={value} value={value}>
        {label}
      </option>
    ))}
  </ChakraSelect>
));

Select.propTypes = {
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
};

Select.defaultProps = {
  placeholder: "",
  options: [],
};

export default Select;
