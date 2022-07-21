import PropTypes from "prop-types";
import { Draggable } from "react-beautiful-dnd";
import { Box } from "@chakra-ui/react";

import { itemShape } from "./shapes";

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: "none",
  background: isDragging ? "whiteAlpha.600" : "whiteAlpha.400",
  ...draggableStyle,
});

const Item = ({ item, index }) => {
  return (
    <Draggable draggableId={`${item.id}`} index={index}>
      {(providedX, snapshotX) => (
        <Box
          ref={providedX.innerRef}
          {...providedX.draggableProps}
          {...providedX.dragHandleProps}
          {...getItemStyle(
            snapshotX.isDragging,
            providedX.draggableProps.style
          )}
        >
          <Box display="flex" justifyContent="space-around">
            {item.title}
          </Box>
        </Box>
      )}
    </Draggable>
  );
};

Item.propTypes = {
  item: itemShape.isRequired,
  index: PropTypes.number.isRequired,
};

export default Item;
