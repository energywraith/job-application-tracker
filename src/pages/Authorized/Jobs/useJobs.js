const useJobs = () => {
  const filters = [
    "New",
    "Got offer",
    "Refused",
    "Select(All/HR/Technical/Waiting)",
  ];

  const jobsPropertyNames = ["name", "surname", "age"];

  const jobs = [
    { name: "John", surname: "Smith", age: 42 },
    { name: "Saint", surname: "Carol", age: 20 },
  ];

  return { filters, jobsPropertyNames, jobs };
};

export default useJobs;
