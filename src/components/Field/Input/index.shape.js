import PropTypes from "prop-types";

const inputShape = {
  startAdornment: PropTypes.node,
  endAdornment: PropTypes.node,
  rest: PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
  }),
};

export { inputShape };
