export default {
  default: {
    container: {
      pos: "relative",
      p: 4,
      py: 3,
      boxShadow: "lg",
      borderRadius: "2xl",
      _before: {
        border: "1px solid rgba(240,240,240,0.3)",
        borderRadius: "2xl",
        content: '""',
        bgGradient: "linear(to-b, blackAlpha.700, black)",
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        opacity: 0.5,
        zIndex: -1,
      },
    },
    table: {
      variant: "unstyled",
      style: { borderCollapse: "separate" },
    },
  },
};
