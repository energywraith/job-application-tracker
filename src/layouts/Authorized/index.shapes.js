import PropTypes from "prop-types";

const menuItemShape = {
  id: PropTypes.string,
  title: PropTypes.string,
  Icon: PropTypes.elementType,
  match: PropTypes.string,
};

const menuItemsShape = PropTypes.arrayOf(PropTypes.shape(menuItemShape));

export { menuItemShape, menuItemsShape };
