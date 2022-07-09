import Button from "components/Button";
import useFiltersManager from "hooks/useFiltersManager";

const useJobs = () => {
  const { filters, onFiltersChange } = useFiltersManager({
    new: false,
    gotOffer: false,
    refused: false,
  });

  const filterFields = [
    {
      name: "new",
      type: "checkbox",
      inputProps: {
        CustomComponent: Button,
        customComponentProps: ({ isChecked }) => ({
          color: "gray",
          variant: isChecked ? "solid" : "outline",
          children: "New",
        }),
      },
    },
    {
      name: "gotOffer",
      type: "checkbox",
      inputProps: {
        CustomComponent: Button,
        customComponentProps: ({ isChecked }) => ({
          color: "gray",
          variant: isChecked ? "solid" : "outline",
          children: "Got offer",
        }),
      },
    },
    {
      name: "refused",
      type: "checkbox",
      inputProps: {
        CustomComponent: Button,
        customComponentProps: ({ isChecked }) => ({
          color: "gray",
          variant: isChecked ? "solid" : "outline",
          children: "Refused",
        }),
      },
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
