import Form from "components/Form";
import fields from "./index.fields";
import validation from "./index.validation";

const CreateJobModal = {
  header: "Add Job",
  body: ({ resolve }) => (
    <Form
      fields={fields}
      validationSchema={validation}
      onSubmit={resolve}
      submitText="Add"
    />
  ),
};

export default CreateJobModal;
