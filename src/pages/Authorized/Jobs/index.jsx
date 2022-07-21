import { useState } from "react";
import { Heading } from "@chakra-ui/react";
// import Table from "components/Table";
// import useJobs from "./useJobs";

import DraggableBoard from "components/DraggableBoard";

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

  return (
    <>
      <Heading fontSize="3xl">Hey, any updates on your hunting?</Heading>
      <DraggableBoard columns={jobs} onChange={setJobs} mt={12} />
    </>
  );
};

export default Jobs;
