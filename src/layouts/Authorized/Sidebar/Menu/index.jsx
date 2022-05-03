import { useLocation } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";
import DashboardFillIcon from "remixicon-react/DashboardFillIcon";
import ListUnorderedIcon from "remixicon-react/ListUnorderedIcon";

import MenuItem from "./MenuItem";

const Menu = () => {
  const { pathname } = useLocation();

  const dashboardSections = [
    {
      id: "dashboard",
      title: "Dashboard",
      Icon: DashboardFillIcon,
      match: "/app",
    },
    {
      id: "jobApplications",
      title: "Job applications",
      Icon: ListUnorderedIcon,
      match: "/app/jobs",
    },
    {
      id: "settings",
      title: "Settings",
      Icon: SettingsIcon,
      match: "/app/settings",
    },
  ];

  const activeSection = dashboardSections.find(
    (section) => section.match === pathname
  );
  const activeSectionID = activeSection?.id;

  return (
    <Flex direction="column" mt={3}>
      {dashboardSections.map((section) => (
        <MenuItem
          key={section.id}
          Icon={section.Icon}
          title={section.title}
          path={section.match}
          isActive={section.id === activeSectionID}
        />
      ))}
    </Flex>
  );
};

export default Menu;
