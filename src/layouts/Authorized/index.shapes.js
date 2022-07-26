import PropTypes from "prop-types";

const menuItemShape = {
  id: PropTypes.string,
  title: PropTypes.string,
  Icon: PropTypes.elementType,
  match: PropTypes.string,
  onClick: PropTypes.func,
};

const menuItemsShape = PropTypes.arrayOf(PropTypes.shape(menuItemShape));

export { menuItemShape, menuItemsShape };
