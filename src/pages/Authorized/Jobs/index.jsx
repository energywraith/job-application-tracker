import { useState } from "react";
import { Heading } from "@chakra-ui/react";
// import Table from "components/Table";
// import useJobs from "./useJobs";

import DraggableBoard from "components/DraggableBoard";
import useTopbar from "hooks/useTopbar";

import jobsMock from "./jobs.mock";

// <Table
//   chakraProps={{ mt: 6 }}
//   data={jobs}
//   propertyNames={jobsPropertyNames}
//   filterFields={filterFields}
//   filters={filters}
//   onFiltersChange={onFiltersChange}
// />

const Jobs = () => {
  // const { filters, onFiltersChange, filterFields, jobsPropertyNames, jobs } =
  //   useJobs();
  const [jobs, setJobs] = useState(jobsMock);
  useTopbar(Heading, {
    size: "lg",
    color: "white",
    children: "Any updates?",
  });

  return (
    <DraggableBoard columns={jobs} onChange={setJobs} mt={3} width="100%" />
  );
};

export default Jobs;
