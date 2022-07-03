import { SettingsIcon } from "@chakra-ui/icons";
import DashboardFillIcon from "remixicon-react/DashboardFillIcon";
import ListUnorderedIcon from "remixicon-react/ListUnorderedIcon";

const menuItems = [
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

export { menuItems };
