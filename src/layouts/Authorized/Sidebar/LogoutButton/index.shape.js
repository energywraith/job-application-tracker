import PropTypes from "prop-types";

const logoutButtonShape = {
  isLoading: PropTypes.bool,
  onLogout: PropTypes.func.isRequired,
};

export { logoutButtonShape };
