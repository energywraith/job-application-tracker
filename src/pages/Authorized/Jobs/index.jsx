import { Heading } from "@chakra-ui/react";
import Table from "components/Table";
import useJobs from "./useJobs";

const Jobs = () => {
  const { filters, jobsPropertyNames, jobs } = useJobs();

  return (
    <>
      <Heading fontSize="3xl">Hey, any updates on your hunting?</Heading>
      <Table
        chakraProps={{ mt: 6 }}
        data={jobs}
        propertyNames={jobsPropertyNames}
        filters={filters}
      />
    </>
  );
};

export default Jobs;
