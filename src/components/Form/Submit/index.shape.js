import PropTypes from "prop-types";

const submitShape = {
  buttonProps: PropTypes.shape({}),
  isLoading: PropTypes.bool,
  loadingText: PropTypes.string,
  submitText: PropTypes.string,
};

export { submitShape };
