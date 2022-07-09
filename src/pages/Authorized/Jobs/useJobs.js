import useFiltersManager from "hooks/useFiltersManager";
import useQueryWrapped from "hooks/useQueryWrapped";
import useUser from "hooks/useUser";
import Button from "components/Button";

const useJobs = () => {
  const { user } = useUser();
  //
  // TODO: Add loader to table when the data is being fetched
  //
  const [jobs] = useQueryWrapped({
    path: "jobs",
    fetchOnInit: true,
    defaultParams: {
      method: "GET",
      searchParams: { userId: user.id },
    },
  });

  const { filters, onFiltersChange } = useFiltersManager({
    new: false,
    gotOffer: false,
    refused: false,
    level: "all",
  });

  //
  // TODO: Separate checkbox fields could be changed to a checkboxGroup
  //
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
    {
      name: "level",
      type: "select",
      inputProps: {
        options: [
          { value: "all", label: "All" },
          { value: "hr", label: "HR" },
          { value: "technical", label: "Technical" },
          { value: "assigment", label: "Assigment" },
        ],
      },
    },
  ];

  const jobsPropertyNames = ["name", "level", "status"];

  return { filters, onFiltersChange, filterFields, jobsPropertyNames, jobs };
};

export default useJobs;
