import { forwardRef } from "react";
import { useCheckbox, Checkbox as ChakraCheckbox, Box } from "@chakra-ui/react";

const Checkbox = forwardRef(
  (
    { name, CustomComponent, customComponentProps, defaultValue, onChange },
    ref
  ) => {
    const { state, getCheckboxProps, getInputProps } = useCheckbox({
      name,
      onChange,
      defaultChecked: defaultValue,
    });

    const checkbox = getCheckboxProps({ value: name });
    const inputProps = getInputProps();

    return (
      <Box as="label">
        <input {...inputProps} ref={ref} />
        <Box {...checkbox} cursor="pointer" width="fit-content">
          <Box pointerEvents="none">
            {CustomComponent ? (
              <CustomComponent
                {...(typeof customComponentProps === "function"
                  ? customComponentProps(state)
                  : customComponentProps)}
              />
            ) : (
              <ChakraCheckbox isChecked={state.isChecked} />
            )}
          </Box>
        </Box>
      </Box>
    );
  }
);

export default Checkbox;
