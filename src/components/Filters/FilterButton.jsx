import { useState } from "react";
import PropTypes from "prop-types";
import Button from "components/Button";

const FilterButton = ({ children }) => {
  const [selected, setSelected] = useState(false);

  return (
    <Button
      color="gray"
      variant={selected ? "solid" : "outline"}
      onClick={() => setSelected((currentState) => !currentState)}
    >
      {children}
    </Button>
  );
};

FilterButton.propTypes = {
  children: PropTypes.string.isRequired,
};

export default FilterButton;
