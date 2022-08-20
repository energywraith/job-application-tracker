import Form from "components/Form";
import fields from "./index.fields";
import validation from "./index.validation";

const createJobModal = (props) => ({
  header: "Add Column",
  body: ({ resolve, close }) => (
    <Form
      fields={fields}
      validationSchema={validation}
      onSubmit={async (values, methods) => {
        const response = await props.onSubmit(values, methods);

        if (response) {
          resolve(response);
          close();
        }
      }}
      submitText="Add"
    />
  ),
});

export default createJobModal;
