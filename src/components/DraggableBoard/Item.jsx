import PropTypes from "prop-types";
import { Draggable } from "react-beautiful-dnd";
import { Box } from "@chakra-ui/react";

import { Text } from "@chakra-ui/react";
import { itemShape } from "./shapes";

const getItemStyle = (isDragging, draggableStyle) => {
  return {
    userSelect: "none",
    background: isDragging ? "#13193d" : "#151b41",
    py: 10,
    borderRadius: 6,
    height: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    mb: 6,
    boxShadow: "lg",
    fontSize: 20,
    fontWeight: "semibold",
    ...draggableStyle,
  };
};

const Item = ({ item, index, isDragDisabled }) => {
  return (
    <Draggable
      draggableId={`${item.id}`}
      index={index}
      isDragDisabled={isDragDisabled}
    >
      {(provided, snapshot) => (
        <Box
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          {...getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
        >
          <Text>{item.name}</Text>
        </Box>
      )}
    </Draggable>
  );
};

Item.propTypes = {
  item: itemShape.isRequired,
  index: PropTypes.number.isRequired,
  isDragDisabled: PropTypes.bool,
};

Item.defaultProps = {
  isDragDisabled: false,
};

export default Item;
