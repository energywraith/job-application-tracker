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

export default Select;
