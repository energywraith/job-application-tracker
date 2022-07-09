import PropTypes from "prop-types";
import { fieldShape } from "components/Field/index.shape";

const formShape = {
  fields: PropTypes.arrayOf(PropTypes.shape(fieldShape)),
  validationSchema: PropTypes.shape({}),
  defaultValues: PropTypes.shape({}),
  formWrapperProps: PropTypes.shape({}),
  buttonProps: PropTypes.shape({}),
  loadingText: PropTypes.string,
  submitText: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

export { formShape };
