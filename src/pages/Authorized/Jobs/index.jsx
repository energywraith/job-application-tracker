import { Heading } from "@chakra-ui/react";
import useTopbar from "hooks/useTopbar";
import DraggableBoard from "components/DraggableBoard";

import useJobs from "./useJobs";

const Jobs = () => {
  const { categories, isInitiallyLoaded } = useJobs();

  useTopbar(Heading, {
    size: "lg",
    color: "white",
    children: "Any updates?",
  });

  return (
    isInitiallyLoaded && (
      <DraggableBoard
        columns={categories}
        onChange={(e) => console.log(e)}
        height="100%"
        allowColumnsAdd
        allowColumnHeaderChange
      />
    )
  );
};

export default Jobs;
