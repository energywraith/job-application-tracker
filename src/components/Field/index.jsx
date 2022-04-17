import React from "react";
import PropTypes from "prop-types";
import map from "./map";

const Field = React.forwardRef((props, ref) => {
  const ProvidedComponent = map[props.type];

  return (
    <ProvidedComponent
      {...props.inputProps}
      type={props.type}
      name={props.name}
      onBlur={props.onBlur}
      onChange={props.onChange}
      ref={ref}
    />
  );
});

Field.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Field;
