import { Heading } from "@chakra-ui/react";
import useTopbar from "hooks/useTopbar";

const Dashboard = () => {
  useTopbar(Heading, { size: "lg", color: "white", children: "Dashboard" });

  return <div>Content</div>;
};

export default Dashboard;
