import Button from "components/Button";
import useFiltersManager from "hooks/useFiltersManager";

const useJobs = () => {
  const { filters, onFiltersChange } = useFiltersManager({
    new: false,
    gotOffer: false,
    refused: false,
  });

  const checkboxFieldInputProps = {
    inputProps: {
      CustomComponent: Button,
      customComponentProps: ({ isChecked }) => ({
        color: "gray",
        variant: isChecked ? "solid" : "outline",
        children: "New",
      }),
    },
  };

  const filterFields = [
    {
      name: "new",
      type: "checkbox",
      ...checkboxFieldInputProps,
    },
    {
      name: "gotOffer",
      type: "checkbox",
      ...checkboxFieldInputProps,
    },
    {
      name: "refused",
      type: "checkbox",
      ...checkboxFieldInputProps,
    },
    // {
    //   name: "level",
    //   type: "select",
    //   inputProps: {
    //     options: ["All", "HR", "Technical", "Waiting"],
    //   },
    // },
  ];

  const jobsPropertyNames = ["name", "surname", "age"];

  const jobs = [
    { name: "John", surname: "Smith", age: 42 },
    { name: "Saint", surname: "Carol", age: 20 },
  ];

  return { filters, onFiltersChange, filterFields, jobsPropertyNames, jobs };
};

export default useJobs;
