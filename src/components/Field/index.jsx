import { forwardRef } from "react";

import noop from "utils/noop";

import map from "./map";
import { fieldShape } from "./index.shape";

const Field = forwardRef((props, ref) => {
  const ProvidedComponent = map[props.type];

  return (
    <ProvidedComponent
      {...props.inputProps}
      id={props.name}
      type={props.type}
      name={props.name}
      onBlur={props.onBlur}
      onChange={props.onChange}
      ref={ref}
    />
  );
});

Field.propTypes = fieldShape;

Field.defaultProps = {
  inputProps: {},
  onBlur: noop,
  onChange: noop,
};

export default Field;
