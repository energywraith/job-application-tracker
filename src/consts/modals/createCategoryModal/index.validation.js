import * as yup from "yup";

export default yup.object().shape({
  name: yup.string().required("Name is not allowed to be empty."),
});
