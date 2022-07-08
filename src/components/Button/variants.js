export default {
  default: {
    variant: "solid",
  },
  gray: {
    default: {
      colorScheme: "gray",
    },
    solid: {
      bgColor: "whiteAlpha.900",
      border: "1px solid transparent",
    },
    outline: {
      variant: "outline",
      textColor: "whiteAlpha.800",
      _hover: {
        textColor: "whiteAlpha.800",
        bgColor: "blackAlpha.400",
      },
      _active: {
        bgColor: "whiteAlpha.100",
      },
    },
  },
};
