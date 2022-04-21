import PropTypes from "prop-types";

const fieldShape = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  inputProps: PropTypes.shape({}),
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
};

export { fieldShape };
