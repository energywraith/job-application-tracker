import { Icon } from "@chakra-ui/react";
import { LockIcon } from "@chakra-ui/icons";
import UserIcon from "remixicon-react/User3LineIcon";

export default [
  {
    name: "email",
    type: "text",
    inputProps: {
      label: "Email address",
      placeholder: "Enter email address",
      startAdornment: (
        <Icon as={UserIcon} fontSize={20} strokeWidth={1} stroke="white" />
      ),
    },
  },
  {
    name: "password",
    type: "password",
    inputProps: {
      label: "Password",
      placeholder: "Enter password",
      startAdornment: <Icon as={LockIcon} width={5} height={5} color="white" />,
    },
  },
];
