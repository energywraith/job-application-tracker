import { Heading } from "@chakra-ui/react";
import useTopbar from "hooks/useTopbar";
import DraggableBoard from "components/DraggableBoard";

import useJobs from "./useJobs";

const Jobs = () => {
  const {
    categories,
    createCategory,
    createJob,
    isInitiallyLoaded,
    isLoading,
  } = useJobs();

  useTopbar(Heading, {
    size: "lg",
    color: "white",
    children: "Any updates?",
  });

  return (
    isInitiallyLoaded && (
      <DraggableBoard
        columns={categories}
        preventActions={isLoading}
        height="100%"
        onItemAdd={createJob}
        onColumnAdd={createCategory}
        allowColumnsAdd
        allowColumnHeaderChange
      />
    )
  );
};

export default Jobs;
