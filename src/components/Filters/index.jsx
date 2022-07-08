import PropTypes from "prop-types";
import { Flex } from "@chakra-ui/react";
import FilterButton from "./FilterButton";

const Filters = ({ filters }) => {
  return (
    <Flex columnGap={3}>
      {filters.map((filter, index) => (
        <FilterButton key={index}>{filter}</FilterButton>
      ))}
    </Flex>
  );
};

Filters.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string),
};

Filters.defaultProps = {
  filters: [],
};

export default Filters;
