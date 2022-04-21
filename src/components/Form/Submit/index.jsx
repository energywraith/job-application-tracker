import { Button } from "@chakra-ui/react";

import { submitShape } from "./index.shape";

const Submit = ({ buttonProps, isLoading, loadingText, submitText }) => (
  <Button
    isLoading={isLoading}
    loadingText={loadingText}
    mt="10"
    colorScheme="blue"
    type="submit"
    alignSelf="flex-end"
    {...buttonProps}
  >
    {submitText}
  </Button>
);

Submit.propTypes = submitShape;

Submit.defaultProps = {
  buttonProps: {},
  isLoading: false,
  loadingText: "",
  submitText: "Submit",
};

export default Submit;
