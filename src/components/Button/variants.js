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
    link: {
      variant: 'link',
      textColor: "whiteAlpha.800",
    }
  },
  lightblue: {
    default: {
      colorScheme: "blue"
    },
    solid: {
      bgColor: "blue.300",
      color: "solidBlue.900",
      _hover: {
        bgColor: "blue.400"
      },
      _active: {
        bgColor: "blue.400",
      }
    }
  }
};
