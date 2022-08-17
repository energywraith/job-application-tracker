import PropTypes from "prop-types";
import { Box, Heading } from "@chakra-ui/react";

import Button from "components/Button";

const ColumnHeading = ({ truncateToNoOfLines, Icon, onClick, children }) => {
  const isButton = !!onClick;

  const Wrapper = isButton ? Button : Box;
  const wrapperProps = isButton
    ? {
        color: "lightblue",
        variant: "solid",
        chakraProps: { height: 50, pl: 6 },
        Icon,
        onClick,
      }
    : { height: 50 };

  return (
    <Wrapper {...wrapperProps}>
      <Heading fontSize={16} py={3} noOfLines={truncateToNoOfLines}>
        {children}
      </Heading>
    </Wrapper>
  );
};

ColumnHeading.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};

ColumnHeading.defaultProps = { onClick: undefined, children: null };

export default ColumnHeading;
