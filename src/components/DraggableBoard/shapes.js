import PropTypes from "prop-types";

const itemShape = PropTypes.shape({
  id: PropTypes.number,
  type: PropTypes.string,
  title: PropTypes.string,
})

const columnShape = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  data: PropTypes.arrayOf(itemShape)
})

const columnsShape = PropTypes.arrayOf(columnShape)

export { itemShape, columnShape, columnsShape }