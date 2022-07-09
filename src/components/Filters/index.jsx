import PropTypes from "prop-types";

import Form from "components/Form";
import noop from "utils/noop";

const Filters = ({ filterFields, filters, onChange }) => (
  <Form
    fields={filterFields}
    defaultValues={filters}
    onChange={onChange}
    horizontal
  />
);

Filters.propTypes = {
  filters: PropTypes.shape({}),
  filterFields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.oneOf(["checkbox", "select"]),
      inputProps: PropTypes.shape({
        label: PropTypes.string,
        CustomComponent: PropTypes.elementType,
        customComponentProps: PropTypes.oneOfType([
          PropTypes.func,
          PropTypes.shape({}),
        ]),
      }),
    })
  ),
  onChange: PropTypes.func,
};

Filters.defaultProps = {
  filters: {},
  filterFields: [],
  onChange: noop,
};

export default Filters;
