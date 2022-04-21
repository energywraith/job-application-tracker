import { Icon } from "@chakra-ui/react";
import { LockIcon } from "@chakra-ui/icons";
import { UserIcon } from "components/Icons";

const inputProps = {
  bgGradient: "linear(to-br, slateBlue.100, solidBlue.0)",
  borderColor: "whiteAlpha.300",
  paddingY: 6,
  color: "white",
  _hover: {
    borderColor: "whiteAlpha.400",
  },
};

export default [
  {
    name: "email",
    type: "text",
    inputProps: {
      ...inputProps,
      label: "Email address",
      placeholder: "Enter email address",
      startAdornment: (
        <Icon as={UserIcon} width={7} height={7} stroke="white" />
      ),
    },
  },
  {
    name: "password",
    type: "password",
    inputProps: {
      ...inputProps,
      label: "Password",
      placeholder: "Enter password",
      startAdornment: <Icon as={LockIcon} width={5} height={5} color="white" />,
    },
  },
];
