import { Heading } from "@chakra-ui/react";
import useTopbar from "hooks/useTopbar";

const Dashboard = () => {
  useTopbar(Heading, { size: "xl", color: "white", children: "Dashboard" });

  return <div>Content</div>;
};

export default Dashboard;
